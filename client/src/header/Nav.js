import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <ul className="navList">
      <li className="navList-item">
        <NavLink className="navLink" to={"/"}>
          Newest Blogs
        </NavLink>
      </li>
      <li className="navList-item">
        <NavLink className="navLink" to={"/add-blog"}>
          Add Blog
        </NavLink>
      </li>
      <li className="navList-item">
        <NavLink className="navLink" to={"/profile"}>
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
