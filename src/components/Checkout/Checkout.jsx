import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "esewa",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${form.name}! Your order totaling $${total.toFixed(
        2
      )} has been placed.`
    );
    clearCart();
    navigate("/glow_and_grace");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Shipping Address
          <textarea
            name="address"
            required
            value={form.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Payment Method
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="esewa">e-Sewa</option>
            <option value="fonepay">FonePay</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </label>
        <div className="checkout-total">
          <strong>Total: </strong>Nrs {total.toFixed(2)}
        </div>
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}
