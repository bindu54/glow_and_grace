import React, { useState } from "react";
import products from "../../Data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCatalog.css";

export default function ProductCatalog() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  return (
    <div className="catalog-container">
      <h2>Shop Our Products</h2>
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              cat === categoryFilter ? "active" : ""
            }`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
