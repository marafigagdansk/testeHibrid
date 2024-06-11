import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaPrincipal from './TelaPrincipal';
import CadastroPaciente from './CadastroPaciente';
import Pag2 from './CadastroPacientePages/Pag2';
import Pag3 from './CadastroPacientePages/Pag3';
import Pag4 from './CadastroPacientePages/Pag4'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/cadastrar-paciente" element={<CadastroPaciente />} />
        <Route path='/pag2' element={<Pag2 />} />
        <Route path='/pag3' element={<Pag3 />} />
        <Route path='/pag4' element={<Pag4 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
