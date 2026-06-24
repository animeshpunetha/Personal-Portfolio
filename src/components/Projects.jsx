import React from "react";
import { motion } from "framer-motion";
import { Folder, Github, Activity, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SudokuLens",
    description:
      "Real-time AR Sudoku solver using computer vision and deep learning.",
    metricValue: "97.8%",
    metricLabel: "Digit Accuracy",
    tech: ["Python", "OpenCV", "CNN", "Tensorflow"],
    github: "https://github.com/animeshpunetha/SudokuLens"
  },
  {
    title: "FinSight",
    description:
      "Full-stack personal finance dashboard with OCR pipeline for automated receipt processing.",
    metricValue: "10k+",
    metricLabel: "Transactions",
    tech: ["Node.js", "React", "MongoDB", "OCR"],
    github: "https://github.com/animeshpunetha/personal-finance-application-repo"
  },
  {
    title: "WeatherBuddy",
    description:
      "Weather app with Trie-based search for ultra-fast city lookup.",
    metricValue: "200k+",
    metricLabel: "Cities Indexed",
    tech: ["JavaScript", "Trie", "API"],
    github: "https://github.com/animeshpunetha/Weather-App"
  },
  {
    title: "AI Enhanced Scraping Tool",
    description:
      "Backend scraping + AI enhancement pipeline with React frontend.",
    metricValue: "Realtime",
    metricLabel: "Data Processing",
    tech: ["Node.js", "Express", "AI"],
    github: "https://github.com/animeshpunetha/beyond-chats-assignment"
  },
  {
    title: "HisabKitab",
    description:
      "Expense tracking system designed for personal budgeting insights.",
    metricValue: "Smart",
    metricLabel: "Finance Tracking",
    tech: ["Node.js", "MongoDB", "Express"],
    github: "https://github.com/animeshpunetha/HisabKitab"
  },
  {
    title: "Jarvis AI Assistant",
    description:
      "Voice-controlled assistant capable of executing commands and automation tasks.",
    metricValue: "Voice",
    metricLabel: "Automation",
    tech: ["Python", "Speech Recognition"],
    github: "https://github.com/animeshpunetha/Jarvis-A-personal-AI-Assistant"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left"
      >
        <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          projects.json
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-3">
          Featured Work
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mt-3 rounded-full"></div>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="flex"
          >
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-7 flex flex-col justify-between w-full hover:shadow-md transition-all duration-300 hover:border-indigo-300/80 group shadow-sm">
              <div>
                {/* Card Icon Header */}
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 bg-zinc-50 border border-zinc-100 text-zinc-500 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <Folder size={20} />
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-zinc-900 rounded-lg hover:bg-zinc-50 transition"
                      title="View Source on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-zinc-950 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                  {project.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 translate-y-0.5 group-hover:-translate-y-0 group-hover:translate-x-0.5 transition-all text-indigo-500" />
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-sm leading-relaxed mt-2.5 mb-5 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono font-semibold text-zinc-500 bg-zinc-100 border border-zinc-200/40 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Performance Metric Bar */}
                <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Activity size={14} className="text-cyan-500" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Performance</span>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                      {project.metricValue}
                    </span>
                    <span className="block text-[9px] font-mono text-zinc-400 uppercase font-semibold mt-1">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}