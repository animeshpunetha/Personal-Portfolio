import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Github, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

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

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollProgress(progress * 100);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">

      {/* Starfield + Code Token Background */}
      <StarfieldBackground />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-cobalt font-mono drop-shadow-[0_0_10px_rgba(37,99,235,0.9)]">
              &gt;
            </span>
            <span className="font-mono tracking-wide">
              ls -la ./project_repository
            </span>
          </h2>
          <div className="h-[3px] w-24 mt-4 rounded-full bg-gradient-to-r from-cobalt to-transparent shadow-[0_0_10px_rgba(37,99,235,0.7)]"></div>
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-4 mb-6">

          <button
            onClick={scrollLeft}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-10 overflow-x-auto overflow-y-hidden pb-10 snap-x snap-mandatory scroll-smooth scrollbar-hide items-stretch"
        >

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[300px] max-w-[300px] md:min-w-[340px] md:max-w-[340px] shrink-0 snap-center group relative"
            >

              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-transparent h-full">

                <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 group-hover:border-blue-400/40">

                  {/* Header */}
                  <div className="flex justify-between mb-6">
                    <FolderGit2 className="text-white/70" size={30} />

                    {project.github && (
                      <a href={project.github} target="_blank">
                        <Github
                          size={20}
                          className="text-white/50 hover:text-white transition"
                        />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-white/70 bg-white/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                    <Activity className="text-emerald-400" size={18} />

                    <div>
                      <div className="text-xl font-bold text-white">
                        {project.metricValue}
                      </div>
                      <div className="text-xs text-slate-400">
                        {project.metricLabel}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Custom Progress Bar */}
        <div className="mt-6 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

      </div>
    </section>
  );
}