import React from "react";
import { motion } from "framer-motion";
import { Zap, Code2, Trophy } from "lucide-react";
import CountUp from "react-countup";

const distributions = [
  { topic: "Greedy & Search", value: 90, color: "from-indigo-500 to-indigo-600" },
  { topic: "Graphs & Trees", value: 85, color: "from-indigo-500 to-cyan-500" },
  { topic: "System Design & Caching", value: 80, color: "from-cyan-500 to-indigo-500" },
  { topic: "Dynamic Programming", value: 75, color: "from-cyan-500 to-cyan-600" },
];

const Analytics = () => {
  return (
    <section
      id="analytics"
      className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10 w-full"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-3xl mx-auto"
      >
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            metrics.json
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-3">
            Core Engineering Metrics
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mt-3 rounded-full"></div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-zinc-700">STATUS: OPTIMAL</span>
          </div>
          <span className="text-zinc-300">|</span>
          <div className="flex items-center gap-1">
            <Zap size={14} className="text-indigo-600" />
            <span>SYS_EFFICIENCY: 98.4%</span>
          </div>
        </div>
      </motion.div>

      {/* Centered Single Metrics Panel with Whitespace */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-zinc-200/80 rounded-3xl p-6 md:p-8 hover:shadow-lg hover:border-indigo-200/80 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] group"
        >
          <div>
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-6">
              <div className="flex items-center gap-2.5 text-indigo-600 font-mono text-xs uppercase tracking-wider font-bold">
                <Code2 size={18} />
                Algorithms & Problem Solving
              </div>
              <span className="text-[10px] font-mono bg-zinc-50 border border-zinc-200 text-zinc-400 px-2 py-0.5 rounded-md font-semibold">
                sys_CP
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Stat 1 */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  Problems Solved
                </span>
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 font-mono tracking-tight flex items-baseline">
                  <CountUp end={1300} duration={1.5} separator="," />
                  <span className="text-indigo-600 text-2xl font-extrabold ml-0.5">+</span>
                </span>
              </div>

              {/* Stat 2 */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  CodeChef Peak
                </span>
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 font-mono tracking-tight flex items-baseline gap-1">
                  <CountUp end={1632} duration={1.5} />
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded font-sans tracking-normal self-center">3★</span>
                </span>
              </div>
            </div>

            {/* Distribution bars */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-2">
                Topic Solve Distribution
              </span>
              {distributions.map((d, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-zinc-700">
                    <span>{d.topic}</span>
                    <span className="font-mono text-zinc-500">{d.value}%</span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden border border-zinc-200/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.value}%` }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${d.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold border-t border-zinc-100 pt-5 mt-6">
            <Trophy size={12} className="text-indigo-600" /> Peak CP percentile verification active
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;