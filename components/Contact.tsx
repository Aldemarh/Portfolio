"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Section } from "./Section";
import { site } from "@/lib/data";

const contactCards = [
  {
    icon: Mail,
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: site.location,
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contacto" eyebrow="Hablemos" title="Contacto">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Columna de información */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:col-span-2"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible para nuevos proyectos
          </span>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            ¿Tienes un proyecto en mente o quieres colaborar? Cuéntame tu idea y
            te responderé lo antes posible.
          </p>

          <div className="mt-6 space-y-3">
            {contactCards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors group-hover:border-brand-500/50 dark:border-slate-800">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {c.label}
                    </p>
                    <p className="truncate font-medium">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="group block">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="group">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-500/50 hover:text-brand-500 dark:border-slate-800"
            >
              <Github size={20} />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-500/50 hover:text-brand-500 dark:border-slate-800"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 p-6 sm:p-8 dark:border-slate-800"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-slate-300 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full rounded-lg border border-slate-300 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
            >
              <Send size={16} /> Enviar mensaje
            </button>

            {sent && (
              <p className="mt-4 text-center text-sm text-emerald-600 dark:text-emerald-400">
                ¡Gracias! Se abrió tu correo con el mensaje listo para enviar.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
