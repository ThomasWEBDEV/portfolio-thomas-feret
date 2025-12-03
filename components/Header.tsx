"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  const navItems = [
    { href: "/", label: "Accueil", title: "Accueil", x: -120, y: 20 },
    { href: "/projets", label: "Projets", title: "Projets", x: -100, y: 90 },
    { href: "/about", label: "Info", title: "Info", x: -30, y: 120 },
    { href: "/contact", label: "Contact", title: "Contact", x: 40, y: 90 }
  ];

  return (
    <>
      {/* Bouton Menu flottant en haut à droite */}
      <div className="fixed top-8 right-8 z-50">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-[72px] h-[72px]">
            {/* Cercle de progression du scroll */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="36"
                cy="36"
                r="34"
                stroke="#eae8da"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
              <motion.circle
                cx="36"
                cy="36"
                r="34"
                stroke="#e15e4c"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength: scrollYProgress,
                  strokeDasharray: "1 1",
                }}
              />
            </svg>

            {/* Cercle magnétique avec nouvelles couleurs */}
            <motion.div
              className="absolute inset-0 bg-[#e15e4c] rounded-full"
              style={{
                x: useTransform(x, (value) => (value - windowWidth + 100) * 0.02),
                y: useTransform(y, (value) => (value - 100) * 0.02),
              }}
            />

            {/* Lignes du menu burger */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
              <motion.span
                animate={{
                  rotate: isExpanded ? 45 : 0,
                  y: isExpanded ? 0 : -8,
                }}
                className="w-8 h-0.5 bg-[#eae8da] block"
              />
              <motion.span
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                className="w-8 h-0.5 bg-[#eae8da] block mt-2"
              />
              <motion.span
                animate={{
                  rotate: isExpanded ? -45 : 0,
                  y: isExpanded ? -10 : 0,
                }}
                className="w-8 h-0.5 bg-[#eae8da] block mt-2"
              />
            </div>

            {/* Pulsation au hover */}
            <motion.div
              className="absolute inset-0 bg-[#e15e4c]/20 rounded-full pointer-events-none"
              animate={{
                scale: isExpanded ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: isExpanded ? Infinity : 0,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.button>
      </div>

      {/* Overlay de fond pour le menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-[#203270]/95 backdrop-blur-sm z-40 ${isExpanded ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setIsExpanded(false)}
      />

      {/* Navigation Orbitale */}
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isExpanded ? 1 : 0,
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? item.x : 0,
            y: isExpanded ? item.y : 0,
          }}
          transition={{
            duration: 0.5,
            delay: isExpanded ? index * 0.1 : 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed z-50"
          style={{ top: "60px", right: "40px" }}
        >
          <Link href={item.href} onClick={() => setIsExpanded(false)}>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Cercle de navigation avec nouvelles couleurs */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer font-roboto ${
                pathname === item.href
                  ? "bg-gradient-to-br from-[#e15e4c] to-[#e15e4c]/80 text-[#eae8da] shadow-lg"
                  : "bg-[#eae8da] text-[#203270] border border-[#e15e4c]/20 hover:border-[#e15e4c]/40"
              }`}>
                <span className="text-sm font-medium">{item.label}</span>
              </div>

              {/* Label au hover */}
              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 pointer-events-none"
                initial={{ opacity: 0, y: -5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs text-[#eae8da] font-medium bg-[#203270] px-2 py-1 rounded-md shadow-sm whitespace-nowrap font-roboto">
                  {item.title}
                </span>
              </motion.div>

              {/* Particules au hover */}
              {pathname === item.href && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(225,94,76,0.4)",
                      "0 0 0 10px rgba(225,94,76,0)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
