import { useRef } from 'react';
import { integrations } from '../../data/integrations';
import { useLanguage } from '../../hooks/useLanguage';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const ORBIT_DURATION = 40;
const HOVER_SPEED = 0.15;

const OrbitChip = ({ name, icon: Icon, color, angle }) => (
  <li
    style={{ '--angle': `${angle}deg` }}
    className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_rotate(var(--angle))_translateX(var(--orbit-radius))_rotate(calc(var(--angle)*-1))]"
  >
    <span
      data-orbit-chip
      title={name}
      className="flex size-9 items-center justify-center rounded-full border border-line bg-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.25)] sm:size-11 dark:bg-slate-800"
    >
      <Icon
        aria-hidden="true"
        className={`size-4 sm:size-5 ${color ? '' : 'text-slate-900 dark:text-white'}`}
        style={color ? { color } : undefined}
      />
      <span className="sr-only">{name}</span>
    </span>
  </li>
);

const ProfileOrbit = ({ children }) => {
  const scopeRef = useRef(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('[data-orbit-chip]', {
          scale: 0,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.9,
          ease: 'back.out(2)',
        });
        gsap.from('[data-orbit-ring]', { scale: 0.85, autoAlpha: 0, duration: 1, delay: 0.6, ease: 'power3.out' });

        const spin = gsap
          .timeline({ repeat: -1, defaults: { duration: ORBIT_DURATION, ease: 'none' } })
          .to('[data-orbit]', { rotation: 360 }, 0)
          .to('[data-orbit-chip]', { rotation: -360 }, 0);

        const element = scopeRef.current;
        const slowDown = () => gsap.to(spin, { timeScale: HOVER_SPEED, duration: 0.6 });
        const speedUp = () => gsap.to(spin, { timeScale: 1, duration: 0.6 });
        element.addEventListener('pointerenter', slowDown);
        element.addEventListener('pointerleave', speedUp);
        return () => {
          element.removeEventListener('pointerenter', slowDown);
          element.removeEventListener('pointerleave', speedUp);
        };
      });
    },
    { scope: scopeRef }
  );

  return (
    <figure className="flex flex-col items-center gap-7 sm:gap-8">
      <div
        ref={scopeRef}
        className="relative grid place-items-center p-6 [--orbit-radius:99px] sm:p-7 sm:[--orbit-radius:128px] lg:p-8 lg:[--orbit-radius:157px] xl:p-9 xl:[--orbit-radius:186px]"
      >
        <span
          aria-hidden="true"
          className="absolute inset-8 rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)] opacity-30 blur-2xl dark:opacity-40"
        />
        <span
          data-orbit-ring
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 dark:border-blue-400/25"
        />
        <ul data-orbit aria-label={t.hero.integrationsLabel} className="absolute inset-0">
          {integrations.map((integration, index) => (
            <OrbitChip key={integration.name} {...integration} angle={(360 / integrations.length) * index - 90} />
          ))}
        </ul>
        {children}
      </div>
      <figcaption className="text-xs font-medium text-ink-faint">{t.hero.integrationsCaption}</figcaption>
    </figure>
  );
};

export default ProfileOrbit;
