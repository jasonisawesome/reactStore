import React, { useContext, useState } from "react";
import { CartContext } from "./../context/cart";
import { UserContext } from "./../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "./../components/EmptyCart";

function Checkout() {
  const { total } = useContext(CartContext);

  return (
    <section className="section ">
      <h2 className="section__title">checkout</h2>
      <h3>
        order total: <span>${total}</span>
      </h3>
      <button type="submit" className="proceedButton">
        Proceed to checkout
      </button>
      
    </section>
  );
}

export default Checkout;
