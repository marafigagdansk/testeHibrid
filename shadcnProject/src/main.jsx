import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaPrincipal from './TelaPrincipal';
import CadastroPaciente from './CadastroPaciente';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/tela-principal" element={<TelaPrincipal />} />
        <Route path="/cadastrar-paciente" element={<CadastroPaciente />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
