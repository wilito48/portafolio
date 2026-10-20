import { FaDatabase, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import spanishFlag from '../assets/icons/flags/es.png';
import englishFlag from '../assets/icons/flags/en.png';

export const skillCategories = [
  {
    id: 'backend',
    icon: FaServer,
    skills: [
      'Node.js',
      'TypeScript',
      'Express',
      'NestJS',
      'Java',
      'Spring Boot',
      'Python',
      'REST APIs',
      'Webhooks',
      'JWT',
      'Socket.IO',
    ],
  },
  {
    id: 'frontend',
    icon: FaLayerGroup,
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'React Native (Expo)', 'Flutter'],
  },
  {
    id: 'data',
    icon: FaDatabase,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'LangChain', 'OpenAI API'],
  },
  {
    id: 'devops',
    icon: FaTools,
    skills: ['Jest', 'JUnit', 'Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx'],
  },
];

export const languages = [
  { id: 'es', tone: 'native', flag: spanishFlag },
  { id: 'en', tone: 'learning', flag: englishFlag },
];
