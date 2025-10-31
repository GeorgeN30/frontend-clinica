import React from "react";
import "../styles/UserList.css";

const UserList = () => {
  return (
    <div className="userlist-container">
      <div className="userlist-content">
        <div className="userlist-header">
          <h1>Gestión de Citas</h1>
          <div className="actions">
            <form className="search-form">
              <input type="text" placeholder="Buscar por ID" />
              <button type="button" className="search-btn">
                Buscar
              </button>
            </form>
            <button className="add-btn">+ Agregar Cita</button>
          </div>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>fecha</th>
              <th>hora</th>
              <th>estado</th>
              <th>id doctor</th>
              <th>id paciente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>31/10/25</td>
              <td>13:00</td>
              <td>RESERVADO</td>
              <td>1</td>
              <td>1</td>
              <td>
                <button className="edit-btn">Editar</button>
                <button className="delete-btn">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
