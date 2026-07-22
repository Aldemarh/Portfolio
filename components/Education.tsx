"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
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
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:ring-white/5"
          >
            {item.image ? (
              <div className="border-b border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
              </div>
            ) : null}

            <div className="flex flex-1 flex-col p-6">
              {!item.image && (
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <GraduationCap size={20} />
                </span>
              )}
              <h3 className="font-semibold leading-snug">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {item.institution}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                <span className="text-xs font-medium text-brand-500">
                  {item.date}
                </span>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-brand-500"
                  >
                    <ExternalLink size={13} /> Verificar
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
