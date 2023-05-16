import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import NotLogged from "./components/NotLogged";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NotLogged />} />
          <Route path="/add-blog" element={<NotLogged />} />
          <Route path="/profile" element={<NotLogged />} />
          <Route path="/blogid" element={<NotLogged />} />
          <Route path="/sign-in" element={<h1>Sign in</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
