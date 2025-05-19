import { useState } from "react";
import "./Ritual_Section.css";
import icon1 from '../../assets/icon_1.png';
import icon2 from '../../assets/icon_2.png';
import icon3 from '../../assets/icon_3.png';
import icon4 from '../../assets/icon_4.png';
import icon5 from '../../assets/icon_5.png';
import icon6 from '../../assets/icon_6.png';
import icon7 from '../../assets/icon_7.png';
import icon8 from '../../assets/icon_8.png';
import icon9 from '../../assets/icon_9.png';
import icon10 from '../../assets/icon_10.png';
import icon11 from '../../assets/icon_11.png';
import icon12 from '../../assets/icon_12.png';


const icons = [
  {
    id: 1,
    label: "Entrenamiento Quincenal",
    content: "Las chicas de la tribu tienen una capacitación sobre procesos de la industria cada quince días. Ángulos, persuasión de usuarios, cierres comerciales, shows, promociones. Sumado a un conversatorio con administración sobre ideas del entrenamiento. Se informa a través de los grupos de turno.",
    image: icon1,
  },  
  {
    id: 2,
    label: "Retroalimentaciones Quincenales",
    content: "Mediante un análisis dofa, administración y monitoreo te entrega un reporte de tus Fortalezas, oportunidades y debilidades. Para mantener o trabajar en ellas la siguiente quincena. Sumado con planeación de shows.",
    image: icon2,
  },
  {
    id: 3,
    label: "Manager",
    content: "Contaras con la ayuda y seguimiento de un equipo capacitado en monitoreo, fotografía, perfilamiento, asesoría, mentoría, capacitaciones, etc.",
    image: icon3,
  },
  {
    id: 4,
    label: "No Multas",
    content: "No nos gustan las multas, creemos mas bien en acciones de mejora. Quitarte el dinero no es una opción; al contrario de ello, tenemos mecanismos de balotas y penitencias para mejorar tus faltas conjuntamente.",
    image: icon4,
  },
  {
    id: 5,
    label: "Descuento en Juguetería",
    content: "Obtendrás un amplio catálogo con tres beneficios. 1. Plan de trabajo escalonado con juguetería después de tus primeros 15 días; 2. Beneficio de pago por cuotas; 3. Precio de importación al 50% de cualquier establecimiento.",
    image: icon5,
  },
  {
    id: 6,
    label: "Premios Grupales",
    content: "Por un % organizado previamente con monitoreo y administración, quincenalmente podrás acceder a premios grupales tales como: Salidas, Cine, Spa, Restaurantes, viajes etc.",
    image: icon6,
  },
  {
    id: 7,
    label: "Plan Fotográfico",
    content: "Tendrás un plan organizado de fotografía. Inicial, diario, mensual y además shows en fechas especiales.",
    image: icon7,
  },
  {
    id: 8,
    label: "Alojamiento Gratuito",
    content: "Si vives en otra ciudad o lejos del estudio te podrías acoplar a la opción Roomate, donde tendrás alojamiento gratuito en el studio con zona de descanso, servicios incluidos, y bono de alimentación en algunos casos. (Pregunta por él).",
    image: icon8,
  },
  {
    id: 9,
    label: "Adelantos Monetarios",
    content: "En cualquier urgencia que se te presente obtendrás un adelanto de tu quincena para solucionar esos impases diarios.",
    image: icon9,
  },
  {
    id: 10,
    label: "Organización",
    content: "Todos y cada uno de los planes de trabajo son diferentes para cada modelo. Dependiendo de perfilamiento, asesoría, aptitudes, inseguridades y cualidades. Una organización completa en tu plan de trabajo.",
    image: icon10,
  },
  {
    id: 11,
    label: "Acompañamiento",
    content: "Además de los planes negocio, financiero y de trabajo. Tendrás varios reportes de ayuda como: reporte para modelos con experiencia, Tablero de shows y asistencia, grupos por turno, mensajes de resúmenes a capacitaciones, caps proceso personal, podscast semanales, etc.",
    image: icon11,
  },
  {
    id: 12,
    label: "Implementos de aseo",
    content: "El estudio te ofrece los implementos de ases para que pueda entregar tu espacio de trabajo aseado: Escoba, recogedor, trapero, limpia pisos, jabones, alcohol, limpia vidrio y paño microfibra. (Por espacio de trabajo).",
    image: icon12,
  }
];



export default function IconSlider() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Carrusel scroll horizontal */}
      <div id="overflow-box" className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        {icons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => setSelectedIcon(icon)}
            className={`inline-block align-top mx-2 rounded-xl border p-2 transition duration-200 ${
              selectedIcon?.id === icon.id ? "border-blue-500 bg-blue-100" : "border-gray-200"
            }`}
            class="button-icon"
          >
            <img
              src={icon.image}
              alt={icon.label}
              class="icons"
              className="icons"
            />
          </button>
        ))}
      </div>

      {/* Contenido seleccionado */}
      {selectedIcon && (
        <div className="rounded-2xl border shadow mt-4 p-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">{selectedIcon.label}</h2>
          <p>{selectedIcon.content}</p>
        </div>
      )}
    </div>
  );
}
