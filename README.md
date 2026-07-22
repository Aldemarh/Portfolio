# Portfolio

Portfolio profesional construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**.

## Características

- Diseño moderno, minimalista y responsive (mobile-first)
- Modo claro/oscuro con toggle (`next-themes`)
- Animaciones al hacer scroll (`framer-motion`)
- Secciones: Hero, Sobre mí, Habilidades, Proyectos, Experiencia, Contacto
- SEO básico (metadata, Open Graph, Twitter cards)
- Accesible y optimizado

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalizar

Todo tu contenido vive en un solo archivo: **[`lib/data.ts`](lib/data.ts)**.
Edita ahí tu nombre, bio, habilidades, proyectos y experiencia.

- Coloca tu CV en `public/cv.pdf`
- Coloca imágenes de proyectos en `public/projects/` y referencia la ruta en `image`

## Desplegar

El deploy más sencillo es con [Vercel](https://vercel.com):

```bash
npm run build
```

Sube el repo a GitHub e impórtalo en Vercel, o usa `vercel` desde la CLI.
