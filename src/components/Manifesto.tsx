'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative py-24 px-6 bg-brand-light" id="manifesto">
      <div className="max-w-7xl mx-auto">
        <div className="w-full aspect-video rounded-3xl overflow-hidden relative group border border-brand-dark/10 shadow-2xl">
          <motion.img 
            style={{ y: yImage, scale: 1.1 }}
            src="/manifesto.png" 
            alt="Ancient Philosophy" 
            className="w-full h-full object-cover origin-center grayscale filter contrast-125 sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center mix-blend-multiply transition-colors group-hover:bg-brand-dark/20" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-serif tracking-tighter text-brand-light uppercase text-center backdrop-blur-md px-12 py-6 rounded-3xl bg-brand-dark/10 border border-brand-light/20 drop-shadow-2xl"
            >
              Reset Mindset.
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
