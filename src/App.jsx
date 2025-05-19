import React, { useState, useRef } from "react";
import logo from "./assets/logo.png";
import icon from "./assets/icon.png";

import './App.css'

import Header_Section from './components/Header Section/Header_Section'
import Journey_Section from './components/Journey Section/Journey_Section'
import Thinking_Section from "./components/Thinking Section/Thinking_Section";
import Ritual_Section from "./components/Ritual Section/Ritual_Section";
import Plan_Section from "./components/Plan Section/Plan_Section";
import Tribu_Section from "./components/Tribu Section/Tribu_Section";
import Objective_Section from "./components/Objective Section/Objective_Section";
import Map_Section from "./components/Map Section/Map_Section";
import Footer_Section from "./components/Footer Section/Footer_Section";

function App() {  
  
  const refHearder = useRef(null);
  const refJourney = useRef(null);
  const refThinkin = useRef(null);
  const refRitual = useRef(null);
  const refPlan = useRef(null);
  const refTribu = useRef(null);
  const refObjective = useRef(null);
  const refMap = useRef(null);
  
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
      <a href="/">
        <img className="logo" src={logo}></img>
      </a>
      <a id="navbar-btn" onClick={() => setIsOpen(!isOpen)}>
        <img className="icon" src={icon}></img>
      </a>
      {isOpen && (
        <div className="navbar-links-div">
          <button className="navbar-link" onClick={() => handleScroll(refHearder)}>
            Inicio
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refRitual)}>
            Nuestro Ritual
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refJourney)}>
            Nuestro Viaje Juntos
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refThinkin)}>
            Piénsalo
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refPlan)}>
            El Plan
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refTribu)}>
            Nuestra Tribu
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refObjective)}>
            Objetivos
          </button>
          <button className="navbar-link" onClick={() => handleScroll(refMap)}>
            Nuestras ubicaciones
          </button>
        </div>
      )}
    </nav>   
    <Header_Section ref={refHearder}/>    
    <Journey_Section ref={refJourney}/>
    <Thinking_Section ref={refThinkin}/>
    <Ritual_Section ref={refRitual}/>
    <Plan_Section ref={refPlan}/>
    <Tribu_Section ref={refTribu}/>
    <Objective_Section ref={refObjective}/>
    <Map_Section ref={refMap}/>
    <Footer_Section/>  
    </div>
  )
}

export default App
