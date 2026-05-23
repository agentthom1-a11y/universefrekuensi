'use client';

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { AetherProductDictionary } from "@/types/dictionary";

export default function AetherProduct({ dict }: { dict: AetherProductDictionary }) {
  return (
    <section id="aether-product" className="bg-brand-dark border-b border-brand-light/10">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        
        {/* Left Side: Pitch (Light & Ethereal) */}
        <div className="flex-1 bg-brand-light text-brand-dark p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Vertical rail text */}
          <div className="absolute left-6 top-12 bottom-12 hidden md:flex items-center">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-brand-dark/30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              {dict.badge}
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pl-12 max-w-2xl relative z-10"
          >
            <h2 className="text-6xl md:text-[80px] lg:text-[112px] font-serif font-bold tracking-tighter leading-[0.85] uppercase mb-8">
              {dict.title} <br/> <span className="text-brand-accent drop-shadow-sm">{dict.titleHighlight}</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-brand-dark/80 max-w-lg mb-8 leading-relaxed">
              {dict.desc}
            </p>
            
            {/* Feature Bubbles */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-2.5 rounded-full border border-brand-dark/20 text-sm font-bold uppercase tracking-wider text-brand-dark">
                {dict.feature1}
              </span>
              <span className="px-5 py-2.5 rounded-full border border-brand-accent/40 text-sm font-bold uppercase tracking-wider text-brand-accent bg-brand-dark shadow-sm">
                {dict.feature2}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Action (Dark & Forms) */}
        <div className="flex-1 bg-brand-dark p-12 md:p-24 flex flex-col justify-center items-center lg:items-start relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-12"
          >
            <div className="w-20 h-20 rounded-full border border-brand-light/20 flex items-center justify-center mb-12 bg-brand-accent/10 text-brand-accent shadow-inner relative">
              <div className="absolute inset-0 rounded-full border border-brand-accent/50 animate-pulse opacity-30" />
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
              {dict.ctaTitle}
            </h3>
            <p className="text-brand-light/60 font-medium mb-12">
              {dict.ctaDesc}
            </p>

            <div className="flex flex-col gap-8 w-full">
              <a 
                href="https://universefrekuensi.gumroad.com/l/aether-quiet-ritual"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between w-full p-6 border border-brand-accent rounded-none bg-transparent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 overflow-hidden"
              >
                <span className="font-serif font-bold uppercase tracking-widest text-lg relative z-10">
                  {dict.btnAcquire}
                </span>
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>

              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-light/50 text-center lg:text-left">
                {dict.spamDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
