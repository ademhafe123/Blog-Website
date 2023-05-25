import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../App";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isEmailTaken, setIsEmailTaken] = useState(false);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
      axios
        .post("http://localhost:7000/user/register", user)
        .then((response) => {
          if (response.data === "Email in use") {
            console.log(response.data);
            setIsEmailTaken(true);
          } else {
            console.log("Registered a new user!");
            setIsEmailTaken(false);
            setEmail("");
            setName("");
            setPassword("");
            setCurrentUser(response.data);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="form-container">
      <form className="register-form form" onSubmit={submitHandler}>
        <h2 className="form-title">Register</h2>
        {isFieldEmpty && (
          <p className="empty-field">Please enter all fields!</p>
        )}
        <div className="input-container">
          <label className="input-label">Full name: </label>
          <input
            type="text"
            className="input"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label
            className={
              isEmailTaken ? "input-label input-label-taken" : "input-label"
            }
          >
            {isEmailTaken ? "Email taken!" : "Email:"}
          </label>
          <input
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Password: </label>
          <input
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
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
