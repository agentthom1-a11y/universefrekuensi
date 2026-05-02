'use client';

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Services({ dict }: { dict: any }) {
  const services = [
    { title: dict.srv1Title, desc: dict.srv1Desc },
    { title: dict.srv2Title, desc: dict.srv2Desc },
    { title: dict.srv3Title, desc: dict.srv3Desc },
  ];

  return (
    <section className="py-32 px-6 bg-brand-light relative overflow-hidden" id="services">
      {/* Background Shimmer Effect */}
      <motion.div 
        animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent bg-[length:200%_100%] pointer-events-none mix-blend-overlay" 
      />
      
      {/* Ancient Greek Meander/Pillar Subtle Motifs */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter uppercase max-w-2xl px-4 lg:px-0">
            {dict.title} <br/><span className="text-brand-accent italic font-light drop-shadow-sm">{dict.titleHighlight}</span>
          </h2>
          <p className="text-brand-dark/80 font-medium max-w-sm text-lg leading-relaxed mix-blend-multiply px-4 lg:px-0">
            {dict.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border-t-2 border-b-2 border-brand-dark/10">
          {services.map((srv, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-brand-dark/[0.03] transition-all duration-500 px-6 lg:px-12 rounded-xl mb-1 hover:-translate-y-2 border-b border-brand-dark/5 last:border-b-0"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-3 group-hover:translate-x-4 group-hover:text-brand-accent transition-all duration-500">{srv.title}</h3>
                <p className="text-brand-dark/60 font-sans font-medium max-w-md group-hover:translate-x-4 transition-transform delay-75 duration-500">{srv.desc}</p>
              </div>
              <div className="mt-6 md:mt-0 w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500 shadow-sm group-hover:shadow-brand-accent/30 group-hover:shadow-[0_0_15px_rgba(197,168,128,0.4)]">
                <ArrowUpRight className="w-5 h-5 text-brand-dark transition-all duration-300 group-hover:text-brand-accent group-hover:animate-pulse group-hover:rotate-12 group-hover:scale-110" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
