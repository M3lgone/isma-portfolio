"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import TypingEffect from "./TypingEffect";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit,
  SiFramer
} from "react-icons/si";

export default function Hero() {
  
  const { scrollY } = useScroll();

  const skills = [
    { name: "React", icon: SiReact, color: "from-[#61dafb]/20 to-[#61dafb]/10", border: "border-[#61dafb]/30", text: "text-[#61dafb]", iconColor: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-[#ffffff]/20 to-[#ffffff]/10", border: "border-[#ffffff]/30", text: "text-[#ffffff]", iconColor: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "from-[#3178c6]/20 to-[#3178c6]/10", border: "border-[#3178c6]/30", text: "text-[#3178c6]", iconColor: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "from-[#f7df1e]/20 to-[#f7df1e]/10", border: "border-[#f7df1e]/30", text: "text-[#f7df1e]", iconColor: "#f7df1e" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-[#06b6d4]/20 to-[#06b6d4]/10", border: "border-[#06b6d4]/30", text: "text-[#06b6d4]", iconColor: "#06b6d4" },
    { name: "Node.js", icon: SiNodedotjs, color: "from-[#68a063]/20 to-[#68a063]/10", border: "border-[#68a063]/30", text: "text-[#68a063]", iconColor: "#68a063" },
    { name: "Git", icon: SiGit, color: "from-[#f05032]/20 to-[#f05032]/10", border: "border-[#f05032]/30", text: "text-[#f05032]", iconColor: "#f05032" },
    { name: "Framer Motion", icon: SiFramer, color: "from-[#bb9af7]/20 to-[#bb9af7]/10", border: "border-[#bb9af7]/30", text: "text-[#bb9af7]", iconColor: "#bb9af7" },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
  <motion.section
    id="hero"
    
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative min-h-screen flex flex-col items-start justify-start pt-48 pb-12">

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
            speed={30}
          />
        </p>

        <motion.a
          href="#projects"
          className="mt-8 inline-block px-8 py-3 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
      </div>
    </Container>

    {/* Carrusel de Skills al final del Hero */}
    <div className="absolute bottom-32 left-0 right-0 w-full overflow-hidden py-8">
      
      {/* Blur gradient izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>
      
      {/* Blur gradient derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>

      {/* Carrusel infinito */}
      <div className="flex gap-6 animate-marquee">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${skill.color} border ${skill.border} ${skill.text} font-medium text-sm whitespace-nowrap backdrop-blur-sm`}
            >
              <Icon size={18} style={{ color: skill.iconColor }} />
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>

  </motion.section>
);
}
