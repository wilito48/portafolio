import React from 'react';
import { 
  FaShieldAlt
} from 'react-icons/fa';


import './About.css';

// Importar todas las imágenes de tecnologías
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import jsIcon from '../assets/images/js.png';
import tailwindIcon from '../assets/images/tailwind.png';
import bootstrapIcon from '../assets/images/bootstrap.png';
import reactIcon from '../assets/images/react.png';
import angularIcon from '../assets/images/angular.png';
import phpIcon from '../assets/images/php.png';
import laravelIcon from '../assets/images/laravel.png';
import nodeIcon from '../assets/images/node.png';
import javaIcon from '../assets/images/java.png';
import springIcon from '../assets/images/spring.png';
import pythonIcon from '../assets/images/python.png';
import flutterIcon from '../assets/images/flutter.png';
import firebaseIcon from '../assets/images/firebase.png';
import mysqlIcon from '../assets/images/mysql.png';
import postgresqlIcon from '../assets/images/PostgreSQL.png';
import mongodbIcon from '../assets/images/MongoDB.png';
import sqliteIcon from '../assets/images/SQLite.png';
import djangoIcon from '../assets/images/django.png';
import nmapIcon from '../assets/images/Nmap.png';
import burpIcon from '../assets/images/burp.png';
import wiresharkIcon from '../assets/images/Wireshark.png';
import gitIcon from '../assets/images/git.png';
import githubIcon from '../assets/images/github.png';
import vscodeIcon from '../assets/images/visual-estudio-code.png';
import postmanIcon from '../assets/images/postman.png';
import xamppIcon from '../assets/images/xampp.png';

// Importar iconos adicionales
import premioIcon from '../assets/images/premio.png';
import certificadoIcon from '../assets/images/certificado.png';
import sombreroIcon from '../assets/images/sombrero-universidad-estudiante.png';
import universidadIcon from '../assets/images/upn.png';
import organizadoIcon from '../assets/images/organizado.png';
import proactivoIcon from '../assets/images/proactivo.png';
import creativoIcon from '../assets/images/creativo.png';
import avioncitoIcon from '../assets/images/avioncito.png';
import dartIcon from '../assets/images/dart.png';
import españolIcon from '../assets/images/español.png';
import inglesIcon from '../assets/images/ingles.png';
import linuxIcon from '../assets/images/linux.png';
import ubuntuIcon from '../assets/images/ubuntu.png';
import kaliIcon from '../assets/images/kali-linux.png';
import windowsIcon from '../assets/images/windows.png';
import virtualboxIcon from '../assets/images/virtualbox.png';
import vmwareIcon from '../assets/images/vmware.png';
import sqlServerIcon from '../assets/images/sql-server.png';

