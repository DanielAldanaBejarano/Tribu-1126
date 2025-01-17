import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-img"></div>
      <div className="header-content">
        <div className="header-txt">
          <h3>Deja de arriesgarte sola</h3>
          <h1>¡Mejor haz parte de nuestra Tribu!</h1>
          <h2>Y crezcamos juntos</h2>
          <div className="header-btn-div">
          <button id="header-btn">Más información </button>
        </div>
        <div className="header-slogan">
          <p>Este es el header-slogan</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
