'use client';

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { ServicesDictionary } from "@/types/dictionary";

export default function Services({ dict }: { dict: ServicesDictionary }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] === 'en' ? 'en' : 'id';

  const services = [
    { title: dict.srv1Title, desc: dict.srv1Desc },
    { title: dict.srv2Title, desc: dict.srv2Desc },
    { title: dict.srv3Title, desc: dict.srv3Desc },
  ];

  const detailsEn = [
    {
      title: "The Morning Calibration Ritual",
      steps: [
        "Sovereign First Hour: Keep your devices completely off for the first 45 minutes of the day to protect your attention span.",
        "Gratitude Anchor: Write down three specific micro-moments from yesterday that brought quiet satisfaction.",
        "Set the Daily Tone: Speak or write your core intention: 'Today, I choose to prioritize clarity over speed.'"
      ]
    },
    {
      title: "The Evening Sinking Practice",
      steps: [
        "The Burden Audit: Write one thing that drained your energy today, and one thing that restored it.",
        "Stoic Decoupling: Quietly affirm to yourself: 'The day is done. I have done what I could. The rest is out of my control.'",
        "Sensory Grounding: Dim all artificial lights, slow your breathing, and let your shoulders drop fully."
      ]
    },
    {
      title: "The Deep Focus Container",
      steps: [
        "The Single Task Anchor: Choose exactly one critical objective for the next 90 minutes. Do not open other tabs.",
        "Silence Environmental Noise: Put your phone in another room and turn off all desktop notifications.",
        "Breathe & Reset: Take a 5-minute silent breathing pause between deep work blocks to clear accumulated mental fatigue."
      ]
    }
  ];

  const detailsId = [
    {
      title: "Ritual Kalibrasi Pagi",
      steps: [
        "Satu Jam Pertama Berdaulat: Matikan ponsel selama 45 menit pertama di pagi hari untuk menjaga fokus batin Anda.",
        "Jangkar Rasa Syukur: Tuliskan tiga momen mikro spesifik kemarin yang mendatangkan kepuasan hening.",
        "Tentukan Ritme Harian: Ucapkan atau tulis niat utamamu: 'Hari ini, saya memprioritaskan kejelasan daripada kecepatan.'"
      ]
    },
    {
      title: "Praktik Penurunan Malam",
      steps: [
        "Audit Beban: Tulis satu hal yang menguras energimu hari ini, dan satu hal yang memulihkannya.",
        "Pemisahan Stoik: Tegaskan pada dirimu: 'Hari ini telah selesai. Saya telah melakukan apa yang saya bisa. Selebihnya berada di luar kendali saya.'",
        "Grounding Sensorik: Redupkan lampu, perlambat napas, dan rilekskan bahu sepenuhnya sebelum tidur."
      ]
    },
    {
      title: "Wadah Fokus Mendalam",
      steps: [
        "Jangkar Tugas Tunggal: Pilih tepat satu tujuan kritis untuk 90 menit ke depan. Jangan membuka tab lain.",
        "Heningkan Gangguan Sekitar: Letakkan ponsel di ruangan lain dan matikan semua notifikasi desktop.",
        "Bernapas & Reset: Ambil jeda napas hening selama 5 menit di antara blok kerja mendalam untuk menyegarkan pikiran."
      ]
    }
  ];

  const details = currentLang === 'en' ? detailsEn : detailsId;

  const handleToggle = (index: number) => {
    setActiveIdx(activeIdx === index ? null : index);
  };

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
          {services.map((srv, i) => {
            const isExpanded = activeIdx === i;
            return (
              <div key={i} className="border-b border-brand-dark/5 last:border-b-0">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => handleToggle(i)}
                  className={`group py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-brand-dark/[0.03] transition-all duration-500 px-6 lg:px-12 rounded-xl mb-1 ${isExpanded ? 'bg-brand-dark/[0.02]' : ''}`}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-3 group-hover:translate-x-4 group-hover:text-brand-accent transition-all duration-500">{srv.title}</h3>
                    <p className="text-brand-dark/60 font-sans font-medium max-w-md group-hover:translate-x-4 transition-transform delay-75 duration-500">{srv.desc}</p>
                  </div>
                  <div className={`mt-6 md:mt-0 w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500 shadow-sm group-hover:shadow-brand-accent/30 group-hover:shadow-[0_0_15px_rgba(197,168,128,0.4)] ${isExpanded ? 'bg-brand-dark border-brand-dark text-brand-accent' : 'text-brand-dark'}`}>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-500 ${isExpanded ? 'text-brand-accent rotate-45 scale-110' : 'group-hover:animate-pulse group-hover:rotate-12 group-hover:scale-110'}`} />
                  </div>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-brand-dark/[0.02] border-t border-brand-dark/5"
                    >
                      <div className="px-12 py-10 max-w-4xl">
                        <h4 className="font-serif text-brand-accent font-bold uppercase tracking-wider text-sm mb-6">
                          {details[i].title}
                        </h4>
                        <ol className="space-y-4 font-sans text-brand-dark/80 text-base leading-relaxed pl-4 list-decimal">
                          {details[i].steps.map((step, idx) => (
                            <li key={idx} className="marker:text-brand-accent marker:font-bold">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
