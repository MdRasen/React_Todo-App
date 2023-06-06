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
  // Remove Todo
  const handleRemoveTodo = (id) => {
    // alert(id);
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id != id);
      return filteredTodos;
    });
  };
  return (
    <div className={Style["todo-app"]}>
      <h2>To-Do List</h2>
      <CreateTodo onAddToDo={handleTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
