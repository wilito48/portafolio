import { useRef } from 'react';
import Button from '../ui/Button';
import DownloadCV from '../ui/DownloadCV';
import Magnetic from '../ui/Magnetic';
import ProfileOrbit from '../hero/ProfileOrbit';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import { gsap, MOTION_OK, SplitText, useGSAP } from '../../lib/gsap';

const BUTTON_WIDTH = 'w-full max-w-[250px] sm:w-auto';
const SIDE_BY_SIDE = '(min-width: 1024px)';
const PARALLAX = (trigger) => ({ trigger, start: 'top top', end: 'bottom top', scrub: true });

const Hero = () => {
  const scopeRef = useRef(null);
  const { lang, t } = useLanguage();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const role = SplitText.create('[data-hero-role]', { type: 'words,chars', mask: 'words' });

        gsap
          .timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
          .from('[data-hero-item]', { autoAlpha: 0, y: 30, stagger: 0.07, duration: 0.7 })
          .from(role.chars, { yPercent: 110, duration: 0.6, stagger: 0.02 }, 0.3)
          .from(
            '[data-hero-chip]',
            { autoAlpha: 0, y: 12, scale: 0.85, stagger: 0.08, duration: 0.5, ease: 'back.out(2)' },
            0.7
          )
          .from('[data-hero-photo]', { autoAlpha: 0, x: 40, scale: 0.95 }, 0.3)
          .from('[data-hero-underline]', { backgroundSize: '0% 4px', duration: 0.8 }, 0.6);

        gsap.to('[data-hero-grid]', { yPercent: 18, ease: 'none', scrollTrigger: PARALLAX(scopeRef.current) });
      });

      gsap.matchMedia().add(`${MOTION_OK} and ${SIDE_BY_SIDE}`, () => {
        const parallax = PARALLAX(scopeRef.current);
        gsap.to('[data-hero-depth]', { yPercent: -18, ease: 'none', scrollTrigger: parallax });
        gsap.to('[data-hero-text]', { y: 80, autoAlpha: 0.3, ease: 'none', scrollTrigger: parallax });
      });
    },
    { scope: scopeRef }
  );

  return (
    <section
      id="home"
      ref={scopeRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-24 pb-16"
    >
      <div
        data-hero-grid
        aria-hidden="true"
        className="absolute inset-x-0 -top-[10%] h-[120%] bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-size-[72px_72px] opacity-70 dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] dark:opacity-100"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:text-left">
        <div data-hero-text className="flex flex-col items-center lg:items-start">
          <span
            data-hero-item
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-300"
          >
            <span className="relative size-2 rounded-full bg-emerald-400 after:absolute after:inset-0 after:animate-ping-soft after:rounded-full after:bg-emerald-400" />
            {t.profile.availability}
          </span>

          <h1
            data-hero-item
            className="mb-4 text-[2rem] leading-tight font-extrabold text-ink sm:text-[2.5rem] lg:text-5xl xl:text-[3.5rem]"
          >
            {t.hero.greeting}{' '}
            <span
              data-hero-underline
              className="bg-[linear-gradient(currentColor,currentColor)] box-decoration-clone bg-size-[100%_4px] bg-bottom-left bg-no-repeat pb-1 text-primary"
            >
              {profile.name}
            </span>
          </h1>

          <h2 key={lang} data-hero-role className="mb-4 text-lg font-semibold text-ink-muted sm:text-xl md:text-2xl">
            {t.profile.role}
          </h2>

          <ul className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {profile.stack.map((tech) => (
              <li
                key={tech}
                data-hero-chip
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p data-hero-item className="mb-8 text-[0.95rem] leading-[1.7] text-ink-muted sm:text-base md:text-lg">
            {t.profile.summary}
          </p>

          <div
            data-hero-item
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Magnetic className={BUTTON_WIDTH}>
              <Button href="#projects" className="w-full">
                {t.hero.viewProjects}
              </Button>
            </Magnetic>
            <Magnetic className={BUTTON_WIDTH}>
              <Button href="#contact" variant="secondary" className="w-full">
                {t.hero.contact}
              </Button>
            </Magnetic>
            <Magnetic className={BUTTON_WIDTH}>
              <DownloadCV className="w-full" />
            </Magnetic>
          </div>
        </div>

        <div data-hero-depth className="flex items-center justify-center">
          <ProfileOrbit>
            <div
              data-hero-photo
              className="relative size-[150px] overflow-hidden rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-white sm:size-[200px] lg:size-[250px] xl:size-[300px] dark:ring-slate-800"
            >
              <img
                src={profile.photo}
                alt={t.hero.photoAlt(profile.name)}
                width="300"
                height="300"
                fetchPriority="high"
                className="size-full object-cover"
              />
              <span
                className="absolute -inset-1/2 animate-shine bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.12),transparent)]"
                aria-hidden="true"
              />
            </div>
          </ProfileOrbit>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="relative h-[30px] w-0.5 animate-bounce-soft bg-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-x-4 after:border-t-6 after:border-x-transparent after:border-t-primary" />
      </div>
    </section>
  );
};

export default Hero;
