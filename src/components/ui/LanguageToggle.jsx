import { useLanguage } from '../../hooks/useLanguage';
import { LANGUAGES } from '../../i18n/locales';

const LanguageToggle = () => {
  const { lang, t, toggleLanguage } = useLanguage();
  const isSecond = lang === LANGUAGES[1];

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.ui.switchLanguage}
      title={t.ui.switchLanguage}
      className="relative flex h-[30px] cursor-pointer items-center rounded-full border-2 border-line bg-surface-muted p-0.5 text-xs font-bold"
    >
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] transition-transform duration-300 ${
          isSecond ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {LANGUAGES.map((code) => (
        <span
          key={code}
          aria-hidden="true"
          className={`relative z-10 w-8 text-center uppercase transition-colors duration-300 ${
            code === lang ? 'text-white' : 'text-ink-muted'
          }`}
        >
          {code}
        </span>
      ))}
    </button>
  );
};

export default LanguageToggle;
