import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./AddBlog.css";
import { AuthContext } from "../App";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {
      author: currentUser,
      title,
      content,
    };
    if (title === "") {
      // TODO
    } else if (content === "") {
      // TODO
    } else {
      axios.post("http://localhost:7000/blog/add", blog).then((response) => {
        setContent("");
        setTitle("");
        navigate("/");
      });
    }
  };

  return (
    <div className="add-blog">
      <h2 className="add-blog-title">Share a new experience! </h2>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label">Title:</label>
          <input
            type="text"
            className="input"
            name="blogTitle"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Content:</label>
          <textarea
            rows={15}
            className="input-area"
            name="blogContent"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <div className="form-btn-container">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
