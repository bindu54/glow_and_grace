import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </Link>
      <div className="product-info">
        <h3 style= {{ color : "black"}}>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">NRS {product.price.toFixed(2)}</p>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
