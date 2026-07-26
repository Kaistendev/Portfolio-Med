# Sprints — Portfolio-Med

**Stack:** Astro + Tailwind CSS + Decap CMS + Netlify  
**Idiomas:** ES (default) / EN  
**Gestor:** pnpm

---

## Sprint 1 — Setup del Proyecto
**Objetivo:** Inicializar el proyecto base con todas las herramientas configuradas.

- [ ] 1.1 `pnpm create astro@latest` con TypeScript, template minimal
- [ ] 1.2 Integrar Tailwind CSS (`@astrojs/tailwind` o Tailwind v4)
- [ ] 1.3 Configurar ESLint + Prettier
- [ ] 1.4 Definir variables de diseño globales en `tailwind.config`:
  - Colores: `primary: #0D7377`, `accent: #D4A853`, `bg: #F7F8FA`, `text: #1A202C`
  - Tipografía: Fraunces (display), Outfit (body), JetBrains Mono (utility)
  - Espaciado, sombras, border-radius
- [ ] 1.5 Crear estructura de directorios del proyecto:
  ```
  src/
    components/
    layouts/
    pages/
      en/
    lib/
    content/
      blog/es/  blog/en/
      servicios/es/  servicios/en/
      testimonios/es/  testimonios/en/
    assets/
  public/
    admin/
    uploads/
  ```
- [ ] 1.6 Cargar Google Fonts (Fraunces, Outfit, JetBrains Mono) en el layout
- [ ] 1.7 Commit: `git init && git add . && git commit -m "feat: setup inicial del proyecto"`

---

## Sprint 2 — Sistema i18n
**Objetivo:** Routing por idioma + textos traducidos.

- [ ] 2.1 Crear `src/lib/i18n.ts` con diccionario ES ↔ EN para toda la UI:
  - Navbar, footer, botones, placeholders, errores, CTAs
- [ ] 2.2 Implementar helper `useTranslations(lang)` para consumo en componentes
- [ ] 2.3 Routing: `/` → ES, `/en/` → EN con estructura de directorios en `pages/`
- [ ] 2.4 Componente `<LanguageSwitcher />` en navbar
- [ ] 2.5 Probar navegación entre idiomas en todas las rutas

---

## Sprint 3 — Layout Base y Componentes Core
**Objetivo:** Estructura global del sitio y componentes reutilizables.

- [ ] 3.1 `BaseLayout.astro`:
  - SEO dinámico (title, description, Open Graph) por idioma
  - Favicon, meta tags, viewport
  - Schema.org `MedicalBusiness` / `Physician` (datos estáticos)
- [ ] 3.2 `Navbar.astro`:
  - Logo + nombre del médico
  - Menú principal (Inicio, Servicios, Blog, Contacto)
  - LanguageSwitcher
  - Menú hamburguesa en mobile
  - Teal background, sticky
- [ ] 3.3 `Footer.astro`:
  - Datos de contacto, dirección, horarios
  - Redes sociales
  - Copyright
- [ ] 3.4 `WhatsAppButton.astro` — botón flotante fijo con enlace directo
- [ ] 3.5 Componentes UI base:
  - `Button.astro` (variantes: primary, secondary, outline)
  - `Card.astro` (con slots para header/content/footer)
  - `Badge.astro` (para categorías, etiquetas)
  - `Section.astro` (wrapper con padding vertical + título opcional)
- [ ] 3.6 `PulseRibbon.astro` — línea decorativa animada con SVG heartbeat
- [ ] 3.7 Probar layout responsive en móvil, tablet y desktop

---

## Sprint 4 — Configuración Decap CMS
**Objetivo:** CMS funcional con contenido pareado ES/EN.

- [ ] 4.1 Crear `public/admin/config.yml`:
  - Backend: GitHub + Git Gateway
  - `i18n` con `structure: multiple_folders`, locales `[es, en]`, default `es`
  - Colecciones: `blog`, `servicios`, `testimonios`, `perfil`
  - Widgets: markdown, image, string, select, date, boolean
- [ ] 4.2 Crear `public/admin/index.html` con entry point del CMS
- [ ] 4.3 Configurar autenticación en Netlify (Netlify Identity)
- [ ] 4.4 Definir schemas de cada colección con campos pareados:
  - **Blog:** title, date, author, category, image, body (markdown)
  - **Servicios:** title, icon, description, body
  - **Testimonios:** name, rating, text, date
  - **Perfil:** name, specialty, license, bio, photo, cv
- [ ] 4.5 Probar flujo completo:
  - Crear artículo en ES → ver slot EN creado
  - Subir imagen → ver en `public/uploads/`
  - Publicar → ver archivo markdown generado
