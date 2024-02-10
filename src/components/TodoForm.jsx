import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      addTodo({ todo, completed: false });
      setTodo("");
    }
  };

  return (
      <form  onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add List"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
  );
}

export default TodoForm
