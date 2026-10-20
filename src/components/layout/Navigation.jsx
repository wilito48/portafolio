import { useEffect, useRef } from 'react';
import { navigation } from '../../data/navigation';
import { useLanguage } from '../../hooks/useLanguage';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const DESKTOP = '(min-width: 1024px)';
const MOBILE_MOTION = `(max-width: 1023.98px) and ${MOTION_OK}`;

const NavLink = ({ item, label, isActive, onSelect }) => (
  <li className="relative z-10">
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-current={isActive ? 'location' : undefined}
      className={`group flex w-full cursor-pointer items-center gap-2 border-b border-line px-6 py-4 text-left whitespace-nowrap transition-[background-color,color,translate] duration-300 lg:w-auto lg:rounded-lg lg:border-0 lg:px-3.5 lg:py-2 lg:hover:-translate-y-0.5 xl:px-4 ${
        isActive
          ? 'bg-blue-600/15 font-semibold text-primary lg:bg-transparent'
          : 'font-medium text-ink-muted hover:bg-blue-600/10 hover:text-primary'
      }`}
    >
      <item.icon
        aria-hidden="true"
        className={`size-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
      />
      <span>{label}</span>
    </button>
  </li>
);

const movePill = ({ list, pill, placed }, animate) => {
  const active = list?.querySelector('[aria-current="location"]');
  if (!active || !window.matchMedia(DESKTOP).matches) return;
  const item = active.closest('li');
  const target = { x: item.offsetLeft, width: item.offsetWidth, autoAlpha: 1 };
  if (animate && placed.current && window.matchMedia(MOTION_OK).matches) {
    gsap.to(pill, { ...target, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
  } else {
    gsap.set(pill, target);
  }
  placed.current = true;
};

const Navigation = ({ isOpen, activeId, onSelect }) => {
  const listRef = useRef(null);
  const pillRef = useRef(null);
  const placed = useRef(false);
  const { t } = useLanguage();

  useGSAP(() => movePill({ list: listRef.current, pill: pillRef.current, placed }, true), {
    dependencies: [activeId, t],
    scope: listRef,
  });

  useEffect(() => {
    const handleResize = () => movePill({ list: listRef.current, pill: pillRef.current, placed }, false);
    window.addEventListener('resize', handleResize);
    document.fonts?.ready.then(handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      if (!isOpen) return;
      gsap.matchMedia().add(MOBILE_MOTION, () => {
        gsap.fromTo(
          listRef.current.children,
          { autoAlpha: 0, x: -20 },
          { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.06, delay: 0.05, ease: 'power3.out' }
        );
      });
    },
    { dependencies: [isOpen], scope: listRef }
  );

  return (
    <nav
      aria-label={t.ui.mainNav}
      className={`absolute inset-x-0 top-full border-t border-line bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-[opacity,translate,visibility] duration-300 lg:static lg:border-0 lg:bg-transparent lg:shadow-none ${
        isOpen
          ? 'visible translate-y-0 opacity-100'
          : 'invisible -translate-y-2 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100'
      }`}
    >
      <ul ref={listRef} className="relative flex flex-col lg:flex-row lg:gap-1">
        <span
          ref={pillRef}
          aria-hidden="true"
          className="invisible absolute inset-y-0 left-0 z-0 hidden rounded-lg bg-blue-600/15 lg:block"
        />
        {navigation.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            label={t.nav[item.id]}
            isActive={activeId === item.id}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
