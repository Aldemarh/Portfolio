"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Briefcase,
  Globe,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section } from "./Section";
import { services } from "@/lib/data";

const icons = {
  landing: LayoutTemplate,
  portfolio: Briefcase,
  web: Globe,
  qa: ShieldCheck,
};

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="¿Trabajamos juntos?"
      title="Servicios"
    >
      <p className="-mt-6 mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
        Estoy disponible para nuevos proyectos. Diseño y desarrollo soluciones
        web a medida, modernas y optimizadas.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-slate-200 p-6 transition-all hover:border-brand-500/50 hover:shadow-xl dark:border-slate-800"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon size={24} />
              </span>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <Check size={16} className="text-brand-500" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
        >
          Solicita tu proyecto <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
}
