import { FaShieldAlt } from 'react-icons/fa';
import organizedIcon from '../assets/icons/about/organized.png';
import proactiveIcon from '../assets/icons/about/proactive.png';
import creativeIcon from '../assets/icons/about/creative.png';
import curiousIcon from '../assets/icons/about/curious.png';
import awardIcon from '../assets/icons/about/award.png';
import certificateIcon from '../assets/icons/about/certificate.png';
import graduationIcon from '../assets/icons/about/graduation.png';
import universityIcon from '../assets/icons/about/university.png';
import { projects } from './projects';

export const sectionIcons = {
  education: graduationIcon,
  certifications: certificateIcon,
  certification: awardIcon,
  experience: awardIcon,
  university: universityIcon,
};

export const story = [
  'Soy desarrollador Full Stack Junior y estudiante del último ciclo de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte, en Lima.',
  'En STARSOFT participé en el backend, la web y la app móvil de dos CRM SaaS multiempresa en producción, con integraciones de Meta, TikTok y Mailchimp, suscripciones con Culqi, seguridad multi-tenant y caché con Redis.',
  'Antes, en la Asociación Tecnológica del Perú, audité la seguridad de su plataforma web, integré login y registro vía APIs y automaticé contenido de marketing con IA. Me interesa seguir construyendo productos reales junto a un equipo.',
];

export const stats = [
  { value: 8, label: 'Meses de experiencia' },
  { value: 500, suffix: '+', label: 'Commits en producción' },
  { value: 2, label: 'Prácticas profesionales' },
  { value: projects.length, label: 'Proyectos' },
];

export const traits = [
  { title: 'Organizado', text: 'Metodologías claras y estructuradas para cada proyecto', icon: organizedIcon },
  { title: 'Proactivo', text: 'Iniciativa para aprender nuevas tecnologías y resolver problemas', icon: proactiveIcon },
  {
    title: 'Seguridad',
    text: 'Aislamiento multi-tenant, JWT, cifrado y auditoría de vulnerabilidades',
    icon: FaShieldAlt,
  },
  { title: 'Creativo', text: 'Soluciones prácticas para desafíos técnicos reales', icon: creativeIcon },
  { title: 'Curioso', text: 'Interés constante por nuevas tecnologías, IA y buenas prácticas', icon: curiousIcon },
  { title: 'Dedicado', text: 'Compromiso con cada entrega, del desarrollo a producción', icon: awardIcon },
];

export const education = {
  degree: 'Ingeniería de Sistemas Computacionales',
  institution: 'Universidad Privada del Norte – Lima, Perú',
  detail: 'Último ciclo',
  status: 'En curso',
};

export const certifications = [
  { title: 'Analista CyberSOC Nivel 1', issuer: 'Resility Academy (Ene. 2025)' },
  { title: 'Ciberseguridad: Ethical Hacking', issuer: 'Universidad Nacional de Ingeniería (UNI) - 20/20' },
  { title: 'Hacking Ético: Offensive and Defensive Básico', issuer: 'ExorciseThat Global Cybersecurity - 97/100' },
  { title: 'Fundamentos de Ciberseguridad', issuer: 'ITEC - 18/20' },
];

export const experience = [
  {
    role: 'Practicante de Programación',
    company: 'STARSOFT',
    location: 'Lima, Perú',
    period: 'Jun 2026 - Sep 2026',
    icon: proactiveIcon,
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
  {
    role: 'Practicante de Ingeniería de Sistemas',
    company: 'Asociación Tecnológica del Perú',
    location: 'Lima, Perú',
    period: 'Ene 2026 - Abr 2026',
    icon: creativeIcon,
    description: 'Seguridad web, pruebas funcionales, APIs REST, bases de datos y automatización con IA.',
    stack: ['APIs REST', 'Seguridad web', 'Bases de datos', 'IA'],
    highlights: [
      'Auditoría de seguridad de la plataforma web: vulnerabilidades críticas, CVEs y plan de mitigación.',
      'Integración de login y registro con el backend vía APIs, con pruebas funcionales y de rendimiento.',
      'Diseño de una base de datos para el registro y seguimiento de empresas prospecto.',
      'Automatización de contenido de marketing integrando Telegram con Meta AI.',
    ],
  },
  {
    role: 'Ingeniería de Sistemas Computacionales',
    company: 'Universidad Privada del Norte',
    location: 'Lima, Perú',
    period: 'Último ciclo',
    icon: graduationIcon,
    description: 'Estudiante del último ciclo, con enfoque en desarrollo de software y ciberseguridad.',
    stack: [],
    highlights: [],
  },
];
