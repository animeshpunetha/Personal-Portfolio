import React from "react";
import { motion } from "framer-motion";
import HexBackground from "./HexBackground";
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
    title: "Backend Technologies",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.IO", "JWT"]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    items: ["NumPy", "Pandas", "Matplotlib", "CNN"]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C++", "C", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "VS Code"]
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"]
  }
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">

      {/* Hex Grid Background */}
      <HexBackground />

      {/* Subtle grid dots overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
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
              system_dependencies
            </span>
          </h2>
          <div className="h-[3px] w-24 mt-4 rounded-full bg-gradient-to-r from-matrix to-transparent shadow-[0_0_10px_rgba(16,185,129,0.7)]"></div>
          <p className="text-slate-400 font-mono text-sm mt-6">Architecture components and dependencies currently active.</p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {techCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition blur-xl bg-gradient-to-r from-blue-500/20 to-emerald-400/20" />

                {/* Card */}
                <div className="relative bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl transition-all duration-300 h-full flex flex-col group-hover:border-matrix/40 group-hover:bg-black/60">

                  {/* Cyber line accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-matrix/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5 group-hover:border-matrix/20 transition-colors">
                    <div className="p-2.5 bg-white/5 text-slate-400 rounded-lg group-hover:bg-matrix/10 group-hover:text-matrix transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-white tracking-widest uppercase mb-1">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-matrix animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                        <span className="text-[10px] text-matrix font-mono opacity-80 uppercase tracking-widest">Sys_Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded border border-white/5 hover:!bg-matrix/20 hover:!text-white hover:!border-matrix/50 transition-all cursor-default relative overflow-hidden group/item"
                      >
                        <span className="relative z-10">{item}</span>
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}