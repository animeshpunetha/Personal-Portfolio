import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, CheckCircle2 } from "lucide-react";

const content = [
  "---",
  'title: "Software Engineer"',
  'name: "Animesh Punetha"',
  'education: "B.Tech in Electronics and Communication Engineering, NIT Durgapur"',
  "---",
  "",
  "# Background",
  "Software engineer focused on scalable backend systems and intelligent applications.",
  "",
  "## Core Focus",
  "Backend architecture, high-performance APIs, and AI-powered capabilities for real-world software systems."
];

const About = () => {
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => content.length, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-matrix font-mono drop-shadow-[0_0_10px_rgba(16,185,129,0.9)]">
              &gt;
            </span>
            <span className="font-mono tracking-wide">
              cat about_me.md
            </span>
          </h2>
          <div className="h-[3px] w-24 mt-4 rounded-full bg-gradient-to-r from-matrix to-transparent shadow-[0_0_10px_rgba(16,185,129,0.7)]"></div>
        </motion.div>

        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(0,0,0,0.6)] group"
        >

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/70">
            
            {/* Mac buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.7)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(234,179,8,0.7)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]"></div>
            </div>

            {/* File name */}
            <div className="text-slate-400 font-mono text-sm flex items-center gap-2">
              <Terminal size={14} className="text-matrix" />
              about_me.md
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="relative text-slate-400 hover:text-white transition"
            >
              {copied ? (
                <CheckCircle2 size={18} className="text-matrix animate-pulse" />
              ) : (
                <Copy size={18} />
              )}

              {copied && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-matrix font-mono">
                  copied
                </span>
              )}
            </button>
          </div>

          {/* Editor Body */}
          <div className="font-mono text-xs sm:text-sm md:text-[15px] bg-black/20 py-4 sm:py-6 flex flex-col gap-1">

            {content.map((line, i) => {
              let lineContent = <div className="whitespace-pre-wrap break-words">{line}</div>;

              if (line.startsWith("# ")) {
                lineContent = <div className="text-white font-semibold whitespace-pre-wrap break-words">{line}</div>;
              } else if (line.startsWith("## ")) {
                lineContent = <div className="text-white font-semibold opacity-90 whitespace-pre-wrap break-words">{line}</div>;
              } else if (line.includes(":")) {
                lineContent = (
                  <div className="whitespace-pre-wrap break-words">
                    <span className="text-cobalt">{line.split(":")[0]}:</span>{" "}
                    <span className="text-matrix">{line.split(":")[1]}</span>
                  </div>
                );
              } else if (line === "---") {
                lineContent = <div className="text-slate-500 whitespace-pre-wrap break-words">---</div>;
              }

              return (
                <div key={i} className="flex leading-relaxed">
                  {/* Line Number */}
                  <div className="text-slate-600 select-none text-right shrink-0 w-12 sm:w-16 pr-3 sm:pr-5 border-r border-white/10">
                    {i + 1}
                  </div>
                  {/* Line Content */}
                  <div className="text-slate-300 pl-4 sm:pl-6 pr-4 sm:pr-6 flex-1">
                    {lineContent}
                  </div>
                </div>
              );
            })}

            {/* blinking cursor */}
            <div className="flex mt-1">
               <div className="shrink-0 w-12 sm:w-16 pr-3 sm:pr-5 border-r border-white/10"></div>
               <div className="pl-4 sm:pl-6 pr-4 sm:pr-6 flex items-center">
                 <span className="inline-block w-2.5 h-4 sm:h-5 bg-matrix animate-pulse"></span>
               </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;