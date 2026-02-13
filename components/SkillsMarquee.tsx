"use client";

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

export default function SkillsMarquee() {
  const skills = [
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "Framer Motion", icon: SiFramer, color: "#bb9af7" },
  ];

  // Duplicar el array para efecto infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gradient-to-b from-transparent via-[#1a1b26]/50 to-transparent">
      
      {/* Blur gradient izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>
      
      {/* Blur gradient derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>

      {/* Carrusel infinito */}
      <div className="flex gap-8 animate-marquee">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#24283b]/50 border border-white/10 backdrop-blur-sm whitespace-nowrap"
            >
              <Icon size={24} style={{ color: skill.color }} />
              <span className="text-[#c0caf5] font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}