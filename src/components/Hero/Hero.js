import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';
import bg from '../../assets/images/gradient-bg.png';
import Partners from '../Partners/Partners';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background gradiente */}
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Container principal */}
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
            href="https://wa.me/5511976837536?text=Olá!%20Gostaria%20de%20fazer%20uma%20cotação%20de%20seguro%20ou%20obter%20mais%20informações.%20Pode%20me%20ajudar?"
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

      {/* Seção de parceiros */}
      <div className={styles.partnersWrapper}>
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
