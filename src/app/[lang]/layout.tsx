import type { Metadata } from "next";
import "@/app/globals.css";
import { i18n } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || i18n.defaultLocale;
  const isEn = lang === 'en';
  
  const title = isEn ? "Universe Frekuensi | Find Quiet Space" : "Universe Frekuensi | Temukan Ruang Sepi";
  const description = isEn 
    ? "Tranquility is an authentic luxury. Rediscover clarity of mind like ancient philosophers at Universe Frekuensi."
    : "Ketenangan adalah kemewahan otentik. Temukan kembali kejernihan pikiran layaknya filsuf kuno di Universe Frekuensi.";
  const keywords = isEn
    ? ["mindfulness", "stoicism", "tranquility", "journal", "meditation", "philosophy"]
    : ["mindfulness", "stoicism", "ketenangan", "jurnal", "meditasi", "filosofi"];

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://universefrekuensi.com"),
    title,
    description,
    keywords,
    authors: [{ name: "Universe Frekuensi" }],
    creator: "Universe Frekuensi",
    publisher: "Universe Frekuensi",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-US': '/en',
        'id-ID': '/id',
        'x-default': '/id',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      siteName: 'Universe Frekuensi',
      images: [
        {
          url: '/logo.jpeg',
          width: 1200,
          height: 630,
          alt: 'Universe Frekuensi',
        },
      ],
      locale: isEn ? 'en_US' : 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.jpeg'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/logo.jpeg',
      shortcut: '/logo.jpeg',
      apple: '/logo.jpeg',
    },
    category: 'lifestyle',
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const isEn = lang === 'en';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Universe Frekuensi',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://universefrekuensi.com',
    logo: `${process.env.NEXT_PUBLIC_APP_URL || 'https://universefrekuensi.com'}/logo.jpeg`,
    description: isEn 
      ? 'Tranquility is an authentic luxury. Rediscover clarity of mind like ancient philosophers.'
      : 'Ketenangan adalah kemewahan otentik. Temukan kembali kejernihan pikiran layaknya filsuf kuno.',
    sameAs: [
      'https://instagram.com/universefrekuensi',
    ],
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
