import React, { forwardRef } from "react";
import "./Plan_Section.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import patron from "../../assets/patron_1.png";
import icon from "../../assets/campamento_1.png";
import background1 from "../../assets/carousel_img_1.jpg";
import background2 from "../../assets/carousel_img_1.jpg";
import background3 from "../../assets/carousel_img_1.jpg";

const Plan_Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div ref={ref} className="plan-section mx-3">      
      <h1 className="mt-4"> Plan Tributo <br></br>18 Meses</h1>
      <img src={icon} className="icon text-center" alt="Icono" />
      <p className="my-3"> En 18 meses tenemos 3 planes para ti a largo, mediano y corto plazo.</p>
      <Accordion defaultActiveKey="" flush className="w-100">
        <Accordion.Item eventKey="0" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Accordion.Header>Plan de Negocio</Accordion.Header>
          <Accordion.Body>
          Somos el único estudio en Colombia que tiene un plan de 18 meses, donde finalizado este periodo tendrás opción de construir un emprendimiento (Tu propia empresa) o estudiar la carrera que te apasiona. Para esto recibes asesoramiento personalizado quincenal, de construcción, procesos y desarrollo de tu emprendimiento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Accordion.Header>Plan Financiero</Accordion.Header>
          <Accordion.Body>
          Finalizada la primera etapa de 8 semanas comenzaremos con una asesoría financiara para mejorar tu salud financiera y alcanzar los objetivos que nos propongamos a través del ya mencionado Plan de Negocio.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{ backgroundImage: `url(${background3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Accordion.Header>Plan de Trabajo</Accordion.Header>
          <Accordion.Body>
          Es el mecanismo o el vehículo por el cual hacemos efectivo los dos planes anteriores. Un plan de 8 semanas de perfilamiento inicial y el segundo de 16 meses de construcción del proyecto.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button className="plan-btn my-3 mx-3" href="https://wa.me/+573112920547"> Pregunta por más información </Button>
      <img src={patron} className="separador vw-100" alt="Separador" />
    </div>
  );
});

export default Plan_Section;
