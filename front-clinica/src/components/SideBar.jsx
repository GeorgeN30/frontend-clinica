import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ClínicaApp</h2>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/usuarios">Usuarios</a></li>
        <li><a href="/pacientes">Pacientes</a></li>
        <li><a href="/doctores">Doctores</a></li>
        <li><a href="/citas">Citas</a></li>
      </ul>
      <div className="logout-section">
        <button className="logout-btn">Cerrar Sesión</button>
      </div>
    </div>
  );
}
