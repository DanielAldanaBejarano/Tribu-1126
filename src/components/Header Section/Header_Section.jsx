import React from "react";
import "./Header_Section.css";
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div className="header-main text-center">
      <div className="header-img_1"></div>
      <div className="header-content">
        <div className="header-txt mt-3">
          <p>Deja de arriesgarte sola</p>
          <h1>¡Haz parte de nuestra Tribu!</h1>
          <p>Y crezcamos juntos</p>
          <div className="header-btn-div">
            <Button className="mt-3 header-btn">Más información </Button>
          </div>
        </div>
      </div>
      <div className="header-slogan my-auto">
          <p>"Este es el header-slogan"</p>
        </div>
      <div className="header-img_2"></div>
      

    </div>
  );
};

export default Header;
