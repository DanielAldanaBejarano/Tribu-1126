import React from "react";
import "./Map_Section.css";
import Accordion from "react-bootstrap/Accordion";

function Map_Section() {
  return (
    <div className="map-section">
      <h1 className="my-4"> Nuestros Campamentos </h1>
      <Accordion defaultActiveKey="" flush className="text-center">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">
            <img src="src/assets/campamento_1.png" className="camp-img"></img>
            <h3 className="">Campamento 1</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h3>Dirección: </h3>
            <p>Calle falsa 123</p>
            <h3>Teléfono: </h3>
            <p>+57 123456789</p>
            <h3>Shamán: </h3>
            <p>Shamán 1</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img src="src/assets/campamento_2.png" className="camp-img"></img>
            <h3 className="m-3">Campamento 2</h3>
          </Accordion.Header>
          <Accordion.Body>
          <h3>Dirección: </h3>
            <p>Calle falsa 123</p>
            <h3>Teléfono: </h3>
            <p>+57 123456789</p>
            <h3>Shamán: </h3>
            <p>Shamán 1</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img src="src/assets/campamento_3.png" className="camp-img"></img>
            <h3 className="m-3">Campamento 3</h3>
          </Accordion.Header>
          <Accordion.Body>
          <h3>Dirección: </h3>
            <p>Calle falsa 123</p>
            <h3>Teléfono: </h3>
            <p>+57 123456789</p>
            <h3>Shamán: </h3>
            <p>Shamán 1</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Map_Section;
