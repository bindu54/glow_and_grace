import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import UserAccount from "./components/UserAccount/UserAccount";
import BlogList from "./components/BlogList/BlogList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";
import BlogPost from "./components/BlogPost/BlogPost";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/glow_and_grace" element={<ProductCatalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<UserAccount />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}
