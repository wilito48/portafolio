import React, { useState } from 'react';
import { 
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaHandshake,
  FaGlobe,
  FaExternalLinkAlt
} from 'react-icons/fa';
import './Contact.css';

// Importar iconos desde src/assets/images
import ubicacionIcon from '../assets/images/ubicacion.png';
import telefonoIcon from '../assets/images/telefono.png';
import emailIcon from '../assets/images/email.png';
import whatsappIcon from '../assets/images/whatsapp.png';
import githubIcon from '../assets/images/github.png';

// Componente para renderizar iconos de imagen
const ContactIcon = ({ src, alt, className = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`contact-icon-img ${className}`}
    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¡Hablemos sobre oportunidades de colaboración!</p>
        </div>

        <div className="contact-content">
          {/* Información de Contacto */}
          <div className="contact-info">
            <div className="info-header">
              <div className="info-icon-wrapper">
                <FaHandshake className="info-icon" />
              </div>
              <h3>Información de Contacto</h3>
            </div>
            
            <p className="info-description">
              Estoy interesado en oportunidades como practicante donde pueda aportar responsabilidad, 
              creatividad y crecer junto a un equipo de desarrollo.
            </p>
            
            <div className="contact-details">
              <a href="https://maps.google.com/?q=Lima,Peru" target="_blank" rel="noopener noreferrer" className="contact-item contact-button">
                <div className="contact-icon-wrapper">
                  <ContactIcon src={ubicacionIcon} alt="Ubicación" />
                </div>
                <div className="contact-text">
                  <h4>Ubicación</h4>
                  <p>Lima, Perú</p>
                </div>
                <FaExternalLinkAlt className="external-icon" />
              </a>
              
              <a href="tel:+51955541002" className="contact-item contact-button">
                <div className="contact-icon-wrapper">
                  <ContactIcon src={telefonoIcon} alt="Teléfono" />
                </div>
                <div className="contact-text">
                  <h4>Teléfono</h4>
                  <p>+51 955 541 002</p>
                </div>
                <FaExternalLinkAlt className="external-icon" />
              </a>
              
              <a href="mailto:willykervyn@gmail.com" className="contact-item contact-button">
                <div className="contact-icon-wrapper">
                  <ContactIcon src={emailIcon} alt="Email" />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>willykervyn@gmail.com</p>
                </div>
                <FaExternalLinkAlt className="external-icon" />
              </a>
              
              <a href="https://github.com/wilito48" target="_blank" rel="noopener noreferrer" className="contact-item contact-button">
                <div className="contact-icon-wrapper">
                  <ContactIcon src={githubIcon} alt="GitHub" />
                </div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <p>wilito48</p>
                </div>
                <FaExternalLinkAlt className="external-icon" />
              </a>
              
              <a href="https://wa.me/51955541002" target="_blank" rel="noopener noreferrer" className="contact-item contact-button">
                <div className="contact-icon-wrapper">
                  <ContactIcon src={whatsappIcon} alt="WhatsApp" />
                </div>
                <div className="contact-text">
                  <h4>WhatsApp</h4>
                  <p>+51 955 541 002</p>
                </div>
                <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="contact-form">
            <div className="form-header">
              <div className="form-icon-wrapper">
                <FaPaperPlane className="form-icon" />
              </div>
              <h3>Envíame un Mensaje</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form-content">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="input-icon" />
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <ContactIcon src={emailIcon} alt="Email" className="input-icon" />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu.email@ejemplo.com"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  <FaGlobe className="input-icon" />
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <FaPaperPlane className="input-icon" />
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto o propuesta..."
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <div className="success-content">
                  <h4>¡Mensaje enviado exitosamente!</h4>
                  <p>Te responderé pronto. ¡Gracias por contactarme!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-background">
            <div className="cta-content">
              <div className="cta-header">
                <div className="cta-icon-wrapper">
                  <FaHandshake className="cta-icon" />
                </div>
                <h3>¿Interesado en trabajar juntos?</h3>
              </div>
              <p>
                Estoy buscando oportunidades como practicante donde pueda aplicar mis conocimientos 
                en desarrollo de software y ciberseguridad. ¡Hablemos sobre cómo puedo contribuir a tu equipo!
              </p>
              <div className="cta-buttons">
                <a href="mailto:willykervyn@gmail.com" className="btn btn-primary cta-btn">
                  <ContactIcon src={emailIcon} alt="Email" />
                  <span>Enviar Email</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
                <a href="tel:+51955541002" className="btn btn-secondary cta-btn">
                  <ContactIcon src={telefonoIcon} alt="Teléfono" />
                  <span>Llamar Ahora</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 