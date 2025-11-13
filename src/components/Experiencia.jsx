import React from "react";

function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End Jr.",
      empresa: "TechSoft Solutions",
      año: "2024",
      descripcion:
        "Diseño e implementación de componentes en React y manejo de estados con Hooks.",
    },
    {
      cargo: "Asistente de soporte técnico",
      empresa: "CompuRed S.A.S",
      año: "2023",
      descripcion:
        "Atención a usuarios, mantenimiento preventivo y configuración de software.",
    },
    {
      cargo: "Proyecto personal: Portafolio Web",
      empresa: "Freelance",
      año: "2023",
      descripcion:
        "Desarrollo de un portafolio web responsive utilizando React y CSS.",
    },
    {
      cargo: "Proyecto académico: App de Notas",
      empresa: "SENA",
      año: "2022",
      descripcion:
        "Aplicación CRUD sencilla con almacenamiento local y diseño amigable.",
    },
  ];

  return (
    <section className="seccion">
      <h2>Experiencia Laboral y Proyectos</h2>
      {experiencias.map((exp, index) => (
        <div key={index} className="item">
          <h3>{exp.cargo}</h3>
          <p>
            <strong>{exp.empresa}</strong> — {exp.año}
          </p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
