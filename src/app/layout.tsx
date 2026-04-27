import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Universe Frekuensi | Temukan Ruang Sepi",
  description: "Ketenangan adalah kemewahan otentik. Temukan kembali kejernihan pikiran layaknya filsuf kuno di Universe Frekuensi.",
  keywords: ["mindfulness", "stoicism", "ketenangan", "jurnal", "meditasi", "filosofi"],
  openGraph: {
    title: "Universe Frekuensi | Temukan Ruang Sepi",
    description: "Ketenangan adalah kemewahan otentik. Temukan kembali kejernihan pikiran layaknya filsuf kuno.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
