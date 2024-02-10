import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
      <div className="company_todo">
        <h2>Task List</h2>
        <h3>
          Total tasks <span>0</span> and completed tasks <span>0 </span>
        </h3>
        <div className="company_todo_form">
          <TodoForm />
        </div>

        <div className="todo_status">
          <label htmlFor="task_status">Status: </label>
          <select name="status" id="task_status">
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="incomplete">incomplete</option>
          </select>
        </div>
        <div className="company_todo_item">
          <TodoItem />
        </div>
      </div>
    </>
  );
}

export default App
