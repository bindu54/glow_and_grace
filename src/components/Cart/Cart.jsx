import React from "react";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="cart-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/glow_and_grace">Start Shopping</Link>
      </div>
    );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>Nrs {item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>Nrs {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <h3>Total: Nrs {total.toFixed(2)}</h3>
        <button onClick={() => navigate("/checkout")} className="checkout-btn">
          Proceed to Checkout
        </button>
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
      </div>
    </div>
  );
}
