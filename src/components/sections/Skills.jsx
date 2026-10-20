import { useRef } from 'react';
import { LuLanguages } from 'react-icons/lu';
import IconTile from '../ui/IconTile';
import SectionHeader from '../ui/SectionHeader';
import TechIcon from '../ui/TechIcon';
import { languages, skillCategories } from '../../data/skills';
import { useLanguage } from '../../hooks/useLanguage';
import { techLabel } from '../../i18n/localize';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const LEVEL_STYLES = {
  native: 'bg-[linear-gradient(135deg,#10b981,#059669)] shadow-[0_4px_15px_rgba(16,185,129,0.3)]',
  learning: 'bg-[linear-gradient(135deg,#3b82f6,#2563eb)] shadow-[0_4px_15px_rgba(59,130,246,0.3)]',
};

const SkillTile = ({ name, label }) => (
  <li
    data-skill-tile
    className="group flex items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3.5 shadow-[0_3px_12px_rgba(0,0,0,0.06)] transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
  >
    <TechIcon name={name} className="size-7 transition-transform duration-300 group-hover:scale-110" />
    <span className="font-semibold text-ink">{label}</span>
  </li>
);

const LanguagesCard = ({ t }) => (
  <div
    data-reveal
    className="relative overflow-hidden rounded-[14px] border border-blue-500/10 bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)] md:p-9 dark:border-blue-500/20 dark:bg-[linear-gradient(135deg,#1e293b,#334155)]"
  >
    <div className="mb-6 flex items-center gap-4">
      <IconTile icon={LuLanguages} />
      <h3 className="text-2xl font-bold text-ink">{t.skills.languagesTitle}</h3>
    </div>
    <ul className="divide-y divide-line">
      {languages.map(({ id, tone }) => {
        const { name, level } = t.skills.languages[id];
        return (
          <li key={id} className="flex items-center gap-5 py-5 transition-transform hover:translate-x-1">
            <IconTile size="lg" variant="soft" className="text-base tracking-wide uppercase">
              {id}
            </IconTile>
            <div className="flex flex-col gap-1.5">
              <span className="text-lg font-semibold text-ink">{name}</span>
              <span className={`w-fit rounded-full px-3 py-1.5 text-sm font-semibold text-white ${LEVEL_STYLES[tone]}`}>
                {level}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.utils.toArray('[data-skill-grid]').forEach((grid) => {
          const tiles = grid.querySelectorAll('[data-skill-tile]');
          gsap.set(tiles, { autoAlpha: 0, scale: 0.8, y: 16 });
          gsap.to(tiles, {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
            stagger: { each: 0.05, grid: 'auto', from: 'center' },
            scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="skills" ref={sectionRef} className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader index="02" label={t.nav.skills} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {skillCategories.map(({ id, icon: Icon, skills }) => (
            <div
              key={id}
              data-reveal
              className="rounded-[18px] border border-line bg-surface-muted p-5 shadow-[0_6px_25px_rgba(0,0,0,0.08)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:p-7"
            >
              <h3 className="mb-6 flex items-center justify-center gap-3 text-xl font-semibold text-ink md:text-[1.4rem]">
                <IconTile icon={Icon} size="sm" />
                {t.skills.categories[id]}
              </h3>
              <ul data-skill-grid className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
                {skills.map((name) => (
                  <SkillTile key={name} name={name} label={techLabel(name, t)} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <LanguagesCard t={t} />
      </div>
    </section>
  );
};

export default Skills;
