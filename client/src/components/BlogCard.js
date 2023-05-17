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
      <div className="blog-card-header">
        <img src={props.imgUrl} alt="profile-pic" className="profile-pic" />
        <h3 className="profile-name">{props.name}</h3>
      </div>
      <h2 className="blog-card-title">{props.title}</h2>
      <p className="blog-card-content">{props.content}</p>
      <div className="blog-card-btn-container">
        <button className="blog-card-btn" onClick={buttonHandler}>
          Read Blog!
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
