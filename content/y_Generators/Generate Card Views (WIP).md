# Card View Generator Template


```dataviewjs
// ============================================================
// CONFIG — change these to point at any folder
// ============================================================
const CONFIG = {

  // Path to the folder (relative to vault root, no quotes needed inside)
  folder: "c_feats/Maxem",

  // Field used as the card title. "file.name" uses the filename.
  // Could be "title", "name", "file.name", etc.
  titleField: "file.name",

  // Field that contains the tags array
  tagField: "tags",

  // Tags to suppress from the pill display (housekeeping tags)
  suppressTags: ["feat","maxem","type","weave","manifold","condition"],

  // Filter: only render notes where this frontmatter field equals this value
  // Set filterField to null to render everything in the folder
  filterField: "type",
  filterValue: "feat",

  // Sort field and direction ("asc" or "desc")
  sortField: "Level Prerequisite",
  sortDir: "asc",

  // STAT ROWS — shown as a small table on each card
  // label: text shown on the left
  // field: frontmatter field to read
  // hide: if the value is this string, omit the row entirely
  statRows: [
    { label: "Level",   field: "Level Prerequisite",    hide: null },
    { label: "Prereq",  field: "Feat Prerequisite",     hide: '""' },
    { label: "Attr",    field: "Attribute Prerequisite", hide: '""' },
    { label: "Skill",   field: "Skill Prerequisite",    hide: '""' },
    { label: "Anti",    field: "Anti Requisite",        hide: '""' },
  ],

  // DESCRIPTION — the italic line shown at the bottom of each card
  descField: "description",

  // SECTIONS — group cards into labelled sections based on a tag
  // If a note matches no section, it appears under "Other"
  // Set sections to [] to show all cards in one unsectioned grid
  sections: [
    { title: "◈ Core",              matchTags: [],                              fallback: true },
    { title: "⬡ Manifold & Weave",  matchTags: ["manifold","weave","economy","risk","power","tempo"] },
    { title: "⚓ Anchors",           matchTags: ["anchors"] },
    { title: "◈ Counterwork",       matchTags: ["counterwork"] },
    { title: "🔥 Fire",             matchTags: ["fire"] },
    { title: "❄ Ice",              matchTags: ["ice"] },
    { title: "✦ Life",             matchTags: ["life"] },
    { title: "☽ Death",            matchTags: ["death"] },
    { title: "⬡ Earth",            matchTags: ["earth"] },
    { title: "☣ Blight",           matchTags: ["blight"] },
    { title: "≈ Flow",             matchTags: ["flow"] },
    { title: "⚡ Static",          matchTags: ["static"] },
    { title: "◎ Magus",            matchTags: ["magus"] },
  ],

  // COLOR MAP — tag → card color scheme
  // Keys match the matchTags values above plus any other tags you want colored
  // Each entry: bg (card background), border (accent), text (heading), badge (tag pill bg)
  colorMap: {
    fire:         { bg: "#2a0a06", border: "#DC5028", text: "#DC5028", badge: "#5a1a0a" },
    ice:          { bg: "#061820", border: "#50B4DC", text: "#50B4DC", badge: "#0a2a38" },
    life:         { bg: "#062008", border: "#3CBE50", text: "#3CBE50", badge: "#0a3c12" },
    death:        { bg: "#180a22", border: "#8C28B4", text: "#8C28B4", badge: "#2e1240" },
    earth:        { bg: "#1e1006", border: "#A07028", text: "#A07028", badge: "#3c2008" },
    blight:       { bg: "#161e02", border: "#96C81E", text: "#96C81E", badge: "#283406" },
    flow:         { bg: "#041e1c", border: "#28AAA0", text: "#28AAA0", badge: "#083830" },
    static:       { bg: "#1e1a04", border: "#D2BE1E", text: "#D2BE1E", badge: "#3a3008" },
    magus:        { bg: "#201a04", border: "#D2A528", text: "#D2A528", badge: "#402e08" },
    counterwork:  { bg: "#200408", border: "#B41E28", text: "#B41E28", badge: "#3c080e" },
    economy:      { bg: "#061408", border: "#3CA05A", text: "#3CA05A", badge: "#0a2812" },
    risk:         { bg: "#1e1004", border: "#D2821E", text: "#D2821E", badge: "#3c2008" },
    power:        { bg: "#1e0c04", border: "#C85A1E", text: "#C85A1E", badge: "#3a1208" },
    tempo:        { bg: "#040e1e", border: "#3C6EC8", text: "#3C6EC8", badge: "#081c3c" },
    anchors:      { bg: "#0a0e14", border: "#6478A0", text: "#6478A0", badge: "#141e30" },
    manifold:     { bg: "#100a1e", border: "#6E46BE", text: "#6E46BE", badge: "#201440" },
    weave:        { bg: "#08081e", border: "#5050C8", text: "#5050C8", badge: "#10103c" },
    default:      { bg: "#0e0e10", border: "#888890", text: "#888890", badge: "#1e1e22" },
  },

  // GRID — minimum card width in pixels
  cardMinWidth: 340,

};
// ============================================================
// END CONFIG — nothing below here needs changing
// ============================================================

function getVal(f, field) {
  if (field === "file.name") return f.file.name;
  const v = f[field];
  if (v === null || v === undefined) return null;
  const s = v.toString().replace(/^["']|["']$/g,"").trim();
  return s === "" || s === '""' ? null : s;
}

function getTags(f) {
  return (f[CONFIG.tagField] || [])
    .map(t => t.toString().replace(/^#/,"").toLowerCase());
}

function getColors(f) {
  const tags = getTags(f);
  for (const [key, colors] of Object.entries(CONFIG.colorMap)) {
    if (key !== "default" && tags.includes(key)) return colors;
  }
  return CONFIG.colorMap.default;
}

function renderCard(f) {
  const c     = getColors(f);
  const title = getVal(f, CONFIG.titleField) ?? f.file.name;
  const tags  = getTags(f).filter(t => !CONFIG.suppressTags.includes(t));
  const desc  = getVal(f, CONFIG.descField) ?? "";

  const tagPills = tags
    .map(t => `<span style="
      display:inline-block;
      font-size:0.70em;font-weight:600;
      padding:2px 7px;border-radius:3px;
      background:${c.badge};color:${c.text};
      border:1px solid ${c.border}88;
      letter-spacing:0.04em;margin:0 3px 3px 0;
    ">#${t}</span>`).join("");

  const statsRows = CONFIG.statRows
    .map(row => {
      const val = getVal(f, row.field);
      if (!val || val === row.hide) return "";
      return `<tr>
        <td style="color:#888;font-size:0.78em;padding:2px 10px 2px 0;white-space:nowrap;font-weight:600;">${row.label}</td>
        <td style="color:#ccc;font-size:0.78em;padding:2px 0;">${val}</td>
      </tr>`;
    }).filter(Boolean).join("");

  const statsTable = statsRows
    ? `<table style="border-collapse:collapse;margin-bottom:8px;">${statsRows}</table>`
    : "";

  return `<div style="
    background:${c.bg};
    border:1px solid ${c.border}55;
    border-left:4px solid ${c.border};
    border-radius:6px;
    overflow:hidden;
    break-inside:avoid;
  ">
    <div style="
      background:${c.badge};
      padding:9px 14px 7px;
      display:flex;justify-content:space-between;align-items:baseline;gap:10px;
    ">
      <span style="color:${c.text};font-size:1.0em;font-weight:700;">[[${title}]]</span>
    </div>
    <div style="padding:10px 14px 12px;">
      ${tagPills ? `<div style="margin-bottom:8px;">${tagPills}</div>` : ""}
      ${statsTable}
      ${desc ? `<div style="
        color:#bbb;font-size:0.85em;font-style:italic;
        border-top:1px solid ${c.border}22;padding-top:8px;margin-top:4px;
        line-height:1.5;
      ">${desc}</div>` : ""}
    </div>
  </div>`;
}

function renderSection(title, notes, color) {
  if (!notes.length) return "";
  const cards = notes.map(renderCard).join("");
  return `<div style="margin-bottom:36px;">
    <h2 style="
      color:${color};font-size:1.1em;font-weight:700;
      text-transform:uppercase;letter-spacing:0.08em;
      border-bottom:1px solid ${color}44;padding-bottom:4px;margin-bottom:14px;
    ">${title}</h2>
    <div style="
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(${CONFIG.cardMinWidth}px,1fr));
      gap:12px;align-items:start;
    ">${cards}</div>
  </div>`;
}

// ── LOAD ─────────────────────────────────────────────────────

let pages = dv.pages(`"${CONFIG.folder}"`);
if (CONFIG.filterField) {
  pages = pages.where(f => f[CONFIG.filterField] === CONFIG.filterValue);
}
const allNotes = pages
  .sort(f => f[CONFIG.sortField] ?? 0, CONFIG.sortDir)
  .array();

if (!allNotes.length) {
  dv.paragraph(`⚠️ Nothing found in \`${CONFIG.folder}\`. Check the path and filterField.`);
  return;
}

