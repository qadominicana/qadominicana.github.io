# 📘 QA Dominicana — Información del Proyecto

> **⚠️ INSTRUCCIÓN OBLIGATORIA:** Este archivo DEBE leerse SIEMPRE antes de realizar cualquier
> modificación al código. Contiene la información esencial del proyecto, sus convenciones,
> arquitectura y reglas que deben respetarse en todo momento.

---

## 1. Descripción General

| Campo              | Valor                                                                    |
|--------------------|--------------------------------------------------------------------------|
| **Nombre**         | QA Dominicana                                                            |
| **Tipo**           | Sitio web estático (GitHub Pages)                                        |
| **Propósito**      | Página principal de la primera comunidad oficial de profesionales de SQA en República Dominicana |
| **Repositorio**    | `qadominicana.github.io`                                                 |
| **Hosting**        | GitHub Pages                                                             |
| **Idiomas**        | Español (principal) / Inglés (secundario)                                |
| **Última revisión**| 2026-05-26                                                               |

---

## 2. Stack Tecnológico

| Tecnología             | Versión / Detalle                                                 |
|------------------------|-------------------------------------------------------------------|
| **HTML**               | HTML5 semántico                                                   |
| **CSS**                | Vanilla CSS con Design Tokens (`tokens.css`) + `style.css`        |
| **JavaScript**         | Vanilla JS (ES6+), sin frameworks                                 |
| **Framework CSS**      | Bootstrap 5.3.3 (vía CDN)                                        |
| **Iconos**             | Font Awesome 6.5.1 (vía CDN)                                     |
| **Tipografía**         | Google Fonts — `Roboto Condensed` (weights: 300, 400, 700)        |
| **Carrusel**           | Swiper.js v11 (solo en `staff.html`, vía CDN)                    |
| **Build system**       | Ninguno — archivos servidos directamente                          |
| **Package manager**    | Ninguno                                                           |

---

## 3. Estructura de Archivos

```
qadominicana.github.io/
├── index.html              ← Página principal (Hero + Slideshow + Countdown)
├── acerca.html             ← Página "Acerca de Nosotros"
├── eventos.html            ← Página de Eventos (sistema de tabs)
├── staff.html              ← Página del Staff (Swiper carousel)
├── blog.html               ← Página del Blog (cards de posts)
├── contacto.html           ← Página de Contacto (formulario)
├── favicon.ico             ← Favicon del sitio
├── README.md               ← Descripción del repositorio
├── PROJECT_INFO.md         ← ⭐ ESTE ARCHIVO — Leer siempre antes de cambios
├── PROJECT_CONTEXT.md      ← 📝 Contexto actual — Se actualiza después de cada cambio
│
├── css/
│   ├── tokens.css          ← Design tokens (colores, fuentes, temas light/dark)
│   └── style.css           ← Estilos principales (~1166 líneas, 15 secciones)
│
├── js/
│   ├── theme.js            ← Toggle de tema oscuro/claro (localStorage: 'qa-theme')
│   ├── i18n.js             ← Sistema de internacionalización ES/EN (localStorage: 'qa-lang')
│   └── main.js             ← Lógica general: menú, countdown, sticky nav, tabs, Swiper
│
└── assets/
    ├── logos/              ← Logos del sitio (QA_Dominicana_Logo.png, Logo1.png)
    ├── profiles/           ← Fotos del staff (7 miembros)
    ├── events/             ← Imágenes de eventos (evento-1 a evento-4.jpg)
    ├── slide/              ← Imágenes del slideshow del hero (3 fotos)
    └── about/              ← Imágenes de la sección "acerca" (creativos.jpg, services.jpg)
```

---

## 4. Arquitectura CSS

### 4.1 Design Tokens (`css/tokens.css`)
Los colores y fuentes del proyecto se definen mediante CSS Custom Properties:

| Token                   | Light                    | Dark                      | Uso                     |
|-------------------------|--------------------------|---------------------------|-------------------------|
| `--color-primary`       | `#1d4ed8` (Royal Blue)   | (mismo)                   | Botones, enlaces, acentos |
| `--color-accent`        | `#7c1d12` (Wine Red)     | (mismo)                   | Logo Q, CTA principal   |
| `--color-dark`          | `#0f172a` (Navy)         | (mismo)                   | Headers, footer, fondos oscuros |
| `--color-bg`            | `#ffffff`                | `#0d1117`                 | Fondo principal         |
| `--color-bg-light`      | `#f8fafc`                | `#161b22`                 | Fondo alterno claro     |
| `--color-surface`       | `#ffffff`                | `#1c2128`                 | Cards, superficies      |
| `--color-surface-2`     | `#f1f5f9`                | `#21262d`                 | Superficies secundarias |
| `--color-text`          | `#0f172a`                | `#e6edf3`                 | Texto principal         |
| `--color-text-dark`     | `#334155`                | `#c9d1d9`                 | Texto secundario        |
| `--color-text-muted`    | `#64748b`                | `#8b949e`                 | Texto atenuado          |
| `--color-border`        | `rgba(0,0,0,0.08)`      | `rgba(255,255,255,0.08)`  | Bordes principales      |
| `--font-main`           | `'Roboto Condensed'`     | (mismo)                   | Fuente global           |

