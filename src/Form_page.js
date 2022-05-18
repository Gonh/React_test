import React, { useState, useRef } from "react";

/**
 * Components
 */
import Custom_form from "./Componentes/Custom_form";

export default function Form_page() {

  function callback_form(data) {
    console.log(data);
    document.getElementById('consola_aviso').classList.remove('display_none');
  }

  return (
    <>
      <h1>Form page</h1>
      <Custom_form titulo = 'Titulo del formulario' id="prueba_form" callback={callback_form}>
        <label>
          Edad:
          <input required type="number" name="edad" />
        </label>
        <label>
          Nombre:
          <input required type="text" name="nombre" />
        </label>
      </Custom_form>
      <p id="consola_aviso" className="display_none">El resultado esta en la consola del navegador </p>
    </>
  );
}
