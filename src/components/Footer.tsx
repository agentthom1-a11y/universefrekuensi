'use client';

import { motion } from "motion/react";

import { Dictionary } from "@/types/dictionary";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="pt-32 pb-12 px-6 bg-brand-dark text-brand-light relative overflow-hidden">
      {/* Neoclassical Entablature (Architrave layered borders) */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-accent/40" />
      <div className="absolute top-[8px] left-0 w-full h-[2px] bg-brand-accent" />
      <div className="absolute top-[14px] left-0 w-full h-[1px] bg-brand-light/30" />
      <div className="absolute top-[20px] left-0 w-full h-[4px] bg-brand-light/10" />

      {/* Subtle Greek column backdrop watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,1) 100px, rgba(255,255,255,1) 120px)' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative z-10">
        
        {/* Main Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 lg:pr-16 relative"
        >
          {/* Aesthetic Divider Pillar */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/50 to-brand-accent/0" />
          <div className="hidden lg:block absolute right-[4px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/10 to-brand-light/0" />

          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest uppercase mb-6 text-brand-light">
            Universe<span className="text-brand-accent font-light mx-2 text-[1.2em] shadow-brand-accent/20 drop-shadow-lg">Φ</span><br className="hidden md:block"/>Frekuensi
          </h2>
          <p className="text-brand-light/60 font-medium max-w-sm text-lg leading-relaxed mix-blend-screen">
            {dict.desc}
          </p>
        </motion.div>
        
        {/* Nav Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:pl-16 relative"
        >
          {/* Aesthetic Divider Pillar */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/30 to-brand-accent/0" />
          
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] mb-8 text-brand-accent text-sm drop-shadow-md">{dict.navTitle}</h4>
          <ul className="space-y-5 font-serif text-brand-light/70 text-lg">
            <li><a href="#manifesto" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.nav1}</a></li>
            <li><a href="#services" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.nav2}</a></li>
            <li><a href="#news" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.nav3}</a></li>
            <li><a href="#stoic-ai" className="text-brand-accent font-bold hover:tracking-widest transition-all duration-300">Stoic Oracle</a></li>
          </ul>
        </motion.div>
        
        {/* Connection Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:pl-16"
        >
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] mb-8 text-brand-accent text-sm drop-shadow-md">{dict.connTitle}</h4>
          <ul className="space-y-5 font-serif text-brand-light/70 text-lg">
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.conn1}</a></li>
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.conn2}</a></li>
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">{dict.conn3}</a></li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 mt-24 border-t border-brand-accent/30 text-brand-light/50 font-sans tracking-[0.3em] text-xs uppercase relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent" />
        <p>{dict.copyright}</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-brand-accent transition-colors">{dict.privacy}</a>
          <a href="#" className="hover:text-brand-accent transition-colors">{dict.terms}</a>
        </div>
      </motion.div>
    </footer>
  );
}
