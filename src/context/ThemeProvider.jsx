import { useCallback, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { ThemeContext } from './themeContext';
import { MOTION_OK } from '../lib/gsap';

const STORAGE_KEY = 'theme';
const SWITCHING_CLASS = 'theme-switching';
const REVEAL_DURATION = 650;

const getInitialTheme = () => document.documentElement.getAttribute('data-theme') === 'dark';

const persistTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    return;
  }
};

const revealFrom = ({ x, y }) => {
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.documentElement.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: REVEAL_DURATION, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
  );
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    persistTheme(theme);
  }, [isDarkMode]);

  const toggleTheme = useCallback(
    (origin) => {
      const root = document.documentElement;
      const next = !isDarkMode;
      const apply = () => {
        root.setAttribute('data-theme', next ? 'dark' : 'light');
        flushSync(() => setIsDarkMode(next));
      };

      if (!document.startViewTransition || !window.matchMedia(MOTION_OK).matches) {
        apply();
        return;
      }

      root.classList.add(SWITCHING_CLASS);
      const transition = document.startViewTransition(apply);
      transition.ready.then(() => revealFrom(origin ?? { x: innerWidth / 2, y: 0 }));
      transition.finished.finally(() => root.classList.remove(SWITCHING_CLASS));
    },
    [isDarkMode]
  );

  const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
