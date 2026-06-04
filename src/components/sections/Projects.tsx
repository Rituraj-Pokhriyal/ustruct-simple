"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  file: string;
  preview?: string;
  active?: boolean;
}

const CATEGORY_COLOR: Record<string, string> = {
  STRUCTURE: "#1E90FF",
  MISC:      "#FF6B1A",
  BIM:       "#FF8C42",
};

/* ── PDF Modal ───────────────────────────────────────────── */
function PdfModal({
  project, projects, activeIdx, onClose, onNavigate,
}: {
  project: Project;
  projects: Project[];
  activeIdx: number;
  onClose: () => void;
  onNavigate: (idx: number) => void;
}) {
  const color = CATEGORY_COLOR[project.category] ?? "#1E90FF";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(5,6,8,0.98)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0" style={{ borderColor: "#1E2433" }}>
        <div className="min-w-0 flex-1 pr-4">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>
            {project.category}
          </span>
          <h3 className="font-bold text-lg text-text-primary leading-tight">{project.title}</h3>
          <p className="text-sm text-text-muted">{project.subtitle}</p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-steel-blue transition-colors flex-shrink-0"
          style={{ color: "#8892A4" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
          </svg>
        </button>
      </div>

      {/* Embedded PDF */}
      <div className="flex-1 overflow-hidden">
        <embed src={project.file} type="application/pdf" className="w-full h-full" />
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between px-6 py-4 border-t flex-shrink-0" style={{ borderColor: "#1E2433" }}>
        <button
          onClick={() => activeIdx > 0 && onNavigate(activeIdx - 1)}
          disabled={activeIdx === 0}
          className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-30"
          style={{ background: "#1E2433", color: "#F0F4FF" }}
        >
          ← Prev
        </button>

        {/* Thumbnail strip */}
        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl px-2">
          {projects.map((p, i) => {
            const c = CATEGORY_COLOR[p.category] ?? "#1E90FF";
            return (
              <button
                key={p.id}
                onClick={() => onNavigate(i)}
                className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  background: i === activeIdx ? c : "#1E2433",
                  color: i === activeIdx ? "#fff" : "#8892A4",
                  border: `1px solid ${i === activeIdx ? c : "#1E2433"}`,
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => activeIdx < projects.length - 1 && onNavigate(activeIdx + 1)}
          disabled={activeIdx === projects.length - 1}
          className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-30"
          style={{ background: "#1E2433", color: "#F0F4FF" }}
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────── */
export function Projects({ projects }: { projects: Project[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const open = (idx: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.open(projects[idx].file, "_blank");
    } else {
      setActiveIdx(idx);
    }
  };

  return (
    <>
      <section className="py-16" style={{ background: "#0A0B0D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const color = CATEGORY_COLOR[project.category] ?? "#1E90FF";
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => open(i)}
                  className="group card-glow rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#181C24" }}
                >
                  {/* Preview image */}
                  <div className="relative h-52 overflow-hidden bg-surface">
                    {project.preview ? (
                      <Image
                        src={project.preview}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: `${color}10` }}>
                        <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
                          <rect x="1" y="1" width="46" height="54" rx="4" stroke={color} strokeWidth="1.5"/>
                          <path d="M30 1 L30 16 L47 16" stroke={color} strokeWidth="1.5" fill="none"/>
                          <line x1="10" y1="26" x2="38" y2="26" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
                          <line x1="10" y1="33" x2="38" y2="33" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
                          <line x1="10" y1="40" x2="28" y2="40" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
                        </svg>
                      </div>
                    )}
                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: `${color}dd`, color: "#fff", backdropFilter: "blur(4px)" }}
                    >
                      {project.category}
                    </span>
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(10,11,13,0.6)" }}
                    >
                      <span
                        className="px-5 py-2.5 rounded-xl text-sm font-bold"
                        style={{ background: color, color: "#fff" }}
                      >
                        View Drawing →
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-base text-text-primary mb-1 group-hover:text-steel-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-text-muted mt-12"
          >
            All drawings shown are from real completed projects.
          </motion.p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <PdfModal
            project={projects[activeIdx]}
            projects={projects}
            activeIdx={activeIdx}
            onClose={() => setActiveIdx(null)}
            onNavigate={setActiveIdx}
          />
        )}
      </AnimatePresence>
    </>
  );
}
