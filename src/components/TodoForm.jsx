import React from 'react'

function TodoForm() {
  return (
      <form >
        <input
          type="text"
          placeholder="Add List"
        />
        <button type="submit">Add</button>
      </form>
  );
}

export default TodoForm
