import React from "react";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link to="/">Navbar Menu Dropdown</Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Cadastros</Link>
              <ul>
                <li>
                  <Link to="/cadastros/paises">Países</Link>
                </li>
                <li>
                  <Link to="/cadastros/estados">Estados</Link>
                </li>
                <li>
                  <Link to="/cadastros/cidades">Cidades</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Operações</Link>
              <ul>
                <li>
                  <Link to="/operacoes/entrada-nota">Entrada Nota</Link>
                </li>
                <li>
                  <Link to="/operacoes/entrada-nota-xml">
                    Entrada Nota (XML)
                  </Link>
                </li>
                <li>
                  <Link to="/operacoes/estorno-entrada">Estorno Entrada</Link>
                </li>
                <li>
                  <Link to="/operacoes/venda">Venda</Link>
                </li>
                <li>
                  <Link to="/operacoes/estorno-venda">Estorno Venda</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Relatórios</Link>
            </li>
            <li>
              <Link>Gráficos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
