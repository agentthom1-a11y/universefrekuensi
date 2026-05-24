'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ritualsData from "@/data/rituals.json";
import { Ritual } from "@/types/dictionary";

interface RitualsSectionProps {
  lang: string;
  dict: {
    sectionBadge: string;
    sectionTitle: string;
    sectionHighlight: string;
    sectionDesc: string;
    viewAll: string;
    enterRitual: string;
  };
}

export default function RitualsSection({ lang, dict }: RitualsSectionProps) {
  const activeRituals = (ritualsData as Ritual[]).filter(r => r.status === 'published');

  return (
    <section className="py-32 px-6 bg-brand-dark text-brand-light relative overflow-hidden border-y border-brand-light/10" id="rituals-section">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/10 to-brand-light/0 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/10 to-brand-light/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
              {dict.sectionBadge}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter uppercase max-w-2xl leading-none">
              {dict.sectionTitle} <br/>
              <span className="text-brand-accent italic font-light drop-shadow-sm">{dict.sectionHighlight}</span>
            </h2>
            <p className="text-brand-light/70 font-medium max-w-md text-lg leading-relaxed mt-6 font-sans">
              {dict.sectionDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href={`/${lang}/rituals`}
              className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-light transition-colors"
            >
              <span>{dict.viewAll}</span>
              <div className="w-10 h-10 rounded-full border border-brand-accent/30 group-hover:border-brand-light flex items-center justify-center transition-all group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeRituals.map((ritual, i) => {
            const fields = lang === 'en' ? ritual.en : ritual.id_lang;
            return (
              <motion.div
                key={ritual.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/${lang}/rituals/${ritual.slug}`}
                  className="group flex flex-col h-full border border-brand-light/10 bg-brand-light/[0.01] hover:border-brand-accent/50 hover:bg-brand-light/[0.02] transition-all duration-500 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-brand-light/5 border-b border-brand-light/10">
                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700" />
                    <Image
                      src={ritual.thumbnail_img}
                      alt={fields.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover filter grayscale contrast-125 sepia-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] origin-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {ritual.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[9px] uppercase font-bold tracking-widest text-brand-light/45">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-serif font-bold uppercase tracking-tight text-brand-light group-hover:text-brand-accent transition-colors mb-2">
                        {fields.title}
                      </h3>
                      <p className="text-xs text-brand-accent/70 font-semibold uppercase tracking-wider mb-4 leading-normal">
                        {fields.subtitle}
                      </p>
                      <p className="text-sm font-sans font-medium text-brand-light/60 leading-relaxed">
                        {fields.summary}
                      </p>
                    </div>

                    {/* Arrow action */}
                    <div className="mt-8 pt-6 border-t border-brand-light/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-light transition-colors">
                      <span>{dict.enterRitual}</span>
                      <div className="w-8 h-8 rounded-full border border-brand-accent/30 group-hover:border-brand-light flex items-center justify-center transition-all group-hover:translate-x-1">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
