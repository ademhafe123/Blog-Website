import React from "react";

import LogSignBtns from "./LogSignBtns";
import Logo from "./Logo";
import "./NotLogged.css";

const NotLogged = () => {
  return (
    <div className="notlogged-container">
      <Logo />
      <h2>You are unautharized to perfom this action! </h2>
      <h3>You have to log-in or sign-up</h3>
      <LogSignBtns />
    </div>
  );
};

export default NotLogged;
