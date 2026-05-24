'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Play, RotateCcw, Wind, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Ritual } from '@/types/dictionary';

interface RitualPlayerProps {
  ritual: Ritual;
  lang: string;
  dict: {
    backToList: string;
    backToHome: string;
    breatheHelper: string;
    breathIn: string;
    breathOut: string;
    stepsHeader: string;
    completeTitle: string;
    completeDesc: string;
    resetRitual: string;
  };
}

export default function RitualPlayer({ ritual, lang, dict }: RitualPlayerProps) {
  const fields = lang === 'en' ? ritual.en : ritual.id_lang;
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(fields.ritual_steps.length).fill(false)
  );
  const [breathState, setBreathState] = useState<'in' | 'out'>('in');
  const [breathingActive, setBreathingActive] = useState(false);

  // Auto-pulse breathing helper
  useEffect(() => {
    if (!breathingActive) return;
    const interval = setInterval(() => {
      setBreathState((prev) => (prev === 'in' ? 'out' : 'in'));
    }, 4000);
    return () => clearInterval(interval);
  }, [breathingActive]);

  const toggleStep = (index: number) => {
    const updated = [...completedSteps];
    updated[index] = !updated[index];
    setCompletedSteps(updated);
  };

  const allCompleted = completedSteps.every((step) => step === true);

  const reset = () => {
    setCompletedSteps(new Array(fields.ritual_steps.length).fill(false));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Intro Hero Area */}
      <div className="relative rounded-3xl overflow-hidden border border-brand-light/10 bg-brand-dark/50 mb-16 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" />
        <div className="relative aspect-video w-full h-[350px] md:h-[450px]">
          <Image 
            src={ritual.cover_img} 
            alt={fields.title} 
            fill 
            className="object-cover filter grayscale contrast-125 sepia-[0.1]"
            priority
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
          <div className="flex flex-wrap gap-2 mb-4">
            {ritual.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-dark/80 text-[10px] uppercase font-bold tracking-widest text-brand-accent">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight text-brand-light mb-4">
            {fields.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-light/80 font-light max-w-2xl leading-relaxed">
            {fields.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Info Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {fields.sections.map((section, idx) => (
            <div key={idx} className="p-8 border border-brand-light/10 bg-brand-light/[0.02] rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent/20 group-hover:bg-brand-accent transition-colors" />
              <h3 className="font-serif text-brand-accent text-lg font-bold uppercase tracking-wide mb-3">
                {section.heading}
              </h3>
              <p className="text-brand-light/70 text-sm leading-relaxed font-sans">
                {section.body}
              </p>
            </div>
          ))}

          {/* Breathing helper tool */}
          <div className="p-8 border border-brand-accent/20 bg-brand-accent/5 rounded-2xl flex flex-col items-center text-center">
            <Wind className="w-8 h-8 text-brand-accent mb-4 animate-pulse" />
            <h4 className="font-serif text-brand-light font-bold uppercase text-sm tracking-widest mb-2">
              {dict.breatheHelper}
            </h4>
            <p className="text-xs text-brand-light/50 mb-6">
              Use this simple visual indicator to settle your heart rate before starting.
            </p>

            <button
              onClick={() => setBreathingActive(!breathingActive)}
              className="px-6 py-2 border border-brand-accent rounded-full text-xs font-bold uppercase tracking-wider text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-colors mb-6"
            >
              {breathingActive ? 'Stop' : 'Start Breathing Guide'}
            </button>

            {breathingActive && (
              <div className="relative w-28 h-28 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: breathState === 'in' ? 1.4 : 0.8,
                    opacity: breathState === 'in' ? 0.8 : 0.3,
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-brand-accent/20 border border-brand-accent/40"
                />
                <span className="font-serif text-xs uppercase tracking-widest text-brand-accent font-bold relative z-10">
                  {breathState === 'in' ? dict.breathIn : dict.breathOut}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Steps and Interactive Flow */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 md:p-12 border border-brand-light/10 bg-brand-light/[0.01] rounded-3xl">
            <h2 className="text-2xl font-serif font-bold uppercase tracking-wide text-brand-light border-b border-brand-light/15 pb-6 mb-8 flex justify-between items-center">
              <span>{dict.stepsHeader}</span>
              <span className="text-sm font-sans font-bold text-brand-accent">
                {completedSteps.filter(Boolean).length} / {fields.ritual_steps.length}
              </span>
            </h2>

            <div className="space-y-6">
              {fields.ritual_steps.map((step, idx) => {
                const isCompleted = completedSteps[idx];
                const isActive = idx === 0 || completedSteps[idx - 1];
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => isActive && toggleStep(idx)}
                    className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-brand-accent/5 border-brand-accent/30 text-brand-light/50' 
                        : isActive 
                        ? 'bg-brand-light/[0.03] border-brand-light/20 hover:border-brand-accent/60 text-brand-light' 
                        : 'border-transparent text-brand-light/20 cursor-not-allowed pointer-events-none'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        isCompleted 
                          ? 'bg-brand-accent border-brand-accent text-brand-dark' 
                          : isActive 
                          ? 'border-brand-accent text-brand-accent animate-pulse' 
                          : 'border-brand-light/10 text-brand-light/10'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <span className="text-xs font-serif font-bold">0{idx + 1}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className={`font-sans font-medium text-base md:text-lg leading-relaxed ${isCompleted ? 'line-through decoration-brand-accent/40' : ''}`}>
                        {step}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Completion Affirmation Box */}
            <AnimatePresence>
              {allCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-12 p-8 md:p-12 border border-brand-accent bg-brand-dark rounded-2xl text-center relative overflow-hidden"
                >
                  {/* Subtle radiating glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="w-16 h-16 rounded-full border border-brand-accent/30 bg-brand-accent/10 flex items-center justify-center mx-auto mb-6 text-brand-accent">
                    <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold uppercase text-brand-light mb-4">
                    {dict.completeTitle}
                  </h3>
                  
                  <blockquote className="max-w-xl mx-auto my-8 border-l-4 border-brand-accent pl-6 py-2 text-left">
                    <p className="font-serif text-xl md:text-2xl italic text-brand-accent leading-relaxed">
                      "{fields.affirmation}"
                    </p>
                  </blockquote>

                  <p className="text-sm text-brand-light/60 max-w-md mx-auto mb-8 font-sans leading-relaxed">
                    {dict.completeDesc}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                      href="https://universefrekuensi.gumroad.com/l/aether-quiet-ritual"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark font-serif font-bold uppercase tracking-widest text-xs hover:bg-brand-light transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-accent/10"
                    >
                      <span>{fields.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <button
                      onClick={reset}
                      className="w-full sm:w-auto px-6 py-4 border border-brand-light/20 text-brand-light/60 font-sans font-bold uppercase tracking-widest text-xs hover:text-brand-light hover:border-brand-light transition-colors flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{dict.resetRitual}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Navigation Back Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-brand-light/10 pt-12 text-xs font-bold uppercase tracking-widest text-brand-light/40">
        <Link href={`/${lang}/rituals`} className="hover:text-brand-accent transition-colors flex items-center gap-2 mb-4 sm:mb-0">
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>{dict.backToList}</span>
        </Link>
        <Link href={`/${lang}`} className="hover:text-brand-accent transition-colors flex items-center gap-2">
          <span>{dict.backToHome}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
