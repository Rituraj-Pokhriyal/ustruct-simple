"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-glow rounded-xl p-7 flex flex-col"
              style={{ background: "#181C24" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: "#FF6B1A" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-text-primary text-sm">{t.author}</p>
                <p className="text-xs font-mono text-text-muted mt-0.5">{t.company}</p>
                <p className="text-xs font-mono text-steel-blue mt-0.5">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
