'use client';

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BookHeart } from "lucide-react";
import React from "react";

import { useActionState } from "react";
import { claimLeadMagnet } from "@/app/actions";

import { LeadMagnetDictionary } from "@/types/dictionary";

export default function LeadMagnet({ dict }: { dict: LeadMagnetDictionary }) {
  const [state, formAction, isPending] = useActionState(claimLeadMagnet, null);
  const isSuccess = state?.success;

  return (
    <section id="lead-magnet" className="bg-brand-light border-y border-brand-dark/10">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        
        {/* Left Side: Pitch (Dark & Confident) */}
        <div className="flex-1 bg-brand-dark text-brand-light p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Vertical rail text */}
          <div className="absolute left-6 top-12 bottom-12 hidden md:flex items-center">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-brand-light/30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
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
              {dict.title} <br/> <span className="text-brand-accent">{dict.titleHighlight}</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-brand-light/70 max-w-lg mb-8 leading-relaxed">
              {dict.desc}
            </p>
            
            {/* Feature Bubbles */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-2.5 rounded-full border border-brand-light/20 text-sm font-bold uppercase tracking-wider text-brand-accent">
                {dict.feature1}
              </span>
              <span className="px-5 py-2.5 rounded-full border border-brand-light/20 text-sm font-bold uppercase tracking-wider text-brand-light">
                {dict.feature2}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Action (Light & Forms) */}
        <div className="flex-1 bg-brand-light p-12 md:p-24 flex flex-col justify-center items-center lg:items-start relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="w-20 h-20 rounded-full border border-brand-dark flex items-center justify-center mb-12 bg-brand-accent/20 text-brand-accent shadow-inner">
              <BookHeart className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-dark">
              {isSuccess ? dict.ctaTitleSuccess : dict.ctaTitle}
            </h3>
            <p className="text-brand-dark/70 font-medium mb-12">
              {isSuccess 
                ? dict.ctaDescSuccess 
                : dict.ctaDesc}
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8 w-full" 
                  action={formAction}
                >
                  <input type="hidden" name="type" value="journal" />
                  <div className="relative group">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/50 absolute -top-6 left-0 transition-colors group-focus-within:text-brand-accent">
                      {dict.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder={dict.emailPlaceholder} 
                      className="w-full bg-transparent border-b-2 border-brand-dark/20 py-3 text-2xl font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-dark/20 text-brand-dark disabled:opacity-50"
                      required
                      disabled={isPending}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isPending}
                    className="group relative flex items-center justify-between w-full p-6 mt-4 border border-brand-dark rounded-none bg-brand-dark text-brand-accent hover:bg-brand-accent hover:border-brand-accent hover:text-brand-dark transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-serif font-bold uppercase tracking-widest text-lg relative z-10">
                      {isPending ? dict.btnProcessing : dict.btnDownload}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                      {isPending ? (
                        <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/50 text-center lg:text-left">
                    {dict.spamDesc}
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 border border-brand-accent/30 bg-brand-accent/5 rounded-xl text-brand-dark/80 font-medium"
                >
                  <p className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center">
                      ✓
                    </span>
                    <span>{dict.successMsg}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
