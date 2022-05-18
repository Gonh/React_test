import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { User_context } from "./Componentes/User_context";

export default function Api() {
  useEffect(() => {
    buscar_items();
  }, []);

  const [sitios, Set_sitios] = useState([]);
  const [Categorias, Set_categorias] = useState([]);
  const user = useContext(User_context);
  var sitio = '';

  const buscar_items = async () => {
    const data = await fetch("https://api.mercadolibre.com/sites");
    const items = await data.json();
    Set_sitios(items);
  };

  const Buscar_categorias = async () => {
    const data_categoria = await fetch("https://api.mercadolibre.com/sites/" + sitio +"/categories");
    const items_categoria = await data_categoria.json();
    if(items_categoria.hasOwnProperty('error') == false){
      Set_categorias(items_categoria);
    }
 
  };

  function Pedir_categorias(event){
    if(event.isTrusted == true){
     sitio = event.target.id;
      Buscar_categorias();
    }
  }


  return (
    <section>
      <h1>API</h1>
      <h2>{user.User.given_name}</h2>
      <div className="grid">
      <div>
    <ul className="lista">
    <h3>Paises</h3>
        {sitios.map((sitio) => {
          return <li key={sitio.id}> <button id={sitio.id} onClick={Pedir_categorias} > {sitio.name} </button> </li>;
        })}
      </ul>
      </div>
      <div>
      <ul className="lista">
    <h3>Categorias</h3>
        {
        Categorias.map((cate) => {
          return <li key={cate.id}>  <Link className='api_link' to={"/item_api/" + cate.id}>{cate.name}</Link> </li>;
        })
        }
      </ul>
      </div>

      </div>
    </section>
  );
}
