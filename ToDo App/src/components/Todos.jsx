import React from "react";

import Todo from "./Todo";

const Todos = (Props) => {
  return (
    <div>
      {Props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} />
      ))}
    </div>
  );
};

export default Todos;
