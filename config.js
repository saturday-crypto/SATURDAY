/*
  SATURDAY — configuration
  Edit these values before publishing.
  No prices are shown publicly; project quotes are discussed individually.
  Set contactEmail to an inbox you control to make the project form prepare an email.
*/
window.SATURDAY_CONFIG = {
  contactEmail: "replace-with-your-email@example.com",
  currency: "ARS",
  locale: "es-AR",
  prices: [
    {
      id: "starter",
      name: { es: "Punto de partida", en: "Starter" },
      label: { es: "PARA EMPEZAR", en: "GET STARTED" },
      price: 25000,
      displayPrice: { es: "$25.000", en: "ARS 25,000" },
      description: { es: "Una pieza concreta para probar una idea.", en: "One focused deliverable to test an idea." },
      features: {
        es: ["1 entregable acordado", "Alcance definido antes de empezar", "1 ronda de ajustes", "Plazo según el proyecto"],
        en: ["1 agreed deliverable", "Scope defined upfront", "1 revision round", "Timeline based on project"]
      },
      cta: { es: "Consultar este plan", en: "Ask about this plan" },
      featured: false
    },
    {
      id: "growth",
      name: { es: "Impulso", en: "Momentum" },
      label: { es: "MÁS SOLICITADO", en: "POPULAR" },
      price: 65000,
      displayPrice: { es: "$65.000", en: "ARS 65,000" },
      description: { es: "Un paquete pequeño para llevar tu marca al siguiente nivel.", en: "A compact package to move your brand forward." },
      features: {
        es: ["Hasta 3 entregables relacionados", "Plan de trabajo simple", "2 rondas de ajustes", "Actualizaciones durante el proceso"],
        en: ["Up to 3 related deliverables", "Simple project plan", "2 revision rounds", "Progress updates"]
      },
      cta: { es: "Consultar este plan", en: "Ask about this plan" },
      featured: true
    },
    {
      id: "custom",
      name: { es: "A medida", en: "Custom" },
      label: { es: "PROYECTOS ESPECIALES", en: "CUSTOM PROJECTS" },
      price: null,
      displayPrice: { es: "Hablemos", en: "Let's talk" },
      description: { es: "Para webs, apps y soluciones que necesitan un plan propio.", en: "For websites, apps and solutions that need a tailored plan." },
      features: {
        es: ["Alcance y objetivos personalizados", "Presupuesto antes de comenzar", "Plazos acordados", "Posibilidad de dividir por etapas"],
        en: ["Tailored scope and goals", "Quote before work starts", "Agreed timeline", "Option to split into phases"]
      },
      cta: { es: "Pedir una propuesta", en: "Request a proposal" },
      featured: false
    }
  ]
};
