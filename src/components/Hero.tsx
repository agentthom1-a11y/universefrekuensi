'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Multiple parallax layers for depth
  const deepBackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const deepBackgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col justify-center overflow-hidden bg-brand-light">
      
      {/* Neoclassical CSS Columns (Abstract Structural Pillars) */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute left-8 md:left-16 lg:left-28 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/5 to-brand-dark/0 pointer-events-none hidden md:block" />
      
      {/* Deepest Parallax Layer - Silhouette/Background Character */}
      <motion.div 
        style={{ y: deepBackgroundY, scale: deepBackgroundScale }}
        className="absolute right-[10%] md:right-[20%] bottom-0 top-[10%] w-[90%] md:w-[70%] lg:w-[60%] opacity-10 pointer-events-none origin-bottom mix-blend-multiply blur-[2px]"
      >
        <img 
          src="/hero_deep.png" 
          alt="Deep Background Ancient Character"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-110"
          style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Parallax Ancient Statue Background - Far Layer */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute right-0 bottom-0 top-0 w-[80%] md:w-[60%] lg:w-[50%] opacity-20 md:opacity-40 pointer-events-none origin-bottom mix-blend-multiply"
      >
        <img 
          src="/logo.jpeg" 
          alt="Ancient Greek Statue"
          className="w-full h-full object-cover object-right grayscale contrast-125 brightness-110"
          style={{ maskImage: "linear-gradient(to right, transparent, black 80%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 80%)" }}
        />
      </motion.div>

      {/* Sun/Gold Abstract Flare - Mid Layer */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute top-[20%] right-[10%] w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"
      />

      {/* Floating Ambient Dust Particles */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-brand-accent/40 blur-[1px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.6, 0.2] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] left-[10%] w-3 h-3 rounded-full bg-brand-accent/30 blur-[2px]" 
      />
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.1, 0.5, 0.1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[30%] w-4 h-4 rounded-full bg-brand-accent/20 blur-[3px]" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-brand-accent font-bold uppercase tracking-widest mb-6 flex items-center space-x-3"
        >
          <span className="w-8 h-[1px] bg-brand-accent inline-block" />
          <span>Filosofi & Ruang Nyaman</span>
        </motion.p>
        <motion.div style={{ y: textY, opacity }}>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] sm:text-6xl md:text-8xl lg:text-[7rem] font-serif font-medium tracking-tighter leading-[0.9] text-brand-dark max-w-5xl uppercase"
          >
            Temukan <br /> 
            <span className="text-brand-accent italic font-light">Ruang Sepi</span> <br/>
            Di Tengah <br/>
            Bisingnya Dunia.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a href="#lead-magnet" className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-dark text-brand-accent rounded-full overflow-hidden transition-all duration-500 hover:bg-brand-accent hover:text-brand-dark hover:shadow-[0_0_40px_rgba(197,168,128,0.4)] border border-brand-accent/20">
              <span className="font-serif font-bold uppercase tracking-widest text-sm relative z-10">Mulai Perjalananmu</span>
              <ArrowRight className="w-5 h-5 ml-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
