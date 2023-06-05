import React from "react";

import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import Style from "./Home.module.css";

// Dummy Todos
const dummyTodos = [
  {
    id: 1,
    desc: "This is todo 1",
  },
  {
    id: 2,
    desc: "This is todo 2",
  },
  {
    id: 3,
    desc: "This is todo 3",
  },
  {
    id: 4,
    desc: "This is todo 4",
  },
];

const Home = () => {
  return (
    <div className={Style["todo-app"]}>
      <h2>To-Do List</h2>
      <CreateTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
