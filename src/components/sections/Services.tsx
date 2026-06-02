"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

/* ── SVG Icons ─────────────────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  STR: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="4" y="18" width="40" height="6" rx="1"/>
      <rect x="18" y="4" width="12" height="40" rx="1"/>
      <line x1="4" y1="4" x2="44" y2="4"/><line x1="4" y1="44" x2="44" y2="44"/>
    </svg>
  ),
  MSC: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <polyline points="8,44 8,28 20,28 20,16 32,16 32,8"/>
      <line x1="8" y1="44" x2="40" y2="44"/>
      <line x1="20" y1="28" x2="8" y2="28"/>
      <line x1="32" y1="16" x2="20" y2="16"/>
    </svg>
  ),
  SHD: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="8" y="6" width="32" height="36" rx="2"/>
      <line x1="14" y1="16" x2="34" y2="16"/>
      <line x1="14" y1="22" x2="34" y2="22"/>
      <line x1="14" y1="28" x2="26" y2="28"/>
      <line x1="14" y1="34" x2="22" y2="34"/>
      <circle cx="34" cy="31" r="4"/>
      <line x1="37" y1="34" x2="40" y2="37"/>
    </svg>
  ),
  GAD: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="6" y="6" width="36" height="36" rx="2"/>
      <line x1="6" y1="18" x2="42" y2="18"/>
      <line x1="6" y1="30" x2="42" y2="30"/>
      <line x1="18" y1="6" x2="18" y2="42"/>
      <line x1="30" y1="6" x2="30" y2="42"/>
      <circle cx="18" cy="18" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="30" cy="30" r="2.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  ERC: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="24" y1="4" x2="24" y2="44"/>
      <line x1="10" y1="14" x2="38" y2="14"/>
      <line x1="10" y1="26" x2="38" y2="26"/>
      <line x1="10" y1="38" x2="38" y2="38"/>
      <line x1="10" y1="4" x2="10" y2="44"/>
      <line x1="38" y1="4" x2="38" y2="44"/>
    </svg>
  ),
  CON: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="24" cy="24" r="8"/>
      <line x1="4" y1="24" x2="16" y2="24"/>
      <line x1="32" y1="24" x2="44" y2="24"/>
      <line x1="24" y1="4" x2="24" y2="16"/>
      <line x1="24" y1="32" x2="24" y2="44"/>
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
    </svg>
  ),
  TKL: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <polygon points="24,4 44,16 44,36 24,44 4,36 4,16"/>
      <line x1="24" y1="4" x2="24" y2="44"/>
      <line x1="4" y1="16" x2="44" y2="16"/>
      <line x1="4" y1="36" x2="44" y2="36"/>
    </svg>
  ),
  BIM: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="24" cy="24" r="6"/>
      <circle cx="8"  cy="12" r="4"/>
      <circle cx="40" cy="12" r="4"/>
      <circle cx="8"  cy="36" r="4"/>
      <circle cx="40" cy="36" r="4"/>
      <line x1="12" y1="14" x2="19" y2="20"/>
      <line x1="36" y1="14" x2="29" y2="20"/>
      <line x1="12" y1="34" x2="19" y2="28"/>
      <line x1="36" y1="34" x2="29" y2="28"/>
    </svg>
  ),
  RFD: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="10" y1="8"  x2="10" y2="40"/>
      <line x1="20" y1="8"  x2="20" y2="40"/>
      <line x1="30" y1="8"  x2="30" y2="40"/>
      <line x1="40" y1="8"  x2="40" y2="40"/>
      <line x1="8"  y1="16" x2="40" y2="16"/>
      <line x1="8"  y1="26" x2="40" y2="26"/>
      <line x1="8"  y1="36" x2="40" y2="36"/>
    </svg>
  ),
  FAB: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="8" y="8" width="14" height="32" rx="2"/>
      <rect x="26" y="8" width="14" height="14" rx="2"/>
      <rect x="26" y="26" width="14" height="14" rx="2"/>
      <line x1="12" y1="16" x2="18" y2="16"/>
      <line x1="12" y1="22" x2="18" y2="22"/>
      <line x1="12" y1="28" x2="18" y2="28"/>
    </svg>
  ),
  CNC: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="24" cy="24" r="10"/>
      <circle cx="24" cy="24" r="4"/>
      <line x1="24" y1="4"  x2="24" y2="14"/>
      <line x1="24" y1="34" x2="24" y2="44"/>
      <line x1="4"  y1="24" x2="14" y2="24"/>
      <line x1="34" y1="24" x2="44" y2="24"/>
      <line x1="9"  y1="9"  x2="17" y2="17"/>
      <line x1="31" y1="31" x2="39" y2="39"/>
      <line x1="39" y1="9"  x2="31" y2="17"/>
      <line x1="17" y1="31" x2="9"  y2="39"/>
    </svg>
  ),
};

/* ── Use cases per service ─────────────────────────────── */
const USE_CASES: Record<number, string[]> = {
  1:  ["Commercial buildings", "Warehouses", "Industrial facilities", "High-rise structures"],
  2:  ["Stairs & platforms", "Catwalks", "Ladders", "Architectural features"],
  3:  ["Shop floor fabrication", "Steel contractors", "General contractors", "Prefab structures"],
  4:  ["Project coordination", "Client approval", "Permit drawings", "BIM integration"],
  5:  ["Site erection teams", "Construction managers", "Multi-phase projects"],
  6:  ["Moment frames", "Braced frames", "Seismic zones", "Heavy industrial"],
  7:  ["Complex structures", "Design-build", "Fabrication automation", "CNC output"],
  8:  ["MEP coordination", "Large-scale projects", "IFC workflows", "Data-rich delivery"],
  9:  ["Concrete-steel hybrid", "Foundation connections", "Column bases", "Slabs"],
  10: ["CNC plasma lines", "Automated fabrication", "Cutting lists", "Assembly packages"],
  11: ["CNC drill lines", "Automated plants", "DSTV output", "Precision manufacturing"],
};

