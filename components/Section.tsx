"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className ?? ""}`}>
      <div className="container-page">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
