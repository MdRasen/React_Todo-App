import React from "react";

import Todo from "./Todo";

const Todos = (Props) => {
  // Remove Todo (Data pass Child -> Parent)
  const handleRemoveTodo = (id) => {
    Props.onRemoveTodo(id);
  };
  return (
    <div>
      {Props.todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          onRemoveTodo={handleRemoveTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
