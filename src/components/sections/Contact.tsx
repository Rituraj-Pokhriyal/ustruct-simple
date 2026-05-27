"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { COMPANY } from "@/lib/constants";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Valid email required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please describe your project"),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    // Wire up your email provider here (Resend, EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#111318" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-mono text-steel-blue uppercase tracking-widest mb-4">
              — Get in Touch
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary leading-tight mb-6">
              Let&apos;s build something{" "}
              <span className="text-gradient">together.</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-10">
              Send over your drawings and we&apos;ll scope the project same day.
              No obligation. Typical response within 4 business hours.
            </p>

            {/* Contact rows */}
            <div className="space-y-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                >
                  ✉
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Email</p>
                  <p className="text-text-primary text-sm group-hover:text-steel-blue transition-colors">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.1)", color: "#25D366" }}
                >
                  💬
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">WhatsApp</p>
                  <p className="text-text-primary text-sm group-hover:text-green-400 transition-colors">
                    {COMPANY.whatsapp}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: "rgba(30,144,255,0.1)", color: "#1E90FF" }}
                >
                  📍
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Location</p>
                  <p className="text-text-primary text-sm">{COMPANY.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ background: "#181C24", border: "1px solid rgba(30,144,255,0.2)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-5"
                  style={{ background: "rgba(30,144,255,0.1)" }}
                >
                  ✓
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  Message Received
                </h3>
                <p className="text-text-muted text-sm">
                  We&apos;ll review your project and get back to you within 4 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: "#181C24", border: "1px solid #1E2433" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">Name *</label>
                    <input {...register("name")} placeholder="Your name" className="input-field" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">Email *</label>
                    <input {...register("email")} type="email" placeholder="you@company.com" className="input-field" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">Company</label>
                  <input {...register("company")} placeholder="Firm or company (optional)" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Describe your project — structure type, drawings needed, timeline..."
                    className="input-field resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60 active:scale-[0.98]"
                  style={{ background: "#FF6B1A", color: "#fff" }}
                >
                  {isSubmitting ? "Sending…" : "Send Message →"}
                </button>

                <p className="text-center text-xs font-mono text-text-muted">
                  Typical response within 4 business hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
