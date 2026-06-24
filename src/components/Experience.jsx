import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, BarChart2 } from "lucide-react";

const experiences = [
  {
    company: "Aankalan India",
    role: "Junior Software Developer",
    period: "Jan 2026 – Feb 2026",
    overview:
      "Architected a highly concurrent real-time chat engine supporting 5000+ users.",
    metrics: ["5000+ concurrent users", "O(1) latency mapping", "Redis distributed scaling"],
    details: [
      "Built real-time messaging platform using NestJS, WebSockets (Socket.IO), and TypeScript.",
      "Designed distributed architecture with Redis adapters and O(1) in-memory mapping.",
      "Implemented JWT authentication, RBAC authorization, and MySQL + TypeORM schema.",
      "Added read receipts and soft-delete auditability ensuring 100% data integrity."
    ],
    tags: ["NestJS", "WebSockets", "Redis", "MySQL", "TypeORM", "JWT"]
  },
  {
    company: "Team1 Consulting",
    role: "Software Developer Intern",
    period: "May 2025 – Jun 2025",
    overview:
      "Developed scalable CRM platform improving business tracking efficiency by 80%.",
    metrics: ["80% efficiency boost", "95% manual reduction", "1000+ users"],
    details: [
      "Built CRM backend using MongoDB, Mongoose schema validation, and REST APIs.",
      "Created automated bulk data pipeline using ExcelJS with strict validation.",
      "Reduced manual data entry by 95% and accelerated onboarding.",
      "Implemented JWT-based RBAC system supporting 1000+ users.",
      "Engineered recurring payment reminder system reducing manual oversight by 90%."
    ],
    tags: ["Node.js", "MongoDB", "REST APIs", "ExcelJS", "RBAC", "JWT"]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const activeExp = experiences[activeTab];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left"
      >
        <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          experience.json
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-3">
          Work History
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mt-3 rounded-full"></div>
      </motion.div>

      {/* Main Switcher Box */}
      <div className="bg-white border border-zinc-200 rounded-2xl shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Tab Controls (Left side) */}
        <div className="flex md:flex-col gap-2 shrink-0 md:w-56 overflow-x-auto pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-zinc-150 pr-0 md:pr-4 scrollbar-hide">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left whitespace-nowrap flex items-center gap-2.5 ${
                activeTab === idx
                  ? "bg-indigo-50 text-indigo-700 border-l-4 border-l-indigo-600 pl-3.5 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 border-l-4 border-l-transparent pl-3.5"
              }`}
            >
              <Briefcase size={15} />
              {exp.company}
            </button>
          ))}
        </div>

        {/* Details Display (Right side) */}
        <div className="flex-1 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Role Title & Timeframe */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-950">
                  {activeExp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-semibold text-zinc-400 mt-1.5">
                  <span className="text-indigo-600 font-bold">{activeExp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {activeExp.period}
                  </span>
                </div>
              </div>

              {/* Overview Sentence */}
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100 font-light">
                {activeExp.overview}
              </p>

              {/* Performance Metrics Row */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-bold mb-2.5 flex items-center gap-1.5">
                  <BarChart2 size={13} className="text-indigo-500" /> Key Impact Metrics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-semibold text-cyan-800 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full shadow-sm"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-bold mb-1">
                  Deliverables & Responsibilities
                </h4>
                {activeExp.details.map((d, i) => (
                  <div
                    key={i}
                    className="flex gap-2.5 text-zinc-600 text-sm leading-relaxed text-left"
                  >
                    <ChevronRight size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tech Badges footer */}
          <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-zinc-100">
            {activeExp.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono font-semibold text-zinc-600 bg-zinc-100 border border-zinc-200/50 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}