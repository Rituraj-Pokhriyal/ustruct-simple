"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-20 border-y border-border" style={{ background: "#111318" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center text-center py-12 px-6"
              style={{ background: "#111318" }}
            >
              <span
                className="font-bold leading-none mb-2"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#1E90FF" }}
              >
                {stat.value}
              </span>
              <span className="text-text-primary font-bold text-base mb-1">{stat.label}</span>
              <span className="text-text-muted text-sm">{stat.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
