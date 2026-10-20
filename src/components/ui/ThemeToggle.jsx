import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="group flex cursor-pointer items-center justify-center rounded-full p-2 transition hover:bg-blue-500/10"
    >
      <span className="relative block h-[26px] w-[50px] rounded-full border-2 border-line bg-surface-muted">
        <span
          className={`absolute top-px left-px flex size-5 items-center justify-center rounded-full text-[0.7rem] text-white transition-transform duration-300 group-hover:[&>svg]:rotate-12 ${
            isDarkMode ? 'translate-x-6 bg-gray-500' : 'translate-x-0 bg-amber-400'
          }`}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
