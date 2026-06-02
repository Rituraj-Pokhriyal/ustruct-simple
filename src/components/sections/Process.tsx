"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_ICONS: Record<string, React.ReactNode> = {
  "01": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="4" y="4" width="24" height="28" rx="2"/>
      <line x1="9" y1="12" x2="23" y2="12"/>
      <line x1="9" y1="17" x2="23" y2="17"/>
      <line x1="9" y1="22" x2="17" y2="22"/>
      <polyline points="20,20 23,23 28,17"/>
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <polygon points="16,2 30,10 30,22 16,30 2,22 2,10"/>
      <line x1="16" y1="2" x2="16" y2="30"/>
      <line x1="2" y1="10" x2="30" y2="10"/>
      <line x1="2" y1="22" x2="30" y2="22"/>
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="3" y="3" width="26" height="26" rx="2"/>
      <line x1="3" y1="11" x2="29" y2="11"/>
      <line x1="3" y1="21" x2="29" y2="21"/>
      <line x1="12" y1="3" x2="12" y2="29"/>
      <line x1="21" y1="3" x2="21" y2="29"/>
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 26 L16 4 L28 26 Z"/>
      <line x1="16" y1="4" x2="16" y2="18"/>
      <circle cx="16" cy="22" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
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
                style={{
                  background: "#181C24",
                  border: "1px solid #1E90FF33",
                  minHeight: 380,
                }}
              >
                {/* Blueprint grid bg */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: "linear-gradient(rgba(30,144,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative p-10 flex flex-col h-full" style={{ minHeight: 380 }}>
                  {/* Step badge */}
                  <div className="flex items-center gap-3 mb-8">
                    <span
                      className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                      style={{ background: "rgba(30,144,255,0.15)", color: "#1E90FF", border: "1px solid rgba(30,144,255,0.3)" }}
                    >
                      STEP {PROCESS_STEPS[active].number}
                    </span>
                  </div>

                  {/* Large icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                  >
                    <div className="w-10 h-10">
                      {STEP_ICONS[PROCESS_STEPS[active].number]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-2xl text-text-primary mb-4 leading-tight">
                    {PROCESS_STEPS[active].title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-base leading-relaxed mb-6">
                    {PROCESS_STEPS[active].description}
                  </p>

                  {/* Progress dots */}
                  <div className="flex gap-2 mt-auto">
                    {PROCESS_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? 24 : 8,
                          height: 8,
                          background: i === active ? "#1E90FF" : "#1E2433",
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
