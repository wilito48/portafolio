import homeIcon from '../assets/icons/nav/home.png';
import aboutIcon from '../assets/icons/nav/about.png';
import skillsIcon from '../assets/icons/nav/skills.png';
import projectsIcon from '../assets/icons/nav/projects.png';
import contactIcon from '../assets/icons/contact/email.png';

export const navigation = [
  { id: 'home', label: 'Inicio', icon: homeIcon },
  { id: 'about', label: 'Sobre Mí', icon: aboutIcon },
  { id: 'skills', label: 'Habilidades', icon: skillsIcon, invertOnDark: true },
  { id: 'projects', label: 'Proyectos', icon: projectsIcon },
  { id: 'contact', label: 'Contacto', icon: contactIcon },
];
