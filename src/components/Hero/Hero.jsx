import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroWrapper} id="home">
      {/* Imagem nítida e sem overlay escuro */}
      <div className={styles.heroBg}></div>
      
      <div className={styles.heroContent}>
        <span className={styles.heroTagline}>
          Londrina • Estética Automotiva Premium
        </span>

        <h1 className={styles.heroTitle}>
          O CUIDADO QUE SEU <br />
          <span className={styles.heroHighlight}>VEÍCULO MERECE</span>
        </h1>

        <p className={styles.heroDescription}>
          Especialistas em detalhamento automotivo de alto padrão.
        </p>

        <div className={styles.heroActions}>
          <a href="https://wa.me/5543984999107" target="_blank" rel="noreferrer" className={styles.btnWhatsapp}>
            <FaWhatsapp size={22} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;