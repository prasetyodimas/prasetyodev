---
title: Digging Deeper into Vue - Reactivity, Composables, and Pinia
date: "2026-10-31T10:30:00.000Z"
description: "Go beyond the basics: how Vue's reactivity works under the hood, writing composables, state management with Pinia, and performance tips."
tags: ["vue", "composables", "pinia", "reactivity", "advanced"]
---

Once you are comfortable with components, props, and events, it is time to understand what makes Vue tick: its reactivity system, the Composition API's real power (composables), and proper state management.

## How Vue Reactivity Works

Vue's reactivity has two main tools: `ref()` wraps any value in a small object with a `.value` property, and `reactive()` proxies an entire object with a JavaScript `Proxy`. Both share the same tracking system underneath.

When a component renders (or a computed/watch effect runs), Vue records every reactive property that was read - this is called **dependency tracking**. Later, when one of those properties is written to, Vue notifies only the effects that depend on it. Reactivity tells Vue *which* component needs to re-render; the render function then produces a new VNode tree and the virtual DOM diff patches only the changed parts of the real DOM.

```typescript
import { ref, reactive, computed, watch } from 'vue'

const count = ref(0)             // ref: .value wrapper for primitives
const state = reactive({ n: 0 }) // reactive: proxies whole objects

const doubled = computed(() => count.value * 2)

watch(count, (newVal, oldVal) => {
  console.log(`changed: ${oldVal} -> ${newVal}`)
})
```

### Dependency tracking under the hood

Internally, each reactive property keeps a `Dep` - a bookkeeping object that answers one question: *"who is reading me right now?"* Vue keeps a global `WeakMap` (`targetMap`) mapping each reactive object to a `Map` of `key -> Dep`:

```text
targetMap: WeakMap<target, Map<key, Dep>>

state = reactive({ name: 'Dimas', age: 30 })

targetMap
  └─ state
        └─ Map
              ├─ 'name' -> Dep { renderEffect(A), computed(fullName) }
              └─ 'age'  -> Dep { renderEffect(A) }
```

With concrete subscribers filled in:

- `state.name`'s `Dep` contains the App render effect and the `fullName` computed — so writing `state.name = 'X'` re-renders App *and* invalidates the computed
- `state.age`'s `Dep` contains only the render effect — writing `state.age` re-renders but leaves `fullName` untouched, since it never read `age`

And from the effect's side, the link goes both ways:

```text
renderEffect(A).deps  -> [Dep(name), Dep(age)]   // effect knows its deps
Dep(name).subs        -> [renderEffect(A)]       // dep knows its subscribers
```

Why this design:

- **`WeakMap`, not `Map`** — keys are held weakly, so when a component is destroyed and the last reference to its reactive state is dropped, the entire entry (and all its `Dep`s) is garbage-collected automatically. Vue never has to manually clean up `targetMap`.
- **One `Dep` per key** — `state.name` and `state.age` have separate subscriber sets, which is what makes updates fine-grained.
- **Bidirectional links** — in modern Vue, `Dep` and subscribers are linked both ways (a doubly-linked list), so an effect can cheaply drop stale dependencies when it re-runs.
- **`computed` chains too** — a computed has its own `Dep`: it subscribes to your refs, and your component subscribes to the computed's `Dep`.
- **Invisible bookkeeping** — `targetMap` is keyed by the object, not stored *on* it, so deps never appear in `Object.keys()`, serialization, or `console.log`.

### `track()` - recording reads

`track()` is called from the proxy's `get` trap. A simplified version of Vue's actual source:

```typescript
// Simplified version of Vue's source (packages/reactivity)
const targetMap = new WeakMap<object, Map<any, Dep>>()

function track(target: object, key: unknown) {
  if (!activeEffect) return // nothing running -> nothing to record

  let depsMap = targetMap.get(target) // 1. find (or create) this object's key->Dep map
  if (!depsMap) targetMap.set(target, (depsMap = new Map()))

  let dep = depsMap.get(key)          // 2. find (or create) this property's Dep
  if (!dep) depsMap.set(key, (dep = new Dep()))

  dep.addSub(activeEffect)            // 3. subscribe the running effect
  activeEffect.deps.push(dep)         //    and let the effect remember the dep
}                                     //    for cleanup on its next run
```

