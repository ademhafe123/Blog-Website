import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../App";
import "./Register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const onUserLogin = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    if (email === "" || password === "") {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
      axios.post("http://localhost:7000/user/login", user).then((response) => {
        if (response.data === "Email not in use") {
          setIsEmailActive(false);
        } else if (response.data === "Password incorrect") {
          setIsEmailActive(true);
          setIsPasswordCorrect(false);
        } else {
          setEmail("");
          setPassword("");
          setCurrentUser(response.data);
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="form-container">
      <form className="register-form form" onSubmit={onUserLogin}>
        <h2 className="form-title">Log-in</h2>
        {isFieldEmpty && (
          <p className="empty-field">Please enter all fields!</p>
        )}
        <div className="input-container">
          <label
            className={
              isEmailActive ? "input-label" : "input-label input-label-taken"
            }
          >
            {isEmailActive ? "Email:" : "Email is NOT ACTIVE!"}
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
          <label
            className={
              isPasswordCorrect
                ? "input-label"
                : "input-label input-label-taken"
            }
          >
            {isPasswordCorrect ? "Password:" : "Incorrect password!"}
          </label>
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

export default Login;
