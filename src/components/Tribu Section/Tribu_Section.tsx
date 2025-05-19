import React, { useState, forwardRef } from "react";
import "./Tribu_Section.css";
import patron from "../../assets/patron_1.png";

const ResponsiveTabbedList = forwardRef((props, ref) => {
  const dataList = [
    {
      id: 1,
      title: "Shaman 1",
      subtitle: "Norman",
      description_1: "Descripción Norman",
      description_2: "Descripción Norman",
      description_3: "Descripción Norman",
      img: "/src/assets/norman_avatar.png",
    },
  ];

  // Estado para manejar el volteo de cada tarjeta individualmente
  const [flippedCards, setFlippedCards] = useState({});

  // Función para alternar el estado de una tarjeta específica
  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Alternar el estado de la tarjeta específica
    }));
  };

  return (
    <div ref={ref} className="my-5 mx-3">
      <h1>Esta es nuestra Tribu</h1>
      <h2>Patriarca</h2>
      <h4>El patriarca es administrador, figura de ayuda y liderazgo que te ayudará en todo tu proceso de capacitación, asesoría financiera, apoyo psicológico y retroalimentación.</h4>

      {dataList.map((item) => (
        <div key={item.id}>          
          <div className="card" onClick={() => handleFlip(item.id)}>
            <div className={`card-inner ${flippedCards[item.id] ? "flipped" : ""}`}>
              <div className="card-front">
                <img className="card-img" src={item.img} alt={item.subtitle} />
              </div>
              <div className="card-back">
                <h2>{item.subtitle}</h2>
                <p>{item.description_1}</p>
                <p>{item.description_2}</p>
                <p>{item.description_3}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <h2>Guerrero</h2>
      <h2>Shamanes</h2>
      <h2>Curanderos</h2>

      <img src={patron} className="separador" alt="Separador" />
    </div>
  );
});

export default ResponsiveTabbedList;