const CATEGORY_COLOR: Record<string, string> = {
  STRUCTURAL: "#1E90FF",
  MISC:       "#4FAEFF",
  DRAWINGS:   "#FF6B1A",
  BIM:        "#FF8C42",
};

/* ── Visual panel (right or left side) ─────────────────── */
function ServiceVisual({ service, flip }: { service: typeof SERVICES[0]; flip: boolean }) {
  const color = CATEGORY_COLOR[service.category] ?? "#1E90FF";
  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: "#181C24",
        border: `1px solid ${color}33`,
        minHeight: 280,
      }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${color}0A 1px, transparent 1px), linear-gradient(90deg, ${color}0A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16 opacity-30"
        style={{
          background: `linear-gradient(135deg, ${color}44 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 opacity-30"
        style={{
          background: `linear-gradient(315deg, ${color}44 0%, transparent 60%)`,
        }}
      />

      {/* Main icon */}
      <div className="relative flex flex-col items-center gap-4">
        <div
          className="w-24 h-24 flex items-center justify-center rounded-2xl"
          style={{ background: `${color}15`, color }}
        >
          <div className="w-14 h-14">{ICONS[service.icon]}</div>
        </div>
        <span
          className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
        >
          {service.category}
        </span>
      </div>

      {/* Service code watermark */}
      <span
        className="absolute bottom-4 right-5 font-black opacity-10 select-none"
        style={{ fontSize: 48, color, letterSpacing: "-0.02em" }}
      >
        {service.icon}
      </span>
    </motion.div>
  );
}

/* ── Content panel ──────────────────────────────────────── */
function ServiceContent({ service, flip }: { service: typeof SERVICES[0]; flip: boolean }) {
  const color = CATEGORY_COLOR[service.category] ?? "#1E90FF";
  const useCases = USE_CASES[service.id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: `${color}18`, color }}
        >
          <div className="w-6 h-6">{ICONS[service.icon]}</div>
        </div>
        <h3
          className="font-bold text-text-primary leading-tight"
          style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)" }}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-text-muted text-base leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Key benefits */}
      <div className="mb-5">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
          Key Benefits
        </p>
        <ul className="space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-text-muted">
              <svg
                className="flex-shrink-0 mt-0.5"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.2"/>
                <polyline points="5,8 7,10 11,6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Common use cases */}
      {useCases.length > 0 && (
        <div>
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">
            Common Use Cases
          </p>
          <div className="flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "#111318",
                  border: "1px solid #1E2433",
                  color: "#8892A4",
                }}
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
        <div className="space-y-20">
          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1; // even = content-left, odd = content-right
            return (
              <div
                key={service.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {flip ? (
                  <>
                    <ServiceVisual service={service} flip={flip} />
                    <ServiceContent service={service} flip={flip} />
                  </>
                ) : (
                  <>
                    <ServiceContent service={service} flip={flip} />
                    <ServiceVisual service={service} flip={flip} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 rounded-2xl p-10 text-center"
          style={{ background: "#181C24", border: "1px solid #1E2433" }}
        >
          <h3 className="font-bold text-2xl text-text-primary mb-3">
            Need a custom solution?
          </h3>
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
