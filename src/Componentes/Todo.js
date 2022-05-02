import React from "react";

export default function Todo(props) {
  const { todo, Toogle_todo } = props;
  const { id, name, completed } = todo;

  function Cambiar_toogle_todo() {
    Toogle_todo(id);
  }

  return (
    <div>
      <input
        onChange={Cambiar_toogle_todo}
        type="checkbox"
        checked={completed}
      ></input>
      <label>{name}</label>
    </div>
  );
}
