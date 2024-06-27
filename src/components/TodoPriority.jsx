const TodoPriority = ({priority, handlePriorityChange}) => {
  return (
    <>
      <label>Priority</label>
      <select
        value={priority}
        onChange={handlePriorityChange}
      >
        <option>No Select</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </>
  );
};

export default TodoPriority;
