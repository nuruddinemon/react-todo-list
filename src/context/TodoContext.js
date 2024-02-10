import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Task List 1",
      completed: false,
      lowPriority: false,
      mediumPriority: false,
      highPriority: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  checkboxComplete: (id) => {},
  statusComplete: () => {},
  todoLowPriority: (id) => {},
  todoMediumPriority: (id) => {},
  todoHighPriority: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
