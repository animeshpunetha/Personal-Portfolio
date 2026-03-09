import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Code2,
  BrainCircuit,
  Trophy,
  Target,
} from "lucide-react";
import CountUp from "react-countup";

const tags = [
  "Graphs/Trees",
  "Dynamic Programming",
  "Segment Trees",
  "Combinatorics",
];

const bars = [40, 60, 45, 80, 50, 90, 75, 100, 85, 120];

const Analytics = () => {
  return (
    <section
      id="analytics"
      className="py-20 md:py-28 px-4 md:px-6 relative z-10 w-full bg-black/40 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-purple-400 font-mono drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]">
                &gt;
              </span>
              <span className="font-mono tracking-wide">
                system_metrics.exe
              </span>
            </h2>
            <div className="h-[3px] w-24 mt-4 rounded-full bg-gradient-to-r from-purple-400 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2 text-matrix">
              <div className="w-2 h-2 rounded-full bg-matrix animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.9)]"></div>
              STATUS: OPTIMAL
            </div>

            <div className="flex items-center gap-2 text-cobalt">
              <Activity size={14} /> SYS_LOAD: 24%
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 relative glass-panel p-8 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition"
          >

            {/* Animated chart */}
            <div className="absolute inset-0 opacity-10 flex items-end justify-between px-4 pb-4 pointer-events-none">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="w-[8%] bg-purple-400"
                />
              ))}
            </div>

            <div className="relative z-10">

              <div className="flex items-center gap-3 text-purple-400 mb-6 font-mono text-sm uppercase tracking-widest border-b border-white/10 pb-4">
                <Code2 size={18} />
                Competitive Programming Algorithms
              </div>

              <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">

                {/* Main stat */}
                <div>
                  <div className="text-slate-400 font-mono text-sm uppercase tracking-wider mb-1">
                    Total Problems Solved
                  </div>

                  <div className="text-7xl font-bold text-white font-mono">
                    <CountUp end={1300} duration={2} />+
                  </div>
                </div>

                {/* Side metrics */}
                <div className="flex flex-col justify-center gap-6">

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                      <Trophy size={18} />
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400">
                        CodeChef Rating
                      </div>
                      <div className="text-xl font-bold font-mono text-white tracking-widest">
                        1632 (Peak)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-matrix/10 border border-matrix/20 flex items-center justify-center text-matrix">
                      <Target size={18} />
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400">
                        Algorithmic Optimization
                      </div>
                      <div className="text-sm text-matrix">
                        Advanced Data Structures
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Skill Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full hover:bg-purple-500/20 transition cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Side Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 glass-panel p-8 rounded-2xl hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition flex flex-col"
          >
            <div className="flex items-center gap-3 text-cobalt mb-6 font-mono text-sm uppercase tracking-widest border-b border-white/10 pb-4">
              <BrainCircuit size={18} />
              Theoretical Foundations
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Solid grounding in foundational computer science principles,
              enabling the translation of complex algorithmic theory into
              scalable real-world system designs.
            </p>

            <div className="bg-black/40 border border-white/5 p-4 rounded-xl border-l-2 border-l-cobalt relative overflow-hidden mt-auto">

              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-slate-400">
                  Algorithmic Efficiency
                </span>

                <span className="text-xs font-mono text-cobalt bg-cobalt/10 px-2 py-0.5 rounded">
                  O(1)
                </span>
              </div>

              <div className="w-full bg-white/5 rounded-full h-1.5 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1.5 }}
                  className="bg-gradient-to-r from-cobalt to-matrix h-1.5 rounded-full"
                />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-slate-500">
                Optimization Metric Focus
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Analytics;