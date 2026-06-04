"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

/* ── Local images per service ───────────────────────────── */
const SERVICE_IMAGES: Record<number, string> = {
  1: "/images/service-1.jpg",
  2: "/images/service-2.jpg",
  3: "/images/service-3.jpg",
  4: "/images/service-4.jpg",
  5: "/images/service-5.jpg",
  6: "/images/service-6.jpg",
  7: "/images/service-7.jpg",
  8: "/images/service-8.jpg",
};

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

/* ── Image panel ─────────────────────────────────────────── */
function ServiceVisual({ service, flip }: { service: typeof SERVICES[0]; flip: boolean }) {
  const color = CATEGORY_COLOR[service.category] ?? "#1E90FF";
  const imgSrc = SERVICE_IMAGES[service.id];

  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden"
      style={{ minHeight: 300 }}
    >
      {/* Photo */}
      <Image
        src={imgSrc}
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        unoptimized={false}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(10,11,13,0.25) 0%, rgba(10,11,13,0.55) 100%)" }}
      />

      {/* Category badge */}
      <span
        className="absolute top-4 left-4 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full"
        style={{
          background: `${color}cc`,
          color: "#fff",
          backdropFilter: "blur(6px)",
          border: `1px solid ${color}`,
        }}
      >
        {service.category}
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
      {/* Title */}
      <h3
        className="font-bold text-text-primary leading-tight mb-4"
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
        <div>
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
        <div className="space-y-20">
          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={service.id} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
