import React, { useState } from "react";
import "./Form.css";

function Form({ addTodos }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="Add your new todo"
          className="form-input"
          id="textInput"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
      <button
        className="form-button"
        onClick={() => {
          addTodos(value);
          document.getElementById("textInput").value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
