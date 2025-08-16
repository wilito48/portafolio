import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaStar, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sitio Web Corporativo para Estudio de Arquitectura",
      description: "Desarrollo completo de un sitio web corporativo para un estudio de arquitectura, destacando su portafolio de proyectos, servicios profesionales y facilitando el contacto con clientes potenciales. La plataforma combina un diseño elegante con funcionalidades avanzadas para presentar de manera impactante el trabajo arquitectónico del estudio.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "HTML5"],
      features: [
        "Diseño profesional que refleja la identidad de la empresa",
        "Galería de proyectos con visualización detallada",
        "Sección de servicios arquitectónicos ofrecidos",
        "Formulario de contacto con validación",
        "Integración con WhatsApp para consultas inmediatas",
        "Diseño responsive para todos los dispositivos",
        "Optimización SEO para mejor visibilidad",
        "Tiempos de carga rápidos con Vite"
      ],
      demoLink: "https://arquitectura-omega.vercel.app/",
      githubLink: "https://github.com/wilito48/arquitectura.git",
      category: "web",
      icon: "🏢",
      image: process.env.PUBLIC_URL + "/images/proyectos/arquitectura/img1.jpg"
    },
    {
      id: 2,
      title: "Nobicursos - Plataforma de Cursos en Línea",
      description: "Plataforma educativa que permite a los usuarios explorar y acceder a una amplia variedad de cursos en línea de programación, diseño, marketing digital, ciencia de datos y negocios.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "HTML5"],
      features: [
        "Diseño personalizado con tipografía elegante",
        "Catálogo de cursos por categorías",
        "Fecha y nombre de curso personalizables",
        "Interfaz intuitiva y responsiva"
      ],
      demoLink: "https://nobicursos.vercel.app/",
      githubLink: "https://github.com/wilito48/Nobicursos.git",
      category: "web",
      icon: "🎓",
      image: process.env.PUBLIC_URL + "/images/proyectos/nobicursos/img1.jpg"
    },
    {
      id: 3,
      title: "Portafolio Personal Web",
      description: "Portafolio profesional desarrollado con React, mostrando habilidades técnicas y proyectos personales con diseño responsive y moderno.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Diseño responsive y moderno",
        "Tema claro/oscuro",
        "Navegación suave",
        "Optimización SEO"
      ],
      demoLink: "#",
      githubLink: "https://github.com/kervynwilly/portfolio",
      category: "web",
      icon: "🚀",
      image: process.env.PUBLIC_URL + "/images/proyectos/portafolio/img1.jpg"
    },
    {
      id: 4,
      title: "Aplicación de Gestión de Inventarios",
      description: "Aplicación móvil completa para la gestión eficiente y sencilla de inventarios, incluyendo control de productos, stock y manejo de artículos perecederos.",
      technologies: ["Flutter", "SQLite", "Dart"],
      features: [
        "Control de productos y stock",
        "Manejo de artículos perecederos",
        "Base de datos local SQLite",
        "Interfaz de usuario intuitiva"
      ],
      demoLink: "#",
      githubLink: "https://github.com/wilito48/inventario_olla.git",
      category: "mobile",
      icon: "📱",
      image: process.env.PUBLIC_URL + "/images/proyectos/inventario-olla/img-1.jpg"
    },
    {
      id: 5,
      title: "Plataforma Web de Cursos",
      description: "Sistema web con funcionalidad CRUD para la gestión de cursos y usuarios, utilizando Tailwind CSS para una interfaz moderna.",
      technologies: ["Node.js", "MongoDB", "Tailwind CSS", "JavaScript"],
      features: [
        "Funcionalidad CRUD completa",
        "Gestión de cursos y usuarios",
        "Interfaz moderna con Tailwind",
        "Backend funcional"
      ],
      demoLink: "#",
      githubLink: "https://github.com/kervynwilly/cursos-platform",
      category: "web",
      icon: "🎓",
      image: process.env.PUBLIC_URL + "/images/courses-platform-preview.jpg"
    },
    {
      id: 6,
      title: "Sistema de Votación de Escritorio",
      description: "Aplicación de escritorio usando XAMPP que incluye inicio de sesión, gestión de roles y almacenamiento de votos en MySQL.",
      technologies: ["Java", "Java Swing", "MySQL", "XAMPP"],
      features: [
        "Sistema de autenticación",
        "Gestión de roles de usuario",
        "Almacenamiento de votos",
        "Base de datos MySQL"
      ],
      demoLink: "#",
      githubLink: "https://github.com/wilito48/PracticaCampo14.git",
      category: "desktop",
      icon: "🗳️",
      image: process.env.PUBLIC_URL + "/images/proyectos/votacion-electronica/img1.PNG"
    },
    {
      id: 7,
      title: "Vesfay - Tienda de Ropa Online",
      description: "Tienda de ropa online moderna y completamente responsiva, construida con HTML, CSS (Bootstrap) y JavaScript puro. Incluye catálogos dinámicos, navegación intuitiva y categorías para hombres, mujeres y niños.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      features: [
        "Catálogos dinámicos",
        "Navegación intuitiva",
        "Categorías: hombres, mujeres, niños",
        "Diseño completamente responsivo",
        "Panel de administración"
      ],
      demoLink: "https://tienda-vesfay-xd.vercel.app/",
      githubLink: "https://github.com/wilito48/tienda_vesfay_xd.git",
      category: "web",
      icon: "🛍️",
      image: process.env.PUBLIC_URL + "/images/proyectos/vesfay/proyecto1.PNG"
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos', icon: '📁' },
    { id: 'web', label: 'Web', icon: '🌐' },
    { id: 'mobile', label: 'Móvil', icon: '📱' },
    { id: 'desktop', label: 'Desktop', icon: '💻' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="projects-content">
          <div className="section-header">
            <h2 className="section-title">
              <FaCode className="title-icon" />
              Mis Proyectos
            </h2>
            <p className="section-subtitle">
              Una muestra de mi trabajo y habilidades en desarrollo de software. 
              Cada proyecto representa un desafío único y una oportunidad de aprendizaje.
            </p>
          </div>

          <div className="projects-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`Vista previa de ${project.title}`}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="project-image-placeholder">
                      <span className="placeholder-icon">{project.icon}</span>
                      <span className="placeholder-text">Vista previa</span>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-icon">{project.icon}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          <FaStar className="tech-icon" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-features">
                      <h4>Características principales:</h4>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>
                            <span className="feature-check">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-links">
                      <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <FaRocket className="btn-icon" />
                        Ver Demo
                        <FaExternalLinkAlt className="external-icon" />
                      </a>
                      <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="btn-icon" />
                        Código
                        <FaExternalLinkAlt className="external-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-content">
                <FaFilter className="no-projects-icon" />
                <h3>No hay proyectos en esta categoría</h3>
                <p>Intenta seleccionar otra categoría o revisa todos los proyectos.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;