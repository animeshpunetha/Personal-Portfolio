import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import CyberBackground from './CyberBackground';

// Hero now assumes initialization is done — boot logic lives in App.jsx
const Hero = () => {
  const [showInitText, setShowInitText] = useState(true);

  return (
    <section className="min-h-screen flex flex-col justify-center relative z-10 px-4 sm:px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian/80 select-none pointer-events-none z-0"></div>

      {/* Dynamic Canvas Background */}
      <CyberBackground />

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-start mt-[-10vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8 text-matrix font-mono bg-matrix/10 px-4 py-2 rounded-md border border-matrix/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        >
          <Terminal size={18} />
          <span className="text-xs sm:text-sm tracking-widest uppercase">Session Active</span>
        </motion.div>

        <div className="min-h-[180px] sm:min-h-[220px] md:min-h-[260px] w-full flex flex-col justify-end mb-8">
          {showInitText ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-matrix font-mono text-lg sm:text-2xl md:text-3xl mb-4 font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]"
            >
              <TypeAnimation
                sequence={[
                  '> initializing session... OK\n> loading core modules... OK\n> access granted.',
                  400,
                  () => setShowInitText(false),
                ]}
                wrapper="div"
                speed={80}
                cursor={false}
                className="whitespace-pre-wrap leading-relaxed"
              />
            </motion.div>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.2]"
            >
              <TypeAnimation
                sequence={[
                  "Hello, I'm Animesh", 3500,
                  "Hello, I'm a Software Engineer", 3000,
                  "Hello, I'm a Backend Engineer", 3000,
                  "Hello, I'm an AI Engineer", 3000,
                  "Hello, I'm a Problem Solver", 3000,
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={Infinity}
                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
              />
            </motion.h1>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={showInitText ? { opacity: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 border-l-4 border-l-cobalt rounded-r-lg max-w-3xl border-t border-r border-b border-white/5"
        >
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Building horizontally scalable architectures and high-accuracy machine learning models. Bridging algorithmic theory with high-performance system design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showInitText ? { opacity: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <a href="#projects" className="px-6 py-4 bg-cobalt/10 border border-cobalt text-cobalt hover:bg-cobalt/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 font-mono text-sm flex items-center gap-2 group rounded-md">
            <span className="text-white/50 group-hover:text-white transition-colors">GET</span> /projects
          </a>
          <a href="#about" className="px-6 py-4 bg-transparent border border-white/20 text-white hover:border-matrix/50 hover:text-matrix hover:bg-matrix/5 transition-all duration-300 font-mono text-sm flex items-center gap-2 group rounded-md">
            <span className="text-matrix/50 group-hover:text-matrix transition-colors">POST</span> /contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
