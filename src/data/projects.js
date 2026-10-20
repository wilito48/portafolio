import {
  LuBookOpen,
  LuBuilding2,
  LuGlobe,
  LuGraduationCap,
  LuMonitor,
  LuPackage,
  LuPanelsTopLeft,
  LuSchool,
  LuShoppingBag,
  LuSmartphone,
  LuVote,
  LuWallet,
  LuWheat,
} from 'react-icons/lu';

export const CATEGORIES = {
  web: { icon: LuGlobe, defaultDevice: 'screen' },
  mobile: { icon: LuSmartphone, defaultDevice: 'phone' },
  desktop: { icon: LuMonitor, defaultDevice: 'screen' },
};

const projectData = [
  {
    slug: 'arquitectura',
    featured: true,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    demoLink: 'https://arquitectura-omega.vercel.app/',
    githubLink: 'https://github.com/wilito48/arquitectura.git',
    category: 'web',
    icon: LuBuilding2,
    images: ['img1.jpg'],
  },
  {
    slug: 'ruta-academica',
    featured: true,
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    category: 'web',
    icon: LuBookOpen,
    images: [],
  },
  {
    slug: 'z-erok',
    featured: true,
    technologies: ['Flutter', 'Firebase', 'Java', 'Spring Boot', 'PostgreSQL'],
    category: 'mobile',
    icon: LuWallet,
    images: [],
  },
  {
    slug: 'agro-ahorro-ayacucho',
    featured: true,
    technologies: ['React Native (Expo)', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    category: 'mobile',
    icon: LuWheat,
    images: [],
  },
  {
    slug: 'nobicursos',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    demoLink: 'https://nobicursos.vercel.app/',
    githubLink: 'https://github.com/wilito48/Nobicursos.git',
    category: 'web',
    icon: LuGraduationCap,
    images: ['img1.jpg'],
  },
  {
    slug: 'vesfay',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    demoLink: 'https://tienda-vesfay-xd.vercel.app/',
    githubLink: 'https://github.com/wilito48/tienda_vesfay_xd.git',
    category: 'web',
    icon: LuShoppingBag,
    images: ['img1.jpg'],
  },
  {
    slug: 'inventario-olla',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    githubLink: 'https://github.com/wilito48/inventario_olla.git',
    category: 'mobile',
    icon: LuPackage,
    images: ['img1.jpg'],
  },
  {
    slug: 'votacion-electronica',
    technologies: ['Java', 'Java Swing', 'MySQL', 'XAMPP'],
    githubLink: 'https://github.com/wilito48/PracticaCampo14.git',
    category: 'desktop',
    icon: LuVote,
    images: ['img1.jpg'],
  },
  {
    slug: 'portafolio',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    demoLink: 'https://portafolio-sigma-fawn.vercel.app/',
    githubLink: 'https://github.com/wilito48/portafolio.git',
    category: 'web',
    icon: LuPanelsTopLeft,
    images: ['img1.jpg'],
  },
  {
    slug: 'cursos-platform',
    technologies: ['Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    githubLink: 'https://github.com/kervynwilly/cursos-platform',
    category: 'web',
    icon: LuSchool,
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
