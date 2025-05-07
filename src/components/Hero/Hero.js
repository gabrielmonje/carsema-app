import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';
import bg from '../../assets/images/gradient-bg.png'

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background gradiente ou imagem */}
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className={styles.container}>
        {/* Coluna da esquerda */}
        <div className={styles.leftColumn}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>Carsema</h1>
            <h2 className={styles.subtitle}>seguros</h2>
          </div>
          <p className={styles.description}>
            Seguro sob medida para você, de forma rápida e sem complicação.
          </p>
          <Button
            href="https://wa.me/SEUNUMEROAQUI"
            variant="whatsapp"
            hasIcon
            className={styles.heroButton}
          >
            Fale com um Corretor
          </Button>
        </div>

        {/* Coluna da direita */}
        <div className={styles.rightColumn}>
          <p className={styles.taglineMain}>Você Seguro.</p>
          <p className={styles.taglineSecondary}>Sempre.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
