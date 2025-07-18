import React, { useState } from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Perguntas Frequentes', href: '#faq' },
    { name: 'Contatos', href: '#contatos' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.left}>
          <img src={logo} alt="Logo Carsema Seguros" className={styles.logo} />
        </div>

        {/* Botão Hamburguer / X */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Abrir menu">
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menu Desktop */}
        <div className={styles.center}>
          <nav className={styles.nav}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Botão WhatsApp */}
        <div className={styles.right}>
          <Button
            href="https://wa.me/5511976837536?text=Olá!%20Gostaria%20de%20fazer%20uma%20cotação%20de%20seguro%20ou%20obter%20mais%20informações.%20Pode%20me%20ajudar?"
            variant="whatsapp"
            hasIcon={true}
          >
            Cotar no WhatsApp
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
