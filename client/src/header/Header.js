import React, { useContext } from "react";

import Logo from "../components/Logo";
import Nav from "./Nav";
import LogSignBtns from "../components/LogSignBtns";
import DropdownNav from "./DropdownNav";
import { AuthContext } from "../App";
import "./Header.css";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header-container">
        <Logo />

        <Nav />
        {currentUser === null ? (
          <div className="header-btn">
            <LogSignBtns />
          </div>
        ) : (
          <h2>{currentUser.name}</h2>
        )}

        <div className="sidebar-btn-container">
          <DropdownNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
