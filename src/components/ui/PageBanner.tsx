"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageBanner({ label, title, subtitle }: PageBannerProps) {
  return (
    <section
      className="pt-32 pb-16 px-6 line-grid border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-steel-blue uppercase tracking-widest mb-3">
            {label}
          </p>
          <h1
            className="font-display font-black text-text-primary leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-text-muted text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
