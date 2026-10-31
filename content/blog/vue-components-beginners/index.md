---
title: Vue Components, Props, and Events for Beginners
date: "2026-10-31T10:15:00.000Z"
description: "Learn how Vue components work, how to pass data with props, and how children communicate back to parents with events."
tags: ["vue", "beginners", "components", "props"]
---

Everything in Vue is a component. Understanding how to compose components and pass data between them is the most important skill for a Vue beginner.

## A Basic Component

```vue
<script setup>
const props = defineProps(['title'])
</script>

<template>
  <h2>{{ title }}</h2>
</template>
```

Use it from a parent:

```vue
<script setup>
import Greeting from './Greeting.vue'
</script>

<template>
  <Greeting title="Hello Vue!" />
</template>
```

## Props - Data Flows Down

Props are custom attributes for passing data to a child component. Declare them with `defineProps`:

```vue
<script setup>
const props = defineProps({
  user: Object,
  editable: { type: Boolean, default: false },
})
</script>
```

Props are **one-way** - a child should never mutate a prop directly.

## Events - Data Flows Up

A child communicates with its parent by emitting events:

```vue
<script setup>
const emit = defineEmits(['save'])

function onClick() {
  emit('save', { done: true })
}
</script>

<template>
  <button @click="onClick">Save</button>
</template>
```

Parent listens with `@save`:

```html
<UserForm @save="handleSave" />
```

## Two-Way Binding with v-model

For form inputs, `v-model` combines a prop and an event:

```html
<input v-model="searchText" />
```

Custom components can support `v-model` too:

```vue
<script setup>
const model = defineModel()
</script>

<template>
  <input v-model="model" />
</template>
```

## Common Template Directives

| Directive | Purpose |
|-----------|---------|
| `v-if` / `v-else` | Conditional rendering |
| `v-for` | Render lists |
| `v-bind` or `:` | Bind attributes |
| `v-on` or `@` | Listen to events |
| `v-model` | Two-way binding |

## Summary

Keep data flowing down with props and events flowing up. Once this clicks, composing larger Vue applications becomes much easier.
