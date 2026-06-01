"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="py-20" style={{ background: "#111318" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #1E90FF44, transparent)" }}
          />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-8 items-start"
              >
                {/* Number badge */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-lg"
                  style={{
                    background: "#1A2035",
                    border: "1px solid #1E90FF33",
                    color: "#1E90FF",
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className="flex-1 card-glow rounded-xl p-6"
                  style={{ background: "#181C24" }}
                >
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
