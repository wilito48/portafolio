import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './i18n/LanguageProvider';
import NotFound from './pages/NotFound';
import './index.css';

const notFoundTitle = (t) => t.notFound.metaTitle;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider getTitle={notFoundTitle}>
        <NotFound />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
