"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('tumail@ejemplo.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Vuelve a normal después de 2 segundos
  };

  return (
    <Section id="contact">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Come and say hi!
        </h2>

        <p className="text-[#a9b1d6] leading-relaxed max-w-xl mb-10">
          I'm always open to new opportunities, collaborations or just a good conversation about tech. Feel free to reach out.
        </p>

        {/* Links limpios estilo Ryan Evans */}
        <div className="flex flex-col gap-3 max-w-xl">
          
          {/* Email - Click para copiar */}
          <motion.button
            onClick={copyEmail}
            className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5 w-full text-left"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={20} className="text-[#527dc1]" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition">
              {copied ? 'Email copied!' : 'ismaelgn89@gmail.com'}
            </span>
          </motion.button>

          <motion.a
            href="https://github.com/M3lgone"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Github size={20} className="text-[#527dc1]" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition">
              M3lgone
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ismael-gonzalez-457820398"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin size={20} className="text-[#527dc1]" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition">
              IsmaDEV
            </span>
          </motion.a>

          <motion.a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Twitter size={20} className="text-[#527dc1]" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition">
              IsmaDEV
            </span>
          </motion.a>

        </div>

      </motion.div>

    </Section>
  );
}