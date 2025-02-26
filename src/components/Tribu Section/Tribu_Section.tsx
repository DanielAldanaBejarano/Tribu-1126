import React, { useState } from "react";
import "./Tribu_Section.css";
import patron from "../../assets/patron_1.png";

const ResponsiveTabbedList = () => {
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
    {
      id: 2,
      title: "Shaan 2",
      subtitle: "Nicolás",
      description_1: "Descripción del Nicolás",
      description_2: "Descripción del Nicolás",
      description_3: "Descripción del Nicolás",
      img: "/src/assets/nicolas_avatar.png",
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
    <div>
      <h1>Esta es nuestra Tribu</h1>
      <h2>Shamanes</h2>

      {dataList.map((item) => (
        <div key={item.id}>
          <h3>{item.subtitle}</h3>
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

      <img src={patron} className="separador" alt="Separador" />
    </div>
  );
};

export default ResponsiveTabbedList;
