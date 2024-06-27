import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // Initialize todos from localStorage or with an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Store the initial unsorted todos to reset sorting
  const [initialTodos, setInitialTodos] = useState([]);

  useEffect(() => {
    setInitialTodos(todos);
  }, []);

  // Add a todo task
  const addTodo = (todo) => {
    const trimmedTask = todo.task.trim();

    if (trimmedTask) {
      const newTodo = {
        id: `${Date.now().toString(36)}-${Math.random()
          .toString(36)
          .substring(2)}`,
        ...todo,
        task: trimmedTask,
        priority: "white",
        status: "incomplete",
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  // Edit a todo task
  const editTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };

  // Delete a todo task
  const deleteTodo = (id) => {
    alert("do you want to delete it?");
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Check todo task complete
  const checkboxComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Sort todos by priority
  const sortTodosByPriority = () => {
    setTodos((prev) =>
      [...prev].sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      })
    );
  };

  // Reset todos to initial order
  const resetSort = () => {
    setTodos(initialTodos);
  };
  // Clear the todos
  const clearTodo = () => {
    alert("Your task list will remove!");
    setTodos([]);
  };

  // Sync todos with localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        checkboxComplete,
        sortTodosByPriority,
        resetSort,
        clearTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
