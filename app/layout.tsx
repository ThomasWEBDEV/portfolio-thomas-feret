import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-[#fcfcfc]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
