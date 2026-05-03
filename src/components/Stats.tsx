'use client';

import { motion } from "motion/react";

import { StatsDictionary } from "@/types/dictionary";

export default function Stats({ dict }: { dict: StatsDictionary }) {
  const stats = [
    { label: dict.stat1, value: "10k+" },
    { label: dict.stat2, value: "100+" },
    { label: dict.stat3, value: "50+" },
    { label: dict.stat4, value: "99%" },
  ];

  return (
    <section className="py-24 px-6 border-t border-brand-dark/10 bg-brand-dark text-brand-light relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-brand-light/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="pl-6 first:pl-0 flex flex-col justify-center"
            >
              <h3 className="text-5xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-brand-accent">{stat.value}</h3>
              <p className="text-brand-light/60 font-semibold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
