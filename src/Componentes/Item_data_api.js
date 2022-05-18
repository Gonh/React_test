import { React, useEffect } from "react";
import {useLocation} from "react-router-dom"

export default function Item_data_api() {
  const location = useLocation();

  useEffect(() => {
    buscar_item();
  }, []);

  const buscar_item = async () => {
    const id = location.pathname.replace('/item_api/','');
    const data = await fetch("https://api.mercadolibre.com/categories/" +  id);
    const item = await data.json();
    document.getElementById('titulo').innerText = item.name;
    document.getElementById('imagen').src = item.picture;
    document.getElementById('cantidad_total_de_item').innerText = item.total_items_in_this_category;

  };
  return (
    <>
      <h1 id="titulo"></h1>
     <div>
     <p>Cantidad total de items:</p>
      <span id="cantidad_total_de_item"></span>
     </div>
      <img id="imagen" className="imagen"></img>
    </>
  );
}
