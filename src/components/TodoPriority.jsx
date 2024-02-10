import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoPriority = ({todo}) => {
  const {
    todoLowPriority,
    todoMediumPriority,
    todoHighPriority,
  } = useTodo();

  //handle todo task low priority
  const lowTaskPriority = () => {
    todoLowPriority(todo.id);
  };
  // handle todo task medium priority
  const mediumTaskPriority = () => {
    todoMediumPriority(todo.id);
  };
  // handle todo task high priority
  const highTaskPriority = () => {
    todoHighPriority(todo.id);
  };
  return (
    <>
      <h4>Priority</h4>
      <div className="btns">
        <button onClick={lowTaskPriority} className="todo_item_yellow ">
          Low
        </button>
        <button onClick={mediumTaskPriority} className=" todo_item_orange">
          Medium
        </button>
        <button onClick={highTaskPriority} className="todo_item_red">
          High
        </button>
      </div>
    </>
  );
};

export default TodoPriority;
