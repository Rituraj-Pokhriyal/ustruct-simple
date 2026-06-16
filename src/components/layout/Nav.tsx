"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = ALL_LINKS.filter((l) => visibleTabs.includes(l.key));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || menuOpen ? "rgba(10,11,13,0.97)" : "rgba(10,11,13,0.7)",
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
              width={48}
              height={48}
              style={{ height: 48, width: 48, objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-bold transition-colors duration-200"
                style={{ color: pathname === l.href ? "#1E90FF" : "#F0F4FF" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: "#FF6B1A", color: "#fff" }}
            >
              Get a Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-1.5 transition-colors"
              style={{ background: menuOpen ? "#1E2433" : "transparent" }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 rounded-full"
                style={{ background: "#F0F4FF" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-6 h-0.5 rounded-full"
                style={{ background: "#F0F4FF" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 rounded-full"
                style={{ background: "#F0F4FF" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden border-t border-border"
              style={{ background: "rgba(10,11,13,0.97)" }}
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-base font-bold transition-all duration-200"
                      style={{
                        color: pathname === l.href ? "#1E90FF" : "#F0F4FF",
                        background: pathname === l.href ? "rgba(30,144,255,0.08)" : "transparent",
                        borderLeft: pathname === l.href ? "2px solid #1E90FF" : "2px solid transparent",
                      }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                  className="mt-3 pt-3 border-t border-border"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-3.5 rounded-xl text-base font-bold transition-all hover:opacity-90"
                    style={{ background: "#FF6B1A", color: "#fff" }}
                  >
                    Get a Quote &rarr;
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop — tap to close */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
