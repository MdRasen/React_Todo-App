import React from "react";
import Todos from "./Todos";

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
];

const Home = () => {
  return (
    <div>
      <Todos />
    </div>
  );
};

export default Home;
