'use client';

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/app/actions";

import { NewsDictionary, Article } from "@/types/dictionary";

export default function News({ dict }: { dict: NewsDictionary }) {
  const allNews: Article[] = dict.articles || [];
  const categories = [dict.all, ...Array.from(new Set(allNews.map(item => item.cat)))];
  const [selectedCategory, setSelectedCategory] = useState(dict.all);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, null);

  const filteredNews = selectedCategory === dict.all 
    ? allNews 
    : allNews.filter(item => item.cat === selectedCategory);

  return (
    <section className="py-32 px-6 bg-brand-dark text-brand-light border-y border-brand-light/10 relative" id="news">
      <div className="max-w-7xl mx-auto">
        
        {/* Detail Reader View Overlay */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[100] bg-brand-dark flex flex-col pt-32 px-6 pb-24 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto w-full relative">
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="sticky top-6 z-50 mb-12 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-light/60 hover:text-brand-accent transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>{dict.backToJournal}</span>
                </button>

                <div className="flex items-center space-x-4 mb-8">
                  <span className="font-serif text-brand-accent text-xl italic drop-shadow-sm">{dict.catalog} {activeArticle.id < 10 ? `0${activeArticle.id}` : activeArticle.id}</span>
                  <span className="w-12 h-[1px] bg-brand-light/20" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-light/70">{activeArticle.cat}</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif font-bold tracking-tighter leading-[1.05] uppercase mb-16 text-brand-light">
                  {activeArticle.title}
                </h2>

                <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-brand-light/10 relative">
                  <Image src={activeArticle.img} alt={activeArticle.title} fill sizes="100vw" className="object-cover filter grayscale contrast-125 sepia-[0.3]" />
                </div>

                <div className="prose prose-lg prose-invert max-w-2xl mx-auto font-sans text-brand-light/80 leading-relaxed mb-32">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "text-xl md:text-2xl font-serif text-brand-light leading-snug drop-shadow-sm mb-8" : "mb-6"}>
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-12 pt-8 border-t border-brand-light/10 italic text-brand-accent">
                    {activeArticle.footer}
                  </div>
                </div>

                {/* DEDICATED CTA: Newsletter Subscription */}
                <div className="max-w-3xl mx-auto border-t border-b border-brand-light/10 py-24 my-24 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197,168,128,1) 10px, rgba(197,168,128,1) 11px)' }} />
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
                        {dict.newsletterTitle} <span className="text-brand-accent italic">{dict.newsletterHighlight}</span>
                      </h3>
                      <p className="text-brand-light/60 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                        {dict.newsletterDesc}
                      </p>
                    </div>

                    <div className="w-full md:w-auto flex-1">
                      {state?.success ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          className="bg-brand-accent/20 border border-brand-accent p-6 text-center font-bold text-brand-accent uppercase tracking-widest text-xs"
                        >
                          {dict.alert}
                        </motion.div>
                      ) : (
                        <form className="relative group flex flex-col sm:flex-row gap-4 w-full" action={formAction}>
                          <div className="relative flex-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/40 absolute -top-5 left-0 transition-colors group-focus-within:text-brand-accent">
                              {dict.emailLabel}
                            </label>
                            <input 
                              type="email" 
                              name="email"
                              placeholder={dict.emailPlaceholder} 
                              className="w-full bg-transparent border-b-2 border-brand-light/20 py-3 text-lg font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20 text-brand-light disabled:opacity-50"
                              required
                              disabled={isPending}
                            />
                          </div>
                          <button 
                            type="submit" 
                            disabled={isPending}
                            className="flex items-center justify-center px-8 py-3 bg-brand-light text-brand-dark rounded-none font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-brand-dark transition-colors duration-300 disabled:opacity-50"
                          >
                            {isPending ? dict.btnProcessing || "..." : dict.subscribe}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-32">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-light transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    <span>{dict.backToCatalog}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
              >
                <h2 className="text-6xl md:text-[90px] font-serif font-bold tracking-tighter uppercase leading-none self-start relative z-10 w-full mb-12 border-b border-brand-light/10 pb-8">
                  <span className="text-brand-light/10 absolute -top-8 left-0 text-8xl md:text-[140px] pointer-events-none tracking-widest whitespace-nowrap">JURNAL</span>
                  {dict.journalTitle} <br/><span className="text-brand-accent">{dict.journalHighlight}</span>
                </h2>
                
                <div className="flex flex-wrap gap-4 w-full uppercase tracking-[0.2em] text-[10px] font-bold">
                  {categories.map((cat, idx) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative group transition-colors px-4 py-2 flex items-center border border-brand-light/10 rounded-full hover:border-brand-accent/50 ${
                        selectedCategory === cat 
                          ? "bg-brand-accent text-brand-dark" 
                          : "bg-transparent text-brand-light hover:text-brand-accent"
                      }`}
                    >
                      <span className={`mr-2 font-serif italic text-sm ${selectedCategory === cat ? "text-brand-dark/50" : "text-brand-light/30"}`}>
                        0{idx + 1}
                      </span>
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-col border-t border-brand-light/10 mt-8">
                <AnimatePresence mode="popLayout">
                  {filteredNews.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setActiveArticle(item)}
                      className="group flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 py-16 md:py-24 border-b border-brand-light/10 cursor-pointer"
                    >
                      {/* The Content */}
                      <div className={`flex-1 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="font-serif text-brand-light/30 text-xl italic drop-shadow-sm">{dict.catalog} {item.id < 10 ? `0${item.id}` : item.id}</span>
                          <span className="w-12 h-[1px] bg-brand-light/20" />
                          <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-accent">{item.cat}</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] tracking-tighter text-brand-light group-hover:text-brand-accent transition-colors duration-500 mb-10">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-brand-light/50 group-hover:text-brand-light transition-colors">
                          <span className="w-12 h-12 rounded-full border border-brand-light/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-700 shadow-sm">
                            <ArrowUpRight className="w-5 h-5 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
                          </span>
                          <span>{dict.readManuscript}</span>
                        </div>
                      </div>

                      {/* The Image (Arch) */}
                      <div className={`w-full md:w-[40%] xl:w-[35%] aspect-[3/4] rounded-[200px_200px_0_0] overflow-hidden bg-brand-light/5 relative ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="absolute inset-0 bg-brand-accent/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-1000" />
                        <Image
                          src={item.img} 
                          alt={item.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                          className="object-cover filter grayscale contrast-125 sepia-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out origin-bottom" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {filteredNews.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="py-20 text-center border border-dashed border-brand-light/20 rounded-2xl"
                >
                  <p className="text-lg font-serif italic text-brand-light/60">{dict.empty}</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
