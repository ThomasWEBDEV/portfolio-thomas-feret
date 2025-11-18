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
      className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-900"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          TF<span className="text-gray-500">.</span>
        </Link>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`hover:text-white transition-colors ${pathname === "/" ? "text-white font-medium" : "text-gray-500"}`}
          >
            Accueil
          </Link>
          <Link 
            href="/projets" 
            className={`hover:text-white transition-colors ${pathname === "/projets" ? "text-white font-medium" : "text-gray-500"}`}
          >
            Tous les projets
          </Link>
          <Link 
            href="/#contact" 
            className="text-gray-500 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
