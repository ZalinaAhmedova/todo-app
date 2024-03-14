import React from "react";
import "./List.css";
import Item from "../Item/Item";

function List({ todos, removeTodo }) {
  return (
    <ul className="taskList">
      {todos.map((todo) => {
        return (
          <Item task={todo.text} key={todo.id}>
            <button className="button" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </Item>
        )
      })}
    </ul>
  );
}

export default List;
