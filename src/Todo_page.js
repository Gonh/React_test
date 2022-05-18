import React, { useState, useRef} from "react";
/**
 * Components
 */

 import TodoList from "./Componentes/TodoList";

 export default function Todo_page() {
  
  const [Todos, SetTodos] = useState([]);
  const TodoNameRef = useRef();

  function Add_todo(event) {
    const name = TodoNameRef.current.value;
    if (name === "") {
      return;
    } else {
      document.getElementById("cantidad_total").innerText = Todos.length + 1;
      SetTodos((prevtodos) => {
        return [
          ...prevtodos,
          { id: Math.random(), name: name, completed: false },
        ];
      });
      TodoNameRef.current.value = null;
    }
  }

  function Limpiar_lista() {
    SetTodos([]);
    document.getElementById("cantidad_total").innerText = 0;
  }

  function Toogle_todo(id) {
    const new_todos = [...Todos];
    const todo = new_todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    SetTodos(new_todos);
  }

  return (
    <>
      <h1>Todo page</h1>
      <TodoList Todos={Todos} Toogle_todo={Toogle_todo} />
      <p>
        Cantidad total :<span id="cantidad_total"> 0 </span>{" "}
      </p>
      <div>
        <input ref={TodoNameRef} type="text"></input>
        <button onClick={Add_todo}> Agregar a lista </button>
      </div>
      <button onClick={Limpiar_lista}>Limpiar lista </button>
    </>
  )
}
