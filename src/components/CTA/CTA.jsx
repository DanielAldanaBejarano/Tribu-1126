import React from "react";
import Button from "react-bootstrap/Button";

const CTA = () => {
  return (
    <div>
      <div className="CTA-txt text-center mt-5 mx-1">
        <h2>Antes de que tomes tu decisión</h2>
        <h1>Tendrás tiempo para </h1>
        <h1 class="text-primary">pensarlo</h1>
        <p>Para ello por favor ten presente </p>
        <a>todos los beneficios</a>
        <p>que tenemos para ti</p>
        <Button className="m-2"> Conoce nuestro Ritual
        </Button>
      </div>
    </div>
  );
};

export default CTA;
