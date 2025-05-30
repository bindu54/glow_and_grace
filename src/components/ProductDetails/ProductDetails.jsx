import React from "react";
import { useParams } from "react-router-dom";
import products from "../../Data/products";
import reviewsData from "../../Data/reviews";
import { useCart } from "../../Context/CartContext";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  const productReviews =
    reviewsData.find((r) => r.productId === product.id)?.reviews || [];

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="details-image" />
      <div className="product-description">
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="details-desc">{product.description}</p>
          <p className="details-price">Nrs {product.price.toFixed(2)}</p>
          <button
            className="details-add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-reviews">
          <h3>Customer Reviews</h3>
          {productReviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul>
              {productReviews.map((review) => (
                <li key={review.id} className="review-item">
                  <strong>{review.username}</strong> – {review.rating}★<br />
                  <em>{review.comment}</em>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link to={`/glow_and_grace`} className="read-more">
          ← Back to calalog
        </Link>
      </div>
    </div>
  );
}
