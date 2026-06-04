"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_IMAGES: Record<string, string> = {
  "01": "/images/process-1.jpg",
  "02": "/images/service-7.jpg",
  "03": "/images/service-3.jpg",
  "04": "/images/process-4.jpg",
};


export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20" style={{ background: "#111318" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — accordion list */}
          <div className="space-y-3">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <button
                    onClick={() => setActive(i)}
                    className="w-full text-left rounded-xl transition-all duration-300"
                    style={{
                      background: isActive ? "#181C24" : "transparent",
                      border: `1px solid ${isActive ? "#1E90FF44" : "#1E2433"}`,
                      padding: "18px 20px",
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-center gap-4">
                      {/* Step number circle */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                        style={{
                          background: isActive ? "#1E90FF" : "#1E2433",
                          color: isActive ? "#fff" : "#8892A4",
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Title */}
                      <span
                        className="font-bold text-base transition-colors duration-200"
                        style={{ color: isActive ? "#F0F4FF" : "#8892A4" }}
                      >
                        {step.title}
                      </span>

                      {/* Chevron */}
                      <motion.span
                        className="ml-auto flex-shrink-0"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ color: isActive ? "#1E90FF" : "#1E2433" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <polyline points="4,7 9,12 14,7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-14 space-y-3">
                            <p className="text-text-muted text-sm leading-relaxed">
                              {step.description}
                            </p>
                            <div
                              className="text-xs leading-relaxed px-3 py-2 rounded-lg"
                              style={{ background: "#111318", color: "#4FAEFF", border: "1px solid #1E2433" }}
                            >
                              {step.detail}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right — visual panel for active step */}
          <div className="hidden lg:block sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl overflow-hidden relative"
                style={{ minHeight: 380, background: "#111318" }}
              >
                {/* Photo */}
                <Image
                  src={STEP_IMAGES[PROCESS_STEPS[active].number]}
                  alt={PROCESS_STEPS[active].title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />

                {/* Gradient overlay — bottom for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,11,13,0.92) 0%, rgba(10,11,13,0.3) 50%, rgba(10,11,13,0.1) 100%)" }}
                />

                {/* Content over image */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Step badge */}
                  <span
                    className="self-start text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4"
                    style={{ background: "rgba(30,144,255,0.85)", color: "#fff", backdropFilter: "blur(6px)" }}
                  >
                    STEP {PROCESS_STEPS[active].number}
                  </span>

                  <h3 className="font-bold text-xl text-white mb-2 leading-tight">
                    {PROCESS_STEPS[active].title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(240,244,255,0.75)" }}>
                    {PROCESS_STEPS[active].description}
                  </p>

                  {/* Progress dots */}
                  <div className="flex gap-2">
                    {PROCESS_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? 24 : 8,
                          height: 8,
                          background: i === active ? "#1E90FF" : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
