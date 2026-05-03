'use client';

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Dictionary } from "@/types/dictionary";

export default function Navbar({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] === 'en' ? 'en' : 'id';
  const targetLang = currentLang === 'en' ? 'id' : 'en';
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-brand-dark/10 bg-brand-light/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-serif text-2xl font-bold tracking-widest text-brand-dark uppercase hover-glitch">
          Universe<span className="text-brand-accent font-light mx-1 glitch-phi">Φ</span>Frekuensi
        </div>
        <div className="hidden md:flex items-center space-x-12 text-sm font-semibold uppercase tracking-wide text-brand-dark">
          <a href="#manifesto" className="hover:text-brand-accent transition-colors">{dict.manifesto}</a>
          <a href="#services" className="hover:text-brand-accent transition-colors">{dict.services}</a>
          <a href="#news" className="hover:text-brand-accent transition-colors">{dict.news}</a>
        </div>
        <div className="flex items-center space-x-6">
          <Link 
            href={redirectedPathName(targetLang)} 
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 hover:text-brand-accent transition-colors"
          >
            <span className={currentLang === 'id' ? 'text-brand-accent drop-shadow-sm' : ''}>ID</span>
            <span className="text-brand-dark/20">/</span>
            <span className={currentLang === 'en' ? 'text-brand-accent drop-shadow-sm' : ''}>EN</span>
          </Link>
          <a href="#lead-magnet" className="px-6 py-3 bg-brand-dark text-brand-accent rounded-full text-sm font-bold uppercase tracking-wide hover:bg-brand-accent hover:text-brand-dark transition-all hidden md:block">
            {dict.cta}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
