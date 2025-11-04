import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                TF<span className="text-blue-600">.</span>
              </Link>
              <div className="flex gap-6">
                <Link href="/#projets" className="hover:text-blue-600 transition-colors">
                  Projets
                </Link>
                <Link href="/#about" className="hover:text-blue-600 transition-colors">
                  À propos
                </Link>
                <Link href="/#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Thomas Feret. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
