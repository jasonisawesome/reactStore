import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { UserContext } from "./../context/user";
import { CartContext } from "../context/cart";

function Header() {
  const { user, logout } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  return (
    <header className="header">
      <img src={logo} alt="store logo" className="header__logo" />
      <nav>
        <ul className="header__list">
          <div className="header__listLeft">
            <li>
              <Link to="/" className="header__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="header__link">
                Products
              </Link>
            </li>
          </div>
          <div className="header__listRight">
            {user.token && (
              <li>
                <Link to="/checkout" className="header__link">
                  Checkout
                </Link>
              </li>
            )}

            <li>
              <Link to="/cart" className="header__link">
                Cart
              </Link>
            </li>
            {user.token ? (
              <li>
                <button
                  className="header__link header__link--logout"
                  onClick={() => {
                    logout();
                    // clearCart();
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="header__link">
                  Login
                </Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
