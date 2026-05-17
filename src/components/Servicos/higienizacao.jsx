import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './higienizacao.module.css';

const Higienizacao = () => {
  return (
    <div className={styles.card}>
      {/* Container da Imagem */}
      <div className={styles.imageWrapper}>
        <img
          src="/img/servicos/higienizacao.png"
          alt="Higienização Automotiva"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Conteúdo do Card */}
      <div className={styles.content}>
        <h3 className={styles.title}>Higienização</h3>
        <p className={styles.description}>
          Remoção de ácaros e bactérias do interior. Limpeza profunda de bancos, carpetes e teto para a saúde da sua família.
        </p>
        <div className={styles.redLine}></div>


        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>A partir de</span>
          <span className={styles.priceValue}> R$ 249,90</span>
        </div>



        {/* Botão do WhatsApp Original */}
        <a
          href="https://api.whatsapp.com/send?phone=5543984999107&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Higienização"
          target="_blank"
          rel="noreferrer"
          className={styles.actionBtn}
        >
          <FaWhatsapp /> Agendar Agora
        </a>
      </div>
    </div>
  );
};

export default Higienizacao;