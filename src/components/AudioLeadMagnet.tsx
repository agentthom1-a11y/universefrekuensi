'use client';

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import React, { useState } from "react";

export default function AudioLeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="audio-magnet" className="bg-brand-dark border-b border-brand-light/10">
      <div className="flex flex-col lg:flex-row-reverse min-h-[70vh]">
        
        {/* Right Side: Pitch (Light & Ethereal) */}
        <div className="flex-1 bg-brand-light text-brand-dark p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Vertical rail text */}
          <div className="absolute right-6 top-12 bottom-12 hidden md:flex items-center">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-brand-dark/30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Sonik · Ambien
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pr-12 max-w-2xl relative z-10 lg:ml-auto"
          >
            <h2 className="text-6xl md:text-[80px] lg:text-[112px] font-serif font-bold tracking-tighter leading-[0.85] uppercase mb-8">
              Frekuensi <br/> <span className="text-brand-accent drop-shadow-sm">Eterik.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-brand-dark/80 max-w-lg mb-8 leading-relaxed">
              Koleksi eksklusif Audio Meditasi Terpandu & Ambien Kuno untuk meresonansi ulang batin Anda menuju keheningan mutlak.
            </p>
            
            {/* Feature Bubbles */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-2.5 rounded-full border border-brand-dark/20 text-sm font-bold uppercase tracking-wider text-brand-dark">
                #Soundscape
              </span>
              <span className="px-5 py-2.5 rounded-full border border-brand-accent/40 text-sm font-bold uppercase tracking-wider text-brand-accent bg-brand-dark shadow-sm">
                + Binaural Beats
              </span>
            </div>
          </motion.div>
        </div>

        {/* Left Side: Action (Dark & Forms) */}
        <div className="flex-1 bg-brand-dark p-12 md:p-24 flex flex-col justify-center items-center lg:items-end relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:mx-0 lg:mr-12"
          >
            <div className="w-20 h-20 rounded-full border border-brand-light/20 flex items-center justify-center mb-12 bg-brand-accent/10 text-brand-accent shadow-inner relative">
              <div className="absolute inset-0 rounded-full border border-brand-accent/50 animate-ping opacity-20" />
              <PlayCircle className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
              {isSuccess ? "Akses Terbuka" : "Dengarkan Aksesnya"}
            </h3>
            <p className="text-brand-light/60 font-medium mb-12">
              {isSuccess 
                ? "Tautan menuju galeri audio telah dikirimkan ke email Anda. Selamat menikmati harmoni." 
                : "Klaim Audio Pack Anda dan jadikan setiap sudut ruangan sebagai ruang suci yang privat."}
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8 w-full" 
                  onSubmit={handleSubmit}
                >
                  <div className="relative group">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-light/50 absolute -top-6 left-0 transition-colors group-focus-within:text-brand-accent">
                      Alamat Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="anda@email.com" 
                      className="w-full bg-transparent border-b-2 border-brand-light/20 py-3 text-2xl font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20 text-brand-light disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-between w-full p-6 mt-4 border border-brand-accent rounded-none bg-transparent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-serif font-bold uppercase tracking-widest text-lg relative z-10">
                      {isSubmitting ? "Memproses..." : "Mulai Mendengarkan"}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-light/50 text-center lg:text-left">
                    Kualitas Audio Lossless. Unduhan Instan.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 border border-brand-accent/30 bg-brand-accent/10 rounded-xl text-brand-light/80 font-medium"
                >
                  <p className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center">
                      ✓
                    </span>
                    <span>Kami telah mengirimkan akses ke email Anda. Sampai jumpa di dalam ruang meditasi Anda.</span>
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
