import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';
import ScrollProgress from './components/ScrollProgress';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import EducationSection from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const ScrollToHash = ({ enabled }: { enabled: boolean }) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled || !location.hash) {
      return;
    }

    const target = document.getElementById(location.hash.slice(1));
    if (!target) {
      return;
    }

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => clearTimeout(timer);
  }, [enabled, location.hash]);

  return null;
};

const PortfolioPage = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <ScrollToHash enabled={!isLoading} />
    <Navigation />
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      className="relative z-10"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <EducationSection />
      <Contact />
      <Footer />
    </motion.main>
  </>
);
 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      <ScrollProgress />
      <BackgroundParticles />

      <Routes>
        <Route path="/" element={<PortfolioPage isLoading={isLoading} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
