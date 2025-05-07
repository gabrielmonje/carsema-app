import React from 'react';
import styles from './Partners.module.css';

// Placeholder para logos. Você substituirá por <img> ou <svg>
const LogoPlaceholder = ({ name }) => (
  <div className={styles.logoItem}>
    <span>{name}</span>
  </div>
);


const Partners = () => {
  const partners = [
    "Liberty Seguros",
    "Porto Seguro",
    "PREVENTY SENIOR",
    "SUHAI SEGURADORA",
    "SulAmérica",
    "TOKIO MARINE SEGURADORA",
    "amil"
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h3 className={styles.title}>Parceiros que você confia:</h3>
        <div className={styles.logosContainer}>
          {partners.map(partnerName => (
            // Idealmente, cada parceiro seria um objeto com { name, logoUrl, altText }
            <LogoPlaceholder key={partnerName} name={partnerName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;