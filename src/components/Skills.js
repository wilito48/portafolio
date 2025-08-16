import React from 'react';
import { 
  FaMobile,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaCode,
  FaServer,
  FaLinux,
  FaWindows,
  FaNetworkWired,
  FaEye,
  FaGlobe,
  FaDesktop
} from 'react-icons/fa';
import { 
  SiEclipseide,
  SiVirtualbox,
  SiVmware,
  SiUbuntu,
  SiKalilinux,
  SiWindows
} from 'react-icons/si';
import './Skills.css';

// Importar imágenes de tecnologías
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
import djangoIcon from '../assets/images/django.png';
import flutterIcon from '../assets/images/flutter.png';
import dartIcon from '../assets/images/dart.png';
import firebaseIcon from '../assets/images/firebase.png';
import mysqlIcon from '../assets/images/mysql.png';
import postgresqlIcon from '../assets/images/PostgreSQL.png';
import mongodbIcon from '../assets/images/MongoDB.png';
import sqliteIcon from '../assets/images/SQLite.png';
import nmapIcon from '../assets/images/Nmap.png';
import burpIcon from '../assets/images/burp.png';
import wiresharkIcon from '../assets/images/Wireshark.png';
import gitIcon from '../assets/images/git.png';
import githubIcon from '../assets/images/github.png';
import vscodeIcon from '../assets/images/visual-estudio-code.png';
import postmanIcon from '../assets/images/postman.png';
import xamppIcon from '../assets/images/xampp.png';
import españolIcon from '../assets/images/español.png';
import inglesIcon from '../assets/images/ingles.png';
import linuxIcon from '../assets/images/linux.png';
import ubuntuIcon from '../assets/images/ubuntu.png';
import kaliIcon from '../assets/images/kali-linux.png';
import windowsIcon from '../assets/images/windows.png';
import virtualboxIcon from '../assets/images/virtualbox.png';
import vmwareIcon from '../assets/images/vmware.png';
import eclipseIcon from '../assets/images/eclipse.png';
import sqlServerIcon from '../assets/images/sql-server.png';

