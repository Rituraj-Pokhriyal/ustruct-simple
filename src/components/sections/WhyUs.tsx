"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="py-20" style={{ background: "#111318" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-glow rounded-xl p-7"
              style={{ background: "#181C24" }}
            >
              <div className="h-0.5 w-10 rounded-full mb-5" style={{ background: item.accent }} />
              <h3 className="font-bold text-lg text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
