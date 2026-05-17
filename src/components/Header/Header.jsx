import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de ter instalado o react-icons
import styles from './Header.module.css';

// Recebemos o setPaginaAtual e a paginaAtual como propriedades vindas do App.js
const Header = ({ setPaginaAtual, paginaAtual }) => {
  // Estado para abrir e fechar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className={styles.headerMain}>
      <div className={styles.headerContainer}>

        {/* Lado Esquerdo: Logo + Texto Estilizado */}
        <div
          className={styles.logoWrapper}
          onClick={() => { setPaginaAtual('home'); fecharMenu(); }}
          style={{ cursor: 'pointer' }} // Torna o logo clicável para voltar para a home
        >
          <img src="/img/vr-logo.png" alt="VR Automotive" className={styles.logoImage} />

          <div className={styles.logoTextContent}>
            <h1 className={styles.brandName}>
              VR <span className={styles.whiteText}>AUTOMOTIVE</span>
            </h1>
          </div>
        </div>

        {/* Centro: Menu de Navegação - Concatenando com a sua classe .navMenuAberto quando true */}
        <nav className={`${styles.navMenu} ${menuAberto ? styles.navMenuAberto : ''}`}>
          <ul className={styles.navList}>
            <li>
              <button
                onClick={() => { setPaginaAtual('home'); fecharMenu(); }}
                className={`${styles.navLink} ${paginaAtual === 'home' ? styles.activeLink : ''}`}
              >
                Início
              </button>
            </li>

            <li>
              {/* Se o usuário estiver em 'contato', podemos fazê-lo voltar para a home e rolar até os serviços */}
              <button
                onClick={() => {
                  setPaginaAtual('home');
                  fecharMenu();
                  setTimeout(() => {
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={styles.navLink}
              >
                Serviços
              </button>
            </li>

            {/* INTEGRADO: Botão Clientes adicionado perfeitamente no menu */}
            <li>
              <button
                onClick={() => { setPaginaAtual('clientes'); fecharMenu(); }}
                className={`${styles.navLink} ${paginaAtual === 'clientes' ? styles.activeLink : ''}`}
              >
                Clientes
              </button>
            </li>

            <li>
              <button
                onClick={() => { setPaginaAtual('contato'); fecharMenu(); }}
                className={`${styles.navLink} ${paginaAtual === 'contato' ? styles.activeLink : ''}`}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {/* Lado Direito: Botão de Ação (Desktop) + Hambúrguer (Mobile) */}
        <div className={styles.actionArea}>
          <button
            className={styles.btnReservation}
            onClick={() => setPaginaAtual('contato')} // Abre o formulário de contato/agendamento
          >
            Agendar Horário
          </button>

          {/* Botão Hambúrguer que aciona o menu */}
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            {menuAberto ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;