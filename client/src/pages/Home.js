import React, { useContext } from "react";

import BlogCard from "../components/BlogCard";
import "./Home.css";
import { AuthContext } from "../App";

const Home = () => {
  const { blogs } = useContext(AuthContext);

  return (
    <main className="home-page">
      {blogs.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            name={blog.author}
            title={blog.title}
            content={blog.content.substring(0, 300) + "..."}
          />
        );
      })}
    </main>
  );
};

export default Home;
