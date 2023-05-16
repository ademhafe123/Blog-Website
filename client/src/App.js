import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/add-blog" element={<h1>ADD BLOG</h1>} />
          <Route path="/profile" element={<h1>PROFILE</h1>} />
          <Route path="/blogid" element={<h1>BLOG</h1>} />
          <Route path="/sign-in" element={<h1>Sign in</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
