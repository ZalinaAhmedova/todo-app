import React from "react";
import "./Info.css";

function Info({removeAllTodo, todosCount}) {
  return (
    <div className="info">
      <p>You have {todosCount} pending tasks</p>
      <button className="button" onClick={removeAllTodo}>
        Clear All
      </button>
    </div>
  );
}

export default Info;