### 4.2 Secciones del CSS (`css/style.css`)
El archivo principal sigue esta organización estricta de 15 secciones:

1. **Base & Reset** — Transiciones suaves de tema, reset, `:focus-visible`
2. **Skip Link & Accessibility** — Enlace de accesibilidad
3. **Slideshow (Home)** — Animación Ken Burns, 3 slides
4. **Navigation Bar** — Navbar con sticky scroll, glassmorphism
5. **Hamburger Button** — Animación de transformación X
6. **Nav Backdrop & Slide-out Menu** — Panel lateral con glassmorphism oscuro
7. **Hero (Home)** — Sección hero con tipografía grande
8. **Timer / Countdown** — Barra de cuenta regresiva
9. **About Section** — Layout de "Acerca de Nosotros"
10. **Events & Tabs** — Sistema de pestañas de eventos
11. **Staff / Swiper** — Carrusel Swiper con efecto coverflow
12. **Blog** — Cards de blog con fecha y redes sociales
13. **Contact** — Formulario de contacto
14. **Footer** — Pie de página con 3 columnas
15. **Inner Page Headers** — Encabezados de páginas internas

---

## 5. Sistema de Navegación

### 5.1 Páginas y Rutas
| Página         | Archivo          | Ruta relativa     |
|----------------|------------------|--------------------|
| Inicio         | `index.html`     | `/` o `/index.html`|
| Acerca         | `acerca.html`    | `/acerca.html`     |
| Eventos        | `eventos.html`   | `/eventos.html`    |
| Staff          | `staff.html`     | `/staff.html`      |
| Blog           | `blog.html`      | `/blog.html`       |
| Contacto       | `contacto.html`  | `/contacto.html`   |

### 5.2 Componente de Navegación
- Cada página tiene un **menú lateral slide-out** (`.navigation-menu`) idéntico
- El menú incluye: logo, toggle de idioma (ES/EN), toggle de tema (🌙/☀️), botón cerrar
- La navegación resalta la página activa con la clase `.nav-active` (asignada por `main.js`)
- **Bug conocido:** En `index.html`, el enlace "Inicio" apunta a `acerca.html` en vez de `index.html`

### 5.3 Diferencias en el Logo del Navbar
| Página          | Logo en Navbar                                       |
|-----------------|------------------------------------------------------|
| `index.html`    | `<img>` con logo PNG (`assets/logos/QA_Dominicana_Logo.png`) |
| `acerca.html`   | `<img>` con logo PNG (enlazado con `<a href="index.html">`) |
| Otras páginas   | Texto "QA Dominicana" (sin imagen)                   |

---

## 6. Sistema de Internacionalización (i18n)

- **Archivo:** `js/i18n.js`
- **Almacenamiento:** `localStorage` con clave `'qa-lang'`
- **Idiomas:** `es` (español, por defecto) y `en` (inglés)
- **Mecanismo:** Atributos `data-i18n`, `data-i18n-placeholder`, `data-i18n-aria`
- **Claves disponibles:** ~40 claves organizadas por página (nav, footer, home, about, events, staff, blog, contact)
- **Nota:** Algunos contenidos como los párrafos Lorem Ipsum NO están internacionalizados

---

## 7. Sistema de Temas (Light/Dark)

- **Archivo:** `js/theme.js`
- **Almacenamiento:** `localStorage` con clave `'qa-theme'`
- **Aplicación inicial:** Script inline en el `<head>` de cada página para evitar flash
- **Iconos:** `fa-moon` (modo light) ↔ `fa-sun` (modo dark)
- **Transiciones:** Todas las propiedades de color tienen `transition: 0.28s ease`
- **Fallback:** Respeta `prefers-color-scheme` del sistema si no hay preferencia guardada

---

## 8. Componentes Reutilizados (Patrón Copy-Paste)

> **⚠️ IMPORTANTE:** Al no usar un framework de componentes, el header, menú lateral y footer
> están **copiados manualmente** en cada archivo HTML. Cualquier cambio en estos elementos
> debe replicarse en **TODOS** los archivos HTML.

### Elementos compartidos entre todas las páginas:
1. **`<head>`** — Meta tags, CDN links, script inline de tema
2. **Skip link** — `<a class="skip-link">`
3. **Nav backdrop** — `<div class="nav-backdrop">`
4. **Navigation menu** — `<div class="navigation-menu">` (menú lateral completo)
5. **Footer** — `<footer class="footer">` (3 columnas: info, links rápidos, newsletter)
6. **Scripts** — Bootstrap, theme.js, i18n.js, main.js (orden obligatorio)

### Archivos que deben modificarse simultáneamente:
- `index.html`, `acerca.html`, `eventos.html`, `staff.html`, `blog.html`, `contacto.html`

---

