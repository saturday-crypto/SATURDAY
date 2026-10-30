(() => {
  const config = window.SATURDAY_CONFIG || { contactEmail: "", prices: [] };
  const translations = {
    es: {
      announcement:"Estudio digital independiente · Nuevos proyectos abiertos",navServices:"Servicios",navWork:"Muestras",navPricing:"Precios",navAbout:"Estudio",navStart:"Empezar un proyecto",
      heroEyebrow:"CREATIVIDAD + TECNOLOGÍA",heroTitle:"Ideas grandes.<br><span>Hechas realidad.</span>",heroLead:"Creamos experiencias digitales para marcas que quieren avanzar: anuncios con IA, sitios web, aplicaciones e ideas automatizadas.",heroCta:"Cuéntanos tu idea",heroSecondary:"Explorar servicios",heroFootnote:"Un equipo creativo en tu esquina. <strong>Un proyecto a la vez.</strong>",artLabel:"IDEAS EN MOVIMIENTO",artVideo:"AI VIDEO",artVideoSub:"Story · Motion · Impact",artWeb:"WEB / APP",artWebSub:"Design · Build",artCaption:"CREATIVE DIGITAL STUDIO",
      servicesEyebrow:"QUÉ PODEMOS HACER",servicesTitle:"Todo empieza con<br><span>una buena idea.</span>",servicesIntro:"Desde una pieza puntual hasta una solución digital completa, armamos el equipo y el plan que tu proyecto necesita.",serviceVideoTitle:"Videos publicitarios con IA",serviceVideoText:"Anuncios cortos, conceptos visuales, guiones y piezas para redes que hacen que tu marca se destaque.",serviceWebTitle:"Páginas web",serviceWebText:"Landing pages, sitios para negocios y catálogos digitales pensados para verse bien en cualquier pantalla.",serviceAppTitle:"Aplicaciones y prototipos",serviceAppText:"Diseñamos conceptos, prototipos interactivos y aplicaciones web ajustadas a tu idea y tus usuarios.",serviceBrandTitle:"Branding y diseño",serviceBrandText:"Identidad visual, logos, piezas gráficas y contenido que le dan coherencia a tu marca.",serviceAutoTitle:"Automatizaciones con IA",serviceAutoText:"Conectamos tareas repetitivas y creamos flujos sencillos para que puedas dedicarte a lo importante.",serviceLink:"Explorar servicio",customEyebrow:"¿ALGO DIFERENTE?",customTitle:"Tu idea también<br>tiene lugar aquí.",customText:"Cuéntanos qué te gustaría crear. Exploramos posibilidades y te proponemos un siguiente paso realista.",customCta:"Hablemos de tu idea",
      workEyebrow:"MUESTRAS CONCEPTUALES",workTitle:"Un vistazo a lo<br><span>que podemos crear.</span>",workIntro:"Estos ejemplos son conceptos demostrativos de estilo y dirección creativa, no trabajos encargados por clientes.",workCafeTitle:"Campaña para cafetería",workCafeSub:"Concepto publicitario · Gastronomía",workFashionTitle:"Identidad de marca",workFashionSub:"Dirección visual · Moda",workAppTitle:"Concepto de aplicación",workAppSub:"UI / UX · Product design",sampleNote:"Las muestras son ilustrativas y se pueden adaptar a cada proyecto.",
      pricingEyebrow:"PRECIOS DE REFERENCIA",pricingTitle:"Un buen comienzo,<br><span>sin sorpresas.</span>",pricingIntro:"Precios iniciales orientativos. Cada proyecto se confirma con alcance, plazos y entregables acordados antes de empezar.",pricingDisclaimer:"Importes de lanzamiento editables en config.js. No constituyen una cotización definitiva; herramientas de terceros, hosting, dominios o servicios pagos se presupuestan por separado.",
      processEyebrow:"SIMPLE, DE PRINCIPIO A FIN",processTitle:"De la idea<br><span>al siguiente nivel.</span>",processIntro:"Un proceso claro para que sepas qué sigue y qué esperar en cada etapa.",processLink:"Empezar una conversación",step1Title:"Nos cuentas",step1Text:"Entendemos tu objetivo, tu audiencia y qué necesitas resolver.",step2Title:"Proponemos",step2Text:"Definimos alcance, entregables, precio y tiempos antes de arrancar.",step3Title:"Creamos",step3Text:"Desarrollamos la propuesta y te compartimos avances para revisar.",step4Title:"Entregamos",step4Text:"Recibes los archivos o la solución acordada, con indicaciones para usarla.",
      contactEyebrow:"TU PRÓXIMA IDEA EMPIEZA AQUÍ",contactTitle:"¿Qué vamos<br>a <span>crear juntos?</span>",contactText:"Cuéntanos un poco sobre tu proyecto. Te responderemos con preguntas útiles y un próximo paso claro.",contactDirectTitle:"Directo al grano",contactDirectText:"Sin compromiso. Primero entendemos lo que necesitas.",contactCustomTitle:"Propuesta a medida",contactCustomText:"Alcance y precio definidos antes de comenzar.",formEyebrow:"HABLEMOS DE TU PROYECTO",formRequired:"* Obligatorio",formName:"Tu nombre *",formEmail:"Email *",formBusiness:"Nombre del negocio (opcional)",formService:"¿Qué necesitas? *",selectPlaceholder:"Selecciona un servicio",formBudget:"Presupuesto estimado",budgetUnknown:"Todavía no lo sé",formDetails:"Cuéntanos tu idea *",formConsent:"Acepto que SATURDAY use estos datos para responder a mi consulta. *",formSubmit:"Preparar solicitud",formNote:"Este formulario prepara un email en tu dispositivo; no envía datos a un servidor. Configura el email de destino en config.js antes de publicar.",namePlaceholder:"Alex Smith",emailPlaceholder:"hola@tuempresa.com",businessPlaceholder:"Tu marca o empresa",detailsPlaceholder:"¿Qué te gustaría crear y qué objetivo quieres lograr?",footerLine:"Ideas que se convierten en resultados.",backTop:"Volver arriba ↑",footerDisclaimer:"Concepto de marca independiente. Muestras ilustrativas.",formSuccess:"Se abrió tu aplicación de correo con el borrador. Revísalo y envíalo para completar la solicitud.",formError:"No se pudo abrir el correo automáticamente. Revisa la configuración o copia tus respuestas y escríbenos directamente.",formConfig:"Antes de publicar, cambia el email de destino en config.js por una dirección real.",budgetOptions:[["Not sure","Todavía no lo sé"],["Under ARS 50,000","Menos de ARS 50.000"],["ARS 50,000–150,000","ARS 50.000–150.000"],["ARS 150,000+","ARS 150.000 o más"],["International / USD","Cliente internacional / USD"]]
    },
    en: {
      announcement:"Independent digital studio · Now accepting projects",navServices:"Services",navWork:"Selected concepts",navPricing:"Pricing",navAbout:"Studio",navStart:"Start a project",
      heroEyebrow:"CREATIVITY + TECHNOLOGY",heroTitle:"Big ideas.<br><span>Made real.</span>",heroLead:"We create digital experiences for brands ready to move forward: AI-powered ads, websites, apps and automated workflows.",heroCta:"Tell us your idea",heroSecondary:"Explore services",heroFootnote:"A creative team in your corner. <strong>One project at a time.</strong>",artLabel:"IDEAS IN MOTION",artVideo:"AI VIDEO",artVideoSub:"Story · Motion · Impact",artWeb:"WEB / APP",artWebSub:"Design · Build",artCaption:"CREATIVE DIGITAL STUDIO",
      servicesEyebrow:"WHAT WE DO",servicesTitle:"Everything starts with<br><span>a good idea.</span>",servicesIntro:"From a single creative asset to a complete digital solution, we shape the team and plan your project needs.",serviceVideoTitle:"AI-powered ad videos",serviceVideoText:"Short ads, visual concepts, scripts and social content that help your brand stand out.",serviceWebTitle:"Websites",serviceWebText:"Landing pages, business websites and digital catalogs designed for every screen.",serviceAppTitle:"Apps & prototypes",serviceAppText:"We design concepts, interactive prototypes and web apps shaped around your idea and users.",serviceBrandTitle:"Branding & design",serviceBrandText:"Visual identities, logos, graphics and content that make your brand feel consistent.",serviceAutoTitle:"AI automation",serviceAutoText:"We connect repetitive tasks and build simple workflows so you can focus on what matters.",serviceLink:"Explore service",customEyebrow:"SOMETHING ELSE?",customTitle:"Your idea belongs<br>here, too.",customText:"Tell us what you want to make. We’ll explore the options and suggest a realistic next step.",customCta:"Let's talk about it",
      workEyebrow:"CONCEPT SHOWCASE",workTitle:"A glimpse of what<br><span>we can create.</span>",workIntro:"These examples demonstrate style and creative direction; they are not commissioned client projects.",workCafeTitle:"Coffee shop campaign",workCafeSub:"Ad concept · Hospitality",workFashionTitle:"Brand identity",workFashionSub:"Art direction · Fashion",workAppTitle:"App concept",workAppSub:"UI / UX · Product design",sampleNote:"Samples are illustrative and can be adapted to each project.",
      pricingEyebrow:"STARTING POINTS",pricingTitle:"A clear start,<br><span>no surprises.</span>",pricingIntro:"Illustrative starting prices. Every project is confirmed with an agreed scope, timeline and deliverables before work begins.",pricingDisclaimer:"Launch prices can be edited in config.js. These are not final quotes; third-party tools, hosting, domains and paid services are quoted separately.",
      processEyebrow:"SIMPLE FROM START TO FINISH",processTitle:"From an idea<br><span>to what's next.</span>",processIntro:"A clear process so you know what comes next and what to expect at every stage.",processLink:"Start a conversation",step1Title:"You tell us",step1Text:"We learn about your goal, audience and the problem you want to solve.",step2Title:"We propose",step2Text:"We define scope, deliverables, pricing and timing before we start.",step3Title:"We create",step3Text:"We develop the solution and share progress for your feedback.",step4Title:"We deliver",step4Text:"You receive the agreed files or solution, plus guidance on how to use it.",
      contactEyebrow:"YOUR NEXT IDEA STARTS HERE",contactTitle:"What shall we<br><span>create together?</span>",contactText:"Tell us a little about your project. We’ll respond with useful questions and a clear next step.",contactDirectTitle:"Straight to the point",contactDirectText:"No pressure. First, we understand what you need.",contactCustomTitle:"Tailored proposal",contactCustomText:"Scope and pricing agreed before we begin.",formEyebrow:"TELL US ABOUT YOUR PROJECT",formRequired:"* Required",formName:"Your name *",formEmail:"Email *",formBusiness:"Business name (optional)",formService:"What do you need? *",selectPlaceholder:"Choose a service",formBudget:"Estimated budget",budgetUnknown:"Not sure yet",formDetails:"Tell us about your idea *",formConsent:"I agree that SATURDAY may use these details to respond to my inquiry. *",formSubmit:"Prepare inquiry",formNote:"This form prepares an email on your device; it does not send data to a server. Set the destination email in config.js before publishing.",namePlaceholder:"Alex Smith",emailPlaceholder:"hello@yourcompany.com",businessPlaceholder:"Your brand or company",detailsPlaceholder:"What would you like to create, and what goal do you want to reach?",footerLine:"Ideas turned into outcomes.",backTop:"Back to top ↑",footerDisclaimer:"Independent brand concept. Illustrative samples.",formSuccess:"Your email app opened with a draft. Review and send it to complete your inquiry.",formError:"Your email app could not be opened automatically. Check the configuration or contact us directly.",formConfig:"Before publishing, change the destination email in config.js to a real address.",budgetOptions:[["Not sure","Not sure yet"],["Under ARS 50,000","Under ARS 50,000"],["ARS 50,000–150,000","ARS 50,000–150,000"],["ARS 150,000+","ARS 150,000+"],["International / USD","International client / USD"]]
    }
  };
  let lang = "es";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

  function renderPrices() {
    const grid = $("#pricingGrid");
    if (!grid) return;
    const items = config.prices || [];
    grid.innerHTML = items.map(item => {
      const name = item.name?.[lang] || item.id;
      const label = item.label?.[lang] || "";
      const displayPrice = item.displayPrice?.[lang] || item.displayPrice?.es || "Consultar";
      const description = item.description?.[lang] || "";
      const features = item.features?.[lang] || item.features?.es || [];
      const cta = item.cta?.[lang] || "Contact";
      return `<article class="price-card ${item.featured ? "featured" : ""}">
        ${item.featured ? `<span class="popular-label">${escapeHtml(label)}</span>` : `<span class="price-label">${escapeHtml(label)}</span>`}
        <h3>${escapeHtml(name)}</h3><div class="price-value">${escapeHtml(displayPrice)}${item.price !== null && item.price !== undefined ? ` <span class="price-currency">${lang === "es" ? "ARS" : "ARS"}</span>` : ""}</div>
        <p class="price-desc">${escapeHtml(description)}</p>
        <ul class="price-features">${features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
        <a class="button ${item.featured ? "button-dark" : "button-outline"} price-cta" href="#contact" data-plan="${escapeAttr(item.id)}">${escapeHtml(cta)} <span class="button-arrow">↗</span></a>
      </article>`;
    }).join("");
    $$(".price-cta").forEach(btn => btn.addEventListener("click", () => {
      const item = items.find(p => p.id === btn.dataset.plan);
      const service = $('select[name="service"]');
      if (service && item) service.value = item.id === "custom" ? "Other" : item.id === "starter" ? "AI video" : "Website";
    }));
  }
  function escapeHtml(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
  function escapeAttr(s) { return escapeHtml(s).replace(/`/g, "&#96;"); }

  function applyLanguage(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { const value = translations[lang][el.dataset.i18n]; if (value !== undefined) el.textContent = value; });
    $$("[data-i18n-html]").forEach(el => { const value = translations[lang][el.dataset.i18nHtml]; if (value !== undefined) el.innerHTML = value; });
    $$("[data-i18n-placeholder]").forEach(el => { const value = translations[lang][el.dataset.i18nPlaceholder]; if (value !== undefined) el.placeholder = value; });
    $("#langToggle").textContent = lang === "es" ? "EN" : "ES";
    $("#langToggle").setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    const selectPlaceholder = $('select[name="service"] option[value=""]');
    if (selectPlaceholder) selectPlaceholder.textContent = translations[lang].selectPlaceholder;
    const budgetSelect = $('select[name="budget"]');
    if (budgetSelect) {
      const current = budgetSelect.value;
      [...budgetSelect.options].forEach((option, index) => {
        const pair = translations[lang].budgetOptions[index];
        if (pair) { option.value = pair[0]; option.textContent = pair[1]; }
      });
      budgetSelect.value = current;
    }
    renderPrices();
  }

  $("#langToggle").addEventListener("click", () => applyLanguage(lang === "es" ? "en" : "es"));
  const menuToggle = $("#menuToggle");
  menuToggle.addEventListener("click", () => {
    const nav = $("#mainNav");
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$("#mainNav a").forEach(link => link.addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  $$(".service-link").forEach(link => link.addEventListener("click", () => {
    const map = {video:"AI video",web:"Website",app:"App / prototype",branding:"Branding",automation:"Automation"};
    const select = $('select[name="service"]');
    if (select) select.value = map[link.dataset.service] || "Other";
  }));

  $("#projectForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const status = $("#formStatus");
    if (!config.contactEmail || config.contactEmail.includes("replace-with-your-email")) {
      status.textContent = translations[lang].formConfig;
      status.style.color = "#a05a19";
      return;
    }
    const subject = encodeURIComponent(`SATURDAY project inquiry — ${data.get("service")}`);
    const bodyLines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Business: ${data.get("business") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget")}`,
      "",
      "Project details:",
      data.get("details"),
      "",
      "Consent to use these details to respond: Yes"
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const href = `mailto:${encodeURIComponent(config.contactEmail)}?subject=${subject}&body=${body}`;
    try {
      window.location.href = href;
      status.textContent = translations[lang].formSuccess;
      status.style.color = "#247c57";
    } catch (err) {
      status.textContent = translations[lang].formError;
      status.style.color = "#a05a19";
    }
  });
  $("#year").textContent = new Date().getFullYear();
  renderPrices();
})();
