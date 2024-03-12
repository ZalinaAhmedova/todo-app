import React from "react";
import "./list.css";
import Item from "./Item";

function List({ todos, removeTodo }) {
  return (
    <ul className="taskList">
      {todos.map((todo, i) => {
        return (
          <Item task={todo.text} key={i}>
            <button className="button" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
}

export default List;
