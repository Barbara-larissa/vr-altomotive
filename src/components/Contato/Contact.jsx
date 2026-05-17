import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Cabeçalho da Página */}
       

        <div className={styles.gridContainer}>
          
          {/* Coluna da Esquerda: Canais de Atendimento */}
          <div className={styles.infoColumn}>
            <h2>Canais de Atendimento</h2>
            
            <div className={styles.infoCards}>
              {/* Card de Endereço */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rua+Guilherme+Marconi,+54,+Londrina+-+PR,+86063-360"
                target="_blank"
                rel="noreferrer"
                className={`${styles.card} ${styles.linkCard}`}
              >
                <FaMapMarkerAlt size={24} className={styles.cardIcon} />
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Guilherme Marconi, 54</p>
                  <span className={styles.subText}>Londrina, PR - Centro</span>
                </div>
              </a>

              {/* Card de Telefone / WhatsApp */}
              <a 
                href="https://api.whatsapp.com/send?phone=5543984999107"
                target="_blank"
                rel="noreferrer"
                className={`${styles.card} ${styles.linkCard}`}
              >
                <FaPhoneAlt size={22} className={styles.cardIcon} />
                <div>
                  <h3>Telefone / WhatsApp</h3>
                  <p>(43) 98499-9107</p>
                </div>
              </a>
            </div>

            {/* Botão de Destaque para o WhatsApp */}
            <a 
              href="https://api.whatsapp.com/send?phone=5543984999107" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.whatsappBtn}
            >
              <FaWhatsapp size={22} /> Conversar no WhatsApp
            </a>
          </div>

          {/* Coluna da Direita: Formulário Sem E-mail */}
   
           <div className={styles.mapSection}>
          <h2>Nossa Localização</h2>
          <div className={styles.mapWrapper}>
            <iframe 
              title="Mapa VR Automotive"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.12053259881!2d-51.178873099999995!3d-23.3113941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5b47580387c7%3A0xe44397bdde94502f!2sR.%20Guilherme%20Marconi%2C%2054%20-%20Industrial%2C%20Londrina%20-%20PR%2C%2086063-360!5e0!3m2!1spt-BR!2sbr!4v1715893000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </div>

        {/* Seção Completa do Mapa abaixo das colunas */}
       

      </div>
    </section>
  );
};

export default Contact;