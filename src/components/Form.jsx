import React, { useState } from "react";
import "./form.css";

function Form({addTodos}) {
  const [value, setValue] = useState("");

  return (
    <div className="form container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addTodos(value);
          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Add your new todo"
          className="input"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
      <button
        className="form button"
        onClick={() => addTodos(value)}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
