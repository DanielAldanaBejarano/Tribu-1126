import React, { forwardRef } from "react";
import "./Header_Section.css";
import Button from "react-bootstrap/Button";
import patron from "../../assets/patron_1.png";

const Header = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="header-main text-center">
      <div className="header-first-part">
        <div className="header-img_1">
          <div className="header-content">
            <div className="header-img-txt">
              <h3>Deja de cazar sola</h3>
              <h1 className="mb-5">¡Haz parte de la Tribu!</h1>
              <div className="header-btn-div">
                <Button
                  className="header-btn"
                  href="https://wa.me/+573112920547"
                >
                  Más información{" "}
                </Button>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div className="header-second-part">
        <div className="header-txt mx-3 mt-5">
          <p>
            Manejamos un plan único de trabajo de solo 18 meses para modelos
            WebCam, acompañado de asesoría financiera para emprendimiento
            laboral o educativo finalizando este periodo.
          </p>
          <p className="mt-2">Para chicas con o sin experiencia.</p>
        </div>
        <div>
          <p className="mt-2">X Multas X Regaños X Ego</p> 
          <p> + Plan de trabajo + Capacitación + Retroalimentación</p>
        </div>
      </div>
      <img src={patron} className="separador"></img>
    </div>
  );
});

export default Header;
