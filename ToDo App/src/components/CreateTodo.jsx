import React from "react";

import Style from "./CreateTodo.module.css";

const CreateTodo = () => {
  return (
    <div className={Style.row}>
      <input type="text" id="input-box" placeholder="Add your text" />
      <button className={Style.btn} type="submit">
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
