import React from "react";

export default function Custom_form(props) {


  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.isTrusted == true) {
      var form = new FormData(document.getElementById(props.id));
      var object = {};
      form.forEach(function (value, key) {
        object[key] = value;
      });  
      props.callback(object);
    }
  };
  return (
    <form id={props.id} onSubmit={handleSubmit}>
      <div>
        <h2>{props.titulo}</h2>
      </div>
      {props.children}
      <div>
        <input type="submit" />
        <input type="reset" />
      </div>
    </form>
  );
}
