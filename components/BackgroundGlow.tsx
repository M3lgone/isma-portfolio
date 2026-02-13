"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundGlow() {
  const { scrollY } = useScroll();

  return (
    <motion.div 
      className="fixed inset-0 -z-10 flex justify-center"
      style={{
        y: useTransform(scrollY, [0, 1000], [0, 400])
      }}
    >
      <div className="w-[900px] h-[900px] bg-[#7aa2f7]/10 blur-[200px] rounded-full"></div>
    </motion.div>
  );
}