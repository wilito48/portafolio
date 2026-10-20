import { useRef } from 'react';
import TechIcon from '../ui/TechIcon';
import { skillCategories } from '../../data/skills';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../../lib/gsap';

const technologies = skillCategories.flatMap(({ skills }) => skills);
const LOOP_DURATION = 45;
const MAX_BOOST = 5;

const TechList = ({ hidden }) => (
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4">
    {technologies.map((name) => (
      <li
        key={name}
        className="flex items-center gap-2.5 rounded-full border border-line bg-surface-muted px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink"
      >
        <TechIcon name={name} className="size-5" />
        {name}
      </li>
    ))}
  </ul>
);

const TechMarquee = () => {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const loop = gsap.to('[data-marquee-track]', {
          xPercent: -50,
          ease: 'none',
          duration: LOOP_DURATION,
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100);
          },
        });

        ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (self) => {
            const boost = gsap.utils.clamp(1, MAX_BOOST, Math.abs(self.getVelocity()) / 250);
            gsap
              .timeline()
              .to(loop, { timeScale: self.direction * boost, duration: 0.2, overwrite: true })
              .to(loop, { timeScale: self.direction, duration: 1, ease: 'power1.out' }, '+=0.15');
          },
        });
      });
    },
    { scope: scopeRef }
  );

  return (
    <section
      ref={scopeRef}
      aria-label="Tecnologías con las que trabajo"
      className="overflow-hidden border-y border-line bg-surface py-6"
    >
      <div className="[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div data-marquee-track className="flex w-max">
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
