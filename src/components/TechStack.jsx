import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Brain,
  Code2,
  Database,
  Wrench,
  Cpu
} from "lucide-react";

const techCategories = [
  {
    title: "Backend Systems",
    icon: Server,
    items: ["Node.js", "Express.js", "NestJS", "TypeScript", "REST APIs", "WebSockets", "Socket.IO", "JWT"]
  },
  {
    title: "Machine Learning / AI",
    icon: Brain,
    items: ["Python", "OpenCV", "CNN", "Tensorflow", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "C", "Python", "JavaScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Databases & Caching",
    icon: Database,
    items: ["MySQL", "MongoDB", "Redis", "TypeORM"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Docker", "VS Code", "ExcelJS"]
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks", "System Design"]
  }
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Grid dots background pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left relative z-10"
      >
        <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          stack.json
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-3">
          Technical Toolkit
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mt-3 rounded-full"></div>
        <p className="text-zinc-500 text-sm mt-4 font-light">Technologies, languages, and methodologies I leverage daily.</p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {techCategories.map((category, idx) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl hover:shadow-md transition-all duration-300 hover:border-indigo-300 flex flex-col h-full shadow-sm justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-zinc-100">
                    <div className="p-2.5 bg-zinc-50 border border-zinc-100 text-zinc-500 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[9px] text-zinc-400 font-mono font-bold tracking-widest uppercase">Sys_Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items/Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold text-zinc-600 bg-zinc-50 border border-zinc-200/40 px-2.5 py-1.5 rounded-md hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}