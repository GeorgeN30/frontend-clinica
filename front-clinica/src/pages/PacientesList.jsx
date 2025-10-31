import React from "react";
import "../styles/UserList.css"; 

const UserList = () => {
  return (
    <div className="userlist-container">
      <div className="userlist-content">
        <div className="userlist-header">
          <h1>Gestión de Pacientes</h1>
          <div className="actions">
            <form className="search-form">
              <input type="text" placeholder="Buscar por DNI..." />
              <button type="button" className="search-btn">
                Buscar
              </button>
            </form>
            <button className="add-btn">+ Agregar Paciente</button>
          </div>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>72839451</td>
              <td>yadira</td>
              <td>Lopez Villanueva</td>
              <td>casada@gmail.com</td>
              <td>PACIENTE</td>
              <td>Activo</td>
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
