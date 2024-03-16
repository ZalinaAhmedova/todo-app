import React from "react";
import "./Info.css";

function Info({removeAllTodo, todosCount}) {
  return (
    <div className="info">
      <p className="info--text">You have {todosCount} pending tasks</p>
      <button className="info--button" onClick={removeAllTodo}>
        Clear All
      </button>
    </div>
  );
}

export default Info;
