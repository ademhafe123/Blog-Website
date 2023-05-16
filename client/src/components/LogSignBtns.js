import React from "react";
import { useNavigate } from "react-router-dom";

import "./LogSignBtns.css";

const LogSignBtns = () => {
  const navigate = useNavigate();
  const loginButtonHandler = () => {
    navigate("/sign-in");
  };
  const registerButtonHandler = () => {
    navigate("/register");
  };
  return (
    <div className="log-sign-btn-container">
      <button className="log-sign-btn" onClick={loginButtonHandler}>
        Log-in
      </button>
      <button className="log-sign-btn" onClick={registerButtonHandler}>
        Sign-up
      </button>
    </div>
  );
};

export default LogSignBtns;
