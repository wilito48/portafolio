import {
  FaCode,
  FaEnvelope,
  FaFolder,
  FaGithub,
  FaHeart,
  FaHome,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaReact,
  FaUser,
} from 'react-icons/fa';
import { profile } from '../../data/profile';

const quickLinks = [
  { href: '#home', label: 'Inicio', icon: FaHome },
  { href: '#about', label: 'Sobre Mí', icon: FaUser },
  { href: '#skills', label: 'Habilidades', icon: FaCode },
  { href: '#projects', label: 'Proyectos', icon: FaFolder },
  { href: '#contact', label: 'Contacto', icon: FaEnvelope },
];

const contactLines = [
  { icon: FaMapMarkerAlt, text: profile.location },
  { icon: FaPhone, text: profile.phone.display },
  { icon: FaEnvelope, text: profile.email },
];

const socialLinks = [
  { label: 'GitHub', href: profile.github.url, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin.url, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
];

const FooterHeading = ({ children }) => <h4 className="mb-4 text-lg font-semibold text-white">{children}</h4>;

const Footer = () => (
  <footer className="bg-slate-800 pt-15 pb-5 text-slate-400 dark:border-t dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
      <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        <div>
          <h3 className="mb-5 text-2xl font-semibold text-white">{profile.name}</h3>
          <p className="mb-2.5">{profile.role}</p>
          <p>{profile.stack.join(' · ')}</p>
        </div>

        <div>
          <FooterHeading>Enlaces Rápidos</FooterHeading>
          <ul className="space-y-2.5">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a href={href} className="flex items-center gap-2 transition hover:text-blue-400">
                  <Icon className="text-blue-500" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contacto</FooterHeading>
          <ul className="space-y-2.5">
            {contactLines.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 break-all">
                <Icon className="shrink-0 text-blue-500" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Sígueme</FooterHeading>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
              >
                <Icon className="text-base" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-white/10 pt-5 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <p className="flex items-center gap-1.5">
          Desarrollado con <FaHeart className="animate-heartbeat text-red-500" aria-label="amor" /> usando
          <FaReact className="text-[#61dafb]" aria-label="React" />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
