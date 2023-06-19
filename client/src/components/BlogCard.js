import React from "react";
import { useNavigate } from "react-router-dom";

import "./BlogCard.css";

const BlogCard = (props) => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/blogid");
  };

  return (
    <div className="blog-card">
      <h2 className="blog-card-title">{props.title}</h2>
      <p className="blog-card-content">{props.content}</p>
      <div className="blog-card-btn-container">
        <h3 className="blog-card-name">Written by: {props.name}</h3>
        <button className="blog-card-btn" onClick={buttonHandler}>
          Read Blog!
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
