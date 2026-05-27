"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const CATEGORY_COLOR: Record<string, string> = {
  STRUCTURAL: "#1E90FF",
  MISC:       "#4FAEFF",
  DRAWINGS:   "#FF6B1A",
  BIM:        "#FF8C42",
};

export function Services() {
  return (
    <section id="services" className="py-24 line-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-steel-blue uppercase tracking-widest mb-3">
            — What We Deliver
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary leading-tight">
            Services
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-glow rounded-xl p-6 flex flex-col"
              style={{ background: "#181C24" }}
            >
              {/* Category tag */}
              <span
                className="inline-block text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded mb-4 self-start"
                style={{
                  color: CATEGORY_COLOR[service.category] ?? "#1E90FF",
                  background: `${CATEGORY_COLOR[service.category] ?? "#1E90FF"}15`,
                  border: `1px solid ${CATEGORY_COLOR[service.category] ?? "#1E90FF"}30`,
                }}
              >
                {service.category}
              </span>

              <h3 className="font-display font-bold text-base text-text-primary mb-2 leading-snug">
                {service.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-text-muted">
                    <span style={{ color: CATEGORY_COLOR[service.category] ?? "#1E90FF", marginTop: 2, flexShrink: 0 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
