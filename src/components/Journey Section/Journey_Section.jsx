import React, { useState, forwardRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_Img_1 from "../../assets/carousel_img_1.jpg";
import Carousel_Img_2 from "../../assets/carousel_img_2.jpg";
import Carousel_Img_3 from "../../assets/carousel_img_3.jpg";
import Carousel_Img_4 from "../../assets/carousel_img_4.jpg";

import titletop1 from "../../assets/titletop1.png";
import titlebottom1 from "../../assets/title_bottom_1.png";

import patron from "../../assets/patron_1.png";

import "./Journey_Section.css";

const FlippableCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-content">{frontContent}</div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-content">{backContent}</div>
        </div>
      </div>
    </div>
  );
};

const JourneySection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="carousel-div text-center">
      <h1 className="my-4">
        <img className="title_img" src={titletop1}></img>
        <h1>Nuestro viaje juntos se compone de 4 etapas</h1>
        <img className="title_img" src={titlebottom1}></img>
      </h1>
      <Carousel>
        <Carousel.Item interval={3000}>
          <FlippableCard
            frontContent={
              <>
                <img
                  src={Carousel_Img_1}
                  alt="Etapa 1"
                  className="carousel-img"
                />
                <h2>Etapa 1</h2>
                <h5>Primavera</h5>
                <h6>Cita asesoría</h6>
              </>
            }
            backContent={
              <>
                <img
                  src={Carousel_Img_1}
                  alt="Etapa 1"
                  className="carousel-img"
                />
                <h2>Etapa 1</h2>
                <h5>Primavera</h5>
                <h6>Cita asesoría</h6>
                <p>
                  A través de WhatsApp obtienes una cita para explicarte tu plan
                  de trabajo
                </p>
              </>
            }
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <FlippableCard
            frontContent={
              <>
                <img
                  src={Carousel_Img_2}
                  alt="Etapa 2"
                  className="carousel-img"
                />
                <h2>Etapa 2</h2>
                <h5>Siembra</h5>
                <h6>Meditación</h6>
              </>
            }
            backContent={
              <>
                <img
                  src={Carousel_Img_2}
                  alt="Etapa 2"
                  className="carousel-img"
                />
                <h2>Etapa 2</h2>
                <h5>Siembra</h5>
                <h6>Meditación</h6>
                <p>
                  Enviaremos un material virtual a tu whatsapp donde
                  detallaremos el plan de trabajo, tendrás un par de días para
                  pensarlo
                </p>
              </>
            }
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <FlippableCard
            frontContent={
              <>
                <img
                  src={Carousel_Img_3}
                  alt="Etapa 3"
                  className="carousel-img"
                />
                <h2>Etapa 3</h2>
                <h5>Solsticio</h5>
                <h6>Capacitación y perfilamiento</h6>
              </>
            }
            backContent={
              <>
                <img
                  src={Carousel_Img_1}
                  alt="Etapa 1"
                  className="carousel-img"
                />
                <h2>Etapa 3</h2>
                <h5>Solsticio</h5>
                <h6>Capacitación y perfilamiento</h6>
                <ol>
                  <li>Test de Personalidad</li>
                  <li>Creación Tip Menú</li>
                  <li>Perfilamiento Inicial</li>
                  <li>Plan Fotográfico Inicial</li>
                  <li>Capacitación Performance</li>
                  <li>Entrenamiento Pagina Inicial</li>
                </ol>                
              </>
            }
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <FlippableCard
            frontContent={
              <>
                <img
                  src={Carousel_Img_4}
                  alt="Etapa 4"
                  className="carousel-img"
                />
                <h2>Etapa 4</h2>
                <h5>Equinoccio</h5>
                <h6>Inicio de Proyecto</h6>
              </>
            }
            backContent={
              <>
                <img
                  src={Carousel_Img_4}
                  alt="Etapa 4"
                  className="carousel-img"
                />
                <h2>Etapa 4</h2>
                <h5>Equinoccio</h5>
                <h6>Inicio de Proyecto</h6>
                <p>Prueba de transmisión guiada por equipo de trabajo</p>
              </>
            }
          />
        </Carousel.Item>
      </Carousel>
      <img src={patron} className="separador" alt="Separador" />
    </div>
  );
});

export default JourneySection;
