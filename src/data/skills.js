import { LuDatabase, LuLayers, LuServer, LuWrench } from 'react-icons/lu';

export const skillCategories = [
  {
    id: 'backend',
    icon: LuServer,
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
    icon: LuLayers,
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'React Native (Expo)', 'Flutter'],
  },
  {
    id: 'data',
    icon: LuDatabase,
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'LangChain', 'OpenAI API'],
  },
  {
    id: 'devops',
    icon: LuWrench,
    skills: ['Jest', 'JUnit', 'Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx'],
  },
];

export const languages = [
  { id: 'es', tone: 'native' },
  { id: 'en', tone: 'learning' },
];
