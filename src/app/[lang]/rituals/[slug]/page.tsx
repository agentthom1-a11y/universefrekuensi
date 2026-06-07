import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RitualPlayer from "@/components/RitualPlayer";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import ritualsData from "@/data/rituals.json";
import { Ritual } from "@/types/dictionary";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  const locales = ['en', 'id'];

  ritualsData.forEach((ritual) => {
    locales.forEach((locale) => {
      paths.push({
        lang: locale,
        slug: ritual.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const slug = resolvedParams.slug;

  const ritual = (ritualsData as Ritual[]).find((r) => r.slug === slug);
  if (!ritual) return {};

  const fields = lang === 'en' ? ritual.en : ritual.id_lang;

  return {
    title: `${fields.title} | Universe Frekuensi`,
    description: fields.summary,
    keywords: ritual.seo_keywords,
    alternates: {
      canonical: `/${lang}/rituals/${slug}`,
    },
    openGraph: {
      title: `${fields.title} | Universe Frekuensi`,
      description: fields.summary,
      url: `/${lang}/rituals/${slug}`,
      images: [
        {
          url: ritual.cover_img,
          width: 1280,
          height: 720,
          alt: fields.title,
        }
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fields.title} | Universe Frekuensi`,
      description: fields.summary,
      images: [ritual.cover_img],
    },
  };
}

export default async function RitualDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const slug = resolvedParams.slug;

  const dict = await getDictionary(lang as Locale);
  const ritual = (ritualsData as Ritual[]).find((r) => r.slug === slug);

  if (!ritual || ritual.status !== 'published') {
    notFound();
  }

  const fields = lang === 'en' ? ritual.en : ritual.id_lang;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://universefrekuensi.com';
  const url = `${baseUrl}/${lang}/rituals/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/${lang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'en' ? 'Rituals' : 'Ritual',
            item: `${baseUrl}/${lang}/rituals`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: fields.title,
            item: url,
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: fields.title,
        description: fields.description,
        image: `${baseUrl}${ritual.cover_img}`,
        step: fields.ritual_steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          text: step,
        })),
      }
    ]
  };

  // Custom dictionary strings for Ritual Player
  const playerDict = lang === 'en' ? {
    backToList: "Back to Ritual Library",
    backToHome: "Back to Home",
    breatheHelper: "Breathing Calibration",
    breathIn: "Breathe In",
    breathOut: "Breathe Out",
    stepsHeader: "Ritual Steps",
    completeTitle: "Calibration Completed",
    completeDesc: "Your frequency has settled. Carry this quiet with you. To expand this state, you can explore the premium Aether Quiet Ritual.",
    resetRitual: "Repeat Ritual",
    ctaPremiumProduct: "Explore the Aether Science",
  } : {
    backToList: "Kembali ke Pustaka Ritual",
    backToHome: "Kembali ke Beranda",
    breatheHelper: "Kalibrasi Napas",
    breathIn: "Tarik Napas",
    breathOut: "Hembuskan Napas",
    stepsHeader: "Langkah Ritual",
    completeTitle: "Kalibrasi Selesai",
    completeDesc: "Sinyal Anda telah selaras. Bawa keheningan ini dalam hari Anda. Untuk memperdalam kondisi ini, Anda dapat menjelajahi Aether Quiet Ritual premium.",
    resetRitual: "Ulangi Ritual",
    ctaPremiumProduct: "Pelajari Sains Aether",
  };

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-accent selection:text-brand-dark pb-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict.nav} />
      
      {/* Background Motifs */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/5 to-brand-light/0 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/5 to-brand-light/0 pointer-events-none" />
      
      <div className="py-40 px-6 relative z-10">
        <RitualPlayer 
          ritual={ritual} 
          lang={lang} 
          dict={playerDict} 
        />
      </div>
      
      <Footer dict={dict.footer} />
    </main>
  );
}
