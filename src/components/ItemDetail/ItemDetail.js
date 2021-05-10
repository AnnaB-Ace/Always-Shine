import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [showButton, setShowButton] = useState(0);
  const onAdd = (quantityToAdd) => {
    setShowButton(quantityToAdd);
    console.log("Hemos recibido un evento del ItemCount ", quantityToAdd);
  };

  return (
    <div className="Container-fluid">
      <div className="row">
        <div className="col-lg-6 col-xs-12 imagen card">
          <img
            className="img-fluid"
            src={
              item.imagenExpandida
                ? require(`../../img/jpg/${item.imagenExpandida}.jpg`).default
                : ""
            }
            alt="Coleccion2021"
          />
        </div>

        <div className="col-lg-6 col-xs-12 Propiedades">
          <div className="title">{item.title}</div>
          <div className="title">${item.precio}</div>
          <div className="description">{item.description}</div>
          {showButton === 0 ? (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          ) : (
            <Link to={"/cart"}>
              <button>Terminar compra</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

// productDetail1 ? <ItemDetail productDetail1={productDetail1} /> : null;
// function ItemDetail({ item }) {
//  onAdd(quantityToAdd) {
//  // Hemos recibido un evento del ItemCount
//  }
// return <>
//            …
//      <ItemCount > // Configura las props de ItemCount
//      <Button>Termina tu compra</Button> // Oculto hasta que el usuario seleccione la cantidad y clickee en comprar

// </>;
//  // Utilizar dentro de itemdetail el counter
// }
