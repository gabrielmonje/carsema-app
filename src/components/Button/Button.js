import React from 'react';
import styles from './Button.module.css';
import whatsIcon from '../../assets/icons/whatsIcon.svg';

const Button = ({ children, href = "#", variant = 'primary', hasIcon = false, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {hasIcon && (
        <img
          src={whatsIcon}
          alt="Ícone WhatsApp"
          style={{ marginRight: '8px', height: '20px', verticalAlign: 'middle' }}
        />
      )}
      {children}
    </a>
  );
};

export default Button;
