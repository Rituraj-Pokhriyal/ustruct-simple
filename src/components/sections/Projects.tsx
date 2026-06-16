"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  group: string;
  file: string;
  preview: string;
  active?: boolean;
}

const GROUP_ORDER = ["structural-frame", "stairs", "railings", "3d-views"] as const;

const GROUP_INFO: Record<string, { label: string; color: string }> = {
  "structural-frame": { label: "Structural Frame",       color: "#1E90FF" },
  "stairs":           { label: "Stairs",                 color: "#FF6B1A" },
  "railings":         { label: "Railings & Guardrails",  color: "#4FAEFF" },
  "3d-views":          { label: "3D Views",                color: "#FF8C42" },
};

/* ── PDF File Icon ───────────────────────────────────────── */
function PdfIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="52" viewBox="0 0 44 52" fill="none">
      <rect x="1" y="1" width="42" height="50" rx="4" fill="#111318" stroke={color} strokeWidth="1.5"/>
      <path d="M27 1 L27 15 L43 15" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M27 1 L43 15" stroke={color} strokeWidth="1.5"/>
      <line x1="9"  y1="24" x2="35" y2="24" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
      <line x1="9"  y1="30" x2="35" y2="30" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
      <line x1="9"  y1="36" x2="27" y2="36" stroke={color} strokeWidth="1.2" strokeOpacity="0.5"/>
      <text x="22" y="48" fontSize="8" fill={color} textAnchor="middle" fontFamily="Arial" fontWeight="bold">PDF</text>
    </svg>
  );
}

