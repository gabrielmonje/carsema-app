import React from 'react';
import styles from './Partners.module.css';

// Importe os logos
import porto from '../../assets/images/logo-porto.png';
import suhai from '../../assets/images/logo-suhai.png';
import prevent from '../../assets/images/logo-prevent.png';
import liberty from '../../assets/images/logo-liberty.png';
import bradesco from '../../assets/images/logo-bradesco.png';
import sulamerica from '../../assets/images/logo-sulamerica.png';
import tokio from '../../assets/images/logo-tokio.png';
import amil from '../../assets/images/logo-amil.png';

// Lista de logos
const logos = [liberty, porto, suhai, prevent, bradesco, sulamerica, tokio, amil];

const Partners = () => {
  // Duplica os logos para efeito de loop contínuo
  const loopedLogos = [...logos, ...logos];

  return (
    <div className={styles.partnersWrapper}>
      {/* Título centralizado com fundo sutil */}
      <div className={styles.titleBox}>
        <h3 className={styles.partnersTitle}>Parceiros que você confia:</h3>
      </div>

      {/* Área da faixa com animação contínua */}
      <div className={styles.marquee}>
        <div className={styles.track}>
          {loopedLogos.map((logo, idx) => (
            <div className={styles.logoItem} key={idx}>
              <img src={logo} alt={`Logo parceiro ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
