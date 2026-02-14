"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 md:mb-12">
          Experience
        </h2>

        <div className="space-y-6 md:space-y-8">

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">
              Fullstack Developer (Learning Phase)
            </h3>
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              Building projects with Next.js, React and modern web technologies.
            </p>
          </div>

        </div>

      </motion.div>

    </Section>
  );
}