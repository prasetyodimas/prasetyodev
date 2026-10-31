---
title: Vue.js for Beginners - Your First Vue Application
date: "2026-10-31T10:05:00.000Z"
description: "A beginner-friendly introduction to Vue.js: what it is, how to scaffold a project, and the core concepts you need to know."
tags: ["vue", "beginners", "javascript", "frontend"]
---

Vue.js is a progressive JavaScript framework for building user interfaces. It is known for its gentle learning curve, excellent documentation, and flexibility - you can use it for a small widget on a page or a full single-page application.

## Why Vue?

- **Easy to learn** - plain HTML, CSS, and JavaScript knowledge is enough to start
- **Progressive** - adopt it incrementally, feature by feature
- **Reactive by default** - the UI updates automatically when data changes
- **Great ecosystem** - Vue Router, Pinia, Nuxt, and more

## Create a Vue Project

The recommended way to scaffold a Vue app is with `create-vue` (powered by Vite):

```bash
npm create vue@latest
```

Follow the prompts, then:

```bash
cd my-vue-app
npm install
npm run dev
```

Open `http://localhost:5173` to see your app running.

## Single File Components

Vue uses Single File Components (SFCs) - each `.vue` file contains template, script, and style in one place:

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>

<style scoped>
button {
  font-size: 1.2rem;
}
</style>
```

## Core Concepts

- **Reactivity** - `ref()` and `reactive()` create reactive state
- **Template syntax** - `{{ }}` interpolation, `v-if`, `v-for`, `v-bind`, `v-on`
- **Props and events** - pass data down, emit events up
- **Composition API** - organize logic with `<script setup>`

## Next Steps

Learn about computed properties, watchers, component lifecycle hooks, and then move on to Vue Router and Pinia for state management.

Happy coding!
