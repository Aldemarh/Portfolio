// ============================================================
//  EDITA AQUÍ TODO TU CONTENIDO.
//  Este es el único archivo que necesitas tocar para
//  personalizar el portfolio con tu información real.
// ============================================================

export const site = {
  name: "Aldemar Hernández",
  role: "Ingeniero de Sistemas · Desarrollador Web · UX/UI & QA",
  tagline:
    "Ingeniero de Sistemas y Desarrollador Web. Diseño experiencias (UX/UI), aseguro la calidad (QA) y doy soporte a plataformas resolviendo incidencias, con una comunicación cercana y clara con los clientes.",
  location: "Colombia",
  email: "aldemarh645@gmail.com",
  phone: "+57 314 727 9982",
  photo: "/aldemar.jpg", // tu foto de perfil (en /public)
  resumeUrl: "/cv.pdf", // coloca tu PDF en /public/cv.pdf
  // 👇 Access key de Web3Forms (gratis en https://web3forms.com — te llega por correo).
  //    Pégala aquí y el formulario de contacto enviará los mensajes a tu email.
  formAccessKey: "bebfe209-13ed-4562-94e5-a3cc3083aad6",
  socials: {
    github: "https://github.com/Aldemarh",
    linkedin: "https://www.linkedin.com/in/aldemar-hernandez-hdez/",
  },
};

export const about = {
  paragraphs: [
    "Ingeniero de Sistemas con un perfil versátil: desarrollo web, diseño UX/UI y aseguramiento de calidad (QA). Convierto requerimientos complejos en interfaces claras y productos confiables.",
    "Proactivo, organizado y con buen trabajo en equipo. Actualmente como freelancer en proyectos de desarrollo web, UX y QA, buscando siempre nuevos retos donde crecer.",
  ],
  highlights: [
    { value: "3+", label: "Años de experiencia" },
    { value: "Dev", label: "Desarrollo web" },
    { value: "UX/UI", label: "Diseño de producto" },
    { value: "QA", label: "Control de calidad" },
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Diseño UX/UI",
    items: [
      "User Research",
      "Wireframing",
      "Prototipado (baja y alta fidelidad)",
      "Design System",
      "Diagramas UML",
      "Figma",
    ],
  },
  {
    category: "Desarrollo Web",
    items: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    category: "Calidad & Análisis",
    items: [
      "Control de calidad (QA)",
      "Testing funcional",
      "Análisis de requerimientos",
    ],
  },
  {
    category: "Soporte & Atención al Cliente",
    items: [
      "Soporte técnico y funcional",
      "Atención y gestión de tickets",
      "Comunicación con clientes",
      "Resolución de incidencias",
      "Levantamiento de requerimientos",
      "Trabajo en equipo",
    ],
  },
  {
    category: "SIG & Redes",
    items: ["QGIS", "ArcGIS", "Administración de redes"],
  },
];

