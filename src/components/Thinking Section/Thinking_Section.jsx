import React from "react";
import Button from "react-bootstrap/Button";
import '../Thinking Section/Thinking_Section.css'

const Thinking_Section = () => {
  return (
    <div className="thinking-section p-4">
      <p>Antes de que tomes tu decisión</p>
        <h2 className="my-3">Tendrás tiempo para </h2>
        <h1 className="my-3">Pensarlo</h1>
        <h2>Para ello por favor ten presente </h2>
        <h1>Todos los beneficios</h1>
        <p>que tenemos para ti</p>
        <Button className="thinking-btn"> Conoce nuestro Ritual
        </Button>
    </div>
  );
};

export default Thinking_Section;
