"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/constants";

const links = [
  { label: "Services",     href: "/services" },
  { label: "Process",      href: "/process" },
  { label: "Projects",     href: "/projects" },
  { label: "Why Us",       href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,11,13,0.92)" : "rgba(10,11,13,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1E2433",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold font-mono"
            style={{ background: "#1E90FF", color: "#0A0B0D" }}
          >
            U
          </span>
          <span className="font-display font-bold text-text-primary tracking-tight">
            {COMPANY.name}
          </span>
          <span className="hidden sm:block text-xs font-mono text-text-muted ml-1">
            STEEL DETAILING
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-mono transition-colors duration-200"
              style={{
                color: pathname === l.href ? "#1E90FF" : "#8892A4",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: "#FF6B1A", color: "#fff" }}
        >
          Get a Quote
        </Link>
      </div>
    </motion.header>
  );
}
