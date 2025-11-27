"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-[#fcfcfc]/95 backdrop-blur-sm z-50 border-b border-[#050505]/10"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-[#050505] hover:text-[#050505]/70 transition-colors">
          TF
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[#050505] font-medium"
                  : "text-[#050505]/60 hover:text-[#050505]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
