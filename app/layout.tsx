import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thomas Feret - Développeur Web Full-stack",
  description: "Portfolio de Thomas Feret, développeur web full-stack spécialisé en Next.js, TypeScript et Ruby on Rails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vend+Sans:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${roboto.className} bg-[#203270]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
