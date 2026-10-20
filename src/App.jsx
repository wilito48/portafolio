import { useRef } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/layout/Header';
import ScrollProgress from './components/layout/ScrollProgress';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TechMarquee from './components/sections/TechMarquee';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

const App = () => {
  const mainRef = useRef(null);
  useScrollReveal(mainRef);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <Header />
      <main ref={mainRef}>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
};

export default App;
