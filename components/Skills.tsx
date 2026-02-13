"use client";

import { motion } from "framer-motion";
import Section from "./Section";
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

export default function Skills() {
  const skills = [
    { 
      name: "React", 
      icon: SiReact,
      color: "from-[#61dafb]/20 to-[#61dafb]/10", 
      border: "border-[#61dafb]/30", 
      text: "text-[#61dafb]",
      iconColor: "#61dafb"
    },
    { 
      name: "Next.js", 
      icon: SiNextdotjs,
      color: "from-[#ffffff]/20 to-[#ffffff]/10", 
      border: "border-[#ffffff]/30", 
      text: "text-[#ffffff]",
      iconColor: "#ffffff"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript,
      color: "from-[#3178c6]/20 to-[#3178c6]/10", 
      border: "border-[#3178c6]/30", 
      text: "text-[#3178c6]",
      iconColor: "#3178c6"
    },
    { 
      name: "JavaScript", 
      icon: SiJavascript,
      color: "from-[#f7df1e]/20 to-[#f7df1e]/10", 
      border: "border-[#f7df1e]/30", 
      text: "text-[#f7df1e]",
      iconColor: "#f7df1e"
    },
    { 
      name: "Tailwind CSS", 
      icon: SiTailwindcss,
      color: "from-[#06b6d4]/20 to-[#06b6d4]/10", 
      border: "border-[#06b6d4]/30", 
      text: "text-[#06b6d4]",
      iconColor: "#06b6d4"
    },
    { 
      name: "Node.js", 
      icon: SiNodedotjs,
      color: "from-[#68a063]/20 to-[#68a063]/10", 
      border: "border-[#68a063]/30", 
      text: "text-[#68a063]",
      iconColor: "#68a063"
    },
    { 
      name: "Git", 
      icon: SiGit,
      color: "from-[#f05032]/20 to-[#f05032]/10", 
      border: "border-[#f05032]/30", 
      text: "text-[#f05032]",
      iconColor: "#f05032"
    },
    { 
      name: "Framer Motion", 
      icon: SiFramer,
      color: "from-[#bb9af7]/20 to-[#bb9af7]/10", 
      border: "border-[#bb9af7]/30", 
      text: "text-[#bb9af7]",
      iconColor: "#bb9af7"
    },
  ];

  return (
    <Section id="skills">
      
      <h2 className="text-3xl font-semibold tracking-tight mb-12">
        Skills
      </h2>

      <div className="relative overflow-hidden rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm p-8 min-h-[300px]">
        
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
        </div>

        <div className="relative z-10 flex flex-wrap gap-4 justify-center items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5,
                }}
                viewport={{ once: true }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${skill.color} border ${skill.border} ${skill.text} font-medium text-sm cursor-default backdrop-blur-sm`}
              >
                <Icon size={18} style={{ color: skill.iconColor }} />
                {skill.name}
              </motion.div>
            );
          })}
        </div>

      </div>

    </Section>
  );
}