# 📝 QA Dominicana — Contexto del Proyecto

> **Este archivo se actualiza automáticamente después de cada cambio realizado al proyecto.**
> Registra el estado actual, el historial de cambios y las tareas pendientes.

---

## Estado Actual del Proyecto

| Campo                    | Valor                                       |
|--------------------------|---------------------------------------------|
| **Última actualización** | 2026-05-26 13:41 (AST)                     |
| **Estado general**       | 🟡 En desarrollo — contenido placeholder    |
| **Última acción**        | Análisis inicial y creación de documentación |
| **Próximas tareas**      | Definidas por el usuario                    |

---

## Resumen de Páginas — Estado Actual

| Página          | Archivo         | Estado    | Notas                                                    |
|-----------------|-----------------|-----------|----------------------------------------------------------|
| 🏠 Inicio       | `index.html`    | ✅ Funcional | Hero con slideshow Ken Burns + countdown timer            |
| 📋 Acerca       | `acerca.html`   | ⚠️ Parcial  | Contenido Lorem Ipsum, cierre HTML roto (`-->`)           |
| 📅 Eventos      | `eventos.html`  | ⚠️ Parcial  | 4 eventos con mismo contenido placeholder                 |
| 👥 Staff        | `staff.html`    | ✅ Funcional | 7 miembros con Swiper carousel                            |
| 📝 Blog         | `blog.html`     | ⚠️ Parcial  | 3 posts con mismo texto en inglés                         |
| ✉️ Contacto     | `contacto.html` | ✅ Funcional | Formulario integrado con FormSubmit                       |

---

## Funcionalidades — Estado Actual

| Funcionalidad            | Estado         | Detalles                                               |
|--------------------------|----------------|--------------------------------------------------------|
| Tema oscuro/claro        | ✅ Funcional    | Toggle con localStorage, sin flash                     |
| Internacionalización     | ✅ Funcional    | ES/EN con ~40 claves de traducción                     |
| Menú lateral slide-out   | ✅ Funcional    | Glassmorphism, animaciones escalonadas                 |
| Slideshow hero           | ✅ Funcional    | Ken Burns con 3 imágenes                               |
| Countdown timer          | ✅ Funcional    | Cuenta regresiva a Dic 31, 2026                        |
| Navegación sticky        | ✅ Funcional    | Se fija en scroll con backdrop-filter                  |
| Tabs de eventos          | ✅ Funcional    | 4 pestañas con contenido tab                           |
| Swiper staff             | ✅ Funcional    | Coverflow 3D con paginación                            |
| Blog cards               | ✅ Funcional    | Hover effects con overlay                              |
| Formulario contacto      | ✅ Funcional    | Integrado con FormSubmit (AJAX) + confirmación         |
| Newsletter               | ✅ Funcional    | Integrado con FormSubmit (AJAX) + confirmación         |
| Skip link (a11y)         | ✅ Funcional    | Accesibilidad con enlace de salto                      |
| Responsive design        | ✅ Funcional    | Bootstrap grid + clamp() para fuentes                  |
| SEO meta tags            | ✅ Implementado | Title + description en cada página                     |

---

## Historial de Cambios

### 📌 2026-05-28 — Integración de Formularios con Backend (FormSubmit)
- **Tipo:** Funcionalidad
- **Acción:** Se activaron los formularios de contacto y suscripción.
- **Archivos modificados:**
  - `contacto.html`: Implementación de FormSubmit en el formulario principal.
  - `index.html`, `acerca.html`, `eventos.html`, `staff.html`, `blog.html`, `confirmar_asistencia.html`, `detalle.html`: Actualización del footer (newsletter).
  - `js/main.js`: Lógica AJAX para envío de formularios y visualización de mensajes.
  - `js/i18n.js`: Nuevas claves de traducción para mensajes de éxito y error.
- **Observaciones:**
  - Se utiliza `https://formsubmit.co/ajax/qadominican@gmail.com`.
  - Se añadió protección anti-spam básica (`_honey`) y se desactivó el captcha para mejorar la UX con AJAX.

### 📌 2026-05-26 — Análisis Inicial y Documentación
- **Tipo:** Documentación
- **Acción:** Análisis completo del proyecto
- **Archivos creados:**
  - `PROJECT_INFO.md` — Documentación permanente del proyecto
  - `PROJECT_CONTEXT.md` — Este archivo de contexto (se actualiza con cada cambio)
- **Archivos modificados:** Ninguno
- **Observaciones:**
  - Se identificaron 10 problemas/deuda técnica (ver `PROJECT_INFO.md` §12)
  - El proyecto no tiene build system ni package manager
  - Los componentes compartidos (nav, footer) están copiados en 6 archivos HTML

---

## Archivos Modificados Recientemente

| Archivo                 | Última modificación | Tipo de cambio      |
|-------------------------|---------------------|---------------------|
| `PROJECT_INFO.md`       | 2026-05-26          | Creado — Nuevo      |
| `PROJECT_CONTEXT.md`    | 2026-05-26          | Creado — Nuevo      |

---

## Dependencias entre Archivos

> Referencia rápida para saber qué archivos se afectan mutuamente:

```
tokens.css ──► style.css ──► todas las páginas HTML
theme.js ──────────────────► todas las páginas HTML
i18n.js ───────────────────► todas las páginas HTML
main.js ───────────────────► todas las páginas HTML

Componentes compartidos (copiar en 6 archivos):
  • <head> meta/CDN links
  • .skip-link
  • .nav-backdrop + .navigation-menu (menú lateral)
  • <footer>
  • Script tags al final del <body>
```

---

## Notas para el Próximo Cambio

- Al modificar el menú lateral → actualizar las **6 páginas HTML**
- Al modificar el footer → actualizar las **6 páginas HTML**
- Al agregar una clave i18n → agregarla en **ambos idiomas** (es + en) en `i18n.js`
- Al agregar una nueva página → copiar el template de `contacto.html` como base
- Al cambiar colores → hacerlo en `tokens.css`, no en `style.css`
- Al agregar nuevos estilos → seguir la numeración de secciones en `style.css`

---

*Este archivo se actualiza después de cada modificación al proyecto. Última actualización: 2026-05-26.*
