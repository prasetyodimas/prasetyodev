---
title: Proficiency with state management patterns - React
date: "2025-02-23T22:18:22.284Z"
description: "Refers to a person's level of expertise or understanding in applying various state management patterns in application development"
---

**Proficiency with state management patterns** refers to a person's level of expertise or understanding in applying various state management patterns in application development.

Dalam konteks frontend development (terutama di React), ini mencakup:

### Local component state

    * `useState`
    * `useReducer`

### Global state

    * Context API
    * Redux
    * Zustand
    * Recoil
    * Jotai

### Server state

    * React Query
    * SWR

### Pola umum dalam state management

- **Flux/Redux Pattern**
  - Menggunakan reducer, actions, dan store global
- **Atomic State Pattern**
  - Seperti yang digunakan di Recoil/Jotai
- **Selector Pattern**
  - Meminimalkan re-render dengan memisahkan state yang relevan
- **Modular/Slice Pattern**
  - Memisahkan state ke dalam slice untuk aplikasi skala besar

### Kemampuan

    * Mampu memilih pola yang tepat sesuai dengan kompleksitas aplikasi.
    * Mampu mengoptimalkan state management untuk meningkatkan performa aplikasi.

In this case, we discuss Zustand state management:

## Zustand

Zustand is a lightweight state management library for React that offers a simpler and more minimalist approach compared to Redux. Here are some key patterns in state management using Zustand:

1.  Basic Global State
    Pola ini cocok untuk aplikasi kecil atau fitur yang hanya memerlukan state global sederhana.

```markdown
    import { create } from 'zustand';

    type Store = {
        count: number;
        increment: () => void;
    };

    const useCounterStore = create<Store>((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
    }));

    export default useCounterStore;
```

📌 Pola ini sederhana dan cukup untuk state management kecil.

🔹 2. Selector Pattern (Avoid Unnecessary Re-renders)

Untuk menghindari re-render berlebihan, gunakan selector agar hanya membaca bagian state yang dibutuhkan.

```markdown
import { create } from 'zustand';

    const useCounterStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
    }));

    const CounterComponent = () => {
        const count = useCounterStore((state) => state.count); // Hanya re-render jika 'count' berubah

        return <div>Count: {count}</div>;
    };
```

📌 Menggunakan selector akan meningkatkan performa dengan menghindari re-render tidak perlu.

🔹 3. Middleware Pattern (Logging & Persistence)

Zustand mendukung middleware untuk logging, persistence, atau devtools.

```markdown
    import { create } from 'zustand';
    import { devtools, persist } from 'zustand/middleware';

    const useUserStore = create(
    devtools(
        persist(
        (set) => ({
            user: null,
            login: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        { name: 'user-storage' } // Persistent storage key
        )
    )
    );
```

📌 Pola ini ideal untuk debugging (devtools) dan menyimpan state ke localStorage (persist).

🔹 4. Action Pattern (Encapsulation of Logic)

```markdown
    Untuk meningkatkan keterbacaan, logika dapat dipisahkan dalam fungsi actions.

    import { create } from 'zustand';

    const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({ todos: [...state.todos, { text, completed: false }] })),
    toggleTodo: (index) =>
        set((state) => ({
        todos: state.todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        ),
        })),
    }));
```

📌 Memisahkan actions mempermudah pengelolaan logika state.

🔹 5. Slice Pattern (Modular State Management)

    Untuk aplikasi besar, pecah state menjadi "slice" modular.

```markdown
    import { create } from 'zustand';

    // User slice
    const createUserSlice = (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    });

    // Cart slice
    const createCartSlice = (set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    });

    // Combine slices
    const useStore = create((set) => ({
    ...createUserSlice(set),
    ...createCartSlice(set),
    }));

    export default useStore;
```

📌 Pendekatan ini bagus untuk memisahkan domain state menjadi modular dan scalable.
