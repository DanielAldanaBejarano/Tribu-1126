import React, { useState, useEffect } from "react";

const ResponsiveTabbedList = () => {
  // Lista de objetos para mostrar
  const dataList = [
    {
      id: 1,
      title: "Ritual 1",
      subtitle: "Un nuevo comienzo",
      description_1: "Descripción del Ritual 1",
      description_2: "Descripción del Ritual 1",
      description_3: "Descripción del Ritual 1",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 2,
      title: "Ritual 2",
      subtitle: "Contemplación",
      description_1: "Descripción del Ritual 2",
      description_2: "Descripción del Ritual 2",
      description_3: "Descripción del Ritual 2",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 3,
      title: "Ritual 3",
      subtitle: "Prueba de fuego",
      description_1: "Descripción del Ritual 3",
      description_2: "Descripción del Ritual 3",
      description_3: "Descripción del Ritual 3",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 4,
      title: "Ritual 4",
      subtitle: "Bienvenida a la Tribu",
      description_1: "Descripción del Ritual 4",
      description_2: "Descripción del Ritual 4",
      description_3: "Descripción del Ritual 4",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 5,
      title: "Ritual 5",
      subtitle: "Siembra",
      description_1: "Descripción del Ritual 5",
      description_2: "Descripción del Ritual 5",
      description_3: "Descripción del Ritual 5",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 6,
      title: "Ritual 6",
      subtitle: "Cosecha",
      description_1: "Descripción del Ritual 6",
      description_2: "Descripción del Ritual 6",
      description_3: "Descripción del Ritual 6",
      img: "/src/assets/header_img.jpg",
    },
    {
      id: 7,
      title: "Ritual 7",
      subtitle: "Proyección",
      description_1: "Descripción del Ritual 7",
      description_2: "Descripción del Ritual 7",
      description_3: "Descripción del Ritual 7",
      img: "/src/assets/header_img.jpg",
    },
  ];

  // Estado para rastrear la pestaña activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Estado para rastrear si la vista es móvil o no
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Evento para actualizar `isMobile` cuando la ventana cambia de tamaño
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular las pestañas visibles dinámicamente (para móvil)
  const getVisibleTabs = () => {
    if (activeIndex === 0) return dataList.slice(0, 3); // Al principio
    if (activeIndex === dataList.length - 1) {
      return dataList.slice(dataList.length - 3); // Al final
    }
    return dataList.slice(activeIndex - 1, activeIndex + 2); // Anterior, actual, siguiente
  };

  // Determinar las pestañas visibles según si es móvil o no
  const visibleTabs = isMobile ? getVisibleTabs() : dataList;

  return (
    <div>
      <h1>Bienvenida a Ritual</h1>

      {/* Barra de pestañas */}
      <div style={{}}>
        {visibleTabs.map((item) => (
          <button
            key={item.id}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor:
                dataList[activeIndex].id === item.id ? "#007bff" : "#e0e0e0",
              color: dataList[activeIndex].id === item.id ? "#fff" : "#000",
              border: "1px solid #ccc",
              borderRadius: "5px",
              flexShrink: 0, // Evitar que las pestañas se reduzcan
            }}
            onClick={() => setActiveIndex(dataList.indexOf(item))} // Cambiar índice activo
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Mostrar contenido del objeto activo */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2>{dataList[activeIndex].subtitle}</h2>
        <p>{dataList[activeIndex].description_1}</p>
        <p>{dataList[activeIndex].description_2}</p>
        <p>{dataList[activeIndex].description_3}</p>
        <img style={{width: "100%", height: "100%"}} src={dataList[activeIndex].img}></img>
      </div>
    </div>
  );
};

export default ResponsiveTabbedList;
