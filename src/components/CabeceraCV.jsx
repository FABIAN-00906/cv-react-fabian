import React from "react";
import fotoPerfil from "../assets/perfil.jpg"; // 👈 importa tu imagen

function CabeceraCV() {
  return (
    <header className="cabecera">
      <img src={fotoPerfil} alt="Foto de perfil" className="foto-perfil" />
      <h1 className="nombre">Fabián Marín</h1>
      <h2 className="titulo">Desarrollador Front-End Jr.</h2>
      <p className="contacto">
        📞 +57 300 123 4567 | 📧 fabianmarin@email.com | 📍 Medellín, Colombia
      </p>
    </header>
  );
}

export default CabeceraCV;
