import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Analytics from './components/Analytics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#fafafa] min-h-screen text-zinc-600 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
      {/* Background Subtle Grid Pattern */}
      <div className="bg-grid"></div>

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 p-4 flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto rounded-b-2xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] mt-0 md:mt-2">


        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="text-zinc-600 hover:text-indigo-600 transition-colors">about</a>
          <a href="#analytics" className="text-zinc-600 hover:text-indigo-600 transition-colors">metrics</a>
          <a href="#experience" className="text-zinc-600 hover:text-indigo-600 transition-colors">experience</a>
          <a href="#projects" className="text-zinc-600 hover:text-indigo-600 transition-colors">projects</a>
          <a href="#techstack" className="text-zinc-600 hover:text-indigo-600 transition-colors">skills</a>
        </nav>

        {/* Contact/Resume Button (CTA in Navbar) */}
        <div className="hidden md:block">
          <a 
            href="mailto:animesh.punetha01@gmail.com"
            className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-600 hover:text-zinc-950 transition-colors p-1 ml-auto"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-4 right-4 bg-white/95 backdrop-blur-xl border border-zinc-200/80 z-40 p-6 flex flex-col gap-4 rounded-2xl shadow-xl md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 font-semibold hover:text-indigo-600 transition-colors border-b border-zinc-100 pb-2">about</a>
            <a href="#analytics" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 font-semibold hover:text-indigo-600 transition-colors border-b border-zinc-100 pb-2">metrics</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 font-semibold hover:text-indigo-600 transition-colors border-b border-zinc-100 pb-2">experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 font-semibold hover:text-indigo-600 transition-colors border-b border-zinc-100 pb-2">projects</a>
            <a href="#techstack" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 font-semibold hover:text-indigo-600 transition-colors pb-2">skills</a>
            <a 
              href="mailto:animesh.punetha01@gmail.com"
              className="mt-2 w-full text-center py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Sections */}
      <main className="pt-24">
        <Hero />
        <About />
        <Analytics />
        <Experience />
        <Projects />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}

export default App;

