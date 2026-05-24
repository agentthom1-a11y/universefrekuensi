import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import ritualsData from "@/data/rituals.json";
import { Ritual } from "@/types/dictionary";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === 'en';
  
  return {
    title: isEn ? "Quiet Ritual Library | Universe Frekuensi" : "Pustaka Ritual Hening | Universe Frekuensi",
    description: isEn 
      ? "Choose a mental calibration signal to quiet the noise, ground yourself, and build self-trust."
      : "Pilih sinyal kalibrasi mental untuk menenangkan kebisingan batin, grounding, dan membangun rasa percaya diri.",
  };
}

export default async function RitualsListPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as Locale);

  const title = lang === 'en' ? "Ritual Library" : "Pustaka Ritual";
  const subtitle = lang === 'en' 
    ? "Quiet signals to slow down, align your mind, and return to your center."
    : "Sinyal hening untuk melambat, menyelaraskan pikiran, dan kembali ke pusat diri.";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ritualsData.map((ritual, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://universefrekuensi.com'}/${lang}/rituals/${ritual.slug}`,
      name: lang === 'en' ? ritual.en.title : ritual.id_lang.title,
    })),
  };

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-accent selection:text-brand-dark pb-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict.nav} />

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/5 to-brand-light/0 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/5 to-brand-light/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto py-40 px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            {lang === 'en' ? "Calibration Library" : "Pustaka Kalibrasi"}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-tight text-brand-light mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-light/70 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(ritualsData as Ritual[]).map((ritual) => {
            const fields = lang === 'en' ? ritual.en : ritual.id_lang;
            return (
              <Link 
                key={ritual.id} 
                href={`/${lang}/rituals/${ritual.slug}`}
                className="group flex flex-col border border-brand-light/10 bg-brand-light/[0.01] hover:border-brand-accent/50 hover:bg-brand-light/[0.03] transition-all duration-500 rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-brand-light/5 border-b border-brand-light/10">
                  <div className="absolute inset-0 bg-brand-accent/15 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700" />
                  <Image 
                    src={ritual.thumbnail_img} 
                    alt={fields.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter grayscale contrast-125 sepia-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 origin-center"
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

                    <h2 className="text-2xl font-serif font-bold uppercase tracking-tight text-brand-light group-hover:text-brand-accent transition-colors mb-3">
                      {fields.title}
                    </h2>
                    
                    <p className="text-xs text-brand-light/50 font-bold uppercase tracking-wider mb-4">
                      {fields.subtitle}
                    </p>

                    <p className="text-sm font-sans font-medium text-brand-light/70 leading-relaxed">
                      {fields.summary}
                    </p>
                  </div>

                  {/* CTA Bottom Bar */}
                  <div className="mt-8 pt-6 border-t border-brand-light/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-light transition-colors">
                    <span>{fields.cta}</span>
                    <div className="w-8 h-8 rounded-full border border-brand-accent/30 group-hover:border-brand-light flex items-center justify-center transition-all group-hover:translate-x-1">
                      <svg className="w-3 h-3 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer dict={dict.footer} />
    </main>
  );
}
