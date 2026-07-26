# Contexto del Proyecto: Portfolio Médico & Plataforma de Captación de Pacientes

## 1. Visión General del Proyecto
Este proyecto consiste en el desarrollo de un sitio web profesional y plataforma digital para un **médico especialista** (aplicable también a otras profesionalidades que presten servicios). El sitio cumple con un propósito dual estratégico:
1. **Carta de Presentación & Autoridad Académica:** Espacio para destacar la trayectoria, investigaciones, casos clínicos y aportes a la comunidad médica.
2. **Herramienta de Captación de Pacientes (Conversión):** Embudo digital diseñado para transmitir confianza, informar sobre padecimientos/servicios y facilitar el agendamiento directo de citas.

---

## 2. Objetivos Clave del Proyecto
- **Posicionamiento de Autoridad (Branding Médico):** Permitir al médico publicar y categorizar artículos, casos de estudio y participaciones en congresos de forma autónoma.
- **Maximizar la Conversión de Pacientes:** Reducir la fricción para solicitar una consulta mediante llamadas a la acción (CTA) claras, integración directa con WhatsApp Business y formulario de contacto.
- **Rendimiento y Carga Ultra-Rápida:** Garantizar una experiencia fluida especialmente en dispositivos móviles (Mobile-First) con un tiempo de carga inferior a 1.5 segundos.
- **Cero Complejidad de Mantenimiento:** Eliminar la necesidad de un servidor dedicado encendido 24/7 y reducir costos de infraestructura a $0/mes aprovechando capas gratuitas (Free Tiers) de arquitectura Jamstack.
- **Autonomía Operativa:** Proporcionar al médico un panel CMS limpio, intuitivo y sin distracciones donde pueda redactar publicaciones y subir imágenes sin depender de un desarrollador.

---

## 3. Stack Tecnológico

| Aspecto | Decisión |
|---|---|
| Package Manager | **pnpm** |
| Framework | **Astro** (SSG) |
| Estilos | **Tailwind CSS** |
| Headless CMS | **Decap CMS** (Git-based, panel `/admin`) |
| i18n | Routing por directorios: `/` (ES default), `/en/` (EN) |
| Contenido CMS | **Pareado** — cada artículo tiene versión ES y EN |
| Formularios | **Resend** o **Formspree** |
| Hosting & Despliegue | **Netlify** (integración nativa con Decap CMS + Netlify Identity) |
| Analytics | Plausible o Google Analytics |
| Dominio | Personalizado con SSL automático |

---

## 4. Diseño Visual

### Concepto: "Precision with Warmth"
Balance entre competencia médica (precisión, expertise) y empatía (calidez, cuidado humano).

### Paleta de Colores
| Rol | Hex | Descripción |
|---|---|---|
| Primario | `#0D7377` | Deep teal — confianza y estabilidad, más distintivo que el azul hospitalario genérico |
| Acento | `#D4A853` | Soft gold — calidez humana, toque premium |
| Fondo | `#F7F8FA` | Off-white — limpio pero no estéril |
| Texto | `#1A202C` | Near-black — alto contraste sin llegar al negro puro |

### Tipografía
| Rol | Fuente | Carácter |
|---|---|---|
| Display | **Fraunces** (variable serif) | Autoridad académica con calidez — el eje `SOFT` lo hace único |
| Body | **Outfit** (sans-serif) | Moderno, amigable, altamente legible |
| Utility | **JetBrains Mono** (monoespaciada) | Precisión técnica para datos, credenciales, números |

### Signature Element
**Pulse-ribbon animado** — línea horizontal con un pulso cardiaco SVG que viaja lentamente de izquierda a derecha, usado como separador entre secciones clave. Único movimiento decorativo del sitio.

---

## 5. Estructura de Directorios

```
src/
  components/       # .astro reutilizables
  layouts/          # BaseLayout, ArticleLayout
  pages/            # / (ES), /en/ (EN)
    index.astro
    servicios/
    blog/
    contacto/
    en/
      index.astro
      servicios/
      blog/
      contacto/
  lib/              # i18n utils, constants, config
  content/          # Content Collections (Decap CMS output)
    blog/
      es/
      en/
    servicios/
      es/
      en/
    testimonios/
      es/
      en/
  assets/           # imágenes, SVGs
public/
  admin/            # config.yml + index.html (Decap CMS)
  uploads/          # imágenes subidas desde el CMS
```

---

## 6. Estructura de la Aplicación (Vista Pública)

