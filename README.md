# Portafolio — Kervyn Willy Rojas Poma

Portafolio personal construido con React, Vite, Tailwind CSS v4 y GSAP. Se despliega en Vercel.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```

## Estructura

```
src/
├── main.jsx              Punto de entrada
├── App.jsx               Composición de secciones
├── index.css             Tailwind: tokens de color, temas claro/oscuro y utilidades
├── data/                 Contenido del sitio (sin JSX)
│   ├── profile.js        Nombre, rol, contacto, redes y CV
│   ├── about.js          Historia, cifras, experiencia, formación y certificaciones
│   ├── skills.js         Habilidades por categoría e idiomas
│   ├── techIcons.js      Logos SVG y color de cada tecnología
│   ├── projects.js       Proyectos y sus capturas
│   ├── contact.js        Canales de contacto
│   └── navigation.js     Secciones del menú
├── components/
│   ├── layout/           Header y Footer
│   ├── sections/         Hero, About, Skills, Projects y Contact
│   ├── projects/         Tarjeta, galería, marcos de dispositivo y visor
│   ├── contact/          Formulario y tarjeta de llamada a la acción
│   └── ui/               Button, IconButton, SectionHeader, TechIcon, ThemeToggle…
├── hooks/                Scroll, sección activa, tema y animaciones de entrada
├── context/              Proveedor de tema
├── i18n/                 Proveedor de idioma, diccionarios es/en y utilidades de traducción
├── lib/gsap.js           Registro de GSAP y ScrollTrigger
└── assets/
    ├── images/           Foto de perfil
    └── icons/            Íconos decorativos (nav, contact, about, flags)
```

Los datos neutros (íconos, enlaces, tecnologías, imágenes) viven en `src/data/` y todos los textos en
`src/i18n/locales/es.js` y `src/i18n/locales/en.js`.

## Idiomas (ES / EN)

- El botón ES | EN del header cambia el idioma; la elección se guarda en el navegador.
- En la primera visita se usa el idioma del navegador (español o, si no, inglés).
- Para cambiar un texto, edítalo en ambos archivos de `src/i18n/locales/`; tienen exactamente la misma estructura.
- Al agregar un proyecto, añade sus datos en `src/data/projects.js` y su título, descripción y características
  en `projects.items.<slug>` de ambos idiomas.

## Vista previa al compartir

`public/og-image.png` (1200×630) es la imagen que aparece al compartir el enlace en LinkedIn, WhatsApp o X.
Las etiquetas están en `index.html` y usan el dominio `portafolio-sigma-fawn.vercel.app`; si cambias de dominio,
actualiza esas URLs. Los CV descargables están en `public/cv-kervyn-rojas.pdf` (español) y `public/cv-kervyn-rojas-en.pdf` (inglés); el botón elige el del idioma activo.

## Agregar capturas a un proyecto

1. Copia las imágenes en `public/images/proyectos/<slug>/`.
2. Añádelas al arreglo `images` del proyecto en `src/data/projects.js`:

```js
images: [
  { file: 'inicio.jpg', alt: 'Página de inicio' },
  { file: 'catalogo.jpg', alt: 'Catálogo' },
  { file: 'inicio-movil.jpg', alt: 'Inicio en móvil', device: 'phone' },
],
```

- `device: 'screen'` muestra la captura en una ventana de navegador; `device: 'phone'`, en un teléfono.
- Si no se indica, los proyectos `mobile` usan `phone` y el resto `screen`.
- Un proyecto web puede mezclar ambos: el primer teléfono aparece superpuesto a la ventana.
- Todas las capturas se abren a pantalla completa (flechas del teclado o deslizar en móvil).

Tamaños recomendados: web ~1600×1000 y móvil ~1080×2340, en `.jpg` o `.webp` de menos de 400 KB.

## Animaciones (GSAP)

| Dónde             | Qué hace                                                                                                         | Archivo                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Todo el sitio     | Elementos con `data-reveal` aparecen al entrar en pantalla                                                       | `hooks/useScrollReveal.js`                              |
| Inicio            | Entrada escalonada, subtítulo letra por letra (SplitText), parallax y botones magnéticos                         | `sections/Hero.jsx`, `ui/Magnetic.jsx`                  |
| Foto de perfil    | Órbita de integraciones (WhatsApp, Instagram, Messenger, Facebook, TikTok) que gira y se frena al pasar el mouse | `hero/ProfileOrbit.jsx`, `data/integrations.js`         |
| Sobre mí          | Línea de experiencia que se dibuja con el scroll y cifras que cuentan                                            | `about/ExperienceTimeline.jsx`, `about/StatCounter.jsx` |
| Proyectos         | Transición Flip al filtrar y deslizamiento entre capturas                                                        | `sections/Projects.jsx`, `projects/ProjectMedia.jsx`    |
| Header            | Barra de progreso de lectura; se oculta al bajar y reaparece al subir                                            | `layout/ScrollProgress.jsx`, `hooks/useHideOnScroll.js` |
| Menú              | Indicador que se desliza a la sección activa y enlaces en cascada en móvil                                       | `layout/Navigation.jsx`, `layout/MenuButton.jsx`        |
| Habilidades       | Logos que aparecen en cascada desde el centro                                                                    | `sections/Skills.jsx`                                   |
| Visor             | Las capturas se abren con zoom desde su miniatura y vuelven a ella al cerrar                                     | `projects/Lightbox.jsx`                                 |
| Inicio → Sobre mí | Cinta infinita de tecnologías que acelera y cambia de dirección con el scroll                                    | `sections/TechMarquee.jsx`                              |
| Mi historia       | Las palabras pasan de tenues a nítidas mientras haces scroll                                                     | `about/StoryText.jsx`                                   |
| Proyectos (3D)    | Los mockups entran inclinados en perspectiva y se enderezan con el scroll                                        | `projects/ScrollTilt.jsx`                               |

Todas se desactivan si el sistema pide reducir movimiento, y el efecto magnético solo se activa con mouse.

## Analítica, SEO e íconos

- **Vercel Analytics y Speed Insights** (`src/App.jsx`): visitas y velocidad real. Se activan en el panel de Vercel, en
  las pestañas _Analytics_ y _Speed Insights_ del proyecto.
- **SEO**: `public/robots.txt`, `public/sitemap.xml` y datos estructurados de tipo `Person` en `index.html`.
- **Íconos**: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `logo192.png`, `logo512.png` y `logo-maskable.png`
  en `public/`.
- **Fuente**: Inter se sirve desde `public/fonts/` (sin depender de Google Fonts) y se precarga en `index.html`.
