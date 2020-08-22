import React, { useContext } from "react";
import { CartContext } from "./../context/cart";
import EmptyCart from "./../components/EmptyCart";
import CartItem from "./../components/CartItem";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

function Cart() {
  
  const { cart, total } = useContext(CartContext);
  const { user } = useContext(UserContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="section section--cart">
      <h1 className="section__title">Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h2>Total: $ {total}</h2>

      {user.token ? (
        <Link to="/checkout">Check Out</Link>
      ) : (
        <Link to="/login"> Sign in</Link>
      )}
    </section>
  );
}

export default Cart;
