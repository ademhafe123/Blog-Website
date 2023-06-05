import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./header/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotLogged from "./components/NotLogged";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddBlog from "./pages/AddBlog";

import avatar1 from "./images/tarik-avatar.jpg";
import avatar2 from "./images/adem-avatar.jpg";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-blog"
              element={currentUser === null ? <NotLogged /> : <AddBlog />}
            />
            <Route path="/profile" element={<NotLogged />} />
            <Route path="/blogid" element={<Blog blog={DUMMY_BLOGS[0]} />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}
const DUMMY_BLOGS = [
  {
    img: avatar1,
    name: "Tarik Buljubasic",
    title: "My best work-day",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    img: avatar2,
    name: "Adem Sinanovic",
    title: "Travelling to Mostar",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra",
  },
];
export const AuthContext = createContext(null);
export default App;
