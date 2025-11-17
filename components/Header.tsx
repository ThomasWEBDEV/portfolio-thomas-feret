"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-sky-900/50"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
          TF<span className="text-sky-400">.</span>
        </Link>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`hover:text-sky-400 transition-colors ${pathname === "/" ? "text-sky-400 font-medium" : "text-sky-300"}`}
          >
            Accueil
          </Link>
          <Link 
            href="/projets" 
            className={`hover:text-sky-400 transition-colors ${pathname === "/projets" ? "text-sky-400 font-medium" : "text-sky-300"}`}
          >
            Projets
          </Link>
          <Link 
            href="/#contact" 
            className="text-sky-300 hover:text-sky-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
