import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';

import FuncionarioHome from './pages/Funcionario/FuncionarioHome';
import ListarRoupa from './pages/Funcionario/ListarRoupa';
import ListarFuncionario from './pages/Funcionario/ListaFuncionario';
import GerarRelatorio from './pages/Funcionario/GerarRelatorio';
import ModRoupa from './pages/Funcionario/ModRoupa';
import ModFuncionario from './pages/Funcionario/ModFuncionario';

import ClienteHome from './pages/Cliente/ClienteHome';
import FazerPedido from './pages/Cliente/FazerPedido';

import ConsultaPedido from './pages/ConsultaPedido';
import Cadastrar from './pages/Cliente/Cadastrar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FuncionarioHome" element={<FuncionarioHome/>} />
        <Route path="/ListarRoupa" element={<ListarRoupa />} />
        <Route path="/ListarFuncionario" element={<ListarFuncionario />} />
        <Route path="/Relatorio" element={<GerarRelatorio />} />
        <Route path="/ClienteHome" element={<ClienteHome />} />
        <Route path="/FazerPedido" element={<FazerPedido />} />
        <Route path="/Roupa" element={<ModRoupa />} />
        <Route path="/Funcionario" element={<ModFuncionario />} />
        <Route path="/ConsultaPedido" element={<ConsultaPedido />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
