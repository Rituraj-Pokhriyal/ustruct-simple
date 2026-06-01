"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

const TYPE_COLOR: Record<string, string> = {
  INDUSTRIAL: "#1E90FF",
  COMMERCIAL: "#FF6B1A",
  "MIXED-USE": "#4FAEFF",
};

export function Projects() {
  return (
    <section className="py-20 line-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-glow rounded-xl overflow-hidden group"
              style={{ background: "#181C24" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Type badge */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded"
                  style={{
                    background: `${TYPE_COLOR[project.type] ?? "#1E90FF"}cc`,
                    color: "#fff",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {project.type}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-text-muted mb-3">{project.location}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{project.scope}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(30,144,255,0.08)",
                        color: "#4FAEFF",
                        border: "1px solid rgba(30,144,255,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
