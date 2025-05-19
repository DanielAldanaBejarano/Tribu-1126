import React, { forwardRef } from "react";
import "./Map_Section.css";
import Accordion from "react-bootstrap/Accordion";

const Map_Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div ref={ref} className="map-section">
      <h1 className="my-4"> Nuestros Campamentos </h1>
      <h5 className="my-4"> Nuestro equipo de trabajo está distribuído en las siguientes sedes: </h5>
      <Accordion defaultActiveKey="" flush className="text-center">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">
            <img src="src/assets/campamento_1.png" className="camp-img"></img>
            <h3 className="">Cherokee</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h3>Dirección: </h3>
            <p>Carrera 70 A No. 5 C - 26 Piso 2</p>
            <h3>Teléfono: </h3>
            <p>+57 123456789</p>
            <p>Diana Ángel</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img src="src/assets/campamento_2.png" className="camp-img"></img>
            <h3 className="m-3">Apache</h3>
          </Accordion.Header>
          <Accordion.Body>
          <h3>Dirección: </h3>
            <p>Carrera 70 A No. 5 C - 26 Piso 1</p>
            <h3>Teléfono: </h3>
            <p>+57 3112920547</p>
            <p>Camila Giraldo</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img src="src/assets/campamento_3.png" className="camp-img"></img>
            <h3 className="m-3">Comanche</h3>
          </Accordion.Header>
          <Accordion.Body>
          <h3>Dirección: </h3>
            <p>Próximamente</p>            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
});

export default Map_Section;
