import React, { useRef } from 'react';
import styles from './Clientes.module.css';

const Clientes = () => {
  const carrosselRef = useRef(null);

  // Funções para mover o carrossel nas setas
  const moverEsquerda = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const moverDireita = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        
        {/* Título Único da Página */}
        <div className={styles.portfolioHeader}>
          <h2 className={styles.portfolioMainTitle}>Nossos Clientes</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Grid de Vídeos */}
        <div className={styles.videosGrid}>
          <div className={styles.videoCard}>
            <video controls preload="metadata" muted>
              <source src="/img/videos/client-1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className={styles.videoCard}>
            <video controls preload="metadata" muted>
              <source src="/img/videos/client-3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.videoCard}>
            <video controls preload="metadata" muted>
              <source src="/img/videos/client-4.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.videoCard}>
            <video controls preload="metadata" muted>
              <source src="/img/videos/clinete-5.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.videoCard}>
            <video controls preload="metadata" muted>
              <source src="/img/videos/clinete-6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Linha Divisória sutil */}
        <hr className={styles.sectionDivider} />

        {/* --- ESTRUTURA DO CARROSSEL DE FOTOS --- */}
        <div className={styles.carrosselContainer}>
          {/* Botão Esquerda */}
          <button className={`${styles.setaBtn} ${styles.setaEsquerda}`} onClick={moverEsquerda}>
            &#10094;
          </button>

          {/* Área das Fotos */}
          <div className={styles.photosCarrossel} ref={carrosselRef}>
            <div className={styles.photoCard}>
              <img src="/img/galeria/cliente-1.png" alt="Trabalho VR 1" />
            </div>
            <div className={styles.photoCard}>
              <img src="/img/galeria/cliente-2.png" alt="Trabalho VR 2" />
            </div>
            <div className={styles.photoCard}>
              <img src="/img/galeria/cliente-3.png" alt="Trabalho VR 3" />
            </div>
            <div className={styles.photoCard}>
              <img src="/img/galeria/cliente4.png" alt="Trabalho VR 4" />
            </div>
          </div>

          {/* Botão Direita */}
          <button className={`${styles.setaBtn} ${styles.setaDireita}`} onClick={moverDireita}>
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
};

export default Clientes;