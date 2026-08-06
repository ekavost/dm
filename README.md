# DM Marketing — Nuxt 4 + Nuxt UI

Rediseño del sitio original (Tilda) manteniendo el 100% del contenido, con
Nuxt 4 y `@nuxt/ui` v3.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Publicar en GitHub Pages

El proyecto ya está preparado para GitHub Pages: genera un sitio 100%
estático (`nuxt generate`, preset `github-pages` de Nitro) y trae un
workflow de GitHub Actions (`.github/workflows/deploy.yml`) que hace el
build y el deploy automáticamente en cada `push` a `main`.

1. **Crea el repositorio en GitHub** y sube el proyecto:

   ```bash
   git init
   git add .
   git commit -m "Rediseño DM Marketing — Nuxt 4 + Nuxt UI"
   git branch -M main
   git remote add origin https://github.com/ekavost/dm.git
   git push -u origin main
   ```

2. **Activa Pages con GitHub Actions como origen:**
   en el repo → _Settings_ → _Pages_ → en "Build and deployment" →
   _Source_: **GitHub Actions**. (No hace falta elegir rama ni carpeta,
   el workflow se encarga.)

3. **Haz push a `main`** (o dispáralo manualmente desde la pestaña
   _Actions_ → "Deploy to GitHub Pages" → _Run workflow_). El workflow:
   - instala dependencias,
   - genera el sitio estático con `npm run generate`,
   - ajusta automáticamente la base URL a `/<repo>/` (o `/` si el repo
     se llama `<usuario>.github.io`),
   - publica el contenido de `.output/public`.

4. Cuando el job termine (pestaña _Actions_), tu sitio queda en
   `https://ekavost.github.io/dm/`.

**Dominio propio:** si vas a usar un dominio custom (ej. `dm-marketing.kz`),
añade un archivo `public/CNAME` con ese dominio y en `deploy.yml` fija
`NUXT_APP_BASE_URL: '/'` en vez de la expresión condicional, ya que con
dominio propio el sitio vive en la raíz.

**Generar y previsualizar en local** (sin GitHub):

```bash
npm run generate
npx serve .output/public
```

## Tema claro / oscuro

El tema seguido el ajuste del sistema operativo del usuario
(`prefers-color-scheme`), sin selector manual. Se implementa con
`@nuxtjs/color-mode` (incluido por `@nuxt/ui`) configurado en
`nuxt.config.ts`:

```ts
colorMode: {
  preference: 'system',
  fallback: 'light',
  classSuffix: ''
}
```

Nuxt añade o quita la clase `.dark` en `<html>` automáticamente según el
navegador, y la escucha en vivo si el usuario cambia el ajuste del SO
mientras la página está abierta. Todos los tokens de superficie y texto
(`assets/css/main.css`) están duplicados en `:root` (claro) y `.dark`
(oscuro): `--color-carbon`, `--color-panel`, `--color-panel-2`,
`--color-line`, `--color-ink`. Los componentes usan esas clases
semánticas (`bg-panel`, `text-ink/70`, `border-line`...) en vez de
colores fijos, así que heredan el tema sin lógica adicional. Los acentos
de marca (`signal`, `amber`, `growth`) se ajustan de tono (`-600` en
claro / `-400` en oscuro) donde se usan como texto, para mantener
buen contraste en ambos modos.

Si en el futuro quieres añadir un selector manual, Nuxt UI ya trae el
componente `<UColorModeSwitch />` listo para usar.

## Sistema de diseño

**Concepto:** panel de control de performance marketing — la marca vive en
un fondo grafito-azulado con una "línea de crecimiento" como elemento de
firma (hero, KPIs, divisores entre secciones).

| Token               | Valor                 | Uso                            |
| ------------------- | --------------------- | ------------------------------ |
| `carbon`            | `#0B0E14`             | Fondo base                     |
| `panel` / `panel-2` | `#12161F` / `#171C27` | Tarjetas, superficies          |
| `signal-500`        | `#3E7BFA`             | Primario / CTA / enlaces       |
| `amber-500`         | `#F5A524`             | Acento cálido (CTA secundario) |
| `growth`            | `#34D399`             | Línea de crecimiento, éxito    |

**Tipografía:** `Space Grotesk` (titulares) · `Inter` (cuerpo) ·
`JetBrains Mono` (KPIs, teléfonos, etiquetas eyebrow).

## Estructura

```
components/site/
  AppHeader.vue        Navegación fija
  HeroSection.vue       Hero + mini-dashboard animado (firma visual)
  GrowthDivider.vue     Divisor SVG con línea de crecimiento animada
  ServicesSection.vue   3 categorías de servicio + detalle por canal
  ProcessSection.vue    4 pasos del proceso de trabajo (01–04)
  PricingSection.vue    Enfoque de precios + 3 tarifas
  AuditSection.vue      Auditoría express gratuita (5 puntos)
  ContactSection.vue    Formulario de contacto + datos de la empresa
  AppFooter.vue         Pie de página
  RequestModal.vue      Modal reutilizable (llamada / auditoría)
pages/index.vue          Ensambla todas las secciones
app.config.ts             Paleta de color de Nuxt UI
assets/css/main.css       Tokens de diseño (Tailwind v4 @theme)
```

## Notas

- Los formularios (`ContactSection.vue`, `RequestModal.vue`) están listos
  visualmente; conecta `onSubmit` a tu backend o servicio de formularios
  real (API route de Nuxt, Formspree, etc.).
- Los KPIs del mini-dashboard del hero son ilustrativos ("Пример панели
  аналитики"), no datos reales de cliente — reemplázalos si tienes cifras
  reales que mostrar.
- Iconos vía `@nuxt/icon` (Lucide + Simple Icons), instalados localmente
  para builds sin conexión.
