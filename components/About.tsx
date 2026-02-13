"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about-section">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          About
        </h2>

        <p className="text-lg text-[#a9b1d6] leading-relaxed">
          Hi, I'm Isma — a developer who believes technology should feel human.

          I love building clean, modern websites that combine creativity with clarity. My goal is not just to write code, but to create experiences that feel simple, intuitive and meaningful.

          I come from diverse experiences that shaped my way of solving problems and understanding people — something I bring into every project I build.
        </p>

      </motion.div>

    </Section>
  );
}