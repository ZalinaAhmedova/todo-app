import React from "react";
import { useSelector } from "react-redux";
import "./Info.css";

function Info({removeAllTodo}) {
  const count = useSelector((state) => state.todo.count)

  return (
    <div className="info">
      <p className="info--text">You have {count} pending tasks</p>
      <button className="info--button" onClick={removeAllTodo}>
        Clear All
      </button>
    </div>
  );
}

export default Info;
