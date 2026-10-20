import {
  LuAward,
  LuBriefcase,
  LuCompass,
  LuGraduationCap,
  LuLightbulb,
  LuListChecks,
  LuRocket,
  LuSchool,
  LuShieldCheck,
  LuTrophy,
} from 'react-icons/lu';
import { projects } from './projects';

export const sectionIcons = {
  education: LuGraduationCap,
  certifications: LuAward,
  certification: LuShieldCheck,
  experience: LuBriefcase,
  university: LuSchool,
};

export const stats = [
  { id: 'experience', value: 8 },
  { id: 'commits', value: 500, suffix: '+' },
  { id: 'internships', value: 2 },
  { id: 'projects', value: projects.length },
];

export const traits = [
  { id: 'organized', icon: LuListChecks },
  { id: 'proactive', icon: LuRocket },
  { id: 'security', icon: LuShieldCheck },
  { id: 'creative', icon: LuLightbulb },
  { id: 'curious', icon: LuCompass },
  { id: 'dedicated', icon: LuTrophy },
];

export const certifications = ['cybersoc', 'ethicalHacking', 'offensiveDefensive', 'fundamentals'];

export const experience = [
  { id: 'starsoft', company: 'STARSOFT', icon: LuRocket },
  { id: 'atp', company: 'Asociación Tecnológica del Perú', icon: LuShieldCheck },
  { id: 'upn', company: 'Universidad Privada del Norte', icon: LuGraduationCap },
];
