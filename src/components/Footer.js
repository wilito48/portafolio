import React from 'react';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaFolder, 
  FaEnvelope, 
  FaGithub, 
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
  FaReact
} from 'react-icons/fa';
import './Footer.css';

// Importar iconos de contacto
import emailIcon from '../assets/images/email.png';
import githubIcon from '../assets/images/github.png';

// Componente para renderizar iconos de imagen
const ContactIcon = ({ src, alt, className = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`contact-icon-img ${className}`}
    style={{ width: '32px', height: '32px', objectFit: 'contain' }}
  />
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kervyn Willy Rojas Poma</h3>
            <p>Estudiante de Ingeniería de Sistemas Computacionales</p>
            <p>Especializado en desarrollo de software y ciberseguridad</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#home">
                  <FaHome className="footer-link-icon" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about">
                  <FaUser className="footer-link-icon" />
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#skills">
                  <FaCode className="footer-link-icon" />
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects">
                  <FaFolder className="footer-link-icon" />
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FaEnvelope className="footer-link-icon" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="footer-contact-icon" />
                Lima, Perú
              </li>
              <li>
                <FaPhone className="footer-contact-icon" />
                +51 955 541 002
              </li>
              <li>
                <FaEnvelope className="footer-contact-icon" />
                willykervyn@gmail.com
              </li>
              <li>
                <FaGithub className="footer-contact-icon" />
                wilito48
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Sígueme</h4>
            <div className="footer-social">
              <a href="https://github.com/wilito48" target="_blank" rel="noopener noreferrer">
                <ContactIcon src={githubIcon} alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a href="mailto:willykervyn@gmail.com">
                <ContactIcon src={emailIcon} alt="Email" />
                <span>Email</span>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} Kervyn Willy Rojas Poma. Todos los derechos reservados.</p>
            <p>
              Desarrollado con <FaHeart className="heart-icon" /> usando <FaReact className="react-icon" />
            </p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 