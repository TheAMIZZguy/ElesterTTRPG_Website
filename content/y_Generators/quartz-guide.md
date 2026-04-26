# Quartz Site — Tweaking Guide
*For the Elester TTRPG site. Everything you need to customise the look, structure, and behaviour of the site without touching internals.*

---

## File Map — What Does What

```
quartz/
├── quartz.config.ts         ← Main config: theme, colors, fonts, plugins, layout
├── quartz/styles/
│   ├── custom.scss          ← Your CSS overrides (edit freely)
│   └── base.scss            ← Quartz base styles (don't edit)
├── quartz/components/       ← React components for each UI element (advanced edits)
└── quartz/plugins/          ← Built-in data processing plugins (advanced)

content/
├── y_Generators/            ← Your build scripts (invisible on site)
└── (all your .md files)
```

---

## `quartz.config.ts`

The single most important file. Broken into sections:

### `configuration` block

```ts
configuration: {
  pageTitle: "Elester TTRPG",         // Site name in left sidebar
  enableSPA: true,                      // Single-page app navigation (fast clicks)
  enablePopovers: true,                 // Hover previews on links
  analytics: null,                      // Set to { provider: "plausible" } etc. if you want analytics
  locale: "en-GB",                      // Affects date formatting
  baseUrl: "yoursite.github.io",        // Required for correct absolute links
  ignorePatterns: ["private", "y_Generators", "**/.obsidian"],  // Folders hidden from site
  defaultDateType: "modified",          // "created" | "modified" | "published"
  theme: { ... }                        // See below
}
```

**`ignorePatterns`** — add any folder path here to hide it completely from the site and search. Glob patterns work (`"4. Items/WIP/**"`).

---

### `theme` block (inside `configuration`)

```ts
theme: {
  fontOrigin: "googleFonts",   // "googleFonts" | "local"
  cdnCaching: true,

  typography: {
    header: "Inter",           // Font for headings (h1–h6)
    body: "Source Sans Pro",   // Font for body text
    code: "JetBrains Mono",    // Font for code blocks
  },

  colors: {
    lightMode: {
      light: "#fafafa",        // Page background
      lightgray: "#e5e5e5",    // Borders, dividers, subtle backgrounds
      gray: "#b8b8b8",         // Muted text (dates, metadata)
      darkgray: "#2d2d2d",     // Body text
      dark: "#1a1a1a",         // Headings, strong text
      secondary: "#b91c1c",    // Links, active items, accent (your red)
      tertiary: "#dc2626",     // Hover state on links
      highlight: "rgba(185,28,28,0.08)",  // Text selection / search highlight bg
      textHighlight: "#ffe066",           // ==highlighted== text colour
    },
    darkMode: {
      light: "#0e0e10",        // Page background
      lightgray: "#242428",    // Borders, sidebar items bg
      gray: "#555558",         // Muted text
      darkgray: "#c8c8cc",     // Body text
      dark: "#e8e8ec",         // Headings
      secondary: "#c0392b",    // Links, accent
      tertiary: "#e05040",     // Hover state
      highlight: "rgba(192,57,43,0.10)",
      textHighlight: "#7a3a00",
    },
  },
}
```

**Google Fonts**: just change the font name string to any Google Fonts name. Quartz fetches it automatically.

**Local fonts**: set `fontOrigin: "local"` and place font files in `quartz/static/fonts/`, then reference them in `custom.scss` with `@font-face`.

---

### `plugins` block

Two sub-arrays: `transformers` (process markdown content) and `emitters` (generate output files). You rarely need to touch transformers.

#### Useful emitter options

```ts
// Folder index pages (auto-generated if no index.md exists)
Plugin.FolderPage(),

// Tag listing pages at /tags/fire etc.
Plugin.TagPage(),

// Sitemap for SEO
Plugin.SitemapGenerator(),
```

#### Useful transformer options

```ts
// Wikilink resolution — how [[links]] are handled
Plugin.CrawlLinks({
  markBroken: false,       // false = silently skip broken links; true = shows red
  prettyLinks: true,       // [[Some Page]] shows as "Some Page" not the full path
}),

// Obsidian-flavoured callouts (> [!warning] etc.)
Plugin.ObsidianFlavoredMarkdown({
  enableInHtmlEmbed: false,
  parseTags: true,
  parseArrows: true,
  parseBlockReferences: true,
}),

// Syntax highlighting in code blocks
Plugin.SyntaxHighlighting(),

// LaTeX math rendering
Plugin.Latex({ renderEngine: "katex" }),
```

---

### `layout` block

Controls *what appears where* on each page. Three columns: `left`, `right`, and implicitly the center content.

```ts
layout: {
  beforeBody: [
    Component.Breadcrumbs(),       // "Home > 2. Rules > Combat" path at top
    Component.ArticleTitle(),      // The big h1 page title
    Component.ContentMeta(),       // Date + read time under the title
    Component.TagList(),           // Tag pills under metadata
  ],
  left: [
    Component.PageTitle(),         // "Elester TTRPG" site name
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.ReaderMode(),
    Component.DesktopOnly(Component.Explorer()),  // Folder tree
  ],
  right: [
    Component.TableOfContents(),   // Right sidebar TOC  ← remove Graph() and put only this
    Component.Backlinks(),         // "Pages that link here" at bottom of right sidebar
  ],
  afterBody: [],
}
```

