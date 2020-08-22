import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <section className="section">
      <h1 className="emptyCartTitle">Your Cart is empty </h1>
      <Link to="/products" className="btn btn--cart">
        Add Products
      </Link>
    </section>
  );
}

export default EmptyCart;
