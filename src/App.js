import React, { useState, useRef } from "react";

/**
 * Components
 */
import TodoList from "./Componentes/TodoList";

/**
 * Styles
 */
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function add_todo(event) {
    const name = todoNameRef.current.value;
    if (name === "") {
      return;
    } else {
      document.getElementById("cantidad_total").innerText = todos.length + 1;
      setTodos((prevtodos) => {
        return [
          ...prevtodos,
          { id: Math.random(), name: name, completed: false },
        ];
      });
      todoNameRef.current.value = null;
    }
  }

  function limpiar_lista(){
    setTodos([]);
    document.getElementById('cantidad_total').innerText = 0;
  }


  function toogle_todo(id) {
    const new_todos = [...todos];
    const todo = new_todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(new_todos);
  }

  return (
    <div className="root">
      <header className="root__header">
        <span>This is header</span>
      </header>
      <main className="root__main">
        <h1>This is a new app</h1>
        <TodoList todos={todos} toogle_todo={toogle_todo} />
        <p>
          Cantidad total :<span id="cantidad_total"> 0 </span>{" "}
        </p>
        <div>
          <input ref={todoNameRef} type="text"></input>
          <button onClick={add_todo}> Agregar a lista </button>
        </div>
    <button onClick={limpiar_lista}>Limpiar lista </button>
        </main>
    </div>
  );
}

export default App;
