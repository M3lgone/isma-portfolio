"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects">

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 md:mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* PROJECT ONE - Mobile Mockup */}
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.015, y: -3 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10"
        >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
        </div>

        {/* Image Preview - Mobile Mockup */}
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#527dc1]/30 to-[#bb9af7]/30 flex items-center justify-center p-6 md:p-8">
          <div className="relative w-40 md:w-48 h-60 md:h-72 bg-[#1a1b26] rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center">
            <span className="text-[#527dc1]/40 text-xs md:text-sm">Mobile Preview</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-medium mb-2">Project One</h3>
          <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
            Short description of what this project does and why you built it.
          </p>

          {/* Tags */}
          <div className="flex gap-2 mb-4 md:mb-6">
            <span className="px-3 py-1 text-xs rounded-full bg-[#527dc1]/20 text-[#527dc1] border border-[#527dc1]/30">
              REACT
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-[#bb9af7]/20 text-[#bb9af7] border border-[#bb9af7]/30">
              NEXT.JS
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <motion.a
              href="https://github.com/tu-usuario/proyecto-uno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} className="md:w-[18px] md:h-[18px]" />
              View Code
            </motion.a>

            <motion.a
              href="https://tu-proyecto-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-transparent border border-[#527dc1] text-[#527dc1] rounded-lg font-medium hover:bg-[#527dc1]/10 transition-all hover:scale-105 text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
              Live Demo
            </motion.a>
          </div>
        </div>

        </motion.div>


        {/* PROJECT TWO - Mobile Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.015, y: -3 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
          </div>

          {/* Image Preview - Mobile Mockup */}
          <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#bb9af7]/30 to-[#7dcfff]/30 flex items-center justify-center p-6 md:p-8">
            <div className="relative w-40 md:w-48 h-60 md:h-72 bg-[#1a1b26] rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center">
              <span className="text-[#bb9af7]/40 text-xs md:text-sm">Mobile Preview</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Two</h3>
            <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
              Another project description showing your skills.
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-4 md:mb-6">
              <span className="px-3 py-1 text-xs rounded-full bg-[#bb9af7]/20 text-[#bb9af7] border border-[#bb9af7]/30">
                TYPESCRIPT
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-[#7dcfff]/20 text-[#7dcfff] border border-[#7dcfff]/30">
                TAILWIND
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.a
                href="https://github.com/tu-usuario/proyecto-dos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
                View Code
              </motion.a>

              <motion.a
                href="https://tu-proyecto-dos-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-transparent border border-[#527dc1] text-[#527dc1] rounded-lg font-medium hover:bg-[#527dc1]/10 transition-all hover:scale-105 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                Live Demo
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* PROJECT THREE - Desktop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.015, y: -3 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
          </div>

          {/* Image Preview - Desktop Mockup */}
          <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#7dcfff]/30 to-[#527dc1]/30 flex items-center justify-center p-6 md:p-8">
            <div className="relative w-full max-w-xs md:max-w-md h-48 md:h-60 bg-[#1a1b26] rounded-lg shadow-2xl border border-white/10">
              {/* Browser bar */}
              <div className="h-5 md:h-6 bg-[#24283b] rounded-t-lg border-b border-white/10 flex items-center px-2 md:px-3 gap-1 md:gap-1.5">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#f7768e]"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#e0af68]"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#9ece6a]"></div>
              </div>
              {/* Content area */}
              <div className="flex items-center justify-center h-[calc(100%-20px)] md:h-[calc(100%-24px)]">
                <span className="text-[#7dcfff]/40 text-xs md:text-sm">Desktop Preview</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Three</h3>
            <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
              Another project description showing your skills 3.
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-4 md:mb-6">
              <span className="px-3 py-1 text-xs rounded-full bg-[#527dc1]/20 text-[#527dc1] border border-[#527dc1]/30">
                NODE.JS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-[#9ece6a]/20 text-[#9ece6a] border border-[#9ece6a]/30">
                API
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.a
                href="https://github.com/tu-usuario/proyecto-tres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
                View Code
              </motion.a>

              <motion.a
                href="https://tu-proyecto-tres-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-transparent border border-[#527dc1] text-[#527dc1] rounded-lg font-medium hover:bg-[#527dc1]/10 transition-all hover:scale-105 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                Live Demo
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* PROJECT FOUR - Desktop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.015, y: -3 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
          </div>

          {/* Image Preview - Desktop Mockup */}
          <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#bb9af7]/30 to-[#f7768e]/30 flex items-center justify-center p-6 md:p-8">
            <div className="relative w-full max-w-xs md:max-w-md h-48 md:h-60 bg-[#1a1b26] rounded-lg shadow-2xl border border-white/10">
              {/* Browser bar */}
              <div className="h-5 md:h-6 bg-[#24283b] rounded-t-lg border-b border-white/10 flex items-center px-2 md:px-3 gap-1 md:gap-1.5">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#f7768e]"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#e0af68]"></div>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#9ece6a]"></div>
              </div>
              {/* Content area */}
              <div className="flex items-center justify-center h-[calc(100%-20px)] md:h-[calc(100%-24px)]">
                <span className="text-[#bb9af7]/40 text-xs md:text-sm">Desktop Preview</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Four</h3>
            <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
              Full-stack web application with modern tech stack.
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-4 md:mb-6">
              <span className="px-3 py-1 text-xs rounded-full bg-[#bb9af7]/20 text-[#bb9af7] border border-[#bb9af7]/30">
                FULLSTACK
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-[#f7768e]/20 text-[#f7768e] border border-[#f7768e]/30">
                DATABASE
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.a
                href="https://github.com/tu-usuario/proyecto-cuatro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
                View Code
              </motion.a>

              <motion.a
                href="https://tu-proyecto-cuatro-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-transparent border border-[#527dc1] text-[#527dc1] rounded-lg font-medium hover:bg-[#527dc1]/10 transition-all hover:scale-105 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                Live Demo
              </motion.a>
            </div>
          </div>

        </motion.div>

      </div>

    </Section>
  );
}