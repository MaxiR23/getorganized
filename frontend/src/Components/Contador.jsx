import React from "react";
import './Contador.css'

export default function Contador({quantity, setQuantity, stock, setStock}) {
  const sumar = () => {
    quantity < stock
      ? setQuantity(quantity + 1)
      : console.error("pasaste del stock");
  };

  const restar = () => {
    quantity > 1
      ? setQuantity(quantity - 1)
      : console.error("no hay stock suficiente");
  };

  return (
    <div className="contador mt-5">
      <button className="btnBonito" onClick={restar}>
        -
      </button>
      <p className="box-P">
        Seleccionado:{" "}
        {quantity === stock ? (
          <span className="bg-red"> {quantity} </span>
        ) : (
          <span> {quantity} </span>
        )}{" "}
      </p>
      <button className="btnBonito" onClick={sumar}>
        +
      </button>
    </div>
  );
}
