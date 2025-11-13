import React from "react";
import "./App.css";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  return (
    <div className="contenedor">
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;
