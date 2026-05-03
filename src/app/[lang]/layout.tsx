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
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: ["/logo.jpeg"],
    },
    alternates: {
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang}>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
