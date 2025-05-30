import React, { useState } from "react";
import "./UserAccount.css";

export default function UserAccount() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "9876543210",
    address: "Kathmandu, Nepal",
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);

  const MOCK_ORDERS = [
    {
      orderId: "A123",
      date: "2025-05-01",
      total: 120,
      items: [
        { id: 3, name: "Vegan Makeup Brush Set", quantity: 1 },
        { id: 5, name: "Silicone Beauty Sponge", quantity: 2 },
      ],
    },
    {
      orderId: "B456",
      date: "2025-04-10",
      total: 85,
      items: [
        { id: 7, name: "Organic Lip Balm", quantity: 3 },
        { id: 8, name: "Natural Face Wash", quantity: 1 },
      ],
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(form);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-account">
      <h2>My Account</h2>
      <div className="account-info">
        <label>
          Name:
          {editMode ? (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
            />
          ) : (
            <span>{user.name}</span>
          )}
        </label>
        <label>
          Email:
          {editMode ? (
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
            />
          ) : (
            <span>{user.email}</span>
          )}
        </label>
        <label>
          Phone:
          {editMode ? (
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
            />
          ) : (
            <span>{user.phone}</span>
          )}
        </label>
        <label>
          Address:
          {editMode ? (
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          ) : (
            <span>{user.address}</span>
          )}
        </label>
      </div>

      {editMode ? (
        <div className="account-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="edit-btn" onClick={() => setEditMode(true)}>
          Edit Profile
        </button>
      )}

      <div className="order-history">
        <h3>Order History</h3>
        {MOCK_ORDERS.length === 0 ? (
          <p>You haven't placed any orders yet.</p>
        ) : (
          MOCK_ORDERS.map((order) => (
            <div key={order.orderId} className="order-card">
              <h4>Order #{order.orderId}</h4>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} (Qty: {item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
