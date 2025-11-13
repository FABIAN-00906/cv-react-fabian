import React from "react";

function Educacion() {
  const formaciones = [
    {
      institucion: "SENA",
      curso: "Técnico en Programación de Software",
      año: "2024",
    },
    { institucion: "Platzi", curso: "Curso de React Básico", año: "2024" },
    { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: "2023" },
    { institucion: "Udemy", curso: "JavaScript Moderno ES6+", año: "2022" },
  ];

  return (
    <section className="seccion">
      <h2>Formación Académica y Complementaria</h2>
      <ul>
        {formaciones.map((f, i) => (
          <li key={i}>
            <strong>{f.institucion}</strong> — {f.curso} ({f.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
