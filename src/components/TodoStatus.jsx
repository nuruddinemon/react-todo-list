import React from "react";

export default function TodoStatus({ statusFilter, setStatusFilter }) {
  return (
    <>
      <label htmlFor="task_status">Status: </label>
      <select
        name="status"
        id="task_status"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
      </select>
    </>
  );
}
