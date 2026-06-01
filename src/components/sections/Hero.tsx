"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 dot-grid overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(30,144,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Faded logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={480}
          height={160}
          style={{ objectFit: "contain", opacity: 0.06 }}
          aria-hidden="true"
          priority
        />
      </div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-6"
      >
        <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border text-sm font-bold text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FF6B1A" }} />
          AISC CERTIFIED &nbsp;&middot;&nbsp; TEKLA SPECIALISTS &nbsp;&middot;&nbsp; PRECISION DETAILING
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative font-bold leading-tight tracking-tight mb-6"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        UStruct Steel Detailing Solutions
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative text-text-muted text-lg leading-relaxed mb-4 max-w-2xl"
      >
        High-Quality Steel Detailing Services Delivered by Industry Experts
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="relative text-text-muted text-base leading-relaxed mb-10 max-w-xl"
      >
        Shop drawings, 3D models &amp; BIM coordination — Tekla-certified, AISC-compliant, zero rework.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="relative flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: "#FF6B1A", color: "#fff" }}
        >
          Request a Quote &rarr;
        </Link>
        <Link
          href="/projects"
          className="px-8 py-3.5 rounded-xl text-base font-bold border border-border text-text-muted hover:text-text-primary hover:border-steel-blue transition-all duration-200"
        >
          View Projects
        </Link>
      </motion.div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <span>{COMPANY.location}</span>
          <span className="w-px h-3 bg-border" />
          <a href={`mailto:${COMPANY.email}`} className="hover:text-steel-blue transition-colors">
            {COMPANY.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