Walk through it with `state.name` being read inside a component render:

1. The proxy's `get` trap fires and calls `track(state, 'name')`
2. First access ever: `targetMap` gets a new `Map` for `state`, and that `Map` gets a fresh `Dep` for the key `'name'` — the structure is built lazily, only for properties that are actually read
3. The active render effect is added to `name`'s `Dep`, and the `Dep` is pushed onto the effect's own `deps` list — this two-way link is what allows fast unsubscription later
4. A second render that reads `state.name` again hits the `if (!dep)` guard, finds the existing `Dep`, and is effectively a no-op — tracking the same dependency twice is free

### `trigger()` - notifying writes

The counterpart `trigger()` is called from the `set` trap and does the inverse walk:

```typescript
function trigger(target: object, key: unknown) {
  const dep = targetMap.get(target)?.get(key)
  if (!dep) return
  for (const sub of dep.subs) sub.notify() // schedule re-run of each effect
}
```

### The `activeEffect` guard

`activeEffect` is a module-level variable pointing at whatever effect is *currently executing*. Vue sets it just before running your render function, computed getter, or watch callback, and clears it afterward. Reads outside any tracked context simply aren't recorded:

```typescript
const state = reactive({ count: 0 })

// No effect running -> track() returns early -> no subscription.
// This read will not cause anything to re-run later:
console.log(state.count)

watchEffect(() => {
  // Inside here, activeEffect is set -> reads ARE tracked.
  console.log(state.count)
})
```

This is also why async gaps break tracking — after an `await`, the effect is no longer the active one, so reads go untracked:

```typescript
watchEffect(async () => {
  const id = userId.value           // tracked: reads before the first await are fine
  const user = await fetchUser(id)
  console.log(state.count)          // NOT tracked: the effect is suspended
})
```

### The `activeEffect.deps` back-link and cleanup

The subscription is recorded in **both directions**. `dep.addSub(effect)` lets the dep find its effects on `trigger()`; `effect.deps.push(dep)` lets the *effect* enumerate everything it depends on. That back-link powers two operations:

**Cleanup on re-run.** Before an effect re-executes, Vue walks `effect.deps` and removes the effect from every old `Dep`. Stale conditional subscriptions are dropped before fresh tracking begins:

```typescript
watchEffect(() => {
  // Run 1 (flag = true):  deps = [Dep(flag), Dep(a)]
  // Run 2 (flag = false): cleanup removes Dep(a), then re-tracks -> deps = [Dep(flag)]
  console.log(flag.value ? a.value : 'off')
})
```

**Unsubscribe on stop.** When a component unmounts or you call a watcher's `stop()`, Vue iterates `effect.deps` and removes the effect from each `Dep.subs` — O(number of dependencies) instead of scanning the whole `targetMap`.

This is why Vue's reactivity is *precise*: a component that reads `state.name` does not re-render when `state.age` changes, and a `computed` that no longer depends on a value stops being notified about it.

### `ref` vs `reactive`

`ref` wraps **any** value in an object with a single `.value` property - required for primitives like numbers and strings, since a proxy can only wrap objects:

```typescript
const count = ref(0)
count.value++ // .value access is tracked
```

`reactive` proxies an **entire object** deeply - every nested property read/write goes through the proxy:

```typescript
const state = reactive({ user: { name: 'Dimas' }, tags: [] })
state.user.name = 'Dimas P' // deeply reactive
```

Rules of thumb:

- Use `ref` as your default - it works everywhere and destructures safely (just keep the ref object itself)
- Use `reactive` for cohesive object state where you always access it through the parent

### `computed` - derived state

`computed` creates a lazy, cached derived value. It only re-evaluates when one of its reactive dependencies actually changes:

