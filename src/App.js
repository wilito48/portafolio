import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import './styles/themes.css';
import './styles/buttons.css';

function App() {
  useEffect(() => {
    // Agregar clase para indicar que JavaScript está cargado
    document.documentElement.classList.add('js-loaded');
    
    // Limpiar al desmontar
    return () => {
      document.documentElement.classList.remove('js-loaded');
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App; 