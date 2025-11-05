"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          TF<span className="text-blue-600">.</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/#projets">Projets</Link>
          <Link href="/#about">À propos</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
}
