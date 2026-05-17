import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './polimento.module.css';

const Polimento = () => {
  return (
    <div className={styles.card}>
      {/* Container da Imagem */}
      <div className={styles.imageWrapper}>
        <img
          src="/img/servicos/polimento.png"
          alt="Polimento Automotivo"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Conteúdo do Card */}
      <div className={styles.content}>
        <h3 className={styles.title}>Polimento</h3>
        
        {/* Movido para cá: Igualzinho aos outros cards */}
        <div className={styles.redLine}></div>

        <p className={styles.description}>
          Correção de pintura e brilho espelhado. Remoção de riscos superficiais e oxidação da lataria.
        </p>

        {/* Bloco de Preço com o espaço corrigido antes do R$ */}
        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>A partir de</span>
          <span className={styles.priceValue}> R$ 349,90</span>
        </div>

        {/* Botão de WhatsApp Original */}
        <a
          href="https://api.whatsapp.com/send?phone=5543984999107&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Polimento"
          target="_blank"
          choose="noreferrer"
          className={styles.actionBtn}
        >
          <FaWhatsapp /> Agendar Agora
        </a>
      </div>
    </div>
  );
};

export default Polimento;