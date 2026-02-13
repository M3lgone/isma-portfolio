"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects">

      <h2 className="text-3xl font-semibold tracking-tight mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden group p-6 rounded-xl bg-[#24283b] border border-white/10 hover:border-[#7aa2f7] transition shadow-sm hover:shadow-xl hover:shadow-[#7aa2f7]/10 md:col-span-2"
        >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 blur-xl"></div>
        </div>

        <h3 className="text-xl font-medium">Project One</h3>
        <p className="text-[#a9b1d6] mt-2 leading-relaxed">
          Short description of what this project does and why you built it.
        </p>

        <div className="mt-6 flex gap-4">
          <motion.a
            href="https://github.com/tu-usuario/proyecto-uno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#7aa2f7] text-white rounded-lg font-medium hover:bg-[#6d92e6] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7aa2f7]/50 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View Code
          </motion.a>

          <motion.a
            href="https://tu-proyecto-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
        </div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden group p-6 rounded-xl bg-[#24283b] border border-white/10 hover:border-[#7aa2f7] transition shadow-sm hover:shadow-xl hover:shadow-[#7aa2f7]/10 md:col-span-2"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 blur-xl"></div>
          </div>

          <h3 className="text-xl font-medium">Project Two</h3>
          <p className="text-[#a9b1d6] mt-2 leading-relaxed">
            Another project description showing your skills.
          </p>

          <div className="mt-6 flex gap-4">
            <motion.a
              href="https://github.com/tu-usuario/proyecto-dos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#7aa2f7] text-white rounded-lg font-medium hover:bg-[#6d92e6] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7aa2f7]/50 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View Code
            </motion.a>

            <motion.a
              href="https://tu-proyecto-dos-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden group p-6 rounded-xl bg-[#24283b] border border-white/10 hover:border-[#7aa2f7] transition shadow-sm hover:shadow-xl hover:shadow-[#7aa2f7]/10 md:col-span-2"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 blur-xl"></div>
          </div>

          <h3 className="text-xl font-medium">Project Three</h3>
          <p className="text-[#a9b1d6] mt-2 leading-relaxed">
            Another project description showing your skills.
          </p>

          <div className="mt-6 flex gap-4">
            <motion.a
              href="https://github.com/tu-usuario/proyecto-tres"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#7aa2f7] text-white rounded-lg font-medium hover:bg-[#6d92e6] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7aa2f7]/50 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View Code
            </motion.a>

            <motion.a
              href="https://tu-proyecto-tres-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          </div>

        </motion.div>

      </div>

    </Section>
  );
}