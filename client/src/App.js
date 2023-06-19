import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Header from "./header/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotLogged from "./components/NotLogged";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddBlog from "./pages/AddBlog";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/home")
      .then((response) => {
        const blogsToInvert = response.data;
        setBlogs(blogsToInvert.reverse());
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, setCurrentUser, blogs }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-blog"
              element={currentUser === null ? <NotLogged /> : <AddBlog />}
            />
            <Route path="/profile" element={<NotLogged />} />
            <Route path="/blogid" element={<Blog blog={blogs[0]} />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export const AuthContext = createContext(null);
export default App;
