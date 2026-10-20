import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from './profile';

export const contactChannels = [
  { id: 'email', value: profile.email, href: `mailto:${profile.email}`, icon: LuMail },
  { id: 'whatsapp', value: profile.phone.display, href: profile.whatsapp, icon: FaWhatsapp, external: true },
  { id: 'linkedin', value: profile.linkedin.user, href: profile.linkedin.url, icon: LuLinkedin, external: true },
  { id: 'github', value: profile.github.user, href: profile.github.url, icon: LuGithub, external: true },
  { id: 'phone', value: profile.phone.display, href: profile.phone.href, icon: LuPhone },
  { id: 'location', href: profile.mapsUrl, icon: LuMapPin, external: true },
];
