import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import TodoPriority from "./TodoPriority";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);
  const {
    editTodo,
    deleteTodo,
    checkboxComplete,
  } = useTodo();

  // handle todo task update
  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoText });
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
  }
  

  // handle todo task checkbox
  const taskCompleted = () => {
    checkboxComplete(todo.id);
  };

  return (
    <div className="todo_list">
      <div className="todo_priority">
        <TodoPriority todo={todo} />
      </div>
      <div
        className={`todo_item ${todo.completed ? "bg_change" : ""} ${
          todo.lowPriority
            ? "todo_item_yellow"
            : todo.mediumPriority
            ? "todo_item_orange"
            : todo.highPriority
            ? "todo_item_red"
            : ""
        }`}
      >
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
          <button className="edit" onClick={todoBtnCallback}>
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
