import React from "react";

/**
 * Components
 */
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, toogle_todo } = props;

  return (
    <section>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toogle_todo={toogle_todo} />;
      })}
    </section>
  );
}
