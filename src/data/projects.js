export const CATEGORIES = {
  web: { icon: '🌐', defaultDevice: 'screen' },
  mobile: { icon: '📱', defaultDevice: 'phone' },
  desktop: { icon: '💻', defaultDevice: 'screen' },
};

const projectData = [
  {
    slug: 'arquitectura',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    demoLink: 'https://arquitectura-omega.vercel.app/',
    githubLink: 'https://github.com/wilito48/arquitectura.git',
    category: 'web',
    icon: '🏢',
    images: ['img1.jpg'],
  },
  {
    slug: 'ruta-academica',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    category: 'web',
    icon: '📚',
    images: [],
  },
  {
    slug: 'z-erok',
    technologies: ['Flutter', 'Firebase', 'Java', 'Spring Boot', 'PostgreSQL'],
    category: 'mobile',
    icon: '💰',
    images: [],
  },
  {
    slug: 'agro-ahorro-ayacucho',
    technologies: ['React Native (Expo)', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    category: 'mobile',
    icon: '🌽',
    images: [],
  },
  {
    slug: 'nobicursos',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    demoLink: 'https://nobicursos.vercel.app/',
    githubLink: 'https://github.com/wilito48/Nobicursos.git',
    category: 'web',
    icon: '🎓',
    images: ['img1.jpg'],
  },
  {
    slug: 'vesfay',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    demoLink: 'https://tienda-vesfay-xd.vercel.app/',
    githubLink: 'https://github.com/wilito48/tienda_vesfay_xd.git',
    category: 'web',
    icon: '🛍️',
    images: ['img1.jpg'],
  },
  {
    slug: 'inventario-olla',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    githubLink: 'https://github.com/wilito48/inventario_olla.git',
    category: 'mobile',
    icon: '📱',
    images: ['img1.jpg'],
  },
  {
    slug: 'votacion-electronica',
    technologies: ['Java', 'Java Swing', 'MySQL', 'XAMPP'],
    githubLink: 'https://github.com/wilito48/PracticaCampo14.git',
    category: 'desktop',
    icon: '🗳️',
    images: ['img1.jpg'],
  },
  {
    slug: 'portafolio',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    demoLink: 'https://portafolio-sigma-fawn.vercel.app/',
    githubLink: 'https://github.com/wilito48/portafolio.git',
    category: 'web',
    icon: '🚀',
    images: ['img1.jpg'],
  },
  {
    slug: 'cursos-platform',
    technologies: ['Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    githubLink: 'https://github.com/kervynwilly/cursos-platform',
    category: 'web',
    icon: '🎓',
    images: [],
  },
];

const toImage = (project) => (entry) => {
  const image = typeof entry === 'string' ? { file: entry } : entry;
  return {
    src: `${import.meta.env.BASE_URL}images/proyectos/${project.slug}/${image.file}`,
    device: image.device || CATEGORIES[project.category].defaultDevice,
  };
};

export const projects = projectData.map((project) => ({
  ...project,
  images: project.images.map(toImage(project)),
}));
