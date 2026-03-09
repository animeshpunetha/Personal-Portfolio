import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/50 backdrop-blur-md">

      {/* Animated divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Terminal message */}
        <div className="text-sm font-mono text-slate-400 text-center md:text-left">
          <p className="hover:text-emerald-400 transition-colors select-none">
            &gt; connection terminated. EOF.
          </p>

          <p className="text-xs opacity-60 mt-2">
            © {new Date().getFullYear()} Animesh Punetha — Built with React & Tailwind
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/animeshpunetha"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/animesh-punetha/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:animesh.punetha01@gmail.com"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>

      {/* Terminal cursor effect */}
      <div className="text-center text-xs font-mono text-slate-500 pb-4">
        <span className="animate-pulse">_</span>
      </div>

    </footer>
  );
}