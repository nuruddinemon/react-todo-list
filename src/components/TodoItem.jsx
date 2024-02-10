import React from "react";

function TodoItem() {
  return (
    <div className="todo_list">
      <div className="todo_priority">
        <h4>Priority</h4>
        <div className="btns">
          <button className="todo_item_yellow ">Low</button>
          <button className=" todo_item_orange">Medium</button>
          <button className="todo_item_red">High</button>
        </div>
      </div>
      <div className={`todo_item`}>
        <div className="list_input">
          <input type="checkbox" className="check" />
          <input type="text" className={`text`} defaultValue={"todo list"} />
        </div>
        <div className="list_btns">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
