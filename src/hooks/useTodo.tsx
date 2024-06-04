import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
  id: string;
  name: string;
  completed: boolean;
  date: Date;
}

interface useTodoTypes {
  todos: Todo[];
  create: (todo: Todo) => void;
  delete: (id: string) => void;
  updateName: (id: string, name: string) => void;
  changeStatus: (id: string) => void;
}

export const useTodo = create<useTodoTypes>()(
  persist(
    (set) => ({
      todos: [],
      create: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
      delete: (id: string) => set((state) => ({ todos: state.todos.filter((todo: Todo) => todo.id !== id) })),
      updateName: (id: string, name: string) => set((state) => ({ todos: state.todos.map((todo: Todo) => (todo.id === id ? { ...todo, name } : todo)) })),
      changeStatus: (id: string) => set((state) => ({
        todos: state.todos.map((todo: Todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      }))
    }),
    {
      name: "todo-storage",
    }
  )
);
