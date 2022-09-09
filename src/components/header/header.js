import React from "react";
import "./header.css";
import logoUrl from "../../assets/logo.png";
const Header = () => (
  <header>
    <div className="header">
      <img src={logoUrl} alt="wimple" />
      <div>
        <span className="login">Login</span>
        <span className="login">Sign Up</span>
      </div>
    </div>
  </header>
);
export default Header;
