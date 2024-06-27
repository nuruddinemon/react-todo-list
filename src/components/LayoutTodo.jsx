import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoStatus from "./TodoStatus";

export default function LayoutTodo() {
  const { todos, sortTodosByPriority, resetSort, clearTodo } =
    useContext(TodoContext);

  const [statusFilter, setStatusFilter] = useState("all");

  // check todo task by status
  const filterTodos = todos.filter((todo) => {
    if (statusFilter === "all") {
      return true;
    } else if (statusFilter === "completed") {
      return todo.completed;
    } else if (statusFilter === "incomplete") {
      return !todo.completed;
    } else {
      return false;
    }
  });

  return (
    <div className="company_todo">
      <h2>TaskJourney</h2>
      <h3>
        Total tasks <span>{todos.length}</span> and completed tasks{" "}
        <span> {todos.filter((todo) => todo.completed).length} </span>
      </h3>
      <div className="company_todo_form">
        <TodoForm />
      </div>

      <div className="todo_status">
        <TodoStatus
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>

      <div className="todo_sort">
        <button onClick={sortTodosByPriority}>Sort by Priority</button>
        <button onClick={resetSort}>Reset Sort</button>
      </div>

      <button onClick={clearTodo}>Clear task</button>

      <div className="company_todo_item">
        {filterTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
