"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/lib/data";

const INITIAL_COUNT = 6;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <Section id="proyectos" eyebrow="Trabajo" title="Proyectos destacados">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:ring-white/5"
          >
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-500/10 to-sky-400/10">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-4xl font-bold text-brand-500/30">
                  {project.title.charAt(0)}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm">
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 font-medium text-brand-500 hover:underline"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:underline dark:text-slate-300"
                  >
                    <Github size={15} /> Código
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {showAll ? "Ver menos" : `Ver más (${projects.length - INITIAL_COUNT})`}
            <ChevronDown
              size={16}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </Section>
  );
}
