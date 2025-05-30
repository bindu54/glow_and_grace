import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/glow_and_grace">Glow & Grace</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/glow_and_grace">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="cart-count">({cartCount})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
