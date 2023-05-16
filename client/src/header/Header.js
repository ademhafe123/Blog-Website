import React from "react";

import Logo from "../components/Logo";
import Nav from "./Nav";
import LogSignBtns from "../components/LogSignBtns";
import DropdownNav from "./DropdownNav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />

        <Nav />
        <div className="header-btn">
          <LogSignBtns />
        </div>

        <div className="sidebar-btn-container">
          <DropdownNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