// Componente para renderizar iconos de imagen
const TechIcon = ({ src, alt, className = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`tech-icon-img ${className}`}
    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
  />
);

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML', level: 85, icon: <TechIcon src={htmlIcon} alt="HTML" /> },
      { name: 'CSS', level: 80, icon: <TechIcon src={cssIcon} alt="CSS" /> },
      { name: 'JavaScript', level: 75, icon: <TechIcon src={jsIcon} alt="JavaScript" /> },
      { name: 'Bootstrap', level: 85, icon: <TechIcon src={bootstrapIcon} alt="Bootstrap" /> },
      { name: 'Tailwind CSS', level: 80, icon: <TechIcon src={tailwindIcon} alt="Tailwind CSS" /> },
      { name: 'React', level: 70, icon: <TechIcon src={reactIcon} alt="React" /> },
      { name: 'Angular', level: 40, icon: <TechIcon src={angularIcon} alt="Angular" /> }
    ],
    backend: [
      { name: 'PHP', level: 30, icon: <TechIcon src={phpIcon} alt="PHP" /> },
      { name: 'Laravel', level: 30, icon: <TechIcon src={laravelIcon} alt="Laravel" /> },
      { name: 'Node.js', level: 50, icon: <TechIcon src={nodeIcon} alt="Node.js" /> },
      { name: 'Java', level: 60, icon: <TechIcon src={javaIcon} alt="Java" /> },
      { name: 'Spring Boot', level: 30, icon: <TechIcon src={springIcon} alt="Spring Boot" /> },
      { name: 'Python', level: 40, icon: <TechIcon src={pythonIcon} alt="Python" /> },
      { name: 'Django', level: 40, icon: <TechIcon src={djangoIcon} alt="Django" /> }
    ],
    mobile: [
      { name: 'Flutter', level: 70, icon: <TechIcon src={flutterIcon} alt="Flutter" /> },
      { name: 'Dart', level: 75, icon: <TechIcon src={dartIcon} alt="Dart" /> },
      { name: 'Firebase', level: 75, icon: <TechIcon src={firebaseIcon} alt="Firebase" /> }
    ],
    databases: [
      { name: 'MySQL', level: 80, icon: <TechIcon src={mysqlIcon} alt="MySQL" /> },
      { name: 'PostgreSQL', level: 65, icon: <TechIcon src={postgresqlIcon} alt="PostgreSQL" /> },
      { name: 'MongoDB', level: 60, icon: <TechIcon src={mongodbIcon} alt="MongoDB" /> },
      { name: 'SQLite', level: 60, icon: <TechIcon src={sqliteIcon} alt="SQLite" /> },
      { name: 'SQL Server', level: 70, icon: <TechIcon src={sqlServerIcon} alt="SQL Server" /> }
    ],
    cybersecurity: [
      { name: 'Nmap', level: 70, icon: <TechIcon src={nmapIcon} alt="Nmap" /> },
      { name: 'Burp Suite', level: 40, icon: <TechIcon src={burpIcon} alt="Burp Suite" /> },
      { name: 'Wireshark', level: 60, icon: <TechIcon src={wiresharkIcon} alt="Wireshark" /> },
      { name: 'ISO/IEC 27001', level: 80, icon: <FaShieldAlt /> }
    ],
    tools: [
      { name: 'Git', level: 85, icon: <TechIcon src={gitIcon} alt="Git" /> },
      { name: 'GitHub', level: 85, icon: <TechIcon src={githubIcon} alt="GitHub" /> },
      { name: 'Visual Studio Code', level: 90, icon: <TechIcon src={vscodeIcon} alt="Visual Studio Code" /> },
      { name: 'Eclipse', level: 75, icon: <TechIcon src={eclipseIcon} alt="Eclipse" /> },
      { name: 'Postman', level: 60, icon: <TechIcon src={postmanIcon} alt="Postman" /> },
      { name: 'XAMPP', level: 75, icon: <TechIcon src={xamppIcon} alt="XAMPP" /> }
    ],
    operatingSystems: [
      { name: 'Linux', level: 80, icon: <TechIcon src={linuxIcon} alt="Linux" /> },
      { name: 'Ubuntu', level: 75, icon: <TechIcon src={ubuntuIcon} alt="Ubuntu" /> },
      { name: 'Kali Linux', level: 70, icon: <TechIcon src={kaliIcon} alt="Kali Linux" /> },
      { name: 'Windows', level: 90, icon: <TechIcon src={windowsIcon} alt="Windows" /> }
    ],
    virtualization: [
      { name: 'VirtualBox', level: 80, icon: <TechIcon src={virtualboxIcon} alt="VirtualBox" /> },
      { name: 'VMware', level: 75, icon: <TechIcon src={vmwareIcon} alt="VMware" /> }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías y herramientas que domino</p>
        </div>

        <div className="skills-categories">
          <div className="skill-category">
            <h3>
              <FaGlobe className="category-icon" />
              Desarrollo Web
            </h3>
            <div className="skills-grid">
              {skillsData.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaServer className="category-icon" />
              Desarrollo Backend
            </h3>
            <div className="skills-grid">
              {skillsData.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaMobile className="category-icon" />
              Desarrollo Móvil
            </h3>
            <div className="skills-grid">
              {skillsData.mobile.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaDatabase className="category-icon" />
              Bases de Datos
            </h3>
            <div className="skills-grid">
              {skillsData.databases.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaShieldAlt className="category-icon" />
              Ciberseguridad
            </h3>
            <div className="skills-grid">
              {skillsData.cybersecurity.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaTools className="category-icon" />
              Herramientas de Desarrollo
            </h3>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <FaDesktop className="category-icon" />
              Sistemas Operativos
            </h3>
            <div className="skills-grid">
              {skillsData.operatingSystems.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <SiVirtualbox className="category-icon" />
              Virtualización
            </h3>
            <div className="skills-grid">
              {skillsData.virtualization.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card languages-card">
            <div className="languages-header">
              <div className="languages-icon-wrapper">
                <FaGlobe className="languages-icon" />
              </div>
              <h3>Idiomas</h3>
            </div>
            <div className="languages-content">
              <div className="language-item">
                <div className="language-flag">
                  <TechIcon src={españolIcon} alt="Español" />
                </div>
                <div className="language-info">
                  <span className="language-name">Español</span>
                  <span className="language-level native">Nativo</span>
                </div>
              </div>
              <div className="language-divider"></div>
              <div className="language-item">
                <div className="language-flag">
                  <TechIcon src={inglesIcon} alt="Inglés" />
                </div>
                <div className="language-info">
                  <span className="language-name">Inglés</span>
                  <span className="language-level intermediate">Básico - Intermedio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 