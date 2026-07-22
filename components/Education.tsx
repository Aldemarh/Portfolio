"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="educacion" eyebrow="Formación" title="Educación & Certificaciones">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
              <GraduationCap size={20} />
            </span>
            <h3 className="font-semibold leading-snug">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {item.institution}
            </p>
            <p className="mt-auto pt-3 text-xs font-medium text-brand-500">
              {item.date}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
