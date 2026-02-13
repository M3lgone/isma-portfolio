"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";

export default function About() {
  return (
    <Section id="about-section">

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* TARJETA CON FOTO - Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10 p-6">
            
            {/* Efecto glow al hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
            </div>

            {/* Foto de perfil */}
            <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Isma"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info personal */}
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2">
                Hey again 👋
              </h3>
              
              <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
                I'm currently learning and building projects with modern web technologies.
              </p>

              {/* Location & Status */}
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-[#a9b1d6]">
                  <MapPin size={16} className="text-[#527dc1]" />
                  <span>Girona, Spain</span>
                </div>
                <div className="flex items-center gap-2 text-[#a9b1d6]">
                  <Briefcase size={16} className="text-[#527dc1]" />
                  <span>Developer in Progress</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CONTENIDO ABOUT - Columna derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="max-w-none">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              A little bit about me
            </h2>
            
            <p className="text-[#a9b1d6] leading-relaxed mb-4">
              Hi, I'm Isma — a developer who believes technology should feel human. I love building clean, modern websites that combine creativity with clarity. My goal is not just to write code, but to create experiences that feel simple, intuitive and meaningful.
            </p>
            
            <p className="text-[#a9b1d6] leading-relaxed">
              I come from diverse experiences that shaped my way of solving problems and understanding people — something I bring into every project I build.
            </p>
          </div>
        </motion.div>

      </div>

    </Section>
  );
}