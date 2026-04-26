#!/usr/bin/env node
/**
 * generate-feat-page.cjs
 * Place alongside obsidian-to-quartz.cjs in y_Generators/
 *
 * Reads all feat files from c_Feats/Maxem/ and generates a self-contained
 * interactive HTML page at 3. Character Creation/5. Class Feats/2. Aether Feats/Maxem Feat Blocks.html
 *
 * Usage (from your Quartz content root):
 *   node y_Generators/generate-feat-page.cjs
 *
 * Or with explicit paths:
 *   node y_Generators/generate-feat-page.cjs <content-root> <output-path>
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────

const CONTENT_ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const FEAT_FOLDER  = path.join(CONTENT_ROOT, 'c_Feats', 'Maxem');
const OUTPUT_FILE  = path.resolve(process.argv[3] || path.join(CONTENT_ROOT, '3. Character Creation', '5. Class Feats', '2. Aether Feats', 'Maxem Feat Blocks.html'));

// ─── Frontmatter Parser ───────────────────────────────────────────────────────

let grayMatter = null;
try { grayMatter = require('gray-matter'); } catch { /* built-in below */ }

function parseYamlValue(raw) {
  raw = raw.trim();
  if (raw === 'true')  return true;
  if (raw === 'false') return false;
  if (raw === 'null' || raw === '~') return null;
  if (!isNaN(raw) && raw !== '') return Number(raw);
  if (raw.startsWith('[') && raw.endsWith(']')) {
    const inner = raw.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map(v => parseYamlValue(v.trim().replace(/^['"]|['"]$/g, '')));
  }
  if ((raw.startsWith('"') && raw.endsWith('"')) ||
      (raw.startsWith("'") && raw.endsWith("'"))) return raw.slice(1, -1);
  return raw;
}

function parseFrontmatter(fileContent) {
  if (grayMatter) {
    const r = grayMatter(fileContent);
    return { data: r.data, content: r.content };
  }
  const m = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: fileContent };
  const data = {}, lines = m[1].split('\n');
  let currentKey = null, inBlock = false;
  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    if (inBlock && /^\s+-\s+(.*)$/.test(line)) {
      data[currentKey].push(parseYamlValue(line.match(/^\s+-\s+(.*)$/)[1].replace(/^['"]|['"]$/g, '')));
      continue;
    }
    const km = line.match(/^([\w\s-]+):\s*(.*)$/);
    if (km) {
      currentKey = km[1].trim();
      const val = km[2].trim();
      if (val === '') { data[currentKey] = []; inBlock = true; }
      else { data[currentKey] = parseYamlValue(val); inBlock = false; }
      continue;
    }
    inBlock = false;
  }
  return { data, content: m[2] };
}

// ─── Feat Reader ──────────────────────────────────────────────────────────────

function readFeats(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`\nFeat folder not found: ${dir}\n`);
    process.exit(1);
  }

  const feats = [];
  const allFiles = [];
  function walkDir(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walkDir(full);
      else if (entry.isFile() && entry.name.endsWith('.md')) allFiles.push(full);
    }
  }
  walkDir(dir);
  for (const filepath of allFiles) {
    const entry = { name: path.basename(filepath), isFile: () => true };
    if (!entry.name.endsWith('.md')) continue;
    const raw = fs.readFileSync(filepath, 'utf8');
    const { data, content } = parseFrontmatter(raw);
    if (data.type !== 'feat') continue;

    // Normalise tags
    if (data.tags && !Array.isArray(data.tags)) data.tags = [data.tags];
    data.tags = (data.tags || []).map(t => String(t).replace(/^#/, '').toLowerCase());

    feats.push({
      name:     path.basename(entry.name, '.md'),
      filepath: path.relative(CONTENT_ROOT, filepath).replace(/\\/g, '/'),
      data,
      rawBody:  content,
    });
  }
  return feats;
}

// ─── Body Processing (ported from DataviewJS) ─────────────────────────────────

function stripLeadingBoilerplate(md) {
  // Remove frontmatter remnants, the title heading, the stats table block,
  // and the first HR — mirrors trimTopLines(10) + removeFirstHR() in the original
  const lines = md.split('\n');
  let kept = lines.slice(10).join('\n');
  kept = kept.replace(/^---\n?/, '');
  return kept;
}

function cleanBody(raw) {
  return raw
    .replace(/`=[^`]+`/g, '')
    .replace(/^\s*=this\..+$/gm, '')
    .replace(/^#+\s*(`[^`]*`\s*)+$/gm, '')
    .replace(/^\|.*\|$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function mdToHtml(md) {
  const cleaned = cleanBody(stripLeadingBoilerplate(md));
  return cleaned
    .replace(/^#### (.+)$/gm, '<h4 style="color:#ccc;margin:10px 0 3px;font-size:0.83em;text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">$1</h4>')
    .replace(/^### (.+)$/gm,  '<h3 style="color:#ccc;margin:10px 0 4px;font-size:0.90em;font-weight:700;">$1</h3>')
    .replace(/^## (.+)$/gm,   '<h2 style="color:#ccc;margin:12px 0 5px;font-size:0.96em;font-weight:700;">$1</h2>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e8e8e8;">$1</strong>')
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    .replace(/\[\[(.+?)\]\]/g, '<a class="internal-link" href="/$1" style="color:#7bbccc;text-decoration:none;">$1</a>')
    .replace(/^[-*] (.+)$/gm, '<li style="margin:2px 0;">$1</li>')
    .replace(/(<li[\s\S]*?<\/li>)+/g, m => `<ul style="margin:4px 0 4px 16px;padding:0;">${m}</ul>`)
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #333;margin:8px 0;">')
    .replace(/`([^`]+)`/g, '<code style="background:#1a1a2e;padding:1px 4px;border-radius:3px;font-size:0.84em;color:#b8b8e8;">$1</code>')
    .replace(/\n{2,}/g, '</p><p style="margin:5px 0;">')
    .replace(/\n/g, ' ');
}

// ─── Card Builder (ported from DataviewJS) ────────────────────────────────────

const COLOR_MAP = {
  'maxem-init': { bg: '#2a2208', border: '#DCC878', text: '#DCC878', badge: '#5a4a10' },
  fire:         { bg: '#2a0a06', border: '#DC5028', text: '#DC5028', badge: '#5a1a0a' },
  ice:          { bg: '#061820', border: '#50B4DC', text: '#50B4DC', badge: '#0a2a38' },
  life:         { bg: '#062008', border: '#3CBE50', text: '#3CBE50', badge: '#0a3c12' },
  death:        { bg: '#180a22', border: '#8C28B4', text: '#8C28B4', badge: '#2e1240' },
  earth:        { bg: '#1e1006', border: '#A07028', text: '#A07028', badge: '#3c2008' },
  blight:       { bg: '#161e02', border: '#96C81E', text: '#96C81E', badge: '#283406' },
  flow:         { bg: '#041e1c', border: '#28AAA0', text: '#28AAA0', badge: '#083830' },
  static:       { bg: '#1e1a04', border: '#D2BE1E', text: '#D2BE1E', badge: '#3a3008' },
  magus:        { bg: '#201a04', border: '#D2A528', text: '#D2A528', badge: '#402e08' },
  counter:      { bg: '#200408', border: '#B41E28', text: '#B41E28', badge: '#3c080e' },
  economy:      { bg: '#061408', border: '#3CA05A', text: '#3CA05A', badge: '#0a2812' },
  risk:         { bg: '#1e1004', border: '#D2821E', text: '#D2821E', badge: '#3c2008' },
  power:        { bg: '#1e0c04', border: '#C85A1E', text: '#C85A1E', badge: '#3a1208' },
  tempo:        { bg: '#040e1e', border: '#3C6EC8', text: '#3C6EC8', badge: '#081c3c' },
  anchor:       { bg: '#0a0e14', border: '#6478A0', text: '#6478A0', badge: '#141e30' },
  manifold:     { bg: '#100a1e', border: '#6E46BE', text: '#6E46BE', badge: '#201440' },
  weave:        { bg: '#08081e', border: '#5050C8', text: '#5050C8', badge: '#10103c' },
  utility:      { bg: '#041a18', border: '#3C9690', text: '#3C9690', badge: '#082e2c' },
  default:      { bg: '#0e0e10', border: '#888890', text: '#888890', badge: '#1e1e22' },
};

function getColors(feat) {
  if (feat.name === 'Maxem Initiate') return COLOR_MAP['maxem-init'];
  const tags = feat.data.tags || [];
  for (const el of ['fire','ice','life','death','earth','blight','flow','static']) {
    if (tags.includes(el)) return COLOR_MAP[el];
  }
  if (tags.includes('magus'))       return COLOR_MAP.magus;
  if (tags.includes('counterwork')) return COLOR_MAP.counter;
  if (tags.includes('economy'))     return COLOR_MAP.economy;
  if (tags.includes('risk'))        return COLOR_MAP.risk;
  if (tags.includes('power'))       return COLOR_MAP.power;
  if (tags.includes('tempo'))       return COLOR_MAP.tempo;
  if (tags.includes('anchors'))     return COLOR_MAP.anchor;
  if (tags.includes('manifold'))    return COLOR_MAP.manifold;
  if (tags.includes('weave'))       return COLOR_MAP.weave;
  if (tags.includes('utility'))     return COLOR_MAP.utility;
  return COLOR_MAP.default;
}

function getTags(feat) {
  const skip = new Set(['feat', 'maxem', 'type']);
  return (feat.data.tags || []).filter(t => !skip.has(t));
}

function fmtVal(v) {
  if (!v || v === '""' || v === '') return null;
  return String(v).replace(/^["']|["']$/g, '').trim() || null;
}

function inGroup(feat, ...keys) {
  const tags = feat.data.tags || [];
  return keys.some(k => tags.includes(k));
}

function isElemental(feat) {
  return inGroup(feat, 'fire','ice','life','death','earth','blight','flow','static');
}

function buildCardHtml(feat, body, c) {
  const level  = fmtVal(feat.data['Level Prerequisite']);
  const desc   = fmtVal(feat.data['description']);
  const tags   = getTags(feat);
  const featp  = fmtVal(feat.data['Feat Prerequisite']);
  const attr   = fmtVal(feat.data['Attribute Prerequisite']);
  const skill  = fmtVal(feat.data['Skill Prerequisite']);
  const anti   = fmtVal(feat.data['Anti Requisite']);
  const isRpt  = tags.includes('repeatable');
  const name   = feat.name;
  const href   = '/' + feat.filepath.replace(/\.md$/, '');

  const tagPills = tags
    .map(t => `<span style="display:inline-block;font-size:0.69em;font-weight:600;padding:2px 6px;border-radius:3px;background:${c.badge};color:${c.text};border:1px solid ${c.border}88;letter-spacing:0.04em;margin:0 3px 3px 0;">#${t}</span>`)
    .join('');

  const prereqParts = [
    featp ? `<span style="color:#aaa;">${featp}</span>` : '',
    attr  ? `<span style="color:#aaa;">${attr}</span>`  : '',
    skill ? `<span style="color:#aaa;">${skill}</span>` : '',
  ].filter(Boolean).join('<span style="opacity:0.35;"> · </span>');

  const antiRow = anti
    ? `<div style="font-size:0.78em;color:#e08040;margin-top:4px;">⚠ Anti-prereq: ${anti}</div>`
    : '';

  const rpt = isRpt ? ` <span style="color:${c.text};font-size:0.78em;font-weight:700;">(R)</span>` : '';

  return `
<div class="el-feat-card open" data-tags="${(feat.data.tags||[]).join(',')}" style="background:${c.bg};border:1px solid ${c.border}55;border-left:4px solid ${c.border};border-radius:6px;overflow:hidden;display:flex;flex-direction:column;">

  <div class="el-card-header" style="background:${c.badge};padding:9px 14px 8px;display:flex;justify-content:space-between;align-items:baseline;cursor:pointer;user-select:none;flex-shrink:0;">
    <span style="color:${c.text};font-weight:700;font-size:0.97em;">
      <a class="internal-link" href="${href}" style="color:inherit;text-decoration:none;">${name}</a>
    </span>
    <span style="color:${c.text};opacity:0.75;font-size:0.82em;white-space:nowrap;">Level ${level ?? '—'}${rpt}</span>
  </div>

  <div class="el-card-body" style="overflow:hidden;max-height:5000px;transition:max-height 0.28s ease;padding:0 14px;flex:1;">
    <div style="padding:10px 0 12px;">

      ${tagPills ? `<div style="margin-bottom:8px;">${tagPills}</div>` : ''}

      <div style="font-size:0.82em;margin-bottom:6px;line-height:1.7;text-align:center;">
        <span style="color:#aaa;">Prerequisites:<br></span>
      </div>

      ${antiRow}

      <div style="font-size:0.82em;margin-bottom:6px;line-height:1.7;">
        ${prereqParts || '<span style="opacity:0.35;">No prerequisites</span>'}
      </div>

      <hr style="border:none;border-top:1px solid #333;margin:8px 0;">

      <div style="font-size:0.85em;margin:6px;line-height:1.6;">
        ${desc ? `<div><i>${desc}</i></div>` : ''}
      </div>

      <hr style="border:none;border-top:1px solid ${c.border}22;margin:8px 0 10px;">

      <div class="el-body-content" style="font-size:0.85em;color:#ccc;line-height:1.6;">
        <p style="margin:0;">${body}</p>
      </div>

    </div>
  </div>

</div>`;
}

// ─── Section Definitions ──────────────────────────────────────────────────────

const SECTIONS = [
  { title: '◈ Core',        colorKey: 'default',
    filter: f => f.name === 'Maxem Initiate' || (
      !inGroup(f,'fire','ice','life','death','earth','blight','flow','static','magus',
               'counterwork','economy','risk','power','tempo','weave','anchors','manifold')
    )
  },
  { title: '⬡ Manifold',    colorKey: 'manifold', filter: f => inGroup(f,'manifold') && !isElemental(f) },
  { title: '⬡ Weave',       colorKey: 'weave',    filter: f => inGroup(f,'weave')    && !isElemental(f) },
  { title: '⚓ Anchors',    colorKey: 'anchor',   filter: f => inGroup(f,'anchors')  && !isElemental(f) },
  { title: '◈ Counterwork', colorKey: 'counter',  filter: f => inGroup(f,'counterwork') && !isElemental(f) },
  { title: '🔥 Fire',        colorKey: 'fire',     filter: f => inGroup(f,'fire') },
  { title: '❄ Ice',         colorKey: 'ice',      filter: f => inGroup(f,'ice') },
  { title: '✦ Life',        colorKey: 'life',     filter: f => inGroup(f,'life') },
  { title: '☽ Death',       colorKey: 'death',    filter: f => inGroup(f,'death') },
  { title: '⬡ Earth',       colorKey: 'earth',    filter: f => inGroup(f,'earth') },
  { title: '☣ Blight',      colorKey: 'blight',   filter: f => inGroup(f,'blight') },
  { title: '≈ Flow',        colorKey: 'flow',     filter: f => inGroup(f,'flow') },
  { title: '⚡ Static',     colorKey: 'static',   filter: f => inGroup(f,'static') },
  { title: '◎ Magus',       colorKey: 'magus',    filter: f => inGroup(f,'magus') },
];

// ─── HTML Generation ──────────────────────────────────────────────────────────

function buildSectionsHtml(feats) {
  let html = '';
  for (const sec of SECTIONS) {
    const secFeats = feats
      .filter(sec.filter)
      .sort((a, b) => ((a.data['Level Prerequisite'] ?? 0) - (b.data['Level Prerequisite'] ?? 0)));
    if (!secFeats.length) continue;

    const c = COLOR_MAP[sec.colorKey] ?? COLOR_MAP.default;
    const cards = secFeats.map(f => buildCardHtml(f, mdToHtml(f.rawBody), getColors(f))).join('');

    html += `
<div class="el-section" style="margin-bottom:36px;">
  <h2 style="color:${c.text};font-size:1.1em;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid ${c.border}44;padding-bottom:4px;margin-bottom:12px;">${sec.title}</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:12px;align-items:stretch;">${cards}</div>
</div>`;
  }
  return html;
}

function buildPage(feats, sectionsHtml) {
  const ELEMENT_FILTERS = ['fire','ice','life','death','earth','blight','flow','static'];
  const filterBtnHtml = ELEMENT_FILTERS.map(el => {
    const c = COLOR_MAP[el];
    return `<button class="el-filter-btn" data-el="${el}" style="padding:3px 9px;border-radius:4px;cursor:pointer;font-size:0.78em;font-weight:600;border:1px solid ${c.border};background:${c.badge};color:${c.text};" data-border="${c.border}">${el}</button>`;
  }).join('\n    ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maxem Feats</title>
  <style>
    body { background:#0a0a0c; color:#ccc; font-family:system-ui,sans-serif; margin:0; padding:24px; }
    .el-feat-card .el-card-body      { max-height:5000px; transition:max-height 0.28s ease; }
    .el-feat-card.closed .el-card-body { max-height:0 !important; }
    .el-feat-card .el-card-header:hover { filter:brightness(1.15); }
    .el-body-content strong { color:#e8e8e8; }
    .el-body-content em { color:#d0d0d0; }
    .el-body-content a.internal-link { color:#7bbccc; text-decoration:none; }
    .el-body-content code { background:#1a1a2e; padding:1px 5px; border-radius:3px; font-size:0.85em; color:#b8b8e8; }
    .el-body-content ul { padding-left:18px; }
    .el-body-content li { margin:2px 0; }
    .el-controls { display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:14px; }
    #el-search { flex:1; min-width:180px; padding:5px 10px; border-radius:4px; border:1px solid #444; background:#111; color:#eee; font-size:0.85em; }
    .el-btn { padding:4px 10px; border-radius:4px; border:1px solid #555; background:#1a1a1a; color:#ccc; cursor:pointer; font-size:0.82em; }
  </style>
</head>
<body>

<div class="el-controls">
  <input id="el-search" placeholder="Search feats…" type="text">
  <button class="el-btn" id="el-expand">Expand All</button>
  <button class="el-btn" id="el-collapse">Collapse All</button>
  ${filterBtnHtml}
</div>

<div id="el-container">
${sectionsHtml}
</div>

<script>
  let activeFilter = null;

  const container  = document.getElementById('el-container');
  const search     = document.getElementById('el-search');
  const allCards   = () => container.querySelectorAll('.el-feat-card');
  const allSecs    = () => container.querySelectorAll('.el-section');

  function updateVisibility() {
    const val = search.value.toLowerCase();
    allCards().forEach(card => {
      const tagMatch  = !activeFilter || (card.dataset.tags || '').includes(activeFilter);
      const textMatch = !val || card.innerText.toLowerCase().includes(val);
      card.style.display = (tagMatch && textMatch) ? '' : 'none';
    });
    allSecs().forEach(sec => {
      const any = [...sec.querySelectorAll('.el-feat-card')].some(c => c.style.display !== 'none');
      sec.style.display = any ? '' : 'none';
    });
  }

  document.querySelectorAll('.el-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = btn.dataset.el;
      const border = btn.dataset.border;
      if (activeFilter === el) {
        activeFilter = null;
        document.querySelectorAll('.el-filter-btn').forEach(b => b.style.outline = 'none');
      } else {
        activeFilter = el;
        document.querySelectorAll('.el-filter-btn').forEach(b => b.style.outline = 'none');
        btn.style.outline = '2px solid ' + border;
      }
      updateVisibility();
    });
  });

  container.querySelectorAll('.el-card-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      header.closest('.el-feat-card').classList.toggle('closed');
    });
  });

  document.getElementById('el-expand').onclick   = () => allCards().forEach(c => c.classList.remove('closed'));
  document.getElementById('el-collapse').onclick  = () => allCards().forEach(c => c.classList.add('closed'));
  search.addEventListener('input', updateVisibility);
</script>

</body>
</html>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║     Maxem Feat Page Generator            ║');
  console.log('╚══════════════════════════════════════════╝\n');
  console.log(`Feat folder: ${FEAT_FOLDER}`);
  console.log(`Output:      ${OUTPUT_FILE}\n`);

  const feats = readFeats(FEAT_FOLDER);
  console.log(`Found ${feats.length} feats\n`);

  const sectionsHtml = buildSectionsHtml(feats);
  const page = buildPage(feats, sectionsHtml);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, page, 'utf8');
  console.log(`✓ Written to ${OUTPUT_FILE}`);
  console.log('\nLink to it in any markdown page with:');
  console.log('  [Maxem Feats](/c_Feats/Maxem Feats.html)\n');
}

main();
