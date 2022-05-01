import React from "react";

export default function Todo(props) {
  const { todo, toogle_todo } = props;
  const { id, name, completed } = todo;

  function cambiar_toogle_todo() {
    toogle_todo(id);
  }

  return (
    <div>
      <input
        onChange={cambiar_toogle_todo}
        type="checkbox"
        checked={completed}
      ></input>
      <label>{name}</label>
    </div>
  );
}
