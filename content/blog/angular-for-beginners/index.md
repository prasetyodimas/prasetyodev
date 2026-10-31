---
title: Angular for Beginners - Getting Started with the Angular Framework
date: "2026-10-31T10:00:00.000Z"
description: "A beginner-friendly introduction to Angular: what it is, how to install the CLI, and how to build your first application."
tags: ["angular", "beginners", "typescript", "frontend"]
---

Angular is a popular open-source web application framework maintained by Google. It uses TypeScript and provides a complete solution for building single-page applications (SPAs), including routing, forms, HTTP client, and dependency injection out of the box.

## Why Angular?

- **Batteries included** - routing, forms, HTTP, and testing tools ship with the framework
- **TypeScript first** - strong typing catches errors early
- **Component-based architecture** - build reusable UI pieces
- **Backed by Google** - long-term support and regular releases

## Installation

Make sure you have Node.js installed, then install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

Verify the installation:

```bash
ng version
```

## Create Your First App

```bash
ng new my-first-app
cd my-first-app
ng serve
```

Open `http://localhost:4200` in your browser and you will see the default Angular welcome page.

## Project Structure

```
my-first-app/
├── src/
│   ├── app/          # components, services, modules
│   ├── main.ts       # application entry point
│   └── index.html
├── angular.json      # workspace configuration
└── package.json
```

## Your First Component

Generate a component with the CLI:

```bash
ng generate component hello
```

This creates four files: a TypeScript class, an HTML template, a CSS file, and a test file. Use the component in your app by adding its selector to a template:

```html
<app-hello></app-hello>
```

## Next Steps

Once you are comfortable with the basics, explore data binding, directives, services, and the Angular Router. The official documentation at angular.dev is an excellent resource.

Happy coding!
