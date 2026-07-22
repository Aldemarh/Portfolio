"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Perfil" title="Sobre mí">
      <div className="grid gap-10 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-slate-600 md:col-span-2 dark:text-slate-300"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 md:grid-cols-1"
        >
          {about.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-slate-200 p-4 text-center dark:border-slate-800"
            >
              <div className="text-2xl font-bold text-brand-500">{h.value}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
