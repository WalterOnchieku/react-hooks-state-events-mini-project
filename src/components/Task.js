import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="label">Category: {task.categoryName}</div>
      <div className="text">{task.title}</div>
      <button className="delete" onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
}

export default Task;