```typescript
const first = ref('John')
const last = ref('Doe')

const fullName = computed(() => `${first.value} ${last.value}`)

// two-way computed with a setter
const fullNameWritable = computed({
  get: () => `${first.value} ${last.value}`,
  set: (val) => {
    const [f, l] = val.trim().split(/\s+/)
    if (f && l) {
      first.value = f
      last.value = l
    }
  },
})
```

Prefer `computed` over methods for derived data - the caching avoids re-running expensive logic on every render.

### `watch` vs `watchEffect`

`watch` is explicit - you declare exactly which sources to observe, and get the old and new values:

```typescript
// single source
watch(count, (newCount, oldCount) => {
  console.log(`count changed: ${oldCount} -> ${newCount}`)
})

// multiple sources: callback receives arrays of new and old values
watch([count, () => state.n], ([newCount, newN], [oldCount, oldN]) => {
  console.log(newCount, newN)
})
```

`watchEffect` runs immediately and automatically re-tracks whatever it reads:

```typescript
watchEffect(() => {
  document.title = `Count: ${count.value}` // tracks count.value automatically
})
```

Useful options: `flush: 'post'` runs the callback after DOM updates; `onCleanup` inside `watchEffect` lets you cancel stale work (like aborting a fetch).

Key gotchas:

- Destructuring a `reactive` object loses reactivity - use `toRefs` to destructure safely
- `ref` in templates auto-unwraps (no `.value` needed), `reactive` does not
- Watching a `reactive` object directly requires `deep: true` for nested changes; a `ref` of a primitive does not

## Composables - Reusable Logic

Composables are functions that encapsulate stateful logic, the Composition API's answer to mixins:

```typescript
// useFetch.ts
import { ref, watchEffect, onUnmounted } from 'vue'

export function useFetch(url: string) {
  const data = ref(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  let ctrl: AbortController | null = null

  async function execute() {
    ctrl?.abort()
    ctrl = new AbortController()
    loading.value = true
    error.value = null
    try {
      const res = await fetch(url, { signal: ctrl.signal })
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      data.value = await res.json()
    } catch (e) {
      if ((e as Error).name !== 'AbortError') error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  onUnmounted(() => ctrl?.abort())

  watchEffect(() => {
    execute()
  })

  return { data, error, loading, execute }
}
```

Usage:

```vue
<script setup>
const { data, loading } = useFetch('/api/users')
</script>
```

Wrapping `execute` in `watchEffect` keeps the fetch reactive if `url` ever becomes a reactive dependency. Convention: name composables `useSomething`, return refs, and let the caller decide what to do with them.

## Pinia - State Management

Pinia is the official store. Define stores with the setup syntax:

```typescript
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const total = computed(() =>
    items.value.reduce((sum, i) => sum + i.price, 0)
  )

  function add(item) {
    items.value.push(item)
  }

  return { items, total, add }
})
```

```vue
<script setup>
const cart = useCartStore()
const product = { name: 'Keyboard', price: 89 }
</script>

<template>
  <p>Total: {{ cart.total }}</p>
  <button @click="cart.add(product)">Add</button>
</template>
```

If you destructure a store's state in `<script setup>`, use `storeToRefs()` to keep it reactive.

## Lifecycle Hooks Worth Knowing

- `onMounted` - DOM is ready; safe place for browser APIs and fetching
- `onUnmounted` - cleanup timers, listeners, subscriptions
- `onErrorCaptured` - catch errors from child components

Use `watch`/`watchEffect` rather than `onUpdated` for reacting to specific state changes - `onUpdated` fires after *every* DOM update.

## Performance Tips

1. **`v-memo`** - skip re-rendering subtrees when dependencies haven't changed
2. **Async components** - `defineAsyncComponent(() => import('./Heavy.vue'))`
3. **Lazy routes** - dynamic imports in Vue Router
4. **`shallowRef` / `shallowReactive`** - skip deep tracking for large data you replace wholesale

## Summary

Understand the `ref`/`reactive`/`Proxy` split and dependency tracking, extract logic into cancelable composables, centralize shared state in Pinia, and reach for shallow refs and async components when performance matters. That is the jump from beginner to productive Vue developer.
