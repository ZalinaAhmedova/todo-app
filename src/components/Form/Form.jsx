import React, { useState } from "react";
import "./Form.css";

function Form({ addTodos }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };

  return (
    <div className="form container">
      <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="Add your new todo"
          className="input"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
      <button className="form button" onClick={() => addTodos(value)}>
        Add
      </button>
    </div>
  );
}

export default Form;
