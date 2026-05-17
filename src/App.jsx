import React, { useState } from 'react' // Importamos o useState para controlar a página atual
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Contact from './components/Contato/Contact'
import Clientes from './components/Clientes/Clientes' // Importação do teu novo componente
import Detalhamento from './components/Servicos/detalhamento';
import Polimento from './components/Servicos/polimento';
import Vitrificacao from './components/Servicos/vitrificacao';
import Higienizacao from './components/Servicos/higienizacao';

import './App.css'

function App() {
  // Estado para controlar qual página exibir: 'home', 'clientes' ou 'contato'
  const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <div className="mainContainer">
      {/* Passamos o estado e a função para o Header controlar a navegação */}
      <Header setPaginaAtual={setPaginaAtual} paginaAtual={paginaAtual} />

      <main>
        {/* PÁGINA 1: HOME (INÍCIO) */}
        {paginaAtual === 'home' && (
          <>
            <Hero />
            
            <section id="servicos" className="servicesSection">
              <div className="servicesContainer">
                <div className="servicesHeader">
                  <span className="servicesSubtitle">Nossos Serviços</span>
                  <h2 className="servicesMainTitle">O que fazemos de melhor</h2>
                  <div className="titleLine"></div>
                </div>

                <div className="servicesGrid">
                  <Detalhamento />
                  <Polimento />
                  <Vitrificacao />
                  <Higienizacao />
                </div>
              </div>
            </section>

            <section className="paymentStripSection">
              <div className="paymentStripContainer">
                <span className="paymentStripTitle">Formas de Pagamento:</span>
                <div className="paymentStripBadges">
                  <div className="paymentStripBadge">Pix</div>
                  <div className="paymentStripBadge">Cartão de Crédito</div>
                  <div className="paymentStripBadge">Cartão de Débito</div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* PÁGINA 2: CLIENTES (Chama o componente Clientes.jsx) */}
        {paginaAtual === 'clientes' && (
          <Clientes />
        )}

        {/* PÁGINA 3: CONTATO */}
        {paginaAtual === 'contato' && (
          <Contact />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App;