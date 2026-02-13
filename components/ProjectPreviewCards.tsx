"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ProjectPreviewCardsProps {
  isHovered: boolean;
}

export default function ProjectPreviewCards({ isHovered }: ProjectPreviewCardsProps) {
const projects = [
  {
    id: 1,
    name: "Project One",
    color: "from-[#61dafb]/30 to-[#bb9af7]/30",
    position: "top-[-200px] left-[-280px]",
    rotation: -15,
  },
  {
    id: 2,
    name: "Project Two",
    color: "from-[#bb9af7]/30 to-[#f7768e]/30",
    position: "top-[-220px] left-[-100px]",
    rotation: -5,
  },
  {
    id: 3,
    name: "Project Three",
    color: "from-[#7dcfff]/30 to-[#9ece6a]/30",
    position: "top-[-220px] right-[-100px]",
    rotation: 5,
  },
  {
    id: 4,
    name: "Project Four",
    color: "from-[#e0af68]/30 to-[#7aa2f7]/30",
    position: "top-[-200px] right-[-280px]",
    rotation: 15,
  },
];

  return (
    <AnimatePresence>
      {isHovered && (
        <>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: project.rotation,
              }}
              exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className={`absolute ${project.position} w-48 h-64 rounded-2xl bg-gradient-to-br ${project.color} border border-white/20 backdrop-blur-md pointer-events-none shadow-2xl`}
            >
              {/* Mockup de móvil */}
              <div className="absolute inset-4 bg-[#1a1b26] rounded-xl flex items-center justify-center">
                <span className="text-[#7aa2f7]/40 text-xs">{project.name}</span>
              </div>
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}