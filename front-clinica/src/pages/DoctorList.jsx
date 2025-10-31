import React from "react";
import "../styles/UserList.css"; // asegúrate de que este archivo exista

const UserList = () => {
  return (
    <div className="userlist-container">
      <div className="userlist-content">
        <div className="userlist-header">
          <h1>Gestión de Doctores</h1>
          <div className="actions">
            <form className="search-form">
              <input type="text" placeholder="Buscar por DNI..." />
              <button type="button" className="search-btn">
                Buscar
              </button>
            </form>
            <button className="add-btn">+ Agregar Doctor</button>
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
              <td>Doctor </td>
              <td>vet</td>
              <td>doctor@derobots.com</td>
              <td>DOCTOR</td>
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