**To remove something**: just delete the line.
**To reorder**: move lines up/down.
**To add to mobile only**: wrap in `Component.MobileOnly(...)`.
**To add to desktop only**: wrap in `Component.DesktopOnly(...)`.

Available components: `PageTitle`, `Search`, `Darkmode`, `ReaderMode`, `Explorer`, `TableOfContents`, `Backlinks`, `Graph`, `Breadcrumbs`, `ArticleTitle`, `ContentMeta`, `TagList`, `Spacer`, `Footer`, `MobileOnly`, `DesktopOnly`.

---

## `quartz/styles/custom.scss`

Your primary CSS file. Anything here overrides the defaults. Use `!important` when Quartz's own styles are too specific and fighting yours.

Quartz exposes its theme colours as CSS variables — use these so dark/light mode both work:

```scss
var(--light)       // page background
var(--lightgray)   // borders, subtle bg
var(--gray)        // muted/secondary text
var(--darkgray)    // body text
var(--dark)        // headings
var(--secondary)   // accent colour (your red)
var(--tertiary)    // hover colour
var(--highlight)   // selection background
```

### Common tweaks

**Shrink left sidebar top gap:**
```scss
.left.sidebar { padding-top: 4px !important; gap: 4px !important; }
.sidebar-header { padding: 0 !important; margin: 0 !important; }
.page-title { font-size: 0.85em !important; margin: 0 0 4px 0 !important; }
```

**Make explorer text smaller:**
```scss
.explorer {
  font-size: 0.72em !important;
  li, a, span, .folder-title {
    line-height: 1.3 !important;
    padding: 1px 0 !important;
  }
}
```

**Heading colours:**
```scss
h1 { color: var(--secondary); }
h2 { color: var(--secondary); opacity: 0.9; }
h3, h4, h5, h6 { color: var(--dark); }
```

**Sidebar widths:**
```scss
.sidebar.left  { width: 220px !important; }
.sidebar.right { width: 200px !important; }
```

**TOC font size:**
```scss
.toc { font-size: 0.78em; }
.toc li { margin: 1px 0; }
.toc ul ul { padding-left: 10px; }
```

**Callout styling** (the `> [!warning]` blocks):
```scss
.callout[data-callout="warning"] { --color: #d4a017; --border: #d4a01766; }
.callout[data-callout="danger"]  { --color: #c0392b; --border: #c0392b66; }
.callout[data-callout="info"]    { --color: #3498db; --border: #3498db66; }
```

**Table styling:**
```scss
table { width: 100%; border-collapse: collapse; font-size: 0.88em; }
th { background: var(--lightgray); color: var(--dark); }
td, th { border: 1px solid var(--lightgray); padding: 5px 10px; }
tr:nth-child(even) { background: rgba(255,255,255,0.02); }
```

**Hide specific elements entirely:**
```scss
.graph-outer { display: none; }   // hides graph view
.backlinks   { display: none; }   // hides backlinks
.content-meta { display: none; }  // hides date / read time
.tag-list    { display: none; }   // hides tag pills
```

**Center content max width:**
```scss
.center { max-width: 860px; }
```

---

## Folder Notes (making folder clicks load a page)

Quartz loads `index.md` when a folder is clicked. Two approaches:

**Option A** — Rename manually: inside `Combat/`, name your folder note `index.md`.

**Option B** — Auto-rename in the converter: in `obsidian-to-quartz.cjs`, in `processMarkdown`, change the outPath logic so any file named the same as its parent folder gets renamed to `index.md` on output. See converter README for the exact lines.

---

## `ignorePatterns` — Hiding Content

In `quartz.config.ts` → `configuration.ignorePatterns`. Takes glob strings. Examples:

```ts
ignorePatterns: [
  "private",              // hides entire /private folder
  "y_Generators",         // hides your build scripts
  "**/.obsidian",         // hides obsidian config
  "4. Items/WIP",         // hides a specific subfolder
  "**/*.canvas",          // hides all canvas files
  "Templates",            // hides templates folder
],
```

---

## Adding Custom Fonts (local)

1. Place font files in `quartz/static/fonts/`
2. In `custom.scss`:
```scss
@font-face {
  font-family: "MyFont";
  src: url("/static/fonts/MyFont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
```
3. In `quartz.config.ts` set `fontOrigin: "local"` and the font name in `typography`.

---

## Rebuilding After Changes

```bash
# From your quartz root (NOT the content folder)
npx quartz build

# Build + local preview
npx quartz build --serve

# If you changed quartz.config.ts or any .scss, always do a full build.
# Content-only changes can use --fastRebuild but full build is safer.
```

The converter and the quartz build are separate steps:
```bash
# Full pipeline
cd content && node y_Generators/obsidian-to-quartz.cjs
node y_Generators/generate-feat-page.cjs
cd .. && npx quartz build --serve
```

---

## Things to Leave Alone

- `quartz/styles/base.scss` — Quartz internals; overrides go in `custom.scss` instead
- `quartz/components/*.tsx` — Unless you want to rewrite a component in React, don't touch
- `quartz/plugins/` — Same; modify behaviour via config options not the source
- `.quartz-cache/` — Auto-generated, never edit