- [ ] 4.6 Commit: configuración CMS funcional

---

## Sprint 5 — Secciones Públicas (Parte 1)
**Objetivo:** Hero, Servicios, Trayectoria.

- [ ] 5.1 `HeroSection.astro`:
  - Split layout: headline + credenciales (nombre, especialidad, colegiatura) + CTA
  - Lado visual: patrón geométrico médico SVG o grid decorativo
  - Pulse-ribbon como separador inferior
  - Animación sutil de entrada (CSS, respetando `prefers-reduced-motion`)
- [ ] 5.2 `ServicesGrid.astro`:
  - Grid 3-columnas responsive
  - Cada tarjeta: icono, título, descripción corta, thin gold border top
  - Página individual dinámica (`/servicios/[slug]`)
- [ ] 5.3 `Timeline.astro`:
  - Vertical con años, títulos, descripciones
  - Línea conectora + dots en cada hito
  - Secuencia real → usar marcadores de año como estructura informativa
- [ ] 5.4 Probar secciones en ES y EN

---

## Sprint 6 — Secciones Públicas (Parte 2)
**Objetivo:** Blog, Testimonios, Contacto.

- [ ] 6.1 `BlogGrid.astro`:
  - Grid 2-columnas responsive
  - Filtro por categoría + buscador por título
  - Badge de categoría, fecha, enlace a página individual
- [ ] 6.2 `BlogPost.astro` (página individual):
  - Contenido enriquecido (markdown renderizado)
  - Meta: fecha, categoría, autor
  - Compartir en redes
  - Navegación entre posts anteriores/siguientes
- [ ] 6.3 `TestimonialsCarousel.astro`:
  - Carrusel con reseñas (swipe en mobile, flechas en desktop)
  - Avatar + nombre + rating + texto
  - Auto-play opcional, respetando reduced-motion
- [ ] 6.4 `ContactSection.astro`:
  - Mapa Leaflet interactivo
  - Dirección, horarios
  - Formulario de contacto (integración con Resend o Formspree)
  - Validación cliente y servidor
- [ ] 6.5 Probar todas las secciones en ambos idiomas

---

## Sprint 7 — Content Collections desde Decap CMS
**Objetivo:** Datos dinámicos desde el CMS en build-time.

- [ ] 7.1 Definir `src/content/config.ts`:
  - Schema para blog, servicios, testimonios
  - Campo `locale` para filtrar por idioma
- [ ] 7.2 Consultar colecciones con `getCollection()` en páginas
- [ ] 7.3 Generar rutas dinámicas:
  - `/blog/[slug]` y `/en/blog/[slug]`
  - `/servicios/[slug]` y `/en/servicios/[slug]`
- [ ] 7.4 Probar que el contenido del CMS se renderiza correctamente en build

---

## Sprint 8 — Performance, SEO & Despliegue
**Objetivo:** Sitio optimizado, auditado y en producción.

- [ ] 8.1 Optimización de imágenes:
  - Lazy loading nativo (`loading="lazy"`)
  - Componente `<Image />` de Astro con formatos `.webp`/`.avif`
- [ ] 8.2 SEO:
  - Sitemap.xml con rutas ES y EN
  - Tags `hreflang` en cada página
  - Schema.org `Article`, `FAQ`, `MedicalBusiness` por página
  - Open Graph / Twitter Cards
- [ ] 8.3 Auditoría Lighthouse (objetivo >90 en todas las categorías)
- [ ] 8.4 Repositorio GitHub:
  - `.gitignore` apropiado
  - Branch protection en `main`
- [ ] 8.5 CI/CD en Netlify:
  - Conexión con GitHub
  - Variables de entorno
  - Deploy automático desde `main`
- [ ] 8.6 Dominio personalizado + SSL
- [ ] 8.7 Redirects por idioma (`_redirects` o `netlify.toml`)
- [ ] 8.8 Despliegue final y verificación

---

## Totales

| Sprint | Tareas | Estimado |
|--------|--------|----------|
| Sprint 1 | 7 tareas | Setup del proyecto |
| Sprint 2 | 5 tareas | Sistema i18n |
| Sprint 3 | 7 tareas | Layout + componentes core |
| Sprint 4 | 6 tareas | Decap CMS |
| Sprint 5 | 4 tareas | Hero, Servicios, Trayectoria |
| Sprint 6 | 5 tareas | Blog, Testimonios, Contacto |
| Sprint 7 | 4 tareas | Content Collections |
| Sprint 8 | 8 tareas | Performance, SEO, Deploy |
| **Total** | **46 tareas** | **8 sprints** |
