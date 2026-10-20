import { LuBookOpenText } from 'react-icons/lu';
import IconTile from '../ui/IconTile';
import SectionHeader from '../ui/SectionHeader';
import ExperienceTimeline from '../about/ExperienceTimeline';
import StatCounter from '../about/StatCounter';
import StoryText from '../about/StoryText';
import { certifications, experience, sectionIcons, stats, traits } from '../../data/about';
import { useLanguage } from '../../hooks/useLanguage';

const TILE =
  'relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_18px_40px_-16px_rgba(99,102,241,0.35)] md:p-7';

const TileTitle = ({ icon, children }) => (
  <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-ink">
    <IconTile icon={icon} size="sm" />
    {children}
  </h3>
);

const About = () => {
  const { lang, t } = useLanguage();
  const { about } = t;
  const timeline = experience.map((item) => ({
    ...item,
    ...about.experience[item.id],
    location: t.profile.location,
  }));

  return (
    <section id="about" className="bg-surface-muted py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader index="01" label={t.nav.about} title={about.title} subtitle={about.subtitle} />

        <div className="mb-20 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          <article data-reveal className={`${TILE} col-span-2 lg:row-span-2`}>
            <TileTitle icon={LuBookOpenText}>{about.storyTitle}</TileTitle>
            <StoryText key={lang} paragraphs={about.story} />
          </article>

          {stats.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={about.stats[stat.id]}
              className={`${TILE} flex flex-col items-center justify-center text-center`}
            />
          ))}

          <article data-reveal className={`${TILE} col-span-2`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <IconTile icon={sectionIcons.education} size="lg" />
                <div>
                  <p className="mb-1 text-xs font-bold tracking-[0.15em] text-ink-faint uppercase">
                    {about.educationTitle}
                  </p>
                  <h3 className="mb-1 text-xl font-bold text-ink">{about.education.degree}</h3>
                  <p className="text-ink-muted">{about.education.institution}</p>
                  <p className="text-sm font-medium text-ink-faint">{about.education.detail}</p>
                </div>
              </div>
              <span className="self-start rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] px-3 py-1 text-sm font-semibold whitespace-nowrap text-white">
                {about.education.status}
              </span>
            </div>
          </article>

          <article data-reveal className={`${TILE} col-span-2 lg:row-span-2`}>
            <TileTitle icon={sectionIcons.certifications}>{about.certificationsTitle}</TileTitle>
            <ul className="divide-y divide-line">
              {certifications.map((id) => {
                const { title, issuer } = about.certifications[id];
                return (
                  <li key={id} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                    <IconTile icon={sectionIcons.certification} size="sm" variant="soft" />
                    <div>
                      <p className="font-semibold text-ink">{title}</p>
                      <p className="text-sm text-ink-muted">{issuer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>

          <article data-reveal className={`${TILE} col-span-2`}>
            <TileTitle icon={sectionIcons.experience}>{about.traitsTitle}</TileTitle>
            <ul className="grid gap-4 sm:grid-cols-2">
              {traits.map(({ id, icon }) => {
                const { title, text } = about.traits[id];
                return (
                  <li key={id} className="flex items-start gap-3">
                    <IconTile icon={icon} size="sm" variant="soft" />
                    <div>
                      <p className="font-semibold text-ink">{title}</p>
                      <p className="text-sm leading-snug text-ink-muted">{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>

        <h3
          data-reveal
          className="mb-10 flex items-center justify-center gap-3 text-center text-2xl font-bold text-ink md:text-[1.75rem]"
        >
          <IconTile icon={sectionIcons.experience} />
          {about.experienceTitle}
        </h3>
        <ExperienceTimeline items={timeline} />
      </div>
    </section>
  );
};

export default About;
