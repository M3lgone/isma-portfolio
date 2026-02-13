"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import TypingEffect from "./TypingEffect";


export default function Hero() {

  const { scrollY } = useScroll();

  return (
  <motion.section
    id="hero"
    
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative min-h-screen flex items-start pt-50">

          {/* Glow background con parallax */}
      <motion.div 
        className="absolute inset-0 -z-10 flex justify-center"
        style={{
          y: useTransform(scrollY, [0, 800], [0, 300])
        }}
        >
        <div className="w-[600px] h-[600px] bg-[#7aa2f7] opacity-20 blur-[150px] rounded-full"></div>
      </motion.div>

    <Container>
      <div className="max-w-3xl">
      <h1 className="text-6xl font-semibold leading-tight tracking-tight bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] bg-clip-text text-transparent mb-6">
        Isma — Fullstack Developer in Progress
      </h1>

      <p className="text-xl text-gray-400 leading-relaxed">
        <TypingEffect 
        text="Building real-world projects, learning by doing and growing step by step into a professional developer."
        speed={50}
        />
      </p>

      <motion.a
      href="#projects"
      className="mt-8 inline-block px-8 py-3 bg-[#7aa2f7] text-white rounded-lg font-medium hover:bg-[#6d92e6] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#7aa2f7]/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
      View Projects
      </motion.a>
      </div>
    </Container>

  </motion.section>
);
}
