---
title: Understanding Angular Components and Data Binding
date: "2026-10-31T10:10:00.000Z"
description: "Learn the fundamentals of Angular components, templates, and the different types of data binding every beginner should know."
tags: ["angular", "beginners", "components", "data-binding"]
---

Components are the building blocks of every Angular application. A component controls a section of the screen (a view) and is made of a TypeScript class, an HTML template, and optional styles.

## Anatomy of a Component

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello, {{ name }}!</h1>`,
})
export class GreetingComponent {
  name = 'World'
}
```

- `selector` - the custom HTML tag used to place the component
- `template` - the HTML that gets rendered
- the class - holds data and logic

## The Four Types of Data Binding

**1. Interpolation** - display component data in the template:

```html
<p>{{ title }}</p>
```

**2. Property binding** - set an element property from component data:

```html
<img [src]="imageUrl" />
<button [disabled]="isLoading">Save</button>
```

**3. Event binding** - respond to user events:

```html
<button (click)="onSave()">Save</button>
```

**4. Two-way binding** - keep a form input and property in sync:

```html
<input [(ngModel)]="username" />
```

Two-way binding requires importing `FormsModule`.

## Parent-Child Communication

Pass data **into** a child component with `@Input()`:

```typescript
@Input() user!: User
```

Send data **up** to the parent with `@Output()` and an `EventEmitter`:

```typescript
@Output() saved = new EventEmitter<User>()
```

```html
<app-user-form [user]="currentUser" (saved)="onSaved($event)" />
```

## Built-in Control Flow

Angular's modern template syntax makes conditions and loops readable:

```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
} @else {
  <p>Please log in.</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

## Summary

Components + data binding are the heart of Angular. Master these, then move on to services and dependency injection to share logic across your app.