// ── BUILD HTML ────────────────────────────────────────────────

let html = "";

if (!CONFIG.sections || !CONFIG.sections.length) {
  // No sections — render everything in one grid
  const cards = allNotes.map(renderCard).join("");
  html = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${CONFIG.cardMinWidth}px,1fr));gap:12px;align-items:start;">${cards}</div>`;
} else {
  const assigned = new Set();

  for (const sec of CONFIG.sections) {
    if (sec.fallback) continue;
    const tags = new Set(sec.matchTags || []);
    const notes = allNotes.filter(f => {
      const fTags = getTags(f);
      return fTags.some(t => tags.has(t));
    });
    notes.forEach(n => assigned.add(n.file.path));
    const color = (() => {
      const tag = (sec.matchTags || [])[0];
      return tag && CONFIG.colorMap[tag]
        ? CONFIG.colorMap[tag].text
        : CONFIG.colorMap.default.text;
    })();
    html += renderSection(sec.title, notes, color);
  }

  // Fallback section — everything not yet assigned
  const fallbackSec = CONFIG.sections.find(s => s.fallback);
  if (fallbackSec) {
    const fallbackNotes = allNotes.filter(n => !assigned.has(n.file.path));
    html += renderSection(
      fallbackSec.title,
      fallbackNotes,
      CONFIG.colorMap.default.text
    );
  }
}

dv.el("div", html);
```