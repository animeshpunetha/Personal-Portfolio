import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FileText, Copy, CheckCircle2 } from "lucide-react";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(content.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-left"
      >
        <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          profile.yaml
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-3">
          About Me
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mt-3 rounded-full"></div>
      </motion.div>

      {/* Code Editor Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] group"
      >
        {/* Editor Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 bg-zinc-50">
          {/* Mac Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/90 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/90 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/90 shadow-sm"></div>
          </div>

          {/* File Name */}
          <div className="text-zinc-500 font-mono text-xs flex items-center gap-1.5 font-semibold">
            <FileText size={14} className="text-indigo-500" />
            about_me.md
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="relative text-zinc-400 hover:text-zinc-700 transition p-1 rounded-lg hover:bg-zinc-100/60"
            title="Copy content"
          >
            {copied ? (
              <CheckCircle2 size={16} className="text-indigo-600" />
            ) : (
              <Copy size={16} />
            )}

            {copied && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-indigo-600 font-mono font-bold whitespace-nowrap bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded shadow-sm">
                copied!
              </span>
            )}
          </button>
        </div>

        {/* Editor Body */}
        <div className="font-mono text-xs sm:text-sm md:text-[14px] bg-white py-6 flex flex-col gap-1.5 overflow-x-auto">
          {content.map((line, i) => {
            let lineContent = <span className="text-zinc-600 whitespace-pre-wrap">{line}</span>;

            if (line.startsWith("# ")) {
              lineContent = <span className="text-zinc-950 font-sans font-bold text-base sm:text-lg block mt-2 whitespace-pre-wrap">{line}</span>;
            } else if (line.startsWith("## ")) {
              lineContent = <span className="text-zinc-900 font-sans font-bold text-sm sm:text-base block mt-2 whitespace-pre-wrap">{line}</span>;
            } else if (line.includes(":")) {
              const colonIndex = line.indexOf(":");
              const key = line.slice(0, colonIndex);
              const val = line.slice(colonIndex);
              lineContent = (
                <span className="whitespace-pre-wrap">
                  <span className="text-indigo-600 font-semibold">{key}</span>
                  <span className="text-cyan-700">{val}</span>
                </span>
              );
            } else if (line === "---") {
              lineContent = <span className="text-zinc-400">---</span>;
            }

            return (
              <div key={i} className="flex leading-relaxed hover:bg-zinc-50/60 transition-colors">
                {/* Line Number */}
                <div className="text-zinc-300 select-none text-right shrink-0 w-12 sm:w-16 pr-4 border-r border-zinc-100 font-medium">
                  {i + 1}
                </div>
                {/* Line Content */}
                <div className="pl-4 sm:pl-6 pr-4 sm:pr-6 flex-1 text-left">
                  {lineContent}
                </div>
              </div>
            );
          })}

          {/* Blinking Cursor line */}
          <div className="flex mt-1">
            <div className="shrink-0 w-12 sm:w-16 pr-4 border-r border-zinc-100"></div>
            <div className="pl-4 sm:pl-6 pr-4 sm:pr-6 flex items-center">
              <span className="inline-block w-2 h-4 bg-indigo-600 animate-pulse rounded-sm"></span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;