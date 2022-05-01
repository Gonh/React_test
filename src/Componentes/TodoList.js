import React from "react";
import Todo from "./Todo";
export default function TodoList(todos, toogle_todo) {
  const list = todos.todos;
  console.log(toogle_todo);
  return (
    <section>
      {list.map((todo) => {
        return <Todo key={todo.id} todo={todo} toogle_todo={toogle_todo} />;
      })}
    </section>
  );
}
