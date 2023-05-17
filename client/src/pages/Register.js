import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <div className="form-container">
      <form className="register-form form">
        <h2 className="form-title">Register</h2>
        <div className="input-container">
          <label className="input-label">Full name: </label>
          <input type="text" className="input" />
        </div>
        <div className="input-container">
          <label className="input-label">Email: </label>
          <input type="email" className="input" />
        </div>
        <div className="input-container">
          <label className="input-label">Password: </label>
          <input type="password" className="input" />
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

export default Register;