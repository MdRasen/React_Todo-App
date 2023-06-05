import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import Style from "./Home.module.css";

const Home = () => {
  // Todos
  const [todos, setTodos] = useState([]);
  const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  return (
    <div className={Style["todo-app"]}>
      <h2>To-Do List</h2>
      <CreateTodo onAddToDo={handleTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
