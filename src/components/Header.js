import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ui/ThemeToggle';
import './Header.css';

// Importar iconos de imagen para el menú
import casitaIcon from '../assets/images/hogar.png';
import sobreMiIcon from '../assets/images/persona.png';
import habilidadesIcon from '../assets/images/habilidades.png';
import proyectosIcon from '../assets/images/proyectos.png';
import contactoIcon from '../assets/images/email.png';

// Componente para iconos de imagen del menú
const NavIcon = ({ src, alt, className = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`nav-icon-img ${className}`}
    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
  />
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa con mejor precisión
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const offset = headerHeight + 50; // Offset adicional para mejor detección
      
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Ejecutar una vez al montar para establecer la sección inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const elementPosition = element.offsetTop - headerHeight - 20;
      
      // Actualizar inmediatamente la sección activa
      setActiveSection(sectionId);
      
      // Hacer scroll suave a la sección
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Asegurar que el estado activo se mantenga después del scroll
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
    closeMobileMenu();
  };


  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💻</span>
            <span className="logo-text">Kervyn Willy</span>
          </div>

          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={() => scrollToSection('home')}
                >
                  <NavIcon src={casitaIcon} alt="Inicio" />
                  <span>Inicio</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => scrollToSection('about')}
                >
                  <NavIcon src={sobreMiIcon} alt="Sobre Mí" />
                  <span>Sobre Mí</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={() => scrollToSection('skills')}
                >
                  <NavIcon src={habilidadesIcon} alt="Habilidades" />
                  <span>Habilidades</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={() => scrollToSection('projects')}
                >
                  <NavIcon src={proyectosIcon} alt="Proyectos" />
                  <span>Proyectos</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => scrollToSection('contact')}
                >
                  <NavIcon src={contactoIcon} alt="Contacto" />
                  <span>Contacto</span>
                </button>
              </li>
            </ul>
            
            <ThemeToggle />
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 