/* ── Split-view Modal ────────────────────────────────────── */
function PdfModal({
  project, projects, activeIdx, onClose, onNavigate
}: {
  project: Project;
  projects: Project[];
  activeIdx: number;
  onClose: () => void;
  onNavigate: (idx: number) => void;
}) {
  const color = GROUP_INFO[project.group]?.color ?? "#1E90FF";

  // Resizable split — desktop only.
  // Uses Pointer Events + setPointerCapture (not window mousemove/mouseup) because
  // the PDF <embed> is a native plugin that can swallow mouseup, leaving a window
  // listener's "dragging" flag stuck true forever. Pointer capture keeps delivering
  // events to the handle element itself regardless of what's under the cursor.
  const [splitPercent, setSplitPercent] = useState(58); // image pane gets more room by default
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    setSplitPercent(Math.min(78, Math.max(22, percent)));
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

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
            {GROUP_INFO[project.group]?.label ?? project.category}
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

      {/* Desktop split view — resizable */}
      <div ref={containerRef} className="hidden lg:flex flex-1 overflow-hidden">
        {/* Model screenshot — bigger by default, draggable to resize */}
        <div className="relative h-full" style={{ width: `${splitPercent}%`, background: "#111318" }}>
          <Image
            src={project.preview}
            alt={`${project.title} — Tekla model view`}
            fill
            className="object-contain"
            sizes="80vw"
            quality={95}
          />
          <span
            className="absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${color}cc`, color: "#fff", backdropFilter: "blur(6px)" }}
          >
            MODEL VIEW
          </span>
        </div>

        {/* Drag handle */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="relative flex-shrink-0 group"
          style={{ width: 14, cursor: "col-resize", background: "transparent", touchAction: "none" }}
          title="Drag to resize"
        >
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 transition-colors"
            style={{ width: 2, background: "#1E2433" }}
          />
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="w-1 h-10 rounded-full" style={{ background: color }} />
          </div>
        </div>

        {/* PDF drawing */}
        <div className="relative h-full" style={{ width: `${100 - splitPercent}%`, background: "#0A0B0D" }}>
          <span
            className="absolute top-3 left-3 z-10 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: "rgba(30,144,255,0.85)", color: "#fff", backdropFilter: "blur(6px)" }}
          >
            DRAWING
          </span>
          <embed src={project.file} type="application/pdf" className="w-full h-full" />
        </div>
      </div>

      {/* Mobile stacked view */}
      <div className="flex lg:hidden flex-col flex-1 overflow-hidden">
        <div className="relative flex-shrink-0" style={{ height: 320, background: "#111318" }}>
          <Image
            src={project.preview}
            alt={`${project.title} — Tekla model view`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={95}
          />
          <span
            className="absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${color}cc`, color: "#fff", backdropFilter: "blur(6px)" }}
          >
            MODEL VIEW
          </span>
        </div>
        <div className="relative flex-1" style={{ background: "#0A0B0D" }}>
          <span
            className="absolute top-3 left-3 z-10 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: "rgba(30,144,255,0.85)", color: "#fff", backdropFilter: "blur(6px)" }}
          >
            DRAWING
          </span>
          <embed src={project.file} type="application/pdf" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between px-6 py-4 border-t flex-shrink-0" style={{ borderColor: "#1E2433" }}>
        <button
          onClick={() => activeIdx > 0 && onNavigate(activeIdx - 1)}
          disabled={activeIdx === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-30"
          style={{ background: "#1E2433", color: "#F0F4FF" }}
        >
          ← Prev
        </button>

        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl px-2">
          {projects.map((p, i) => {
            const c = GROUP_INFO[p.group]?.color ?? "#1E90FF";
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
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-30"
          style={{ background: "#1E2433", color: "#F0F4FF" }}
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}

/* ── Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, index, color, onOpen }: { project: Project; index: number; color: string; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      onClick={onOpen}
      className="group card-glow rounded-xl p-6 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#181C24" }}
    >
      <div className="mb-5"><PdfIcon color={color} /></div>
      <h3 className="font-bold text-base text-text-primary mb-1 leading-snug group-hover:text-steel-blue transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-text-muted flex-1 leading-relaxed mb-5">{project.subtitle}</p>
      <button
        className="w-full py-2.5 rounded-lg text-sm font-bold transition-all group-hover:opacity-90"
        style={{ background: color, color: "#fff" }}
      >
        View Drawing
      </button>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────── */
export function Projects({ projects }: { projects: Project[] }) {
  // Build display order: grouped by GROUP_ORDER, preserving original relative order within each group
  const ordered = GROUP_ORDER.flatMap((g) => projects.filter((p) => p.group === g));
  const ungrouped = projects.filter((p) => !GROUP_ORDER.includes(p.group as typeof GROUP_ORDER[number]));
  const displayList = [...ordered, ...ungrouped];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const open = (idx: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 480) {
      window.open(displayList[idx].file, "_blank");
    } else {
      setActiveIdx(idx);
    }
  };

  return (
    <>
      <section className="py-16" style={{ background: "#0A0B0D" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {GROUP_ORDER.map((groupKey) => {
            const items = projects.filter((p) => p.group === groupKey);
            if (items.length === 0) return null;
            const info = GROUP_INFO[groupKey];

            return (
              <div key={groupKey}>
                {/* Section heading */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                  style={{ borderLeft: `3px solid ${info.color}`, paddingLeft: 16 }}
                >
                  <h2 className="font-bold text-2xl text-text-primary">{info.label}</h2>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${info.color}18`, color: info.color, border: `1px solid ${info.color}30` }}
                  >
                    {items.length} {items.length === 1 ? "drawing" : "drawings"}
                  </span>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map((project) => {
                    const globalIdx = displayList.findIndex((p) => p.id === project.id);
                    return (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={globalIdx}
                        color={info.color}
                        onOpen={() => open(globalIdx)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-text-muted"
          >
            All drawings shown are from real completed projects. Deliverables in DXF, DWG, PDF and Tekla native formats.
          </motion.p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <PdfModal
            project={displayList[activeIdx]}
            projects={displayList}
            activeIdx={activeIdx}
            onClose={() => setActiveIdx(null)}
            onNavigate={setActiveIdx}
          />
        )}
      </AnimatePresence>
    </>
  );
}
