import React, { useState } from "react";
import "./Navbar_Section.css";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";

function Navbar_Section() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img className="logo" src={logo}></img>
      </a>
      <a id="navbar-btn" onClick={() => setIsOpen(!isOpen)}>
        <img className="icon" src={icon}></img>
      </a>
      {isOpen && (
        <div className="navbar-links-div">
          <a className="navbar-link" href="/products">
            Sección 1
          </a>
          <a className="navbar-link" href="/products">
            Sección 2
          </a>
          <a className="navbar-link" href="/products">
            Sección 3
          </a>
          <a className="navbar-link" href="/products">
            Sección 4
          </a>
          <a className="navbar-link" href="/products">
            Sección 5
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar_Section;
