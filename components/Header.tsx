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
      className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-black">
          TF
        </Link>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`hover:text-black transition-colors ${pathname === "/" ? "text-black font-medium" : "text-gray-600"}`}
          >
            Accueil
          </Link>
          <Link 
            href="/projets" 
            className={`hover:text-black transition-colors ${pathname === "/projets" ? "text-black font-medium" : "text-gray-600"}`}
          >
            Projets
          </Link>
          <Link 
            href="/#contact" 
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
