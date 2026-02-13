"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Contact
        </h2>

        <p className="text-[#a9b1d6] leading-relaxed max-w-xl">
          I'm always open to new opportunities, collaborations or just a good
          conversation about tech. Feel free to reach out.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <motion.a
            href="mailto:tumail@ejemplo.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#7aa2f7] text-white rounded-lg font-medium hover:bg-[#6d92e6] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7aa2f7]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Email me
          </motion.a>

          <motion.a
            href="https://github.com/M3lgone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ismael-gonzalez-457820398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#7aa2f7] text-[#7aa2f7] rounded-lg font-medium hover:bg-[#7aa2f7]/10 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={20} />
            Twitter
          </motion.a>
        </div>

      </motion.div>

    </Section>
  );
}