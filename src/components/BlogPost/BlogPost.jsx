import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../../Data/blogPosts";
import { Link } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div style={{ padding: "2rem" }}><h2>Blog post not found.</h2></div>;
  }

  return (
    <div
      className="blog-post-container"
      style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}
    >
      <Link to={`/blog`} className="read-more">
        ← Back to list
      </Link>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{post.title}</h1>
      <p style={{ fontStyle: "italic", color: "#777" }}>{post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "1rem 0",
        }}
      />
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>{post.content}</p>
      <p style={{ fontStyle: "italic", fontWeight: "bold", color: "#888" }}>
        {post.author}
      </p>
    </div>
  );
}
