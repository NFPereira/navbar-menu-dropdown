import React from "react";

//import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Paises from "./pages/Cadastros/Paises";
import Estados from "./pages/Cadastros/Estados";
import Cidades from "./pages/Cadastros/Cidades";
import Navbar from "./components/Navbar";
import EntradaNota from "./pages/Operacoes/EntradaNota";
import EntradaNotaXml from "./pages/Operacoes/EntradaNotaXml";
import EstornoNota from "./pages/Operacoes/EstornoEntrada";
import Venda from "./pages/Operacoes/Venda";
import EstornoVenda from "./pages/Operacoes/EstornoVenda";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rotas Cadastros */}
        <Route path="/cadastros/paises" element={<Paises />} />
        <Route path="/cadastros/estados" element={<Estados />} />
        <Route path="/cadastros/cidades" element={<Cidades />} />
        {/* Rotas Operações */}
        <Route path="/operacoes/entrada-nota" element={<EntradaNota />} />
        <Route
          path="/operacoes/entrada-nota-xml"
          element={<EntradaNotaXml />}
        />
        <Route path="/operacoes/estorno-entrada" element={<EstornoNota />} />
        <Route path="/operacoes/venda" element={<Venda />} />
        <Route path="/operacoes/estorno-venda" element={<EstornoVenda />} />
      </Routes>
    </Router>
  );
};

export default App;
