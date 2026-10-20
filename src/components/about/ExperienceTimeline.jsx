import { useRef } from 'react';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../../lib/gsap';

const LINE_POSITION = 'left-[9px] md:left-[49px]';
const TRIGGER_POINT = 'top 60%';

const ExperienceCard = ({ item }) => (
  <article className="group relative flex-1 overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)] before:transition-transform before:duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:before:scale-x-100 md:p-7">
    <header className="mb-5 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
      <span className="flex size-[55px] shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)] shadow-[0_8px_20px_-8px_rgba(139,92,246,0.7)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
        <img src={item.icon} alt="" className="size-8 object-contain brightness-0 invert" />
      </span>
      <div>
        <h4 className="mb-1.5 text-xl leading-snug font-bold text-ink">{item.role}</h4>
        <p className="mb-1 text-lg font-semibold text-indigo-600 dark:text-indigo-300">{item.company}</p>
        <p className="mb-2.5 text-[0.95rem] font-medium text-ink-muted">{item.location}</p>
        <span className="inline-block rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_4px_15px_-4px_rgba(99,102,241,0.55)]">
          {item.period}
        </span>
      </div>
    </header>

    <p className="mb-5 leading-relaxed font-medium text-ink-muted">{item.description}</p>

    {item.stack.length > 0 && (
      <ul className="mb-5 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    )}

    {item.highlights.length > 0 && (
      <ul className="grid gap-3">
        {item.highlights.map((text) => (
          <li
            key={text}
            className="relative pl-6 text-[0.95rem] leading-relaxed font-medium text-ink-muted transition-all before:absolute before:left-0 before:text-xl before:leading-6 before:font-bold before:text-violet-500 before:content-['•'] hover:translate-x-1 hover:text-ink"
          >
            {text}
          </li>
        ))}
      </ul>
    )}
  </article>
);

const ExperienceTimeline = ({ items }) => {
  const listRef = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.set('[data-timeline-progress]', { scaleY: 0 });
        gsap.to('[data-timeline-progress]', {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: listRef.current, start: TRIGGER_POINT, end: 'bottom 60%', scrub: 0.4 },
        });

        gsap.utils.toArray('[data-timeline-dot]').forEach((dot) => {
          ScrollTrigger.create({
            trigger: dot,
            start: TRIGGER_POINT,
            onEnter: () => dot.classList.add('is-lit'),
            onLeaveBack: () => dot.classList.remove('is-lit'),
          });
        });
      });
    },
    { scope: listRef }
  );

  return (
    <ol ref={listRef} className="relative mx-auto max-w-[900px]">
      <span
        aria-hidden="true"
        className={`absolute top-3 bottom-0 w-[3px] overflow-hidden rounded-full bg-indigo-500/15 dark:bg-slate-700 ${LINE_POSITION}`}
      >
        <span
          data-timeline-progress
          className="block size-full origin-top rounded-full bg-[linear-gradient(180deg,#3b82f6,#8b5cf6,#ec4899)]"
        />
      </span>

      {items.map((item) => (
        <li key={item.id} data-reveal className="relative flex items-start gap-4 pb-11 last:pb-0 md:gap-8">
          <span className="relative z-10 mt-1 flex shrink-0 justify-center md:w-[100px]" aria-hidden="true">
            <span
              data-timeline-dot
              className="size-5 rounded-full border-4 border-surface-muted bg-indigo-200 shadow-[0_0_0_3px_rgba(99,102,241,0.35)] transition-all duration-500 dark:bg-slate-600 [&.is-lit]:scale-125 [&.is-lit]:bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] [&.is-lit]:shadow-[0_0_0_3px_#6366f1,0_0_20px_rgba(99,102,241,0.7)]"
            />
          </span>
          <ExperienceCard item={item} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
