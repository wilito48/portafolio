import { useRef, useState } from 'react';
import LanguageToggle from '../ui/LanguageToggle';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import MenuButton from './MenuButton';
import Navigation from './Navigation';
import { navigation } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrolledPast } from '../../hooks/useScrolledPast';

const SECTION_IDS = navigation.map(({ id }) => id);
const SCROLL_GAP = 20;

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const isScrolled = useScrolledPast(50);
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS, headerRef);
  useHideOnScroll(headerRef, isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      setActiveSection(sectionId);
      window.scrollTo({ top: element.offsetTop - headerHeight - SCROLL_GAP, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-white/98 shadow-[0_2px_20px_rgba(0,0,0,0.1)] dark:bg-slate-900/98'
          : 'bg-white/95 dark:bg-slate-900/95'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2 px-4 py-4 sm:gap-4 md:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2 text-lg font-bold whitespace-nowrap text-ink sm:gap-2.5 sm:text-2xl"
        >
          <Logo className="size-9 text-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6 sm:size-10 sm:text-base" />
          <span className="max-[369px]:sr-only">{profile.shortName}</span>
        </a>

        <div className="flex items-center gap-1 lg:gap-3">
          <Navigation isOpen={isMenuOpen} activeId={activeSection} onSelect={scrollToSection} />
          <LanguageToggle />
          <ThemeToggle />
          <MenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((open) => !open)}
            labels={{ open: t.ui.openMenu, close: t.ui.closeMenu }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
