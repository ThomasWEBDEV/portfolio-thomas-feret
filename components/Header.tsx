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
      className="fixed top-0 w-full bg-[#fcfcfc]/95 backdrop-blur-sm z-50 border-b border-[#050505]/10"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-[#050505]">
          TF
        </Link>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`hover:text-[#050505] transition-colors ${pathname === "/" ? "text-[#050505] font-medium" : "text-[#050505]/60"}`}
          >
            Accueil
          </Link>
          <Link 
            href="/projets" 
            className={`hover:text-[#050505] transition-colors ${pathname === "/projets" ? "text-[#050505] font-medium" : "text-[#050505]/60"}`}
          >
            Projets
          </Link>
          <Link 
            href="/#contact" 
            className="text-[#050505]/60 hover:text-[#050505] transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
