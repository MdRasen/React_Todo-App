import React from "react";

import Style from "./Todo.module.css";

const Todo = (Props) => {
  const { desc } = Props.todo;
  const id = Props.id;
  // Remove Todo (Data pass Child -> Parent)
  const handleRemove = (event) => {
    event.preventDefault();
    Props.onRemoveTodo(id);
  };
  return (
    <ul>
      <li>
        {desc}{" "}
        <button className={Style.btn} onClick={handleRemove}>
          X
        </button>
      </li>
    </ul>
  );
};

export default Todo;
