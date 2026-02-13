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

        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Experience
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-medium">
              Fullstack Developer (Learning Phase)
            </h3>
            <p className="text-[#a9b1d6] leading-relaxed">
              Building projects with Next.js, React and modern web technologies.
            </p>
          </div>

        </div>

      </motion.div>

    </Section>
  );
}