"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-500"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-2xl font-bold text-gradient sm:text-4xl"
        >
          {site.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            Ver proyectos
          </a>
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <FileDown size={16} /> Descargar CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400"
        >
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-brand-500">
            <Github size={20} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand-500">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-brand-500">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
