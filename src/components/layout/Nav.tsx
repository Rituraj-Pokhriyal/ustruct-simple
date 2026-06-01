"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/constants";

const ALL_LINKS = [
  { label: "Services",     href: "/services",      key: "services" },
  { label: "Process",      href: "/process",       key: "process" },
  { label: "Projects",     href: "/projects",      key: "projects" },
  { label: "Why Us",       href: "/why-us",        key: "why-us" },
  { label: "Testimonials", href: "/testimonials",  key: "testimonials" },
  { label: "Contact",      href: "/contact",       key: "contact" },
];

interface NavProps {
  visibleTabs: string[];
}

export function Nav({ visibleTabs }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ALL_LINKS.filter((l) => visibleTabs.includes(l.key));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,11,13,0.95)" : "rgba(10,11,13,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1E2433",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={COMPANY.name}
            width={130}
            height={40}
            style={{ height: 40, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-bold transition-colors duration-200"
              style={{
                color: pathname === l.href ? "#1E90FF" : "#F0F4FF",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: "#FF6B1A", color: "#fff", fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Get a Quote
        </Link>
      </div>
    </motion.header>
  );
}