export type Service = {
  icon: "landing" | "portfolio" | "web" | "qa" | "support";
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: "landing",
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje enfocadas en conversión: rápidas, atractivas y diseñadas para captar clientes y generar resultados.",
    features: ["Diseño a medida", "Optimizadas para conversión", "100% responsive"],
  },
  {
    icon: "portfolio",
    title: "Portafolios Profesionales",
    description:
      "Portafolios modernos que muestran tu trabajo, experiencia y marca personal con un diseño que destaca e impresiona.",
    features: ["Diseño único y elegante", "Modo claro/oscuro", "Listo para publicar"],
  },
  {
    icon: "web",
    title: "Páginas Web",
    description:
      "Sitios web a medida para tu negocio o marca: estructurados, optimizados en SEO y rendimiento, y fáciles de administrar.",
    features: ["SEO y rendimiento", "Adaptable a móviles", "Escalable y mantenible"],
  },
  {
    icon: "qa",
    title: "QA Testing",
    description:
      "Aseguramiento de calidad para tu web o app: detecto los errores antes que tus usuarios, con pruebas funcionales y un reporte claro de cada incidencia.",
    features: [
      "Pruebas funcionales y de usabilidad",
      "Reporte y seguimiento de bugs",
      "Verificación de correcciones",
    ],
  },
  {
    icon: "support",
    title: "Soporte de Plataformas",
    description:
      "Soporte técnico y funcional para tu web o app: atiendo tickets, resuelvo incidencias y mantengo tu plataforma funcionando sin contratiempos.",
    features: [
      "Atención de tickets",
      "Solución de incidencias",
      "Acompañamiento continuo",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string; // ruta en /public, ej: "/projects/app.png"
  demo?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Premium Academy — Soporte & QA",
    description:
      "Plataforma educativa de cursos de Trading, Finanzas e Inversiones. Brindé soporte a usuarios y aseguramiento de calidad (QA) de la plataforma: pruebas funcionales, reporte y seguimiento de incidencias, validación de flujos de acceso y membresías.",
    tags: ["QA", "Soporte", "Testing", "E-learning", "Web"],
    image: "/projects/premium-academy.png",
    demo: "https://www.premiumacademy.pro/home",
    featured: true,
  },
  {
    title: "NiioPay — QA Tester",
    description:
      "Centro financiero móvil (fintech): transferencias, billetera digital multimoneda (USD, COP, USDT), tarjetas virtuales/físicas, inversiones y pagos por QR. Como QA diseñé y ejecuté casos de prueba, validé flujos críticos de pagos y autenticación biométrica, reporté y di seguimiento a incidencias para garantizar entregas seguras y estables.",
    tags: ["QA", "Testing", "iOS", "Fintech", "Bug Reporting"],
    image: "/projects/niiopay.svg",
    demo: "https://apps.apple.com/co/app/niiopay/id6753227351",
    featured: true,
  },
  {
    title: "Flow — QA & Desarrollador",
    description:
      "Journal de trading avanzado para traders que buscan escalar con estructura, métricas y analítica. Trabajé como QA y desarrollador: resolución de tickets, corrección de bugs, implementación de mejoras y pruebas funcionales para garantizar la estabilidad de la plataforma.",
    tags: ["QA", "Desarrollo Web", "Bug Fixing", "Testing", "Web App"],
    image: "/projects/miflow.png",
    demo: "https://mi-flow-pro-production.up.railway.app/",
    featured: true,
  },
  {
    title: "Alerta Rosa — QA Tester",
    description:
      "App móvil (iOS) de seguridad personal: envío de alertas de emergencia, ubicación en tiempo real y aviso automático a contactos de confianza. Como QA diseñé y ejecuté casos de prueba, realicé pruebas funcionales y de usabilidad, reporté y di seguimiento a bugs, y validé correcciones junto al equipo de desarrollo.",
    tags: ["QA", "Testing", "iOS", "Seguridad", "Bug Reporting"],
    image: "/projects/alerta-rosa.svg",
    demo: "https://apps.apple.com/co/app/alerta-rosa/id6756195711",
    featured: true,
  },
  {
    title: "Análisis y Diseño UX/UI",
    description:
      "Como Asistente Analista UX freelance: análisis de requerimientos, diseño de wireframes, prototipos de baja y alta fidelidad, diagramas UML y diseño web centrado en el usuario.",
    tags: ["UX Research", "Wireframing", "Prototipado", "UML", "Figma"],
    image: "/projects/uxui.svg",
    featured: true,
    // demo: "https://...",  // añade el enlace si tienes una demo o Behance
  },
  {
    title: "Aseguramiento de Calidad de Software (QA)",
    description:
      "Control de calidad de software: revisión y validación de requerimientos, testing funcional y reuniones con clientes para garantizar entregas confiables y alineadas a las necesidades del negocio.",
    tags: ["QA", "Testing", "Control de Calidad", "Requerimientos"],
    image: "/projects/qa.svg",
    featured: true,
  },
  {
    title: "Actualización Catastral con SIG",
    description:
      "Reconocimiento predial integral y elaboración de informes catastrales usando QGIS y ArcGIS, con control de calidad sobre documentos prediales.",
    tags: ["QGIS", "ArcGIS", "Control de Calidad", "Catastro"],
    image: "/projects/sig.svg",
    featured: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: "QA — Aseguramiento de la Calidad",
    company: "Freelance",
    period: "Oct 2025 — Presente",
    description:
      "Aseguramiento de la calidad de software, garantizando productos confiables y alineados con los requerimientos del cliente.",
    achievements: [
      "Control de calidad de software y testing funcional.",
      "Revisión y validación de requerimientos.",
      "Reuniones con clientes para levantamiento y seguimiento.",
      "Trabajo en equipo con las áreas de desarrollo.",
    ],
  },
  {
    role: "Soporte de Plataformas",
    company: "Freelance",
    period: "2025 — 2026",
    description:
      "Soporte técnico y funcional a plataformas web, atendiendo a usuarios y garantizando el correcto funcionamiento del producto.",
    achievements: [
      "Resolución y seguimiento de tickets de soporte.",
      "Solución de novedades e incidencias reportadas por los usuarios.",
      "Coordinación con el equipo de desarrollo para aplicar correcciones.",
    ],
  },
  {
    role: "Reconocedor Predial Integral",
    company: "Data Tools S.A.S",
    period: "Oct 2024 — Nov 2024",
    description:
      "Levantamiento y actualización de información catastral mediante herramientas SIG.",
    achievements: [
      "Elaboración de informes catastrales.",
      "Manejo de QGIS y ArcGIS.",
      "Trabajo en equipo en campo y oficina.",
    ],
  },
  {
    role: "Asistente Analista UX",
    company: "Freelance",
    period: "2023 — 2024",
    description:
      "Análisis y diseño de experiencia de usuario para proyectos web.",
    achievements: [
      "Análisis de requerimientos y diseño de wireframes.",
      "Prototipos de baja y alta fidelidad.",
      "Elaboración de diagramas UML y diseño web.",
    ],
  },
  {
    role: "Auxiliar de Terreno / Actualización Catastral",
    company: "Empresa de Servicios Sostenibles y Tecnológicos S.A.S",
    period: "Oct 2023 — Dic 2023",
    description:
      "Apoyo en procesos de actualización catastral y control de calidad de documentos prediales.",
    achievements: [
      "Control de calidad y manejo de aplicativos.",
      "Manejo de QGIS.",
      "Gestión de documentos prediales.",
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  date: string;
  image?: string; // miniatura opcional (en /public)
  href?: string; // enlace de verificación opcional
};

export const education: Education[] = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Universidad Cooperativa de Colombia",
    date: "Septiembre 2023",
    image: "/diploma-sistemas.svg",
  },
  {
    title: "Matrícula Profesional · 081122-0793653 COR",
    institution: "COPNIA — Ingeniería de Sistemas",
    date: "Septiembre 2025",
    image: "/tarjeta-profesional.svg",
    href: "https://tramites.copnia.gov.co/Copnia_Microsite/CertificateOfGoodStanding/WaterMarkmethod?CertificateNumber=081122-0793653%20COR",
  },
  {
    title: "Reconocedor Predial Integral",
    institution: "Politécnico Formar Innovar",
    date: "Octubre 2023",
    image: "/cert-predial.svg",
  },
  {
    title: "Curso de Diseño UX/UI",
    institution: "Udemy",
    date: "Julio 2024",
    image: "/cert-uxui.svg",
  },
  {
    title: "Seminario Taller en Administración, Seguridad y Gestión de Redes",
    institution: "Universidad Cooperativa de Colombia · 96 horas",
    date: "Octubre 2022",
    image: "/cert-redes.svg",
  },
  {
    title: "Bachiller Académico",
    institution: "Escuela Normal Superior de Montería",
    date: "Diciembre 2017",
    image: "/diploma-bachiller.svg",
  },
];
