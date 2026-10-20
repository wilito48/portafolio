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

export const stats = [
  { id: 'experience', value: 8 },
  { id: 'commits', value: 500, suffix: '+' },
  { id: 'internships', value: 2 },
  { id: 'projects', value: projects.length },
];

export const traits = [
  { id: 'organized', icon: organizedIcon },
  { id: 'proactive', icon: proactiveIcon },
  { id: 'security', icon: FaShieldAlt },
  { id: 'creative', icon: creativeIcon },
  { id: 'curious', icon: curiousIcon },
  { id: 'dedicated', icon: awardIcon },
];

export const certifications = ['cybersoc', 'ethicalHacking', 'offensiveDefensive', 'fundamentals'];

export const experience = [
  { id: 'starsoft', company: 'STARSOFT', icon: proactiveIcon },
  { id: 'atp', company: 'Asociación Tecnológica del Perú', icon: creativeIcon },
  { id: 'upn', company: 'Universidad Privada del Norte', icon: graduationIcon },
];
