import { FaLinkedin } from 'react-icons/fa';
import { profile } from './profile';
import locationIcon from '../assets/icons/contact/location.png';
import phoneIcon from '../assets/icons/contact/phone.png';
import emailIcon from '../assets/icons/contact/email.png';
import whatsappIcon from '../assets/icons/contact/whatsapp.png';
import githubIcon from '../assets/icons/contact/github.png';

export const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: emailIcon },
  { label: 'WhatsApp', value: profile.phone.display, href: profile.whatsapp, icon: whatsappIcon, external: true },
  {
    label: 'LinkedIn',
    value: profile.linkedin.user,
    href: profile.linkedin.url,
    icon: FaLinkedin,
    iconColor: '#0A66C2',
    external: true,
  },
  {
    label: 'GitHub',
    value: profile.github.user,
    href: profile.github.url,
    icon: githubIcon,
    invertOnDark: true,
    external: true,
  },
  { label: 'Teléfono', value: profile.phone.display, href: profile.phone.href, icon: phoneIcon },
  { label: 'Ubicación', value: profile.location, href: profile.mapsUrl, icon: locationIcon, external: true },
];