### Hero Section
- Split layout: Headline + credenciales + CTA a la izquierda, patrón geométrico médico a la derecha
- Nombre, especialidad, número de colegiatura, propuesta de valor
- CTA principal: "Agendar Cita" / "Consultar Disponibilidad"

### Módulo de Servicios & Tratamientos
- Grid 3-columnas con icono, borde gold superior fino, descripción concisa

### Trayectoria & Aportes
- Timeline vertical con años y conexiones visuales (sí tiene sentido secuencial)

### Blog / Casos Clínicos / Publicaciones
- Grid 2-columnas con filtro por categoría + buscador
- Página individual con contenido enriquecido
- Contenido pareado ES/EN desde Decap CMS

### Prueba Social / Testimonios
- Carrusel de reseñas verificadas

### Ubicación, Horarios & Contacto
- Mapa interactivo (Leaflet), dirección, horarios, formulario de contacto
- Botón flotante permanente de WhatsApp

---

## 7. Plan de Desarrollo (Fases)

### Fase 1 — Setup del Proyecto
1. Inicializar Astro con `pnpm create astro@latest` (TypeScript)
2. Configurar Tailwind CSS
3. Configurar ESLint / Prettier
4. Definir variables de diseño globales (colores, tipografía, espaciado)
5. Crear estructura de directorios

### Fase 2 — Sistema i18n
6. Crear diccionario ES ↔ EN para textos fijos de UI (`src/lib/i18n.ts`)
7. Implementar routing por idioma (`/` ES, `/en/` EN)
8. Componente `<LanguageSwitcher />` en el navbar
9. Helper `useTranslations(lang)` para textos estáticos

### Fase 3 — Layout Base y Componentes Core
10. `BaseLayout.astro` — SEO dinámico por idioma, meta tags, Schema.org
11. Navbar responsive con menú hamburguesa + LanguageSwitcher
12. Footer con datos de contacto, horarios, redes
13. Botón flotante de WhatsApp
14. Componentes UI base: Botón, Tarjeta, Badge, Timeline, Formulario

### Fase 4 — Configuración Decap CMS
15. Configurar `public/admin/config.yml` con i18n (multiple_folders, ES/EN)
16. Crear `public/admin/index.html`
17. Configurar autenticación (Netlify Identity / GitHub OAuth)
18. Definir colecciones: blog, servicios, testimonios, perfil
19. Probar flujo CMS: crear artículo ES → slot EN automático

### Fase 5 — Secciones Públicas
20. Hero Section (split layout + pulse-ribbon)
21. Servicios & Tratamientos (grid + página individual)
22. Trayectoria & Aportes (timeline vertical)
23. Testimonios (carrusel)
24. Blog / Casos Clínicos (grid + filtros + buscador + página individual)
25. Ubicación, Horarios, Contacto (mapa + formulario)

### Fase 6 — Content Collections
26. Definir schemas en `src/content/config.ts` con campo locale
27. Consultar datos en build-time con `getCollection()`
28. Generar rutas dinámicas ES y EN desde el CMS

### Fase 7 — Performance, SEO & Despliegue
29. Optimización de imágenes (lazy loading, .webp/.avif)
30. SEO structured data + sitemap.xml bilingüe + hreflang
31. Auditoría Lighthouse (objetivo >90)
32. Repositorio GitHub + CI/CD en Netlify
33. Dominio personalizado + SSL + redirects por idioma

---

## 8. Requerimientos No Funcionales & Reglas de Negocio
- **Protección de Datos & Confidencialidad:** Fotos de casos clínicos deben cumplir con políticas de privacidad del paciente (desenfoque o anonimización).
- **SEO Local Médico:** Schema.org `MedicalBusiness`, `Physician`, `Article`, `FAQ` para posicionamiento geolocalizado.
- **Accesibilidad:** Tipografía legible, alto contraste, keyboard focus visible, reduced motion respetado.
- **Mobile-First:** Experiencia fluida en dispositivos móviles con carga < 1.5s.
- **Responsive down to mobile:** Todas las secciones adaptativas.

---

## 9. Guía para el Agente / Desarrollador AI
- Priorizar componentes modulares y reutilizables en Astro (`.astro`).
- Código CSS limpio con clases de Tailwind.
- Todas las peticiones al CMS resueltas en build-time.
- Lazy loading en imágenes y formatos `.webp` / `.avif`.
- Decisiones de diseño deben ser intencionales, no defaults genéricos.
- Mantener el "pulse-ribbon" como único elemento decorativo animado.
- Diseño disciplinado y silencioso alrededor de la signature element.
