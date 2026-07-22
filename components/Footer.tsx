import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </p>
        <p>Hecho con Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
