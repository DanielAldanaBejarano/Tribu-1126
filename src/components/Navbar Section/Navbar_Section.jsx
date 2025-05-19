import React, { useState, useRef } from "react";
import "./Navbar_Section.css";
import logo from "./assets/logo.png";
import icon from "./assets/icon.png";

import Ritual_Section from "../../components/Ritual Section/Ritual_Section";

function Navbar_Section() {

  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button className="navbar-link" href="" onClick={handleScroll}>
            Nuestro Ritual
          </button>
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
      <Ritual_Section ref={sectionRef} />
    </nav>
  );
}

export default Navbar_Section;
