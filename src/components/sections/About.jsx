import SectionHeader from '../ui/SectionHeader';
import ExperienceTimeline from '../about/ExperienceTimeline';
import StatCounter from '../about/StatCounter';
import StoryText from '../about/StoryText';
import { certifications, experience, sectionIcons, stats, traits } from '../../data/about';
import { useLanguage } from '../../hooks/useLanguage';

const CARD =
  'rounded-xl bg-surface shadow-[0_4px_6px_rgba(0,0,0,0.05)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] dark:border dark:border-line';

const SubsectionTitle = ({ icon, children }) => (
  <h3
    data-reveal
    className="mb-8 flex items-center justify-center gap-4 text-center text-2xl font-semibold text-ink md:text-[1.75rem]"
  >
    <img src={icon} alt="" className="size-[45px] object-contain" />
    {children}
  </h3>
);

const TraitIcon = ({ icon: Icon, title }) =>
  typeof Icon === 'string' ? (
    <img src={Icon} alt={title} className="size-[55px] object-contain transition-transform hover:scale-110" />
  ) : (
    <Icon className="text-5xl text-primary" aria-hidden="true" />
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
        <SectionHeader title={about.title} subtitle={about.subtitle} />

        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-15">
          <div>
            <h3 data-reveal className="mb-5 text-2xl font-semibold text-ink">
              {about.storyTitle}
            </h3>
            <StoryText key={lang} paragraphs={about.story} />
          </div>

          <div className="grid grid-cols-2 gap-4 self-center sm:gap-7">
            {stats.map((stat) => (
              <StatCounter
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={about.stats[stat.id]}
                className={`${CARD} px-4 py-7 text-center sm:px-5`}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SubsectionTitle icon={sectionIcons.experience}>{about.experienceTitle}</SubsectionTitle>
          <ExperienceTimeline items={timeline} />
        </div>

        <div className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-7">
          {traits.map(({ id, icon }) => {
            const { title, text } = about.traits[id];
            return (
              <div key={id} data-reveal className={`${CARD} p-7 text-center`}>
                <div className="mb-5 flex justify-center">
                  <TraitIcon icon={icon} title={title} />
                </div>
                <h4 className="mb-3.5 text-xl font-semibold text-ink">{title}</h4>
                <p className="leading-relaxed text-ink-muted">{text}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <SubsectionTitle icon={sectionIcons.education}>{about.educationTitle}</SubsectionTitle>
          <div
            data-reveal
            className="flex flex-col gap-4 rounded-xl border-l-4 border-primary bg-surface p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] sm:flex-row sm:items-start sm:justify-between md:p-8 dark:border-y dark:border-r dark:border-y-line dark:border-r-line"
          >
            <div className="flex items-start gap-5">
              <img
                src={sectionIcons.university}
                alt="Universidad Privada del Norte"
                className="size-[45px] object-contain"
              />
              <div>
                <h4 className="mb-2 text-xl font-semibold text-ink">{about.education.degree}</h4>
                <p className="mb-1 text-ink-muted">{about.education.institution}</p>
                <p className="text-sm font-medium text-ink-faint">{about.education.detail}</p>
              </div>
            </div>
            <span className="self-start rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
              {about.education.status}
            </span>
          </div>
        </div>

        <div>
          <SubsectionTitle icon={sectionIcons.certifications}>{about.certificationsTitle}</SubsectionTitle>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {certifications.map((id) => {
              const { title, issuer } = about.certifications[id];
              return (
                <div key={id} data-reveal className={`${CARD} p-6`}>
                  <div className="mb-2.5 flex items-center gap-4">
                    <img src={sectionIcons.certification} alt="" className="size-10 shrink-0 object-contain" />
                    <h4 className="text-lg font-semibold text-ink">{title}</h4>
                  </div>
                  <p className="text-sm text-ink-muted">{issuer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
