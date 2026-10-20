import { FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrolledPast } from '../../hooks/useScrolledPast';

const BackToTop = () => {
  const isVisible = useScrolledPast(300);
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.ui.backToTop}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] text-lg text-white shadow-[0_8px_20px_-6px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-1 md:right-8 md:bottom-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
