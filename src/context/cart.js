import React, { useState, useEffect } from "react";


export const CartContext = React.createContext();

function getCartFromLocal() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}



function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocal());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };

  const decreaseQty = (id, amount) => {
    if (amount > 1) {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };

  const addToCart = (product) => {
    //getting needed data on productdetail page from product context
    const {
      id,
      title,
      price,
      image,
    } = product;
    //check if the item is already in the cart if it is then just increase amount by 1
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      return increaseQty(id);
    } else {
      const newItem = { id, title, price, amount: 1, image };
      return setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  //whenever cart is updated totalcost and cartitems will be uppdated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let newCartItems = cart.reduce((acc, curr) => (acc += curr.amount), 0);
    setCartItems(newCartItems);

    let newTotal = cart.reduce((acc, curr) => {
      return (acc += curr.amount * curr.price);
    }, 0);

    //convert string to float and leave two decimals
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
    return () => {};
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseQty,
        decreaseQty,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
