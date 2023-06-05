import React from "react";

import Style from "./Todo.module.css";

const Todo = (Props) => {
  const { id, desc } = Props.todo;
  return (
    <ul>
      <li>
        {desc} <button className={Style.btn}>X</button>
      </li>
    </ul>
  );
};

export default Todo;
