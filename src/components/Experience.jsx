import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, X } from "lucide-react";

const experiences = [
  {
    company: "Aankalan India",
    role: "Junior Software Developer",
    period: "Jan 2026 – Feb 2026",
    icon: Server,
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
    icon: Database,
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
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="py-20 md:py-28 px-4 md:px-6 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto relative">

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
              runtime_experience.sh
            </span>
          </h2>
          <div className="h-[3px] w-24 mt-4 rounded-full bg-gradient-to-r from-matrix to-transparent shadow-[0_0_10px_rgba(16,185,129,0.7)]"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 relative">

          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                onClick={() => setActive(exp)}
                className="cursor-pointer backdrop-blur-xl border border-white/10 bg-white/[0.03] p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition"
              >
                {/* BACKGROUND ICON */}
                <Icon
                  size={180}
                  className="absolute -top-10 -right-10 text-white/5 group-hover:text-white/10 transition"
                />

                <div className="relative z-10">

                  {/* COMPANY */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.company}
                  </h3>

                  <div className="text-sm text-matrix font-mono">
                    {exp.role}
                  </div>

                  <div className="text-xs text-slate-500 mb-4">
                    {exp.period}
                  </div>

                  {/* OVERVIEW */}
                  <p className="text-slate-300 text-sm mb-6">
                    {exp.overview}
                  </p>

                  {/* METRICS */}
                  <div className="flex flex-wrap gap-2">
                    {exp.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-cobalt bg-cobalt/10 border border-cobalt/20 px-3 py-1 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 mt-6 font-mono">
                    click to inspect →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL EXPERIENCE VIEW */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-4 md:inset-x-0 bottom-0 md:top-0 z-50 flex items-center justify-center p-0 md:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-black/95 backdrop-blur-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] rounded-2xl md:rounded-3xl border border-white/10 flex flex-col overflow-hidden pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              >
                {/* MODAL HEADER */}
                <div className="p-5 md:p-8 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {active.company}
                  </h3>
                  <button
                    onClick={() => setActive(null)}
                    className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* MODAL BODY */}
                <div className="p-5 md:p-8 overflow-y-auto">
                  <div className="text-matrix font-mono text-sm mb-6">
                    {active.role} • {active.period}
                  </div>

                  {/* DETAILS */}
                  <div className="space-y-3 mb-8">
                    {active.details.map((d, i) => (
                      <div
                        key={i}
                        className="border-l-2 border-matrix pl-4 text-slate-300 text-sm md:text-base leading-relaxed"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {active.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-matrix bg-matrix/10 border border-matrix/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}