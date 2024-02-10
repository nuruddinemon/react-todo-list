import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  // Add a todo task
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now().toString(36), ...todo }, ...prev]);
  };

  // Edit a todo task
  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Delete a todo taks
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Check todo a task complete
  const checkboxComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // handle todo task status
  const statusComplete = (type) => {
    setStatus(type);
  };

  // check todo task by status
  const filterStatus = todos.filter((todo) => {
    if (status === "all") {
      return true;
    } else if (status === "completed") {
      return todo.completed;
    } else if (status === "incomplete") {
      return !todo.completed;
    }
  });

  // Make a task low priority
  const todoLowPriority = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, lowPriority: !todo.lowPriority } : todo
      )
    );
  };
  // Make a task Medium priority
  const todoMediumPriority = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, mediumPriority: !todo.mediumPriority }
          : todo
      )
    );
  };
  // Make a task High priority
  const todoHighPriority = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, highPriority: !todo.highPriority } : todo
      )
    );
  };

  // get todo data from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Set todo data in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{
          todos,
          addTodo,
          editTodo,
          deleteTodo,
          checkboxComplete,
          statusComplete,
          todoLowPriority,
          todoMediumPriority,
          todoHighPriority,
        }}
      >
        <div className="company_todo">
          <h2>Task List</h2>
          <h3>
            Total tasks <span>{todos.length}</span> and completed tasks{" "}
            <span> {todos.filter((todo) => todo.completed).length} </span>
          </h3>
          <div className="company_todo_form">
            <TodoForm />
          </div>

          <div className="todo_status">
            <label htmlFor="task_status">Status: </label>
            <select
              name="status"
              id="task_status"
              value={status}
              onChange={(e) => statusComplete(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">completed</option>
              <option value="incomplete">incomplete</option>
            </select>
          </div>
          <div className="company_todo_item">
            {filterStatus.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
