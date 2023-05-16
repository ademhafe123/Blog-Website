import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import { NavLink } from "react-router-dom";
import "./Dropdown.css";

const DropdownNav = (props) => {
  const navigate = useNavigate();
  const loginButtonHandler = () => {
    navigate("/sign-in");
  };
  const registerButtonHandler = () => {
    navigate("/register");
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebarHandler = () => {
    setSidebar((prev) => {
      return !prev;
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        className="main-navigation__menu-btn"
        onClick={showSidebarHandler}
      >
        <span />
        <span />
        <span />
      </Dropdown.Toggle>
      {sidebar && (
        <div className="dropdown-container" onClick={showSidebarHandler}>
          <ul className="dropdown-navList">
            <li className="dropdown-navList-item">
              <NavLink className="navLink" to={"/"}>
                Newest Blogs
              </NavLink>
            </li>
            <li className="dropdown-navList-item">
              <NavLink className="navLink" to={"/add-blog"}>
                Add Blog
              </NavLink>
            </li>
            <li className="dropdown-navList-item">
              <NavLink className="navLink" to={"/profile"}>
                Profile
              </NavLink>
            </li>
            <li className="dropdown-navList-item">
              <button className="dropdown-btn" onClick={loginButtonHandler}>
                Log-in
              </button>
            </li>
            <li className="dropdown-navList-item">
              <button className="dropdown-btn" onClick={registerButtonHandler}>
                Sign-up
              </button>
            </li>
          </ul>
        </div>
      )}
    </Dropdown>
  );
};

export default DropdownNav;
