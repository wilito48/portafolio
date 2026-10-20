import { LuArrowUpRight, LuHandshake } from 'react-icons/lu';
import IconTile from '../ui/IconTile';
import SectionHeader from '../ui/SectionHeader';
import ContactForm from '../contact/ContactForm';
import ContactCta from '../contact/ContactCta';
import { contactChannels } from '../../data/contact';
import { useLanguage } from '../../hooks/useLanguage';
import { GLASS_CARD } from '../contact/styles';

const ContactChannel = ({ label, value, href, icon, external }) => (
  <a
    href={href}
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    className="group flex items-center gap-4 rounded-xl border border-slate-200/50 bg-slate-50/80 p-3 transition-all duration-300 hover:translate-x-1 hover:border-blue-500/30 hover:bg-blue-500/10 md:p-4 dark:border-slate-400/20 dark:bg-slate-700/80"
  >
    <IconTile icon={icon} size="sm" className="transition-transform duration-300 group-hover:scale-110" />
    <span className="min-w-0">
      <span className="block text-[0.85rem] font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
        {label}
      </span>
      <span className="block truncate font-medium text-slate-800 dark:text-slate-100">{value}</span>
    </span>
    <LuArrowUpRight
      className="ml-auto shrink-0 text-base text-slate-500 opacity-70 transition-all group-hover:translate-x-0.5 group-hover:text-blue-500 group-hover:opacity-100 dark:text-slate-400 dark:group-hover:text-blue-400"
      aria-hidden="true"
    />
  </a>
);

const Contact = () => {
  const { t } = useLanguage();
  const { contact } = t;
  return (
    <section
      id="contact"
      className="relative bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)] py-16 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] md:py-20 dark:bg-[linear-gradient(135deg,#1e293b,#334155)]"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader index="04" label={t.nav.contact} title={contact.title} subtitle={contact.subtitle} />

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-reveal className={GLASS_CARD}>
            <div className="mb-6 flex items-center gap-4">
              <IconTile icon={LuHandshake} />
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{contact.infoTitle}</h3>
            </div>
            <p className="mb-8 leading-relaxed text-slate-500 dark:text-slate-400">{contact.infoText}</p>
            <div className="flex flex-col gap-4">
              {contactChannels.map((channel) => (
                <ContactChannel
                  key={channel.id}
                  {...channel}
                  label={contact.channels[channel.id]}
                  value={channel.value ?? t.profile.location}
                />
              ))}
            </div>
          </div>

          <ContactForm />
        </div>

        <ContactCta />
      </div>
    </section>
  );
};

export default Contact;