// Componente para renderizar iconos de imagen
const TechIcon = ({ src, alt, className = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`tech-icon-img ${className}`}
    style={{ width: '55px', height: '55px', objectFit: 'contain' }}
  />
);

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Sobre Mí
          </h2>
          <p className="section-subtitle">Conoce mi trayectoria y formación</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Mi Historia</h3>
            <p>
              Soy un estudiante de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte 
              en Lima, Perú. Mi pasión por la tecnología me ha llevado a explorar diferentes áreas, desde el 
              desarrollo de software hasta la ciberseguridad.
            </p>
            <p>
              Mi experiencia se centra en proyectos académicos y personales donde he utilizado tecnologías 
              como Flutter, Firebase, Laravel y Java Swing. Además, he desarrollado una base sólida en 
              seguridad de la información, guiado por la norma ISO/IEC 27001 y el estudio de amenazas como el phishing.
            </p>
            <p>
              Busco una oportunidad como practicante para aportar responsabilidad, creatividad y crecer 
              junto a un equipo de desarrollo.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4>4+</h4>
              <p>Proyectos Completados</p>
            </div>
            <div className="stat-item">
              <h4>6+</h4>
              <p>Certificaciones</p>
            </div>
            <div className="stat-item">
              <h4>3+</h4>
              <p>Años de Estudio</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Compromiso</p>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <TechIcon src={organizadoIcon} alt="Organizado" />
            </div>
            <h4>Organizado</h4>
            <p>Metodologías claras y estructuradas para cada proyecto</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <TechIcon src={proactivoIcon} alt="Proactivo" />
            </div>
            <h4>Proactivo</h4>
            <p>Iniciativa para aprender nuevas tecnologías y resolver problemas</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h4>Seguridad</h4>
            <p>Conocimientos en ciberseguridad y ethical hacking</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <TechIcon src={creativoIcon} alt="Creativo" />
            </div>
            <h4>Creativo</h4>
            <p>Soluciones innovadoras para desafíos técnicos</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <TechIcon src={avioncitoIcon} alt="Curioso" />
            </div>
            <h4>Curioso</h4>
            <p>Interés constante por explorar nuevas tecnologías y metodologías</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon">
              <TechIcon src={premioIcon} alt="Dedicado" />
            </div>
            <h4>Dedicado</h4>
            <p>Compromiso total con cada proyecto hasta alcanzar la excelencia</p>
          </div>
        </div>

        <div className="education-section">
          <h3>
            <TechIcon src={sombreroIcon} alt="Formación Académica" />
            Formación Académica
          </h3>
                      <div className="education-item">
            <div className="education-header">
              <TechIcon src={universidadIcon} alt="Universidad" className="education-icon" />
              <div>
                <h4>Ingeniería de Sistemas Computacionales</h4>
                <p>Universidad Privada del Norte – Lima, Perú</p>
              </div>
            </div>
            <span className="education-status">En curso</span>
          </div>
      </div>

      <div className="certifications-section">
        <h3>
        <TechIcon src={certificadoIcon} alt="Certificaciones" />
          Certificaciones Recientes
        </h3>
        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-header">
              <TechIcon src={premioIcon} alt="Certificación" className="certification-icon" />
              <h4>Analista CyberSOC Nivel 1</h4>
            </div>
            <p>Resility Academy (Ene. 2025)</p>
          </div>
          <div className="certification-item">
            <div className="certification-header">
              <TechIcon src={premioIcon} alt="Certificación" className="certification-icon" />
              <h4>CIBERSEGURIDAD: ETHICAL HACKING</h4>
            </div>
            <p>Universidad Nacional de Ingeniería (UNI) - 20/20</p>
          </div>
          <div className="certification-item">
            <div className="certification-header">
              <TechIcon src={premioIcon} alt="Certificación" className="certification-icon" />
              <h4>Hacking Ético: Offensive and Defensive Básico</h4>
            </div>
            <p>ExorciseThat Global Cybersecurity - 97/100</p>
          </div>
          <div className="certification-item">
            <div className="certification-header">
              <TechIcon src={premioIcon} alt="Certificación" className="certification-icon" />
              <h4>FUNDAMENTOS DE CIBERSEGURIDAD</h4>
            </div>
            <p>ITEC - 18/20</p>
          </div>
        </div>
      </div>

      <div className="technologies-section">
        <h3>
          Tecnologías que Manejo
        </h3>
        <div className="technologies-grid">
          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tech-icons">
              <TechIcon src={htmlIcon} alt="HTML" />
              <TechIcon src={cssIcon} alt="CSS" />
              <TechIcon src={jsIcon} alt="JavaScript" />
              <TechIcon src={bootstrapIcon} alt="Bootstrap" />
              <TechIcon src={tailwindIcon} alt="Tailwind CSS" />
              <TechIcon src={reactIcon} alt="React" />
              <TechIcon src={angularIcon} alt="Angular" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Backend</h4>
            <div className="tech-icons">
              <TechIcon src={phpIcon} alt="PHP" />
              <TechIcon src={laravelIcon} alt="Laravel" />
              <TechIcon src={nodeIcon} alt="Node.js" />
              <TechIcon src={javaIcon} alt="Java" />
              <TechIcon src={springIcon} alt="Spring Boot" />
              <TechIcon src={pythonIcon} alt="Python" />
              <TechIcon src={djangoIcon} alt="Django" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Móvil & Cloud</h4>
            <div className="tech-icons">
              <TechIcon src={flutterIcon} alt="Flutter" />
              <TechIcon src={dartIcon} alt="Dart" />
              <TechIcon src={firebaseIcon} alt="Firebase" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Bases de Datos</h4>
            <div className="tech-icons">
              <TechIcon src={mysqlIcon} alt="MySQL" />
              <TechIcon src={postgresqlIcon} alt="PostgreSQL" />
              <TechIcon src={mongodbIcon} alt="MongoDB" />
              <TechIcon src={sqliteIcon} alt="SQLite" />
              <TechIcon src={sqlServerIcon} alt="SQL Server" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Ciberseguridad</h4>
            <div className="tech-icons">
              <TechIcon src={nmapIcon} alt="Nmap" />
              <TechIcon src={burpIcon} alt="Burp Suite" />
              <TechIcon src={wiresharkIcon} alt="Wireshark" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Herramientas</h4>
            <div className="tech-icons">
              <TechIcon src={gitIcon} alt="Git" />
              <TechIcon src={githubIcon} alt="GitHub" />
              <TechIcon src={vscodeIcon} alt="Visual Studio Code" />
              <TechIcon src={postmanIcon} alt="Postman" />
              <TechIcon src={xamppIcon} alt="XAMPP" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Sistemas Operativos</h4>
            <div className="tech-icons">
              <TechIcon src={linuxIcon} alt="Linux" />
              <TechIcon src={ubuntuIcon} alt="Ubuntu" />
              <TechIcon src={kaliIcon} alt="Kali Linux" />
              <TechIcon src={windowsIcon} alt="Windows" />
            </div>
          </div>
          <div className="tech-category">
            <h4>Virtualización</h4>
            <div className="tech-icons">
              <TechIcon src={virtualboxIcon} alt="VirtualBox" />
              <TechIcon src={vmwareIcon} alt="VMware" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Experiencia y Formación */}
      <div className="experience-section">
        <div className="section-header">
          <h3>
            <TechIcon src={premioIcon} alt="Experiencia" />
            Experiencia y Formación
          </h3>
          <p className="section-subtitle">Mi trayectoria académica y desarrollo profesional</p>
        </div>
        
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <TechIcon src={sombreroIcon} alt="Educación" />
                </div>
                <div className="timeline-info">
                  <h4>Estudiante de Ingeniería de Sistemas</h4>
                  <p className="timeline-company">Universidad Privada del Norte</p>
                  <p className="timeline-location">Lima, Perú</p>
                  <span className="timeline-period">2025 - Presente</span>
                </div>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  Cursando la carrera de Ingeniería de Sistemas Computacionales con enfoque en desarrollo de software y ciberseguridad. 
                  Formación integral que combina teoría y práctica en proyectos reales.
                </p>
                <div className="timeline-achievements">
                  <h5>Logros y Actividades:</h5>
                  <ul>
                    <li>Desarrollo de proyectos académicos con tecnologías modernas</li>
                    <li>Participación en cursos de ciberseguridad y ethical hacking</li>
                    <li>Aplicación de metodologías ágiles en proyectos de desarrollo</li>
                    <li>Colaboración en equipos multidisciplinarios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <TechIcon src={proactivoIcon} alt="Proyectos" />
                </div>
                <div className="timeline-info">
                  <h4>Desarrollador de Proyectos Personales</h4>
                  <p className="timeline-company">Proyectos Independientes</p>
                  <p className="timeline-location">Lima, Perú</p>
                  <span className="timeline-period">2025 - Presente</span>
                </div>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  Desarrollo de aplicaciones móviles, web (incluyendo Django, Laravel y Node.js) y de escritorio para fortalecer habilidades técnicas y crear un portafolio sólido. 
                  Enfoque en soluciones prácticas y escalables.
                </p>
                <div className="timeline-achievements">
                  <h5>Proyectos Destacados:</h5>
                  <ul>
                    <li>Sitio web corporativo con React + Tailwind CSS + Vite</li>
                    <li>Nobicursos - Plataforma de Cursos en Línea con React + Tailwind CSS + Vite</li>
                    <li>Aplicación móvil de gestión de inventarios con Flutter</li>
                    <li>Plataforma web de cursos con Node.js y MongoDB</li>
                    <li>Sistema de votación de escritorio con Java Swing</li>
                    <li>Tienda online responsiva con HTML, CSS y JavaScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <TechIcon src={creativoIcon} alt="Ciberseguridad" />
                </div>
                <div className="timeline-info">
                  <h4>Estudiante de Ciberseguridad</h4>
                  <p className="timeline-company">Certificaciones y Cursos</p>
                  <p className="timeline-location">Online</p>
                  <span className="timeline-period">2025 - Presente</span>
                </div>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  Formación continua en ciberseguridad a través de certificaciones y cursos especializados. 
                  Desarrollo de habilidades en ethical hacking y seguridad de la información.
                </p>
                <div className="timeline-achievements">
                  <h5>Certificaciones Obtenidas:</h5>
                  <ul>
                    <li>Analista CyberSOC Nivel 1 - Resility Academy</li>
                    <li>Ethical Hacking - Universidad Nacional de Ingeniería</li>
                    <li>Hacking Ético Offensive and Defensive - ExorciseThat</li>
                    <li>Fundamentos de Ciberseguridad - ITEC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default About; 