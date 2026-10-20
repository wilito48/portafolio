import { useRef } from 'react';
import { FaArrowLeft, FaFolderOpen } from 'react-icons/fa';
import Button from '../components/ui/Button';
import LanguageToggle from '../components/ui/LanguageToggle';
import Logo from '../components/ui/Logo';
import ThemeToggle from '../components/ui/ThemeToggle';
import { profile } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { usePointerPosition } from '../hooks/usePointerPosition';
import { gsap, MOTION_OK, useGSAP } from '../lib/gsap';

const DIGITS = ['4', '0', '4'];
const PARALLAX = 18;

const NotFound = () => {
  const scopeRef = useRef(null);
  const drift = useRef(null);
  const { t } = useLanguage();
  const copy = t.notFound;

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('[data-digit]', {
            yPercent: -120,
            autoAlpha: 0,
            rotate: -15,
            duration: 1,
            stagger: 0.12,
            ease: 'bounce.out',
          })
          .from('[data-copy]', { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.1 }, 0.6);

        gsap.to('[data-digit]', {
          y: -14,
          duration: 2.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.35, from: 'start' },
          delay: 1.4,
        });
      });
    },
    { scope: scopeRef }
  );

  usePointerPosition(scopeRef, {
    onMove: ({ x, y, width, height }) => {
      drift.current ??= {
        x: gsap.quickTo('[data-digits]', 'x', { duration: 0.8, ease: 'power3.out' }),
        y: gsap.quickTo('[data-digits]', 'y', { duration: 0.8, ease: 'power3.out' }),
      };
      drift.current.x((0.5 - x / width) * PARALLAX);
      drift.current.y((0.5 - y / height) * PARALLAX);
    },
  });

  return (
    <div
      ref={scopeRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-surface before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] before:bg-size-[72px_72px] before:opacity-70 dark:before:bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] dark:before:opacity-100"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[520px] -translate-1/2 rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)] opacity-20 blur-3xl dark:opacity-25"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a href="/" className="group flex items-center gap-2.5 text-xl font-bold text-ink sm:text-2xl">
          <Logo className="size-9 text-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6 sm:size-10 sm:text-base" />
          {profile.shortName}
        </a>
        <div className="flex items-center gap-1 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
        <div data-digits aria-hidden="true" className="mb-6 flex select-none">
          {DIGITS.map((digit, index) => (
            <span
              key={index}
              data-digit
              className="inline-block text-gradient-vivid text-[clamp(7rem,4rem+18vw,15rem)] leading-none font-extrabold tracking-tighter drop-shadow-[0_20px_40px_rgba(139,92,246,0.25)]"
            >
              {digit}
            </span>
          ))}
        </div>

        <span
          data-copy
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3.5 py-1.5 text-sm font-semibold text-violet-600 dark:text-violet-300"
        >
          {copy.eyebrow}
        </span>
        <h1 data-copy className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">
          {copy.title}
        </h1>
        <p data-copy className="mb-8 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
          {copy.text}
        </p>
        <div data-copy className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href="/" className="w-full max-w-[250px] sm:w-auto">
            <FaArrowLeft aria-hidden="true" />
            {copy.home}
          </Button>
          <Button href="/#projects" variant="secondary" className="w-full max-w-[250px] sm:w-auto">
            <FaFolderOpen aria-hidden="true" />
            {copy.projects}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
