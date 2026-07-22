"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experiencia" eyebrow="Trayectoria" title="Experiencia">
      <div className="relative border-l border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <motion.div
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-500 bg-white dark:bg-slate-950" />

            <p className="text-sm font-medium text-brand-500">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {job.role}{" "}
              <span className="text-slate-500 dark:text-slate-400">
                · {job.company}
              </span>
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {job.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {job.achievements.map((a, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
