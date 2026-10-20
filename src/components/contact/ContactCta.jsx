import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../../data/profile';

const GHOST_ACTION =
  'flex items-center justify-center gap-3 rounded-[14px] border border-white/14 bg-white/6 px-4 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet-400';

const ContactCta = () => (
  <div
    data-reveal
    className="relative isolate grid items-center gap-8 overflow-hidden rounded-[20px] border border-slate-400/16 bg-slate-950 p-6 text-slate-50 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.55)] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(520px_circle_at_0%_0%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(420px_circle_at_100%_100%,rgba(139,92,246,0.32),transparent_60%),radial-gradient(300px_circle_at_75%_0%,rgba(236,72,153,0.18),transparent_60%)] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] after:[mask-image:radial-gradient(ellipse_at_30%_40%,#000_20%,transparent_75%)] after:bg-size-[32px_32px] sm:p-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12 lg:rounded-3xl lg:p-13 dark:border-slate-400/22"
  >
    <div>
      <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-sm font-semibold text-emerald-300">
        <span className="relative size-2 rounded-full bg-emerald-400 after:absolute after:inset-0 after:animate-ping-soft after:rounded-full after:bg-emerald-400" />
        {profile.availability}
      </span>
      <h3 className="mb-4 text-[clamp(1.6rem,1.1rem+2vw,2.4rem)] leading-[1.15] font-extrabold tracking-tight">
        ¿Interesado en{' '}
        <span className="bg-[linear-gradient(90deg,#60a5fa,#a78bfa,#f472b6)] bg-clip-text text-transparent">
          trabajar juntos
        </span>
        ?
      </h3>
      <p className="max-w-[52ch] text-[1.05rem] leading-[1.7] text-slate-400">
        Desarrollador Full Stack Junior con experiencia en productos SaaS en producción. Hablemos de cómo puedo aportar
        a tu equipo.
      </p>
    </div>

    <div className="flex flex-col gap-3">
      <a
        href={`mailto:${profile.email}`}
        className="group flex items-center gap-3 rounded-[14px] bg-white px-5 py-4 text-slate-900 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(139,92,246,0.85)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet-400"
      >
        <FaEnvelope className="shrink-0 text-lg text-indigo-500" aria-hidden="true" />
        <span className="flex min-w-0 flex-col font-semibold">
          Enviar email
          <small className="truncate text-[0.8rem] font-medium text-slate-500">{profile.email}</small>
        </span>
        <FaArrowRight
          className="ml-auto shrink-0 text-sm transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
      <div className="grid grid-cols-2 gap-3">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={GHOST_ACTION}>
          <FaWhatsapp className="text-lg" aria-hidden="true" />
          WhatsApp
        </a>
        <a href={profile.phone.href} className={GHOST_ACTION}>
          <FaPhoneAlt className="text-lg" aria-hidden="true" />
          Llamar
        </a>
      </div>
    </div>
  </div>
);

export default ContactCta;
