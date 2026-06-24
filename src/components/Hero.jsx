import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import CyberBackground from './CyberBackground';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative z-10 px-4 sm:px-8 pt-12 md:pt-16 pb-12 overflow-hidden max-w-7xl mx-auto">
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-[#fafafa]/10 select-none pointer-events-none z-0"></div>

      {/* Neural Constellation Background */}
      <CyberBackground />

      <div className="z-10 w-full flex flex-col items-start mt-[-2vh] relative">
        {/* Modern Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6 text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider uppercase">Open for Backend & AI Roles</span>
        </motion.div>

        {/* Headline */}
        <div className="w-full mb-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-zinc-500 mb-1 font-mono"
          >
            Hi, I'm Animesh Punetha.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-2"
          >
            I build{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600">
              intelligent
            </span>{' '}
            systems.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-zinc-500 mt-2 min-h-[40px]"
          >
            <span>focusing on </span>
            <TypeAnimation
              sequence={[
                "backend architectures", 2500,
                "machine learning pipelines", 2500,
                "distributed systems", 2500,
                "algorithmic problem solving", 2500,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="text-indigo-600 font-semibold"
            />
          </motion.div>
        </div>

        {/* Sub-description Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white border border-zinc-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] p-6 md:p-8 border-l-4 border-l-indigo-600 rounded-r-2xl max-w-3xl mt-4"
        >
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
            Specializing in building horizontally scalable backend architectures and deep learning models. I bridge theoretical computer science with low-latency, real-world systems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 bg-zinc-950 text-white hover:bg-zinc-800 hover:shadow-lg transition-all font-semibold rounded-xl text-sm flex items-center gap-2 group shadow-sm"
          >
            Explore Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-6 py-3.5 bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 transition-all font-semibold rounded-xl text-sm flex items-center gap-2 shadow-sm"
          >
            <FileText size={16} className="text-zinc-500" />
            About & Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

