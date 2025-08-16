import React from 'react';
import DownloadCV from './ui/DownloadCV';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span className="highlight">Kervyn Willy Rojas Poma</span>
            </h1>
            <h2 className="hero-subtitle">Estudiante de Ingeniería de Sistemas Computacionales</h2>
            <p className="hero-description">
              Soy un estudiante con una profunda curiosidad por la tecnología y un enfoque multidisciplinario 
              que abarca desde el desarrollo de software hasta la ciberseguridad. Me considero una persona 
              organizada y proactiva, con un gran deseo de aprender continuamente y aplicar mis conocimientos 
              en un entorno profesional.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
              <a href="#contact" className="btn btn-secondary">Contactar</a>
              <DownloadCV />
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-placeholder">
              <div className="avatar-shine"></div>
              <img 
                src={`${process.env.PUBLIC_URL}/logos/logo-principal.png`} 
                alt="KW Logo" 
                className="hero-logo"
                onError={(e) => {
                  console.error('Error al cargar el logo:', e.target.src);
                }}
              />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 