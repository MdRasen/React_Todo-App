import React, { useState } from "react";

import Style from "./CreateTodo.module.css";

const CreateTodo = (Props) => {
  // useState for todo input
  const [todo, setTodo] = useState({
    desc: "",
  });
  // Handler form input field
  const handleChange = (event) => {
    event.preventDefault();
    setTodo((oldTodo) => {
      // Update the oldTodo with new desc
      return { ...oldTodo, desc: event.target.value };
    });
  };
  // Handler for form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    Props.onAddToDo(todo);
    // Clear input field after submitting the form
    setTodo({
      desc: "",
    });
  };
  return (
    <form action="" className={Style.row} onSubmit={handleSubmit}>
      <input
        type="text"
        id="desc"
        name="desc"
        placeholder="Add your text"
        value={todo.desc}
        onChange={handleChange}
      />
      <button className={Style.btn} type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateTodo;
