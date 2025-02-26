import React from "react";
import "./Header_Section.css";
import Button from "react-bootstrap/Button";


const Header = () => {
  return (
    <div className="header-main text-center">
      <div className="header-first-part">
        <div className="header-img_1"></div>
        <div className="header-content">
          <div className="header-img-txt">
            <h3>Deja de arriesgarte sola</h3>
            <h1>¡Haz parte de la Tribu!</h1>
            <div className="header-btn-div">
              <Button className="mt-3 header-btn">Más información </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-second-part">
        <div className="header-txt mt-auto">
          <p>Crezcamos juntos con nuestro plan </p>
          <p>Conoce nuestros beneficios </p>
          <p>No necesitas experiencia </p>
        </div>
        <div className="header-slogan my-auto">
          <p>"Este es el header-slogan"</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
