import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoPriority from "./TodoPriority";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.task);
  const { editTodo, deleteTodo, checkboxComplete } = useContext(TodoContext);

  // handle todo task update
  const updateTodo = () => {
    editTodo(todo.id, { ...todo, task: todoText });
    setIsTodoEditable(false);
  };

  // edit todo button callback
  const todoBtnCallback = () => {
    if (todo.completed) {
      return;
    }
    if (isTodoEditable) {
      updateTodo();
    } else {
      setIsTodoEditable((prev) => !prev);
    }
  };

  // handle todo task checkbox
  const taskCompleted = () => {
    checkboxComplete(todo.id);
  };

  const getBackgroundColor = () => {
    switch (todo.priority) {
      case "low":
        return "todo_item_green";
      case "medium":
        return "todo_item_yellow";
      case "high":
        return "todo_item_red";
      default:
        return "todo_item";
    }
  };

  const handlePriorityChange = (e) => {
    editTodo(todo.id, { ...todo, priority: e.target.value });
  };

  return (
    <div className="todo_list">
      <div className="todo_priority">
        <TodoPriority
          priority={todo.priority}
          handlePriorityChange={handlePriorityChange}
        />
      </div>
      <div className={`todo_item ${getBackgroundColor()}`}>
        <div className="list_input">
          <input
            type="checkbox"
            className="check"
            checked={todo.completed}
            onChange={taskCompleted}
          />
          <input
            type="text"
            className={`text ${isTodoEditable ? "addBorder" : "deleteBorder"} ${
              todo.completed ? "addLine" : ""
            }`}
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            readOnly={!isTodoEditable}
          />
        </div>
        <div className="list_btns">
          <button
            className={`${
              todo.completed ? "not_allowed_btn" : "edit"
            }`}
            onClick={todoBtnCallback}
          >
            {isTodoEditable ? "Update" : "Edit"}
          </button>
          <button
            className="delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
