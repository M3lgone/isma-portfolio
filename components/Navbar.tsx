"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {

  const [active, setActive] = useState("");

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // NUEVO state para posición del indicador
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  // Detectar sección activa al hacer scroll
  useEffect(() => {

    const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  let current = "";

  // Si estás en la parte superior (Hero), no marcar nada
  if (window.scrollY < 300) {
    setActive("");
    return;
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    // Ignorar el Hero en la detección
    if (section.id === "hero") return;

    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  setActive(current);
  };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // NUEVO useEffect → mueve la línea correctamente
  useEffect(() => {
  const el = linkRefs.current[active];

  if (el) {
    const parent = el.closest(".nav-links");

    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();

      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
      });
    }
  } else {
    // Cuando no hay elemento activo, ocultar el indicador
    setIndicatorStyle({
      width: 0,
      left: 0,
    });
  }
}, [active]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#1a1b26]/80 border-b border-white/10">
      <div className="flex justify-between items-center py-4 px-6">

        <div className="font-semibold text-[#7aa2f7]">
          Isma.dev
        </div>

        <div className="nav-links relative flex gap-6 text-sm text-[#a9b1d6]">

          <motion.a
            href="#experience"
            className="relative"
            ref={(el) => {
              linkRefs.current["experience"] = el;
            }}
          >
            Experience
          </motion.a>

          <motion.a
            href="#projects"
            className="relative"
            ref={(el) => {
              linkRefs.current["projects"] = el;
            }}
          >
            Projects
          </motion.a>

          <motion.a
            href="#about-section"
            className="relative"
            ref={(el) => {
              linkRefs.current["about-section"] = el;
            }}
          >
            About
          </motion.a>

          <motion.a
            href="#contact"
            className="relative"
            ref={(el) => {
              linkRefs.current["contact"] = el;
            }}
          >
            Contact
          </motion.a>

          {/* INDICADOR ANIMADO */}
          <motion.div
            className="absolute -bottom-1 h-[2px] bg-[#7aa2f7]"
            animate={{
                width: indicatorStyle.width,
                left: indicatorStyle.left,
                }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

        </div>

      </div>
    </nav>
  );
}