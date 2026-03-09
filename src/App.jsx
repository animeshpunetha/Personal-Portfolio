import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Analytics from './components/Analytics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Power } from 'lucide-react';
import { useCyberSound } from './hooks/useCyberSound';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playBootSound, playClickSound } = useCyberSound();

  const handleInitialize = () => {
    playClickSound();
    playBootSound();
    setIsInitialized(true);
  };

  return (
    <div className="bg-obsidian min-h-screen text-slate-300 font-sans selection:bg-matrix/30 selection:text-white overflow-x-hidden">
      <div className="bg-grid"></div>

      {/* ── BOOT SCREEN ── shown while not initialized */}
      <AnimatePresence>
        {!isInitialized && (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center overflow-hidden"
          >
            {/* Grid bg on boot screen */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.06)_0%,_transparent_70%)] pointer-events-none" />

            <motion.button
              onClick={handleInitialize}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex flex-col items-center gap-4 bg-black/50 border border-matrix/40 text-matrix p-12 sm:p-16 rounded-2xl backdrop-blur-xl"
            >
              {/* Outer ring ping animation */}
              <span className="absolute inset-0 rounded-2xl border border-matrix/20 animate-ping opacity-30 pointer-events-none" />

              <Power size={52} className="animate-pulse drop-shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
              <span className="font-mono text-xl sm:text-2xl tracking-widest uppercase mt-4">
                Initialize System
              </span>
              <span className="font-mono text-xs text-matrix/50">Click to boot session</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── fades in after initialization */}
      <AnimatePresence>
        {isInitialized && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Fixed Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5 p-4 flex justify-between items-center px-4 md:px-6">
              <div
                className="font-mono text-matrix font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] cursor-pointer text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                AP<span className="animate-pulse">_</span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-6 font-mono text-xs">
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">/about</a>
                <a href="#analytics" className="text-slate-400 hover:text-white transition-colors">/analytics</a>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">/experience</a>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">/projects</a>
                <a href="#techstack" className="text-slate-400 hover:text-white transition-colors">/tech</a>
              </nav>

              {/* Mobile Nav Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-slate-300 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </header>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed top-[60px] left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 z-40 p-6 flex flex-col gap-6 font-mono text-sm md:hidden shadow-2xl"
                >
                  <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors border-b border-white/5 pb-4">/about</a>
                  <a href="#analytics" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors border-b border-white/5 pb-4">/analytics</a>
                  <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors border-b border-white/5 pb-4">/experience</a>
                  <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors border-b border-white/5 pb-4">/projects</a>
                  <a href="#techstack" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors pb-2">/tech</a>
                </motion.div>
              )}
            </AnimatePresence>

            <main>
              <Hero />
              <About />
              <Analytics />
              <Experience />
              <Projects />
              <TechStack />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
