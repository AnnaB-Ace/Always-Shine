import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setcount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  return (
    <>
      <div className="buttonCont">
        <button className="masmenos" onClick={decrement}>
          -
        </button>
        <p className="count">{count}</p>
        <button className="masmenos" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="agregar"
        onClick={() => {
          if (count != 0) {
            onAdd();
          } else {
            console.log(`no hay productos en el carrito`);
          }
        }}
      >
        Agregar
      </button>
    </>
  );
};

//  A tener en cuenta:
// - El número contador nunca puede superar el stock disponible
// - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
// - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.
// Detalle importante: como sabes, todavía no tenemos nuestro detalle de ítem, y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, sólo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem.
