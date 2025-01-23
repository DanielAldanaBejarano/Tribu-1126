import React, { useState, useEffect } from 'react';

const ResponsiveTabbedList = () => {
  // Lista de objetos para mostrar
  const dataList = [
    { id: 1, title: 'Elemento 1', description: 'Descripción del elemento 1' },
    { id: 2, title: 'Elemento 2', description: 'Descripción del elemento 2' },
    { id: 3, title: 'Elemento 3', description: 'Descripción del elemento 3' },
    { id: 4, title: 'Elemento 4', description: 'Descripción del elemento 4' },
    { id: 5, title: 'Elemento 5', description: 'Descripción del elemento 5' },
    { id: 6, title: 'Elemento 6', description: 'Descripción del elemento 6' },
    { id: 7, title: 'Elemento 7', description: 'Descripción del elemento 7' },
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <h1>Lista con Pestañas Responsivas</h1>

      {/* Barra de pestañas */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          overflowX: isMobile ? 'auto' : 'visible', // Habilitar scroll solo en móvil
        }}
      >
        {visibleTabs.map((item) => (
          <button
            key={item.id}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: dataList[activeIndex].id === item.id ? '#007bff' : '#e0e0e0',
              color: dataList[activeIndex].id === item.id ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              flexShrink: 0, // Evitar que las pestañas se reduzcan
            }}
            onClick={() => setActiveIndex(dataList.indexOf(item))} // Cambiar índice activo
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Mostrar contenido del objeto activo */}
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>{dataList[activeIndex].title}</h2>
        <p>{dataList[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default ResponsiveTabbedList;
