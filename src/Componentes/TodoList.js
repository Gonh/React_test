import React from "react";

/**
 * Components
 */
import Todo from "./Todo";

export default function TodoList(props) {
  const { Todos, Toogle_todo } = props;

  return (
    <section>
      {Todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} Toogle_todo={Toogle_todo} />;
      })}
    </section>
  );
}
