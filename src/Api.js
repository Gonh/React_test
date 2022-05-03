import { React, useState, useEffect, version } from "react";

export default function Api() {
  useEffect(() => {
    buscar_items();
  }, []);

  const [sitios, set_sitios] = useState([]);
  const [Categorias, Set_categorias] = useState([]);
  var Sitio = '';
  var Categoria = '';
  const buscar_items = async () => {
    const data = await fetch("https://api.mercadolibre.com/sites");
    const items = await data.json();
    set_sitios(items);
  };

  const buscar_categorias = async () => {
    const data_categoria = await fetch(" https://api.mercadolibre.com/sites/" + Sitio +"/categories");
    const items_categoria = await data_categoria.json();
    Set_categorias(items_categoria);
  };

  function Pedir_categorias(event){
    if(event.isTrusted == true){
      Sitio = event.target.id;
      buscar_categorias();
    }
  }

  function Pedir_productos(event){

  }

  return (
    <section>
      <h1>API</h1>
      <div className="grid">
      <div>
    <ul className="lista">
    <h3>Sitios</h3>
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
          return <li key={cate.id}> <button id={cate.id} onClick={Pedir_productos} > {cate.name} </button> </li>;
        })
        }
      </ul>

    </div>
      </div>
    </section>
  );
}
