import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import UserList from "./pages/UserList";
import DoctorList from "./pages/DoctorList";
import PacientesList from "./pages/PacientesList";
import Citas from "./pages/Citas";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Bienvenido a ClínicaApp</h1>} />
            <Route path="/usuarios" element={<UserList />} />
            <Route path="/pacientes" element={<PacientesList/>} />
            <Route path="/doctores" element={<DoctorList/>} />
            <Route path="/citas" element={<Citas/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
