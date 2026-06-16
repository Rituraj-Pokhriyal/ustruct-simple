"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const CATEGORY_COLOR: Record<string, string> = {
  STRUCTURAL: "#1E90FF",
  MISC:       "#4FAEFF",
  DRAWINGS:   "#FF6B1A",
  BIM:        "#FF8C42",
};

/* ── Use cases per service ─────────────────────────────── */
const USE_CASES: Record<number, string[]> = {
  1: ["Commercial buildings", "Warehouses", "Industrial facilities", "High-rise structures"],
  2: ["Stairs & platforms", "Catwalks", "Ladders", "Architectural features"],
  3: ["Shop floor fabrication", "Steel contractors", "General contractors", "Prefab structures"],
  4: ["Project coordination", "Client approval", "Permit drawings", "BIM integration"],
  5: ["Site erection teams", "Construction managers", "Multi-phase projects"],
  6: ["Moment frames", "Braced frames", "Seismic zones", "Heavy industrial"],
  7: ["Complex structures", "Design-build", "Fabrication automation", "CNC output"],
  8: ["MEP coordination", "Large-scale projects", "IFC workflows", "Data-rich delivery"],
};

/* ── Service card ───────────────────────────────────────── */
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const color = CATEGORY_COLOR[service.category] ?? "#1E90FF";
  const useCases = USE_CASES[service.id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="card-glow rounded-2xl p-7 flex flex-col"
      style={{ background: "#181C24" }}
    >
      {/* Category badge */}
      <span
        className="self-start text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4"
        style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
      >
        {service.category}
      </span>

      {/* Title */}
      <h3
        className="font-bold text-text-primary leading-tight mb-3"
        style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", borderLeft: `3px solid ${color}`, paddingLeft: 14 }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-base leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Key benefits */}
      <div className="mb-6">
        <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">
          Key Benefits
        </p>
        <ul className="space-y-2.5">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-base text-text-muted">
              <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1.2"/>
                <polyline points="5.5,9 8,11.5 12.5,6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Common use cases */}
      {useCases.length > 0 && (
        <div className="mt-auto">
          <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-2">
            Common Use Cases
          </p>
          <div className="flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="text-sm px-3 py-1 rounded-full"
                style={{ background: "#111318", border: "1px solid #1E2433", color: "#8892A4" }}
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────── */
export function Services() {
  return (
    <section className="py-16" style={{ background: "#0A0B0D" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl p-10 text-center"
          style={{ background: "#181C24", border: "1px solid #1E2433" }}
        >
          <h3 className="font-bold text-2xl text-text-primary mb-3">Need a custom solution?</h3>
          <p className="text-text-muted text-base mb-6 max-w-lg mx-auto">
            We can help you specify project requirements. Contact us for a free scope review and quote.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl text-base font-bold transition-all hover:opacity-90"
            style={{ background: "#FF6B1A", color: "#fff" }}
          >
            Get in Touch &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
