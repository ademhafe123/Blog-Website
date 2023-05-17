import React from "react";

import avatar1 from "../images/tarik-avatar.jpg";
import avatar2 from "../images/adem-avatar.jpg";
import BlogCard from "../components/BlogCard";
import "./Home.css";

const DUMMY_BLOGS = [
  {
    img: avatar1,
    name: "Tarik Buljubasic",
    title: "My best work-day",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra",
  },
  {
    img: avatar2,
    name: "Adem Sinanovic",
    title: "Travelling to Mostar",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra",
  },
];
const Home = () => {
  return (
    <main className="home-page">
      {DUMMY_BLOGS.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            imgUrl={blog.img}
            name={blog.name}
            title={blog.title}
            content={blog.content.substring(0, 300) + "..."}
          />
        );
      })}
    </main>
  );
};

export default Home;