## 9. Miembros del Staff

| Nombre                    | Cargo                                          | Imagen                         |
|---------------------------|-------------------------------------------------|--------------------------------|
| Carlos Pineda             | Testing Coordinator en Evertec                  | `carlos-pineda.jpg`            |
| Alexander Vegazo Rodriguez| Sr. Software Test Analyst at Siembra            | `alexander-vegazo.jpg`         |
| Ever Curiel Moran         | Sub Gerente - Quality Software at Banco BHD León| `ever-curiel.jpg`              |
| Edgar Ceballos García     | QA-Project Manager at Newtech, S.R.L.           | `edgar-ceballos.jpg`           |
| Cindy Gómez Cárdenas      | QA-Project Manager at Newtech, S.R.L.           | `cindy-gomez.jpg`              |
| Anuard Michelén           | Sr. Software Test Analyst at UTreee             | `anuard-michelen.jpg`          |
| Jorge Almánzar            | Sr. Software Test Analyst at Unipago            | `jorge-almanzar.jpg`           |

---

## 10. Información de Contacto

| Dato             | Valor                                                                 |
|------------------|-----------------------------------------------------------------------|
| **Teléfono**     | (829) 387 2609                                                        |
| **Email**        | qadominican@gmail.com                                                 |
| **Facebook**     | https://www.facebook.com/groups/2300640940204721/                      |
| **Instagram**    | https://www.instagram.com/qa_dominicana/                              |
| **YouTube**      | https://www.youtube.com/channel/UC6f2mFVJtUjjuGAx5jeV4jA             |

---

## 11. Convenciones y Reglas de Desarrollo

### 11.1 HTML
- Usar HTML5 semántico (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Todo contenido traducible debe tener el atributo `data-i18n="clave"`
- Los placeholders usan `data-i18n-placeholder`, las aria-labels usan `data-i18n-aria`
- Las imágenes deben tener `alt`, `width`, `height` y `loading="lazy"` (excepto hero)
- Incluir skip link para accesibilidad
- Cada página interna usa la clase `.page-header` (no `.header`)

### 11.2 CSS
- **SIEMPRE** usar los design tokens de `tokens.css` — nunca hardcodear colores del tema
- Seguir la organización de 15 secciones numeradas en `style.css`
- Nuevas secciones deben añadirse al final con el número correlativo
- Transiciones de tema: usar las custom properties para que el cambio light/dark sea automático
- Usar `clamp()` para tamaños de fuente responsivos
- Respetar `prefers-reduced-motion: reduce`

### 11.3 JavaScript
- Vanilla JS, sin dependencias excepto Bootstrap y Swiper
- Usar IIFEs o guardas de `querySelector` para código específico de página
- El orden de carga de scripts es: Bootstrap → theme.js → i18n.js → main.js
- Nunca modificar el script inline del `<head>` (anti-flash de tema)
- Almacenamiento: `qa-theme` para tema, `qa-lang` para idioma

### 11.4 Assets
- Las imágenes van en la carpeta correspondiente dentro de `assets/`
- Nombres de archivo en kebab-case: `nombre-apellido.jpg`, `evento-1.jpg`
- Los logos se guardan en `assets/logos/`

---

## 12. Problemas Conocidos / Deuda Técnica

1. **Bug en nav de index.html:** El enlace "Inicio" del menú lateral apunta a `acerca.html` en vez de `index.html`
2. **Contenido placeholder:** Múltiples secciones usan "Lorem ipsum" (acerca, eventos)
3. **Eventos repetidos:** Los 4 eventos tienen la misma descripción genérica
4. **Blog sin contenido real:** Los 3 posts tienen el mismo texto en inglés
5. **Formulario sin backend:** El formulario de contacto no envía datos a ningún servidor
6. **Newsletter sin backend:** El formulario de suscripción no funciona
7. **Inconsistencia en logos:** `index.html` y `acerca.html` usan logo PNG; las demás usan texto
8. **acerca.html tiene cierre roto:** La línea final tiene `</html>-->` en vez de solo `</html>`
9. **Imágenes sin optimizar:** Algunas imágenes pesan varios MB (ej: `evento-workshop-selenium.jpg` = 4.8MB)
10. **CSS comentado:** Hay bloques de CSS y traducciones comentados que podrían limpiarse

---

## 13. CDNs Utilizados

| Recurso              | URL                                                                        |
|----------------------|----------------------------------------------------------------------------|
| Bootstrap CSS        | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`  |
| Bootstrap JS         | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Font Awesome         | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`|
| Google Fonts         | `https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700` |
| Swiper CSS           | `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css` (solo staff)|
| Swiper JS            | `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js` (solo staff) |

---

## 14. Orden de Scripts (Obligatorio)

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Swiper solo en staff.html -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="js/theme.js"></script>
<script src="js/i18n.js"></script>
<script src="js/main.js"></script>
```

---

*Este archivo fue generado el 2026-05-26 y debe mantenerse actualizado cuando se realicen cambios estructurales al proyecto.*
