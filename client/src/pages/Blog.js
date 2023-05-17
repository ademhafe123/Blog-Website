import React from "react";

import "./Blog.css";

const Blog = (props) => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <img className="profile-pic" src={props.blog.img} alt="profile-pic" />
        <h3 className="profile-name ">{props.blog.name}</h3>
      </div>
      <h3 className="blog-title">{props.blog.title}</h3>
      <p className="blog-content">{props.blog.content}</p>
    </div>
  );
};

export default Blog;
