import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-zinc-250/80 bg-zinc-50/50 backdrop-blur-md">
      {/* Light Divider Accent Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Profile Credits */}
        <div className="text-sm text-zinc-500 text-center md:text-left">
          <p className="font-semibold text-zinc-800 hover:text-indigo-600 transition-colors cursor-default select-none font-mono">
            // building high-performance architectures.
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            © {new Date().getFullYear()} Animesh Punetha. All rights reserved. Built with React & Tailwind.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/animeshpunetha"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 rounded-xl transition-all"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/animesh-punetha/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:animesh.punetha01@gmail.com"
            className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
            title="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}