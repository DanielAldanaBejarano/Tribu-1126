import React from "react";
import Button from "react-bootstrap/Button";
import '../Thinking Section/Thinking_Section.css'

const Thinking_Section = () => {
  return (
    <div className="thinking-section p-5">
      <h2>Antes de que tomes tu decisión...</h2>
        <p className="">Tendrás todo el tiempo para </p>
        <h1 className="">Pensarlo</h1>
        <p>Para ello por favor ten presente </p>
        <h1>Todos los beneficios</h1>
        <h2>que tenemos para ti</h2>
        <Button className="thinking-btn my-4"> Conoce nuestro Ritual
        </Button>
    </div>
  );
};

export default Thinking_Section;
