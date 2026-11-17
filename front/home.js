/* ---------- Projetos ---------- */
    const BEHANCE = "https://www.behance.net/gallery/";
    const IMG = "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/";
    const projects = [
      {
        cat: "uiux", featured: true, title: "Recicla+",
        img: IMG + "9470aa222010579.67fd12ac91ebd.png", url: BEHANCE + "222010579/Recicla",
        tags: ["UI/UX", "Figma", { pt: "Dados em tempo real", en: "Real-time data", es: "Datos en tiempo real" }, "ODS 11"],
        desc: {
          pt: "Sistema que monitora em tempo real o nível de resíduos nos aterros e otimiza as rotas de coleta com dados de sensores. Fui a principal responsável pelo protótipo e pela identidade visual.",
          en: "A system that monitors landfill waste levels in real time and optimizes collection routes using sensor data. I led the prototype and the visual identity.",
          es: "Sistema que monitorea en tiempo real el nivel de residuos en los vertederos y optimiza las rutas de recolección con datos de sensores. Fui la principal responsable del prototipo y la identidad visual."
        }
      },
      {
        cat: "uiux", featured: true, title: "SOS Emergência",
        img: IMG + "17ce2f222010221.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png", url: BEHANCE + "222010221/SOS-Emergencia",
        tags: ["UI/UX", "Figma", "HTML", "CSS"],
        desc: {
          pt: "Plataforma de educação em primeiros socorros para profissionais de saúde e leigos. Liderei o protótipo e participei da identidade visual e do código.",
          en: "A first-aid education platform for health professionals and laypeople. I led the prototype and worked on the visual identity and the code.",
          es: "Plataforma de educación en primeros auxilios para profesionales de la salud y público general. Lideré el prototipo y participé en la identidad visual y el código."
        }
      },
      {
        cat: "code", title: "Busca CEP", code: true, url: "https://github.com/abclara/busca-cep",
        tags: ["API", "HTML", "Cloud"],
        desc: {
          pt: "Projeto de criação de uma API para busca de endereço a partir do CEP, desenvolvido em aula de cloud.",
          en: "An API project that looks up a Brazilian address from its postal code (CEP), built in a cloud course.",
          es: "Proyecto de una API para buscar direcciones a partir del código postal (CEP), desarrollado en una clase de cloud."
        }
      },
      {
        cat: "brand", title: "IDJOB — ECOMOVE",
        img: IMG + "d476a2196950131.Y3JvcCwxMjA1LDk0MywzODUsNjU.png", url: BEHANCE + "196950131/IDJOB-ECOMOVE",
        tags: [{ pt: "Identidade visual", en: "Visual identity", es: "Identidad visual" }, "Branding"],
        desc: {
          pt: "Identidade visual para a marca ECOMOVE — o projeto mais visto do meu Behance.",
          en: "Visual identity for the ECOMOVE brand — the most viewed project on my Behance.",
          es: "Identidad visual para la marca ECOMOVE — el proyecto más visto de mi Behance."
        }
      },
      {
        cat: "uiux", title: "Modo Professor",
        img: IMG + "bbce84163984629.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png", url: BEHANCE + "163984629/Modo-Professor",
        tags: ["App", "UI", "Figma"],
        desc: {
          pt: "Design de interface de aplicativo mobile, criado no Figma.",
          en: "Mobile app interface design, created in Figma.",
          es: "Diseño de interfaz de aplicación móvil, creado en Figma."
        }
      },
      {
        cat: "brand", title: "Cervejaria Pequiá",
        img: IMG + "4629c0189143299.Y3JvcCw5MjAsNzIwLDE5Myww.png", url: BEHANCE + "189143299/Cervejaria-Pequia-Desafio-SIDV15",
        tags: [{ pt: "Identidade visual", en: "Visual identity", es: "Identidad visual" }, { pt: "Desafio SIDV15", en: "SIDV15 challenge", es: "Desafío SIDV15" }],
        desc: {
          pt: "Identidade visual para uma cervejaria, criada para o desafio SIDV15.",
          en: "Visual identity for a brewery, created for the SIDV15 design challenge.",
          es: "Identidad visual para una cervecería, creada para el desafío SIDV15."
        }
      },
      {
        cat: "brand", title: "Triston — DJ",
        img: IMG + "a5a0bb197028589.Y3JvcCwxMTUwLDkwMCwzNzgsMA.png", url: BEHANCE + "197028589/Triston-DJ",
        tags: [{ pt: "Identidade visual", en: "Visual identity", es: "Identidad visual" }, "Branding"],
        desc: {
          pt: "Identidade visual para o DJ Triston.",
          en: "Visual identity for DJ Triston.",
          es: "Identidad visual para el DJ Triston."
        }
      },
      {
        cat: "uiux", title: "Hamburgueria Desdesign",
        img: IMG + "1fedf5163984317.Y3JvcCwxNDAwLDEwOTUsMCwyMDQ.png", url: BEHANCE + "163984317/Hamburgeria-Desdesign",
        tags: ["UI", "Figma"],
        desc: {
          pt: "Projeto de interface para uma hamburgueria.",
          en: "Interface project for a burger restaurant.",
          es: "Proyecto de interfaz para una hamburguesería."
        }
      },
      {
        cat: "social", title: "Menina de UX",
        img: IMG + "a829f9234361009.Y3JvcCw5ODEsNzY4LDIwOSww.png", url: BEHANCE + "234361009/Voluntariado-Menina-de-Ux-(Artes-paras-Redes-Sociais)",
        tags: ["Social Media", { pt: "Voluntariado", en: "Volunteering", es: "Voluntariado" }],
        desc: {
          pt: "Artes para redes sociais como voluntária da comunidade Menina de UX, que apoia mulheres em UX.",
          en: "Social media artwork as a volunteer for Menina de UX, a community supporting women in UX.",
          es: "Piezas para redes sociales como voluntaria de Menina de UX, una comunidad que apoya a mujeres en UX."
        }
      },
      {
        cat: "cover", title: "A Ruína do Império",
        img: IMG + "09253d145688659.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png", url: BEHANCE + "145688659/A-Ruina-do-Imprio-Capa-de-Livro-(Bookcover)",
        tags: [{ pt: "Capa de livro", en: "Book cover", es: "Portada de libro" }, { pt: "Ilustração", en: "Illustration", es: "Ilustración" }],
        desc: {
          pt: "Concepção e criação de capa de livro.",
          en: "Concept and design of a book cover.",
          es: "Concepción y creación de portada de libro."
        }
      },
      {
        cat: "cover", title: "Em Troca de Seus Beijos",
        img: IMG + "730b9b155722817.Y3JvcCw5NjQsNzU0LDI2Miw5.png", url: BEHANCE + "155722817/Em-Troca-de-Seus-Beijos-Capa-de-Livro",
        tags: [{ pt: "Capa de livro", en: "Book cover", es: "Portada de libro" }],
        desc: {
          pt: "Concepção e criação de capa de livro.",
          en: "Concept and design of a book cover.",
          es: "Concepción y creación de portada de libro."
        }
      },
      {
        cat: "cover", title: "A Culpa é das Estrelas",
        img: IMG + "6f2c48161628895.Y3JvcCw1OTQsNDY0LDQwMyw3NDI.png", url: BEHANCE + "161628895/A-Culpa-das-Estrelas-Capa",
        tags: [{ pt: "Releitura de capa", en: "Cover redesign", es: "Reinterpretación de portada" }],
        desc: {
          pt: "Releitura da capa do livro, com nova proposta visual.",
          en: "A redesign of the book's cover with a new visual approach.",
          es: "Reinterpretación de la portada del libro con una nueva propuesta visual."
        }
      }
    ];

    const catLabel = {
      uiux: { pt: "UI/UX", en: "UI/UX", es: "UI/UX" },
      brand: { pt: "Identidade Visual", en: "Branding", es: "Identidad Visual" },
      cover: { pt: "Capa de Livro", en: "Book Cover", es: "Portada" },
      social: { pt: "Social Media", en: "Social Media", es: "Redes Sociales" },
      code: { pt: "Código", en: "Code", es: "Código" }
    };

    /* ---------- Traduções ---------- */
    const i18n = {
      en: {
        "nav.about": "About", "nav.skills": "Skills", "nav.journey": "Journey", "nav.projects": "Projects", "nav.contact": "Contact", "nav.language": "Language",
        "menu.open": "Open menu", "menu.close": "Close menu",
        "hero.status": "Open to Internship, Trainee or Junior roles",
        "hero.hello": "Hi, I'm",
        "hero.role1": "Data Analysis",
        "hero.quote": "“The best data is the data understood by whoever makes the decision — after all, why complicate what deserves clarity?”",
        "hero.cta1": "See projects →", "hero.cta2": "Let's talk?",
        "hero.meta": "Computer Science · Faculdade Nova Roma",
        "hero.cardSub": "Graphic designer and Computer Science student",
        "about.eyebrow": "About me",
        "about.title": "Data, design and code in one place",
        "about.p1": "I hold a degree in <strong>Graphic Design</strong> from IFPE and I'm studying <strong>Computer Science</strong>. I work where Data Analysis, Development and User Experience meet.",
        "about.p2": "I'm steering my career toward <strong>Data Analysis</strong>, combining SQL, Python and Power BI with the hands-on experience I gained building interfaces (UI/UX) and web systems (Front-end).",
        "about.p3": "I'm currently an intern at Pernambuco State's Digital Transformation Department, helping digitize public services and improve the citizen experience. I'm looking for <strong>Internship, Trainee or Junior</strong> opportunities where I can bring together data, technology and problem solving.",
        "about.stat1": "years creating as a freelance designer",
        "about.stat2": "projects published on Behance",
        "about.stat3": "areas: Data, Dev and Design",
        "about.stat4": "languages: PT, ES and EN",
        "about.langs": "Languages",
        "lang.pt": "Portuguese", "lang.ptLvl": "Native",
        "lang.es": "Spanish", "lang.esLvl": "Professional",
        "lang.en": "English", "lang.enLvl": "Intermediate",
        "skills.title": "What I bring to the team",
        "skills.lead": "A foundation that goes from the database query to the screen people use — including how the information is presented.",
        "skills.dataTitle": "Data",
        "skills.dataText": "Data structuring, ETL and statistical analysis to turn numbers into clear decisions.",
        "skills.stats": "Statistical analysis", "skills.bases": "Data modeling",
        "skills.devTitle": "Development",
        "skills.devText": "Web interfaces from prototype to code, backed by a solid programming foundation from college.",
        "skills.designTitle": "Product &amp; Design",
        "skills.designText": "UI/UX, prototyping and visual identity, with agile project management.",
        "skills.proto": "Prototyping", "skills.brand": "Visual identity",
        "skills.soft": "Also:", "skills.soft1": "Communication", "skills.soft2": "Teamwork", "skills.soft3": "Teaching &amp; mentoring", "skills.soft4": "Problem solving",
        "journey.eyebrow": "Journey", "journey.title": "Experience and education",
        "exp.gov.date": "Oct 2025 — present", "exp.gov.role": "Intern · Digital Transformation Department",
        "exp.gov.text": "UI/UX design and visual communication for digitizing public services and improving the citizen experience. Landing page prototypes in Figma, visual models for the back office, logo design and support producing official notices and commitment terms.",
        "exp.free.date": "Mar 2019 — present", "exp.free.role": "Freelance graphic designer",
        "exp.free.text": "Complete visual identities, cartoon and vector illustrations, book covers (print and digital) and social media pieces focused on Instagram.",
        "exp.elo.date": "Oct 2023 — Feb 2024", "exp.elo.role": "Graphic designer",
        "exp.elo.text": "Social media artwork (feed, reels, event albums and blog), landing pages for the school website, photo and video capture and editing, and offline pieces such as banners and signage.",
        "exp.tr.date": "Nov 2020 — Feb 2021", "exp.tr.role": "Intern",
        "exp.tr.text": "Social media artwork and YouTube thumbnails, managing and scheduling posts for the company and its clients, and laying out course materials as PDFs.",
        "exp.saga.date": "May 2019 — Mar 2020", "exp.saga.role": "Teaching assistant",
        "exp.saga.text": "Classroom support for the teacher, make-up classes and month-long Adobe Photoshop workshops: editing, image manipulation and digital painting.",
        "journey.edu": "Education", "journey.certs": "Certifications",
        "edu.cc": "Bachelor's in Computer Science", "edu.dg": "Technologist degree in Graphic Design",
        "cert.endpoint": "Endpoint Security — IFPE Vitória de Santo Antão",
        "projects.eyebrow": "Portfolio", "projects.title": "My Projects",
        "projects.lead": "UI/UX case studies, visual identities, book covers and code. Click a project to see the full case.",
        "projects.more": "See everything on Behance ↗",
        "filter.all": "All", "filter.brand": "Branding", "filter.cover": "Book Covers", "filter.social": "Social Media", "filter.code": "Code", "filter.label": "Filter projects",
        "card.featured": "Featured", "card.behance": "View case on Behance ↗", "card.github": "View on GitHub ↗",
        "contact.eyebrow": "Contact", "contact.title": "Let's talk?",
        "contact.lead": "Have a job opening, a project, or just want to chat about data and design? Send me a message.",
        "contact.form.name": "Name", "contact.form.namePh": "Your name",
        "contact.form.email": "Email", "contact.form.emailPh": "you@email.com",
        "contact.form.message": "Message", "contact.form.messagePh": "Tell me about your project...",
        "contact.form.send": "Send Message →",
        "contact.form.note": "When you send it, your email app opens with the message ready.",
        "contact.form.err": "Please fill in your name, a valid email and a message.",
        "contact.form.subject": "Portfolio contact — ",
        "footer.made": "Made with data, design and code · Recife, Brazil"
      },
      es: {
        "nav.about": "Sobre mí", "nav.skills": "Skills", "nav.journey": "Trayectoria", "nav.projects": "Proyectos", "nav.contact": "Contacto", "nav.language": "Idioma",
        "menu.open": "Abrir menú", "menu.close": "Cerrar menú",
        "hero.status": "Disponible para Prácticas, Trainee o Junior",
        "hero.hello": "Hola, soy",
        "hero.role1": "Análisis de Datos",
        "hero.quote": "“El mejor dato es aquel que entiende quien decide — al fin y al cabo, ¿para qué complicar lo que merece claridad?”",
        "hero.cta1": "Ver proyectos →", "hero.cta2": "¿Hablamos?",
        "hero.meta": "Ciencias de la Computación · Faculdade Nova Roma",
        "hero.cardSub": "Diseñadora gráfica y estudiante de Ciencias de la Computación",
        "about.eyebrow": "Sobre mí",
        "about.title": "Datos, diseño y código en un mismo lugar",
        "about.p1": "Soy graduada en <strong>Diseño Gráfico</strong> por el IFPE y estudiante de <strong>Ciencias de la Computación</strong>. Trabajo en la intersección entre Análisis de Datos, Desarrollo y Experiencia de Usuario.",
        "about.p2": "Estoy orientando mi carrera hacia el <strong>Análisis de Datos</strong>, combinando SQL, Python y Power BI con la experiencia práctica que adquirí desarrollando interfaces (UI/UX) y sistemas web (Front-end).",
        "about.p3": "Actualmente soy practicante en la Secretaría de Transformación Digital del Gobierno de Pernambuco, ayudando a digitalizar servicios y mejorar la experiencia del ciudadano. Busco oportunidades de <strong>Prácticas, Trainee o Junior</strong> donde pueda unir datos, tecnología y resolución de problemas.",
        "about.stat1": "años creando como diseñadora freelance",
        "about.stat2": "proyectos publicados en Behance",
        "about.stat3": "áreas: Datos, Dev y Diseño",
        "about.stat4": "idiomas: PT, ES y EN",
        "about.langs": "Idiomas",
        "lang.pt": "Portugués", "lang.ptLvl": "Nativo",
        "lang.es": "Español", "lang.esLvl": "Profesional",
        "lang.en": "Inglés", "lang.enLvl": "Intermedio",
        "skills.title": "Lo que aporto al equipo",
        "skills.lead": "Una base que va desde la consulta en la base de datos hasta la pantalla que la persona usa — pasando por cómo se presenta la información.",
        "skills.dataTitle": "Datos",
        "skills.dataText": "Estructuración de bases, ETL y análisis estadístico para convertir números en decisiones claras.",
        "skills.stats": "Análisis estadístico", "skills.bases": "Estructuración de bases",
        "skills.devTitle": "Desarrollo",
        "skills.devText": "Interfaces web del prototipo al código, con una base sólida de programación de la facultad.",
        "skills.designTitle": "Producto &amp; Diseño",
        "skills.designText": "UI/UX, prototipado e identidad visual, con gestión de proyectos ágiles.",
        "skills.proto": "Prototipado", "skills.brand": "Identidad visual",
        "skills.soft": "También:", "skills.soft1": "Comunicación", "skills.soft2": "Trabajo en equipo", "skills.soft3": "Enseñanza y mentoría", "skills.soft4": "Resolución de problemas",
        "journey.eyebrow": "Trayectoria", "journey.title": "Experiencia y formación",
        "exp.gov.date": "oct 2025 — actual", "exp.gov.role": "Practicante · Secretaría de Transformación Digital",
        "exp.gov.text": "Diseño UI/UX y comunicación visual para la digitalización de servicios y la mejora de la experiencia del ciudadano. Prototipos de landing pages en Figma, modelos visuales para el backoffice, creación de logos y apoyo en la elaboración de comunicados oficiales y términos de compromiso.",
        "exp.free.date": "mar 2019 — actual", "exp.free.role": "Diseñadora gráfica freelance",
        "exp.free.text": "Identidades visuales completas, ilustraciones en estilo cartoon y vectorial, portadas de libros (física y digital) y piezas para redes sociales con foco en Instagram.",
        "exp.elo.date": "oct 2023 — feb 2024", "exp.elo.role": "Diseñadora gráfica",
        "exp.elo.text": "Piezas para redes sociales (feed, reels, álbumes de eventos y blog), landing pages para el sitio del colegio, captura y edición de fotos y videos, y piezas offline como banners y señalización.",
        "exp.tr.date": "nov 2020 — feb 2021", "exp.tr.role": "Practicante",
        "exp.tr.text": "Piezas para redes sociales y miniaturas de YouTube, gestión y programación de publicaciones de la empresa y sus clientes, y maquetación de materiales de cursos en PDF.",
        "exp.saga.date": "may 2019 — mar 2020", "exp.saga.role": "Monitora",
        "exp.saga.text": "Apoyo al profesor en el aula, clases de recuperación y talleres de un mes de Adobe Photoshop: edición, manipulación de imágenes y pintura digital.",
        "journey.edu": "Formación", "journey.certs": "Certificaciones",
        "edu.cc": "Grado en Ciencias de la Computación", "edu.dg": "Tecnicatura Superior en Diseño Gráfico",
        "cert.endpoint": "Seguridad de Endpoint — IFPE Vitória de Santo Antão",
        "projects.eyebrow": "Portafolio", "projects.title": "Mis Proyectos",
        "projects.lead": "Casos de UI/UX, identidades visuales, portadas de libros y código. Haz clic en un proyecto para ver el caso completo.",
        "projects.more": "Ver todo en Behance ↗",
        "filter.all": "Todos", "filter.brand": "Identidad Visual", "filter.cover": "Portadas", "filter.social": "Redes Sociales", "filter.code": "Código", "filter.label": "Filtrar proyectos",
        "card.featured": "Destacado", "card.behance": "Ver caso en Behance ↗", "card.github": "Ver en GitHub ↗",
        "contact.eyebrow": "Contacto", "contact.title": "¿Hablamos?",
        "contact.lead": "¿Tienes una vacante, un proyecto o solo quieres conversar sobre datos y diseño? Envíame un mensaje.",
        "contact.form.name": "Nombre", "contact.form.namePh": "Tu nombre",
        "contact.form.email": "Correo", "contact.form.emailPh": "tu@email.com",
        "contact.form.message": "Mensaje", "contact.form.messagePh": "Cuéntame sobre tu proyecto...",
        "contact.form.send": "Enviar Mensaje →",
        "contact.form.note": "Al enviar, tu app de correo se abre con el mensaje listo.",
        "contact.form.err": "Completa tu nombre, un correo válido y un mensaje.",
        "contact.form.subject": "Contacto desde el portafolio — ",
        "footer.made": "Hecho con datos, diseño y código · Recife, Brasil"
      }
    };
    // Textos em português que só aparecem via JS
    const ptExtra = {
      "card.featured": "Destaque", "card.behance": "Ver case no Behance ↗", "card.github": "Ver no GitHub ↗",
      "menu.open": "Abrir menu", "menu.close": "Fechar menu",
      "contact.form.err": "Preencha seu nome, um e-mail válido e a mensagem.",
      "contact.form.subject": "Contato pelo portfólio — "
    };

    let lang = "pt";
    const pt = { ...ptExtra };
    document.querySelectorAll("[data-i18n]").forEach(el => { pt[el.dataset.i18n] = el.innerHTML; });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { pt[el.dataset.i18nPlaceholder] = el.placeholder; });
    i18n.pt = pt;
    const t = key => i18n[lang]?.[key] ?? pt[key] ?? key;
    const loc = v => (typeof v === "string" ? v : v[lang] || v.pt);

    function renderProjects() {
      const grid = document.getElementById("projects-grid");
      const active = document.querySelector(".filters [aria-pressed='true']").dataset.filter;
      grid.innerHTML = projects.map(p => {
        const featuredBadge = p.featured
          ? `<span class="badge star">★ ${t("card.featured")}</span>`
          : "";
        const thumb = p.code
          ? `<div class="project-thumb code-thumb" aria-hidden="true"><pre><span class="c">// busca-cep</span>
<span class="k">const</span> cep = <span class="s">"50000-000"</span>;
<span class="k">const</span> res = <span class="k">await</span> fetch(
  <span class="s">\`/api/cep/\${cep}\`</span>
);
<span class="k">return</span> res.json();</pre><span class="badge">${loc(catLabel[p.cat])}</span></div>`
          : `<div class="project-thumb"><img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.remove()"><span class="badge">${loc(catLabel[p.cat])}</span>${featuredBadge}</div>`;
        return `<article class="project-card glass-card" data-cat="${p.cat}" ${active !== "all" && active !== p.cat ? "hidden" : ""}>
          <a href="${p.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${thumb}</a>
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${loc(p.desc)}</p>
            <div class="chips">${p.tags.map(tag => `<span class="chip">${loc(tag)}</span>`).join("")}</div>
            <a class="project-link" href="${p.url}" target="_blank" rel="noopener">${t(p.code ? "card.github" : "card.behance")}</a>
          </div>
        </article>`;
      }).join("");
    }

    function setLang(next) {
      lang = i18n[next] ? next : "pt";
      document.documentElement.lang = { pt: "pt-br", en: "en", es: "es" }[lang];
      document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
      document.querySelectorAll(".lang-switch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
      const menuToggle = document.querySelector(".menu-toggle");
      menuToggle.setAttribute("aria-label", t(menuToggle.getAttribute("aria-expanded") === "true" ? "menu.close" : "menu.open"));
      renderProjects();
      document.getElementById("form-error").textContent = "";
      try { localStorage.setItem("clara-lang", lang); } catch (e) {}
    }

    document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

    /* ---------- Filtros ---------- */
    document.querySelectorAll(".filters button").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filters button").forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
        const f = btn.dataset.filter;
        document.querySelectorAll(".project-card").forEach(card => { card.hidden = f !== "all" && card.dataset.cat !== f; });
      });
    });

    /* ---------- Menu mobile ---------- */
    const toggle = document.querySelector(".menu-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", t("menu.open"));
    }));

    /* ---------- Link ativo no menu ---------- */
    const sections = ["sobre", "skills", "trajetoria", "projetos", "contato"].map(id => document.getElementById(id));
    const navObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => navObs.observe(s));

    // On desktop, page scroll drives the pinned journey scene; mobile stays in normal flow.
    const journeySection = document.getElementById("trajetoria");
    const journeyStage = journeySection.querySelector(".journey-stage");
    const journeyScene = journeyStage.querySelector(".journey-scene");
    const journeyTimeline = journeySection.querySelector(".timeline");
    const journeyTrack = journeyTimeline.querySelector(".timeline-track");
    const journeySideStack = document.querySelector(".side-stack");
    let journeyScrollDistance = 0;
    let journeyStartY = 0;
    let journeySceneLeft = 0;
    let journeySceneWidth = 0;
    let journeyPinTop = 88;
    const journeyEdgeHold = 96;
    const journeyEndBuffer = 8; // folga abaixo do último card, para a borda inferior não ser cortada

    // Altura real do conteúdo da trilha: até a borda inferior do último card.
    // (track.scrollHeight ignora a margem do último item e pode ficar defasado)
    const getTrackContentHeight = () => {
      const items = journeyTrack.querySelectorAll(".tl-item");
      const last = items[items.length - 1];
      return last.offsetTop + last.offsetHeight + journeyEndBuffer;
    };

    const getDocumentTop = element => {
      let top = 0;
      let current = element;
      while (current) {
        top += current.offsetTop;
        current = current.offsetParent;
      }
      return top;
    };

    // Hold each end briefly, then map scroll progress to the experience track.
    const updateJourneyProgress = () => {
      if (!journeyScrollDistance || !window.matchMedia("(min-width: 1001px)").matches) return;
      const positionInStage = window.scrollY - journeyStartY;
      const progressPosition = (positionInStage - journeyEdgeHold) / journeyScrollDistance;
      const progress = Math.min(1, Math.max(0, progressPosition));
      journeyTrack.style.transform = `translate3d(0, ${-journeyScrollDistance * progress}px, 0)`;

      if (positionInStage < 0 || positionInStage >= journeyScrollDistance + journeyEdgeHold * 2) {
        journeyScene.style.position = "absolute";
        journeyScene.style.top = positionInStage < 0 ? "0px" : `${journeyScrollDistance + journeyEdgeHold * 2}px`;
        journeyScene.style.left = "0px";
        journeyScene.style.width = "100%";
      } else {
        journeyScene.style.position = "fixed";
        journeyScene.style.top = `${journeyPinTop}px`;
        journeyScene.style.left = `${journeySceneLeft}px`;
        journeyScene.style.width = `${journeySceneWidth}px`;
      }
    };

    const syncJourneyTimeline = () => {
      if (window.matchMedia("(min-width: 1001px)").matches) {
        journeyStage.classList.add("is-page-driven");
        journeyScene.classList.add("is-page-driven");
        journeyScene.style.position = "absolute";
        journeyScene.style.top = "0px";
        journeyScene.style.left = "0px";
        journeyScene.style.width = "100%";
        journeyTimeline.style.height = `${journeySideStack.getBoundingClientRect().height}px`;
        journeyScrollDistance = Math.max(0, getTrackContentHeight() - journeyTimeline.clientHeight);
        journeyStage.style.height = `${journeyScene.offsetHeight + journeyScrollDistance + journeyEdgeHold * 2}px`;
        journeyPinTop = Math.max(88, (window.innerHeight - journeyScene.offsetHeight) / 2);
        const sceneRect = journeyScene.getBoundingClientRect();
        journeySceneLeft = sceneRect.left;
        journeySceneWidth = sceneRect.width;
        journeyStartY = getDocumentTop(journeyStage) - journeyPinTop;
        updateJourneyProgress();
      } else {
        journeyTimeline.style.removeProperty("height");
        journeyStage.classList.remove("is-page-driven");
        journeyScene.classList.remove("is-page-driven");
        journeyStage.style.removeProperty("height");
        journeyScene.style.removeProperty("position");
        journeyScene.style.removeProperty("top");
        journeyScene.style.removeProperty("left");
        journeyScene.style.removeProperty("width");
        journeyTrack.style.removeProperty("transform");
        journeyScrollDistance = 0;
      }
    };
    // Re-mede sempre que algo que influencia a conta mudar de tamanho
    // (fonte web carregando, troca de idioma, imagens acima da seção...).
    let journeySyncQueued = false;
    const queueJourneySync = () => {
      if (journeySyncQueued) return;
      journeySyncQueued = true;
      requestAnimationFrame(() => {
        journeySyncQueued = false;
        syncJourneyTimeline();
      });
    };
    syncJourneyTimeline();
    const journeyResizeObs = new ResizeObserver(queueJourneySync);
    [journeySideStack, journeyTrack, journeyScene, document.body].forEach(el => journeyResizeObs.observe(el));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueJourneySync);
    window.addEventListener("load", queueJourneySync);
    window.addEventListener("resize", syncJourneyTimeline);
    window.addEventListener("scroll", updateJourneyProgress, { passive: true });

    /* ---------- Revelar ao rolar ---------- */
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.tl-item)").forEach(el => revObs.observe(el));

    const journeyObs = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle("in", entry.isIntersecting));
    }, { root: journeyTimeline, threshold: 0.12 });
    journeyTimeline.querySelectorAll(".tl-item").forEach(item => journeyObs.observe(item));

    /* ---------- Formulário (abre o e-mail) ---------- */
    document.getElementById("contact-form").addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("f-name").value.trim();
      const emailInput = document.getElementById("f-email");
      const email = emailInput.value.trim();
      const msg = document.getElementById("f-msg").value.trim();
      const err = document.getElementById("form-error");
      if (!name || !emailInput.validity.valid || !msg) { err.textContent = t("contact.form.err"); return; }
      err.textContent = "";
      const subject = encodeURIComponent(t("contact.form.subject") + name);
      const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
      window.location.href = `mailto:abclarawork@gmail.com?subject=${subject}&body=${body}`;
    });

    document.getElementById("year").textContent = new Date().getFullYear();

    /* ---------- Início ---------- */
    let saved = null;
    try { saved = localStorage.getItem("clara-lang"); } catch (e) {}
    const browser = (navigator.language || "pt").slice(0, 2);
    setLang(saved || (["en", "es"].includes(browser) ? browser : "pt"));