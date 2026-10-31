---
title: Digging Deeper into Angular - Signals, DI, and RxJS in Practice
date: "2026-10-31T10:25:00.000Z"
description: "Go beyond the basics: Angular signals, dependency injection patterns, RxJS in real apps, and performance techniques."
tags: ["angular", "signals", "rxjs", "dependency-injection", "advanced"]
---

Once you know components and data binding, the next level of Angular is understanding its reactivity model, dependency injection, and how to write performant apps. Let's dig deeper.

## Signals - The New Reactivity Model

Signals are Angular's modern reactivity primitive. A signal holds a value and notifies consumers when it changes:

```typescript
import { Component, signal, computed } from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Count: {{ count() }}</button>
    <p>Double: {{ doubled() }}</p>
  `,
})
export class CounterComponent {
  count = signal(0)
  doubled = computed(() => this.count() * 2)

  increment() {
    this.count.update(v => v + 1)
  }
}
```

- `signal()` - writable state
- `computed()` - derived state, cached and lazy
- `effect()` - run side effects when signals change

Signals enable fine-grained change detection - Angular updates only what actually changed, without zone.js.

## Dependency Injection Patterns

Angular's DI is hierarchical. Services are provided at different levels:

```typescript
// Singleton across the whole app
@Injectable({ providedIn: 'root' })
export class AuthService {}
```

Inject with the modern `inject()` function:

```typescript
export class ProfileComponent {
  private auth = inject(AuthService)
}
```

You can also provide services at the component level for isolated instances - useful for things like per-component state stores.

## RxJS in Real Applications

Angular still uses RxJS heavily for HTTP, router events, and forms. The key skill is composing streams instead of nesting subscriptions:

```typescript
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term)),
).subscribe(results => this.results.set(results))
```

- `switchMap` - cancel the previous request (great for search)
- `mergeMap` - run requests in parallel
- `takeUntilDestroyed()` - automatic cleanup

Bridge RxJS and signals with `toSignal()`:

```typescript
user = toSignal(this.http.get<User>('/api/me'))
```

## Performance Techniques

1. **OnPush change detection** - `changeDetection: ChangeDetectionStrategy.OnPush` re-renders only when inputs change
2. **Lazy loading routes** - `loadComponent`/`loadChildren` keep initial bundles small
3. **Track items in loops** - always `track` in `@for` blocks
4. **Defer views** - `@defer { <app-heavy /> }` loads components only when needed

## Standalone Everything

Modern Angular drops NgModules. Components, directives, and pipes are standalone by default, and apps bootstrap with a clean functional API:

```typescript
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
})
```

## Summary

Signals simplify state, DI keeps code decoupled, RxJS handles async flows, and OnPush + lazy loading keep apps fast. Master these and you are well past the beginner stage.
