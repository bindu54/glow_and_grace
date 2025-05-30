import React from "react";
import blogPosts from "../../Data/blogPosts";
import { Link } from "react-router-dom";
import "./BlogList.css";

export default function BlogList() {
  return (
    <div className="blog-list-container">
      <h2>Latest Articles & Tips</h2>
      <div className="blog-cards">
        {blogPosts.map(({ id, author, title, summary }) => (
          <div key={id} className="blog-card">
            <h3>{title}</h3>
            <span style={{ fontStyle: "italic", color: "#888" }}>By {author}</span>
            <p>{summary}</p>
            <Link to={`/blog/${id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
