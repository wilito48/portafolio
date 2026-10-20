import { FaDatabase, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import spanishFlag from '../assets/icons/flags/es.png';
import englishFlag from '../assets/icons/flags/en.png';

export const skillCategories = [
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      'Node.js',
      'TypeScript',
      'Express',
      'NestJS',
      'Java',
      'Spring Boot',
      'Python',
      'APIs REST',
      'Webhooks',
      'JWT',
      'Socket.IO',
    ],
  },
  {
    title: 'Frontend y Móvil',
    icon: FaLayerGroup,
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'React Native (Expo)', 'Flutter'],
  },
  {
    title: 'Bases de Datos e IA',
    icon: FaDatabase,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'LangChain', 'OpenAI API'],
  },
  {
    title: 'Pruebas y DevOps',
    icon: FaTools,
    skills: ['Jest', 'JUnit', 'Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx'],
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo', tone: 'native', flag: spanishFlag },
  { name: 'Inglés', level: 'Básico (lectura técnica)', tone: 'learning', flag: englishFlag },
];
