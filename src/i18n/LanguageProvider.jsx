import { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './languageContext';
import { DEFAULT_LANGUAGE, LANGUAGES, locales } from './locales';

const STORAGE_KEY = 'lang';

const getInitialLanguage = () => {
  const current = document.documentElement.getAttribute('lang');
  return LANGUAGES.includes(current) ? current : DEFAULT_LANGUAGE;
};

const persistLanguage = (lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
};

const defaultTitle = (t) => t.meta.title;

export const LanguageProvider = ({ children, getTitle = defaultTitle }) => {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = locales[lang];

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.title = getTitle(t);
    persistLanguage(lang);
  }, [lang, t, getTitle]);

  const toggleLanguage = useCallback(() => setLang((current) => (current === 'es' ? 'en' : 'es')), []);
  const value = useMemo(() => ({ lang, t, toggleLanguage }), [lang, t, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
