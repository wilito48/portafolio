export const CATEGORIES = {
  web: { label: 'Web', icon: '🌐', defaultDevice: 'screen' },
  mobile: { label: 'Móvil', icon: '📱', defaultDevice: 'phone' },
  desktop: { label: 'Desktop', icon: '💻', defaultDevice: 'screen' },
};

const projectData = [
  {
    slug: 'arquitectura',
    title: 'Sitio Web Corporativo para Estudio de Arquitectura',
    description:
      'Sitio web corporativo para un estudio de arquitectura que presenta su portafolio de proyectos y servicios, y facilita el contacto con clientes potenciales con un diseño elegante y tiempos de carga rápidos.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Portafolio de proyectos con visualización detallada',
      'Sección de servicios arquitectónicos',
      'Formulario de contacto con validación',
      'Contacto directo por WhatsApp',
      'Diseño responsive para todos los dispositivos',
      'Optimización SEO',
    ],
    demoLink: 'https://arquitectura-omega.vercel.app/',
    githubLink: 'https://github.com/wilito48/arquitectura.git',
    category: 'web',
    icon: '🏢',
    images: [{ file: 'img1.jpg', alt: 'Página de inicio del estudio de arquitectura' }],
  },
  {
    slug: 'ruta-academica',
    title: 'Ruta Académica - Plataforma Educativa',
    description:
      'Plataforma educativa con cursos, evaluaciones, foro en tiempo real y un chatbot con IA, protegida con seguridad JWT por roles.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    features: [
      'Gestión de cursos y evaluaciones',
      'Foro en tiempo real',
      'Chatbot con inteligencia artificial',
      'Seguridad JWT por roles',
      'Pruebas unitarias con JUnit',
    ],
    category: 'web',
    icon: '📚',
    images: [],
  },
  {
    slug: 'z-erok',
    title: 'Z-EROK - App de Finanzas Personales',
    description:
      'Aplicación móvil de finanzas personales con presupuestos, metas de ahorro y soporte multimoneda, respaldada por una API en Spring Boot.',
    technologies: ['Flutter', 'Firebase', 'Java', 'Spring Boot', 'PostgreSQL'],
    features: [
      'Presupuestos y metas de ahorro',
      'Soporte multimoneda',
      'Inicio de sesión con Google',
      'Notificaciones push',
    ],
    category: 'mobile',
    icon: '💰',
    images: [],
  },
  {
    slug: 'agro-ahorro-ayacucho',
    title: 'Agro Ahorro Ayacucho - Comparador de Precios',
    description:
      'App móvil para comparar precios de productos agrícolas, con una API desplegada en un VPS Linux mediante Docker Compose.',
    technologies: ['React Native (Expo)', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    features: [
      'App móvil multiplataforma con Expo',
      'API en NestJS con Prisma y PostgreSQL',
      'Despliegue en VPS Linux con Docker Compose',
      'APK generado con EAS Build',
    ],
    category: 'mobile',
    icon: '🌽',
    images: [],
  },
  {
    slug: 'nobicursos',
    title: 'Nobicursos - Plataforma de Cursos en Línea',
    description:
      'Plataforma educativa que permite explorar y acceder a cursos en línea de programación, diseño, marketing digital, ciencia de datos y negocios.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Diseño personalizado con tipografía elegante',
      'Catálogo de cursos por categorías',
      'Fecha y nombre de curso personalizables',
      'Interfaz intuitiva y responsiva',
    ],
    demoLink: 'https://nobicursos.vercel.app/',
    githubLink: 'https://github.com/wilito48/Nobicursos.git',
    category: 'web',
    icon: '🎓',
    images: [{ file: 'img1.jpg', alt: 'Página de inicio de Nobicursos' }],
  },
  {
    slug: 'vesfay',
    title: 'Vesfay - Tienda de Ropa Online',
    description:
      'Tienda de ropa online responsiva construida con HTML, Bootstrap y JavaScript, con catálogos dinámicos y categorías para hombres, mujeres y niños.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    features: [
      'Catálogos dinámicos',
      'Navegación intuitiva',
      'Categorías: hombres, mujeres, niños',
      'Diseño completamente responsivo',
      'Panel de administración',
    ],
    demoLink: 'https://tienda-vesfay-xd.vercel.app/',
    githubLink: 'https://github.com/wilito48/tienda_vesfay_xd.git',
    category: 'web',
    icon: '🛍️',
    images: [{ file: 'img1.jpg', alt: 'Página principal de la tienda Vesfay' }],
  },
  {
    slug: 'inventario-olla',
    title: 'Aplicación de Gestión de Inventarios',
    description:
      'Aplicación móvil para la gestión sencilla de inventarios, con control de productos, stock y manejo de artículos perecederos.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    features: [
      'Control de productos y stock',
      'Manejo de artículos perecederos',
      'Base de datos local SQLite',
      'Interfaz de usuario intuitiva',
    ],
    githubLink: 'https://github.com/wilito48/inventario_olla.git',
    category: 'mobile',
    icon: '📱',
    images: [{ file: 'img1.jpg', alt: 'Inicio de sesión de la app de inventarios' }],
  },
  {
    slug: 'votacion-electronica',
    title: 'Sistema de Votación de Escritorio',
    description: 'Aplicación de escritorio con inicio de sesión, gestión de roles y almacenamiento de votos en MySQL.',
    technologies: ['Java', 'Java Swing', 'MySQL', 'XAMPP'],
    features: [
      'Sistema de autenticación',
      'Gestión de roles de usuario',
      'Almacenamiento de votos',
      'Base de datos MySQL',
    ],
    githubLink: 'https://github.com/wilito48/PracticaCampo14.git',
    category: 'desktop',
    icon: '🗳️',
    images: [{ file: 'img1.jpg', alt: 'Ventana del sistema de votación' }],
  },
  {
    slug: 'portafolio',
    title: 'Portafolio Personal Web',
    description:
      'Este portafolio: React con Vite, Tailwind CSS y animaciones con GSAP, con tema claro/oscuro y galerías de capturas web y móvil.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    features: [
      'Galerías de capturas con visor a pantalla completa',
      'Animaciones con GSAP y ScrollTrigger',
      'Tema claro/oscuro',
      'Diseño responsive',
    ],
    demoLink: 'https://portafolio-sigma-fawn.vercel.app/',
    githubLink: 'https://github.com/wilito48/portafolio.git',
    category: 'web',
    icon: '🚀',
    images: [{ file: 'img1.jpg', alt: 'Página de inicio del portafolio' }],
  },
  {
    slug: 'cursos-platform',
    title: 'Plataforma Web de Cursos',
    description: 'Sistema web con funcionalidad CRUD para la gestión de cursos y usuarios.',
    technologies: ['Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    features: ['Funcionalidad CRUD completa', 'Gestión de cursos y usuarios', 'Interfaz con Tailwind CSS'],
    githubLink: 'https://github.com/kervynwilly/cursos-platform',
    category: 'web',
    icon: '🎓',
    images: [],
  },
];

const toImage = (project) => (entry, index) => {
  const image = typeof entry === 'string' ? { file: entry } : entry;
  return {
    src: `${import.meta.env.BASE_URL}images/proyectos/${project.slug}/${image.file}`,
    alt: image.alt || `${project.title} — captura ${index + 1}`,
    device: image.device || CATEGORIES[project.category].defaultDevice,
  };
};

export const projects = projectData.map((project) => ({
  ...project,
  images: project.images.map(toImage(project)),
}));
