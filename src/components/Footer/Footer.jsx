import React from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          
          {/* Seção 1: Localização com Endereço Completo */}
          <div className={styles.footerSection}>
            <div className={styles.iconTitle}>
              <FaMapMarkerAlt size={20} color="#ef4444" />
              <h4>Localização</h4>
            </div>
            <p>Rua Guilherme Marconi, 54</p>
            <p>Londrina, PR - Centro</p>
          </div>

          {/* Seção 2: Contato (WhatsApp Real) */}
          <div className={styles.footerSection}>
            <div className={styles.iconTitle}>
              <FaWhatsapp size={20} color="#ef4444" />
              <h4>Contato</h4>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5543984999107" target="_blank" rel="noreferrer" className={styles.contactLink}>
              (43) 98499-1107
            </a>
          </div>

          {/* Seção 3: Redes Sociais com Link Oficial */}
          <div className={styles.footerSection}>
            <div className={styles.iconTitle}>
              <FaInstagram size={20} color="#ef4444" />
              <h4>Siga-nos</h4>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/vrautomotiveestetica/" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
            
            </div>
          </div>

          {/* Seção 4: Horário de Funcionamento */}
          <div className={styles.footerSection}>
            <div className={styles.iconTitle}>
              <FaClock size={20} color="#ef4444" />
              <h4>Horário</h4>
            </div>
            <p>Seg a Sex: 08h - 18h</p>
          </div>

        </div>

        {/* Faixa Inferior Profissional com sua assinatura */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} VR Automotive • Criado & Desenvolvido por Barbara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;