import React, { useRef } from 'react';
import styles from './Clientes.module.css';

const Clientes = () => {
  const carrosselRef = useRef(null);
  const videoCarrosselRef = useRef(null);

  // Funções para mover o carrossel de fotos
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

  // Funções para mover o carrossel de vídeos
  const moverVideoEsquerda = () => {
    if (videoCarrosselRef.current) {
      videoCarrosselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const moverVideoDireita = () => {
    if (videoCarrosselRef.current) {
      videoCarrosselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
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

        {/* --- CARROSSEL DE VÍDEOS --- */}
        <div className={styles.carrosselContainer}>
          <button className={`${styles.setaBtn} ${styles.setaEsquerda}`} onClick={moverVideoEsquerda}>
            &#10094;
          </button>

          {/* Container do carrossel controlado de forma limpa e com scroll horizontal invisível */}
          <div 
            ref={videoCarrosselRef} 
            className="flex gap-6 overflow-x-auto scroll-smooth w-full py-4 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* CARD 1 */}
            <div className={`${styles.videoCard} shrink-0 w-[320px] md:w-[350px] snap-start`}>
              <video controls preload="metadata" muted className="w-full h-[65vh] object-cover rounded-xl">
                <source src="/img/videos/client-1.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            {/* CARD 2 */}
            <div className={`${styles.videoCard} shrink-0 w-[320px] md:w-[350px] snap-start`}>
              <video controls preload="metadata" muted className="w-full h-[65vh] object-cover rounded-xl">
                <source src="/img/videos/client-3.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            {/* CARD 3 */}
            <div className={`${styles.videoCard} shrink-0 w-[320px] md:w-[350px] snap-start`}>
              <video controls preload="metadata" muted className="w-full h-[65vh] object-cover rounded-xl">
                <source src="/img/videos/client-4.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          <button className={`${styles.setaBtn} ${styles.setaDireita}`} onClick={moverVideoDireita}>
            &#10095;
          </button>
        </div>

        {/* Linha Divisória sutil */}
        <hr className={styles.sectionDivider} />

        {/* --- ESTRUTURA DO CARROSSEL DE FOTOS --- */}
        <div className={styles.carrosselContainer}>
          <button className={`${styles.setaBtn} ${styles.setaEsquerda}`} onClick={moverEsquerda}>
            &#10094;
          </button>

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
              <img src="/img/galeria/cliente-4.png" alt="Trabalho VR 4" />
            </div>
          </div>

          <button className={`${styles.setaBtn} ${styles.setaDireita}`} onClick={moverDireita}>
            &#10095;
          </button>
        </div>
      
      </div>
    </section>
  );
};

export default Clientes;