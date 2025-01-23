import React, { useState } from "react";
import "./Navbar_Section.css";
import logo from "../../assets/logo.png";

function Navbar_Section() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img className="logo" src={logo}></img>
      </a>
      <div className="navbar-btn-div">
        <button id="navbar-btn" onClick={() => setIsOpen(!isOpen)}>
          Más
        </button>        
      </div>
      {isOpen && (
          <div className="navbar-links-div">
            <a className="navbar-link" href="/products">Sección 1</a>
            <a className="navbar-link" href="/products">Sección 2</a>
            <a className="navbar-link" href="/products">Sección 3</a>
            <a className="navbar-link" href="/products">Sección 4</a>
            <a className="navbar-link" href="/products">Sección 5</a>
          </div>
        )}
    </nav>
  );
}

export default Navbar_Section;
