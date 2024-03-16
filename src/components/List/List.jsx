import React from "react";
import "./List.css";
import Item from "../Item/Item";

function List({ todos, removeTodo }) {
  return (
    <ul className="task-list">
      {todos.map((todo) => {
        return (
          <Item task={todo.text} key={todo.id}>
            <button className="task-list--item--button" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </Item>
        )
      })}
    </ul>
  );
}

export default List;
