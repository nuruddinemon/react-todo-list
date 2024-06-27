import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!task) {
      return;
    } else {
      addTodo({ task });
      setTask("");
    }
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add List"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
