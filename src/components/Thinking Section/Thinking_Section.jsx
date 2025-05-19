import React, { forwardRef } from "react";
import Button from "react-bootstrap/Button";
import '../Thinking Section/Thinking_Section.css'
import patron from "../../assets/patron_1.png";

const Thinking_Section = forwardRef((props, ref) => {
  return (
    <div ref= {ref} className="thinking-section">
      <h2>Antes de que tomes tu decisión...</h2>
        <p className="">Tendrás todo el tiempo para </p>
        <h1 className="">Pensarlo</h1>
        <p>Para ello por favor ten presente </p>
        <h1>Todos los beneficios</h1>
        <h2>que tenemos para ti</h2>
        <Button className="thinking-btn my-4 mx-4" onClick={() => window.location.href = "#destino"}> Conoce nuestro Ritual
        </Button>
        <img src={patron} className="separador"></img>
    </div>
  );
});

export default Thinking_Section;
