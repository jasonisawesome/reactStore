import React, { useContext } from "react";
import { CartContext } from "./../context/cart";

export default function CartItem({ id, image, title, price, amount }) {
  const { removeItem, increaseQty, decreaseQty } = useContext(CartContext);
  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={title} className="cart-item__img" />
      </div>

      <div className="cart-item__detail">
        <h4 className="cart-item__title">{title}</h4>
        <h5 className="cart-item__price">$ {price}</h5>
        <button onClick={() => removeItem(id)} >
          remove
        </button>
      </div>
      <div className="cart-item__qty">
        <button
          className="cart-item__btn"
          onClick={() => decreaseQty(id, amount)}
        >
          -
        </button>
        <p className="cart-item__amount">{amount}</p>
        <button className="cart-item__btn" onClick={() => increaseQty(id)}>
          +
        </button>
      </div>
    </article>
  );
}
