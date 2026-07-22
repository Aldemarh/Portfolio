"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="habilidades" eyebrow="Stack" title="Habilidades">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:ring-white/5"
          >
            <h3 className="mb-4 font-semibold text-brand-600 dark:text-brand-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
