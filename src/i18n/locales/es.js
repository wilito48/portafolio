const es = {
  meta: {
    title: 'Kervyn Rojas — Desarrollador Full Stack Junior',
  },
  ui: {
    language: 'Idioma',
    switchLanguage: 'Cambiar a inglés',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    backToTop: 'Volver arriba',
    downloadCv: 'Descargar CV',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre Mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  profile: {
    role: 'Desarrollador Full Stack Junior',
    availability: 'Disponible para nuevas oportunidades',
    location: 'Lima, Perú',
    summary:
      'Desarrollador Full Stack Junior con 8 meses de experiencia profesional en productos SaaS multiempresa en producción. Trabajo con Node.js, TypeScript, React y React Native, con experiencia en integraciones mediante webhooks, suscripciones y pagos, seguridad multi-tenant y Redis.',
  },
  hero: {
    greeting: 'Hola, soy',
    viewProjects: 'Ver Proyectos',
    contact: 'Contactar',
    photoAlt: (name) => `Foto de ${name}`,
    integrationsLabel: 'Integraciones que he desarrollado',
    integrationsCaption: 'Integraciones que llevé a producción',
  },
  marquee: {
    label: 'Tecnologías con las que trabajo',
  },
  techLabels: {
    'REST APIs': 'APIs REST',
  },
  about: {
    title: 'Sobre Mí',
    subtitle: 'Conoce mi trayectoria, experiencia y formación',
    storyTitle: 'Mi Historia',
    story: [
      'Soy desarrollador Full Stack Junior y estudiante del último ciclo de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte, en Lima.',
      'En STARSOFT participé en el backend, la web y la app móvil de dos CRM SaaS multiempresa en producción, con integraciones de Meta, TikTok y Mailchimp, suscripciones con Culqi, seguridad multi-tenant y caché con Redis.',
      'Antes, en la Asociación Tecnológica del Perú, audité la seguridad de su plataforma web, integré login y registro vía APIs y automaticé contenido de marketing con IA. Me interesa seguir construyendo productos reales junto a un equipo.',
    ],
    stats: {
      experience: 'Meses de experiencia',
      commits: 'Commits en producción',
      internships: 'Prácticas profesionales',
      projects: 'Proyectos',
    },
    experienceTitle: 'Experiencia',
    experience: {
      starsoft: {
        role: 'Practicante de Programación',
        period: 'Jun 2026 - Sep 2026',
        description:
          'STARSOFT CRM y Abatar CRM (abatarcrm.com): backend, web y app móvil de dos CRM SaaS multiempresa en producción.',
        stack: ['Node.js', 'TypeScript', 'React', 'React Native', 'Redis'],
        highlights: [
          'Más de 500 commits en el backend, la web y la app móvil de ambos productos.',
          'Integraciones con Meta (WhatsApp, Instagram y Messenger), TikTok y Mailchimp mediante webhooks.',
          'Suscripciones con Culqi: pagos 3DS, reactivación, cancelación, add-ons y consumo del plan.',
          'Seguridad multi-tenant: aislamiento por empresa, validación JWT y cifrado de tokens.',
          'Caché y rate limiting con Redis; chat en tiempo real con Socket.IO.',
          'Agente de IA para WhatsApp con LangChain e incidencias de producción (VPS, PM2).',
          'Secciones del sitio comercial abatarcrm.com con Next.js, Tailwind CSS y GSAP.',
        ],
      },
      atp: {
        role: 'Practicante de Ingeniería de Sistemas',
        period: 'Ene 2026 - Abr 2026',
        description: 'Seguridad web, pruebas funcionales, APIs REST, bases de datos y automatización con IA.',
        stack: ['APIs REST', 'Seguridad web', 'Bases de datos', 'IA'],
        highlights: [
          'Auditoría de seguridad de la plataforma web: vulnerabilidades críticas, CVEs y plan de mitigación.',
          'Integración de login y registro con el backend vía APIs, con pruebas funcionales y de rendimiento.',
          'Diseño de una base de datos para el registro y seguimiento de empresas prospecto.',
          'Automatización de contenido de marketing integrando Telegram con Meta AI.',
        ],
      },
      upn: {
        role: 'Ingeniería de Sistemas Computacionales',
        period: 'Último ciclo',
        description: 'Estudiante del último ciclo, con enfoque en desarrollo de software y ciberseguridad.',
        stack: [],
        highlights: [],
      },
    },
    traits: {
      organized: { title: 'Organizado', text: 'Metodologías claras y estructuradas para cada proyecto' },
      proactive: { title: 'Proactivo', text: 'Iniciativa para aprender nuevas tecnologías y resolver problemas' },
      security: { title: 'Seguridad', text: 'Aislamiento multi-tenant, JWT, cifrado y auditoría de vulnerabilidades' },
      creative: { title: 'Creativo', text: 'Soluciones prácticas para desafíos técnicos reales' },
      curious: { title: 'Curioso', text: 'Interés constante por nuevas tecnologías, IA y buenas prácticas' },
      dedicated: { title: 'Dedicado', text: 'Compromiso con cada entrega, del desarrollo a producción' },
    },
    traitsTitle: 'Cómo trabajo',
    educationTitle: 'Formación Académica',
    education: {
      degree: 'Ingeniería de Sistemas Computacionales',
      institution: 'Universidad Privada del Norte – Lima, Perú',
      detail: 'Último ciclo',
      status: 'En curso',
    },
    certificationsTitle: 'Certificaciones',
    certifications: {
      cybersoc: { title: 'Analista CyberSOC Nivel 1', issuer: 'Resility Academy (Ene. 2025)' },
      ethicalHacking: {
        title: 'Ciberseguridad: Ethical Hacking',
        issuer: 'Universidad Nacional de Ingeniería (UNI) - 20/20',
      },
      offensiveDefensive: {
        title: 'Hacking Ético: Offensive and Defensive Básico',
        issuer: 'ExorciseThat Global Cybersecurity - 97/100',
      },
      fundamentals: { title: 'Fundamentos de Ciberseguridad', issuer: 'ITEC - 18/20' },
    },
  },
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Tecnologías y herramientas con las que trabajo',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend y Móvil',
      data: 'Bases de Datos e IA',
      devops: 'Pruebas y DevOps',
    },
    languagesTitle: 'Idiomas',
    languages: {
      es: { name: 'Español', level: 'Nativo' },
      en: { name: 'Inglés', level: 'Básico (lectura técnica)' },
    },
  },
  projects: {
    title: 'Mis Proyectos',
    subtitle:
      'Una muestra de mi trabajo en desarrollo web y móvil. Toca cualquier captura para verla en pantalla completa.',
    filterLabel: 'Filtrar proyectos por categoría',
    categories: { all: 'Todos', web: 'Web', mobile: 'Móvil', desktop: 'Desktop' },
    emptyTitle: 'No hay proyectos en esta categoría',
    emptyText: 'Intenta seleccionar otra categoría o revisa todos los proyectos.',
    screenshotCount: (n) => `${n} capturas`,
    screenCount: (n) => `${String(n).padStart(2, '0')} pantallas`,
    screenshotAlt: (title, n) => `${title} — captura ${n}`,
    comingSoon: 'Capturas próximamente',
    features: 'Características principales',
    showMore: (n) => `Ver ${n} más`,
    showLess: 'Ver menos',
    demo: 'Ver Demo',
    code: 'Código',
    technologies: 'Tecnologías',
    screenshots: 'Capturas',
    viewScreenshot: (n) => `Ver captura ${n}`,
    zoom: (alt) => `Ampliar: ${alt}`,
    previous: 'Anterior',
    next: 'Siguiente',
    items: {
      arquitectura: {
        title: 'Sitio Web Corporativo para Estudio de Arquitectura',
        description:
          'Sitio web corporativo para un estudio de arquitectura que presenta su portafolio de proyectos y servicios, y facilita el contacto con clientes potenciales con un diseño elegante y tiempos de carga rápidos.',
        features: [
          'Portafolio de proyectos con visualización detallada',
          'Sección de servicios arquitectónicos',
          'Formulario de contacto con validación',
          'Contacto directo por WhatsApp',
          'Diseño responsive para todos los dispositivos',
          'Optimización SEO',
        ],
      },
      'ruta-academica': {
        title: 'Ruta Académica - Plataforma Educativa',
        description:
          'Plataforma educativa con cursos, evaluaciones, foro en tiempo real y un chatbot con IA, protegida con seguridad JWT por roles.',
        features: [
          'Gestión de cursos y evaluaciones',
          'Foro en tiempo real',
          'Chatbot con inteligencia artificial',
          'Seguridad JWT por roles',
          'Pruebas unitarias con JUnit',
        ],
      },
      'z-erok': {
        title: 'Z-EROK - App de Finanzas Personales',
        description:
          'Aplicación móvil de finanzas personales con presupuestos, metas de ahorro y soporte multimoneda, respaldada por una API en Spring Boot.',
        features: [
          'Presupuestos y metas de ahorro',
          'Soporte multimoneda',
          'Inicio de sesión con Google',
          'Notificaciones push',
        ],
      },
      'agro-ahorro-ayacucho': {
        title: 'Agro Ahorro Ayacucho - Comparador de Precios',
        description:
          'App móvil para comparar precios de productos agrícolas, con una API desplegada en un VPS Linux mediante Docker Compose.',
        features: [
          'App móvil multiplataforma con Expo',
          'API en NestJS con Prisma y PostgreSQL',
          'Despliegue en VPS Linux con Docker Compose',
          'APK generado con EAS Build',
        ],
      },
      nobicursos: {
        title: 'Nobicursos - Plataforma de Cursos en Línea',
        description:
          'Plataforma educativa que permite explorar y acceder a cursos en línea de programación, diseño, marketing digital, ciencia de datos y negocios.',
        features: [
          'Diseño personalizado con tipografía elegante',
          'Catálogo de cursos por categorías',
          'Fecha y nombre de curso personalizables',
          'Interfaz intuitiva y responsiva',
        ],
      },
      vesfay: {
        title: 'Vesfay - Tienda de Ropa Online',
        description:
          'Tienda de ropa online responsiva construida con HTML, Bootstrap y JavaScript, con catálogos dinámicos y categorías para hombres, mujeres y niños.',
        features: [
          'Catálogos dinámicos',
          'Navegación intuitiva',
          'Categorías: hombres, mujeres, niños',
          'Diseño completamente responsivo',
          'Panel de administración',
        ],
      },
      'inventario-olla': {
        title: 'Aplicación de Gestión de Inventarios',
        description:
          'Aplicación móvil para la gestión sencilla de inventarios, con control de productos, stock y manejo de artículos perecederos.',
        features: [
          'Control de productos y stock',
          'Manejo de artículos perecederos',
          'Base de datos local SQLite',
          'Interfaz de usuario intuitiva',
        ],
      },
      'votacion-electronica': {
        title: 'Sistema de Votación de Escritorio',
        description:
          'Aplicación de escritorio con inicio de sesión, gestión de roles y almacenamiento de votos en MySQL.',
        features: [
          'Sistema de autenticación',
          'Gestión de roles de usuario',
          'Almacenamiento de votos',
          'Base de datos MySQL',
        ],
      },
      portafolio: {
        title: 'Portafolio Personal Web',
        description:
          'Este portafolio: React con Vite, Tailwind CSS y animaciones con GSAP, con tema claro/oscuro, versión en inglés y galerías de capturas web y móvil.',
        features: [
          'Galerías de capturas con visor a pantalla completa',
          'Animaciones con GSAP y ScrollTrigger',
          'Tema claro/oscuro y versión en inglés',
          'Diseño responsive',
        ],
      },
      'cursos-platform': {
        title: 'Plataforma Web de Cursos',
        description: 'Sistema web con funcionalidad CRUD para la gestión de cursos y usuarios.',
        features: ['Funcionalidad CRUD completa', 'Gestión de cursos y usuarios', 'Interfaz con Tailwind CSS'],
      },
    },
  },
  lightbox: {
    label: (title) => `Capturas de ${title}`,
    close: 'Cerrar visor',
    previous: 'Captura anterior',
    next: 'Captura siguiente',
    goTo: (n) => `Ir a captura ${n}`,
  },
  contact: {
    title: 'Contacto',
    subtitle: '¡Hablemos sobre oportunidades de colaboración!',
    infoTitle: 'Información de Contacto',
    infoText:
      'Busco nuevas oportunidades como desarrollador Full Stack, donde aportar mi experiencia en productos SaaS y seguir creciendo junto a un equipo.',
    channels: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Teléfono',
      location: 'Ubicación',
    },
    form: {
      title: 'Envíame un Mensaje',
      name: { label: 'Nombre', placeholder: 'Tu nombre completo' },
      email: { label: 'Email', placeholder: 'tu.email@ejemplo.com' },
      subject: { label: 'Asunto', placeholder: '¿En qué puedo ayudarte?' },
      message: { label: 'Mensaje', placeholder: 'Cuéntame sobre tu proyecto o propuesta...' },
      submit: 'Enviar Mensaje',
      sentTitle: '¡Listo! Se abrió tu correo',
      sentText: 'Revisa el mensaje en tu aplicación de correo y pulsa enviar. ¡Gracias por escribirme!',
    },
    cta: {
      titleStart: '¿Interesado en',
      titleHighlight: 'trabajar juntos',
      titleEnd: '?',
      text: 'Desarrollador Full Stack Junior con experiencia en productos SaaS en producción. Hablemos de cómo puedo aportar a tu equipo.',
      email: 'Enviar email',
      call: 'Llamar',
    },
  },
  notFound: {
    metaTitle: 'Página no encontrada — Kervyn Rojas',
    eyebrow: 'Error 404',
    title: 'Esta página no existe',
    text: 'Puede que el enlace esté mal escrito o que la página se haya movido. Volvamos a terreno conocido.',
    home: 'Volver al inicio',
    projects: 'Ver proyectos',
  },
  footer: {
    quickLinks: 'Enlaces Rápidos',
    contact: 'Contacto',
    follow: 'Sígueme',
    rights: 'Todos los derechos reservados.',
    builtWith: 'Desarrollado con',
    using: 'usando',
    love: 'amor',
  },
};

export default es;
