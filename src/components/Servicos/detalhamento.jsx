import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './detalhamento.module.css';

const Detalhamento = () => {
  return (
    <div className={styles.card}>
      {/* Container da Imagem */}
      <div className={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600"
          alt="Detalhamento Automotivo"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Conteúdo do Card */}
      <div className={styles.content}>
        <h3 className={styles.title}>Detalhamento</h3>
        <p className={styles.description}>
          Limpeza técnica minuciosa interna e externa. Foco nos mínimos detalhes que lavagens comuns não alcançam.
        </p>
        <div className={styles.redLine}></div>


        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>A partir de</span>
          <span className={styles.priceValue}> R$ 199,90</span>
        </div>


        {/* Botão de Ação Rápida */}
        <a
          href="https://api.whatsapp.com/send?phone=5543984999107&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Detalhamento"
          target="_blank"
          rel="noreferrer"
          className={styles.actionBtn}
        >
          <FaWhatsapp /> Agendar agora
        </a>
      </div>
    </div>
  );
};

export default Detalhamento;