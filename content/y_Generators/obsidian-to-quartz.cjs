#!/usr/bin/env node
/**
 * obsidian-to-quartz.js
 * Place this file at:  <quartz-content-root>/y_Generators/obsidian-to-quartz.js
 *
 * Converts Obsidian vault markdown files for use with Quartz.
 * By default it processes the content folder it lives inside — in-place.
 *
 * Handles:
 *   Type 1 — Inline field references:  `= this.field`  `this.field`  `$= dv.current().field`
 *   Type 2 — Dataview query blocks:    ```dataview TABLE/LIST FROM WHERE SORT LIMIT```
 *   Type 3 — DataviewJS blocks:        ```dataviewjs``` → flagged with warning callout
 *
 * Also copies all non-.md files (images, attachments) unchanged.
 *
 * Usage (from anywhere):
 *   node y_Generators/obsidian-to-quartz.js
 *
 * Or with explicit paths if you ever need them:
 *   node y_Generators/obsidian-to-quartz.js <vault-dir> <output-dir>
 *
 * Zero dependencies by default.
 * Optional: npm install gray-matter  (better YAML parsing, recommended)
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Args ────────────────────────────────────────────────────────────────────
// Default vault = parent of this script's folder (the content root).
// Default output = same as vault (in-place conversion).
// The script always skips its own containing folder so it never touches itself.

const SELF_DIR   = __dirname;                                       // .../content/y_Generators
const VAULT_DIR  = path.resolve(process.argv[2] || path.join(SELF_DIR, '..'));  // .../content
const OUTPUT_DIR = path.resolve(process.argv[3] || VAULT_DIR);     // same = in-place

if (!fs.existsSync(VAULT_DIR)) {
  console.error(`\nVault directory not found: ${VAULT_DIR}\n`);
  process.exit(1);
}

// Folders to skip entirely — always skips the folder this script lives in
const SKIP_DIRS = new Set([
  path.relative(VAULT_DIR, SELF_DIR).replace(/\\/g, '/'),
]);

// ─── Frontmatter Parser ───────────────────────────────────────────────────────
// Uses gray-matter if installed; otherwise a built-in parser covering
// the YAML subset Obsidian frontmatter actually uses.

let grayMatter = null;
try { grayMatter = require('gray-matter'); } catch { /* use built-in */ }

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
      (raw.startsWith("'") && raw.endsWith("'"))) {
    return raw.slice(1, -1);
  }
  return raw;
}

function parseFrontmatter(fileContent) {
  if (grayMatter) {
    const r = grayMatter(fileContent);
    return { data: r.data, content: r.content };
  }
  const m = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: fileContent };

  const data  = {};
  const lines = m[1].split('\n');
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
      const val  = km[2].trim();
      if (val === '') { data[currentKey] = []; inBlock = true; }
      else { data[currentKey] = parseYamlValue(val); inBlock = false; }
      continue;
    }
    inBlock = false;
  }
  return { data, content: m[2] };
}

function rebuildFile(data, content) {
  if (grayMatter) return grayMatter.stringify(content, data);
  const lines = ['---'];
  for (const [k, v] of Object.entries(data)) {
    if (Array.isArray(v)) {
      lines.push(`${k}:`);
      v.forEach(item => lines.push(`  - ${item}`));
    } else if (v === null) {
      lines.push(`${k}:`);
    } else if (typeof v === 'string' && /[:#]/.test(v)) {
      lines.push(`${k}: "${v.replace(/"/g, '\\"')}"`);
    } else {
      lines.push(`${k}: ${v}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n') + content;
}

// ─── File Walker ─────────────────────────────────────────────────────────────

function walkDir(dir) {
  const md = [], other = [];
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return { md, other }; }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Skip folders listed in SKIP_DIRS (e.g. the y_Generators folder itself)
      const rel = path.relative(VAULT_DIR, full).replace(/\\/g, '/');
      if (SKIP_DIRS.has(rel)) continue;
      const s = walkDir(full); md.push(...s.md); other.push(...s.other);
    }
    else if (e.isFile()) (e.name.endsWith('.md') ? md : other).push(full);
  }
  return { md, other };
}

// ─── Vault Index ─────────────────────────────────────────────────────────────

function buildIndex(mdFiles) {
  const index = new Map();
  for (const filepath of mdFiles) {
    try {
      const { data } = parseFrontmatter(fs.readFileSync(filepath, 'utf8'));
      const relPath  = path.relative(VAULT_DIR, filepath).replace(/\\/g, '/');
      data['file.name']   = path.basename(filepath, '.md');
      data['file.path']   = relPath;
      data['file.folder'] = path.dirname(relPath) === '.' ? '' : path.dirname(relPath);
      if (data.tags && !Array.isArray(data.tags)) data.tags = [data.tags];
      data.tags = (data.tags || []).map(t => String(t).replace(/^#/, ''));
      index.set(filepath, { data, relPath });
    } catch (e) {
      console.warn(`  [warn] ${filepath}: ${e.message}`);
    }
  }
  return index;
}

// ─── Field Helpers ────────────────────────────────────────────────────────────

function getField(data, fieldPath) {
  let val = data;
  for (const p of fieldPath.split('.')) {
    if (val == null || typeof val !== 'object') return undefined;
    val = val[p];
  }
  return val;
}

function stringify(val) {
  if (val === undefined || val === null) return '—';
  if (Array.isArray(val)) return val.join(', ');
  return String(val);
}

// ─── Stale Callout Cleanup ────────────────────────────────────────────────────
// Removes warning/danger callouts inserted by a previous run of this script,
// so re-running on already-converted files produces clean output.
 
function stripStaleCallouts(content) {
  // Remove the [!danger] callout + [MANUAL_CONVERSION_NEEDED] line left by previous runs
  content = content.replace(/^> \[!danger\] DataviewJS block[^\n]*\n> \[MANUAL_CONVERSION_NEEDED\]\n\n/gm, '');
  // Remove the [!warning] callout + fenced query block left by previous runs
  content = content.replace(/^> \[!warning\] Unsupported Dataview query[^\n]*\n(?:> [^\n]*\n)*\n/gm, '');
  return content;
}

// ─── Type 1: Inline Field Replacement ────────────────────────────────────────

function replaceInlineFields(content, data) {
  // `= this.field`  (also handles hyphenated field names like this.damage-dice)
  content = content.replace(/`=\s*this\.([\w.-]+)`/g, (_, f) => stringify(getField(data, f)));
  // `$= dv.current().field`
  content = content.replace(/`\$=\s*dv\.current\(\)\.([\w.-]+)`/g, (_, f) => stringify(getField(data, f)));
  // `$= dv.current()["field"]`  and  `$= dv.current()['field']`
  content = content.replace(/`\$=\s*dv\.current\(\)\[["']([^"']+)["']\]`/g, (_, f) => stringify(getField(data, f)));
  // `this.field`  (bare, no prefix)
  content = content.replace(/`this\.([\w.-]+)`/g, (_, f) => stringify(getField(data, f)));
  // `= join(map(this.tags, (t) => "#" + t), " ")`  — renders tags as #Tag1 #Tag2
  content = content.replace(/`=\s*join\(map\(this\.tags,\s*\(t\)\s*=>\s*["']#["']\s*\+\s*t\),\s*["'] ["']\)`/g,
    () => (data.tags || []).map(t => '#' + t).join(' '));
  return content;
}

// ─── Type 2: Dataview Query Parser ───────────────────────────────────────────

function splitFields(str) {
  const fields = [];
  let depth = 0, buf = '';
  for (const ch of str) {
    if (ch === '(') depth++; else if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { fields.push(buf.trim()); buf = ''; } else buf += ch;
  }
  if (buf.trim()) fields.push(buf.trim());
  return fields.map(f => {
    const m = f.match(/^(.*?)\s+AS\s+"?([^"]*)"?$/i);
    if (m) return { expr: m[1].trim(), alias: m[2].trim() };
    return { expr: f, alias: f.split('.').pop().replace(/[()]/g, '').trim() };
  });
}

function parseDataviewQuery(raw) {
  const lines = raw.trim().split('\n').map(l => l.trim()).filter(Boolean);
  if (!lines.length) return null;
  const q = { type: null, fields: [], includeFile: true, fromType: null, from: null, where: null, sort: [], limit: null };
  let i = 0;
  const first = lines[i++];

  if (/^TABLE/i.test(first)) {
    q.type = 'table';
    let rest = first.replace(/^TABLE\s*/i, '');
    if (/^WITHOUT\s+ID\s*/i.test(rest)) { q.includeFile = false; rest = rest.replace(/^WITHOUT\s+ID\s*/i, ''); }
    if (rest.trim()) q.fields = splitFields(rest);
  } else if (/^LIST/i.test(first)) {
    q.type = 'list';
    const rest = first.replace(/^LIST\s*/i, '').trim();
    if (rest) q.fields = [{ expr: rest, alias: rest }];
  } else { return null; }

  for (; i < lines.length; i++) {
    const line = lines[i];
    const mF = line.match(/^FROM\s+"([^"]+)"/i), mT = line.match(/^FROM\s+#(\S+)/i);
    if (mF) { q.fromType = 'folder'; q.from = mF[1].replace(/^\/|\/$/g, ''); continue; }
    if (mT) { q.fromType = 'tag';    q.from = mT[1]; continue; }
    if (/^FROM\s+this\b/i.test(line)) { q.fromType = 'this'; continue; }
    const mW = line.match(/^WHERE\s+(.+)/i);
    if (mW) { q.where = mW[1]; continue; }
    const mS = line.match(/^SORT\s+(.+)/i);
    if (mS) { q.sort = mS[1].split(',').map(s => { s = s.trim(); return { field: s.replace(/\s+(ASC|DESC)$/i,'').trim(), dir: /\s+DESC$/i.test(s)?'DESC':'ASC' }; }); continue; }
    const mL = line.match(/^LIMIT\s+(\d+)/i);
    if (mL) { q.limit = parseInt(mL[1], 10); continue; }
  }
  return q;
}

// ─── Type 2: WHERE Evaluator ─────────────────────────────────────────────────

function evalWhere(expr, data) {
  if (!expr) return true;
  expr = expr.trim();
  try {
    if (/\bAND\b/i.test(expr) && !/\bOR\b/i.test(expr))
      return expr.split(/\bAND\b/i).every(e => evalWhere(e.trim(), data));
    if (/\bOR\b/i.test(expr))
      return expr.split(/\bOR\b/i).some(e => evalWhere(e.trim(), data));
    const mNot = expr.match(/^NOT\s+(.+)$/i);
    if (mNot) return !evalWhere(mNot[1], data);
    const mC = expr.match(/^contains\(([\w.]+),\s*"([^"]*)"\)$/i);
    if (mC) {
      const val = getField(data, mC[1]), search = mC[2].toLowerCase();
      if (Array.isArray(val)) return val.some(v => String(v).toLowerCase().includes(search));
      return val != null && String(val).toLowerCase().includes(search);
    }
    const mCmp = expr.match(/^([\w.]+)\s*(!=|>=|<=|=|>|<)\s*"?([^"]*)"?$/);
    if (mCmp) {
      const [, fp, op, rv] = mCmp;
      const isNum = !isNaN(rv) && rv !== '';
      const lhs = isNum ? Number(getField(data, fp)) : String(getField(data, fp) ?? '').toLowerCase();
      const rhs = isNum ? Number(rv) : rv.toLowerCase();
      switch (op) {
        case '=':  return lhs == rhs;
        case '!=': return lhs != rhs;
        case '>':  return lhs >  rhs;
        case '<':  return lhs <  rhs;
        case '>=': return lhs >= rhs;
        case '<=': return lhs <= rhs;
      }
    }
    const mB = expr.match(/^([\w.]+)$/);
    if (mB) { const v = getField(data, mB[1]); return v !== undefined && v !== null && v !== false && v !== '' && v !== 0; }
    const mTag = expr.match(/^#(\S+)$/);
    if (mTag) return (data.tags || []).includes(mTag[1]);
    return true; // unparseable: include rather than drop
  } catch { return true; }
}

// ─── Type 2: Executor & Renderer ─────────────────────────────────────────────

function resolveExpr(expr, data) {
  if (expr === 'file.link') return `[[${data['file.name']}]]`;
  if (expr === 'file.name') return data['file.name'] || '—';
  return stringify(getField(data, expr));
}

function executeQuery(q, index) {
  let candidates = [...index.values()];
  if (q.fromType === 'folder') {
    const t = q.from.replace(/\\/g, '/');
    candidates = candidates.filter(f => {
      const r = f.relPath.replace(/\\/g, '/');
      return r === t + '.md' || r.startsWith(t + '/') || path.dirname(r).replace(/\\/g,'/') === t;
    });
  } else if (q.fromType === 'tag') {
    const tag = q.from.replace(/^#/, '');
    candidates = candidates.filter(f => (f.data.tags || []).includes(tag));
  }
  if (q.where) candidates = candidates.filter(f => evalWhere(q.where, f.data));
  for (const s of [...q.sort].reverse()) {
    candidates.sort((a, b) => {
      const cmp = stringify(getField(a.data, s.field)).localeCompare(stringify(getField(b.data, s.field)), undefined, { numeric: true, sensitivity: 'base' });
      return s.dir === 'DESC' ? -cmp : cmp;
    });
  }
  if (q.limit) candidates = candidates.slice(0, q.limit);
  if (candidates.length === 0) return '> *No results.*\n';
  if (q.type === 'table') {
    const cols = q.includeFile ? [{ expr: 'file.link', alias: 'File' }, ...q.fields] : q.fields;
    const rows = candidates.map(f => `| ${cols.map(c => resolveExpr(c.expr, f.data)).join(' | ')} |`);
    return [`| ${cols.map(c => c.alias).join(' | ')} |`, `| ${cols.map(() => '---').join(' | ')} |`, ...rows, ''].join('\n');
  }
  return candidates.map(f => q.fields.length
    ? `- [[${f.data['file.name']}]] — ${resolveExpr(q.fields[0].expr, f.data)}`
    : `- [[${f.data['file.name']}]]`).join('\n') + '\n';
}

// ─── DataviewJS Pattern Resolvers ────────────────────────────────────────────
// These handle the specific patterns found across item/weapon/armour pages
// so they don't need to be flagged as manual work.

function escRx(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Pattern: dv.paragraph(dv.page(dv.current()['some-field']).FIELD);
// Looks up a field on a related page (e.g. weapon-group → Ranged page → CSE field).
function tryResolveDVPageField(code, data, index) {
  const m = code.trim().match(/^dv\.paragraph\(dv\.page\(dv\.current\(\)\[['"]([\w-]+)['"]\]\)\.(\w+)\);?$/);
  if (!m) return null;
  const [, groupField, targetField] = m;
  const groupValue = stringify(getField(data, groupField));
  if (groupValue === '—') return `> *${targetField}: ${groupField} not set*\n`;
  for (const [, entry] of index) {
    if (entry.data['file.name'] === groupValue) {
      const val = entry.data[targetField];
      return val != null ? String(val) + '\n' : `> *${targetField} not found on page "${groupValue}"*\n`;
    }
  }
  return `> *Page "${groupValue}" not found*\n`;
}

// Pattern: the traits/tags section extractor — reads ###### headings from a
// reference page (like "Weapons" or "Armour") for each tag on the current page.
function tryResolveTraits(code, data, index) {
  const refMatch = code.match(/let page = dv\.page\(["']([^"']+)["']\)/);
  if (!refMatch) return null;
  const refPageName = refMatch[1];
  const tags = data.tags || [];
  if (!tags.length) return '> *No traits.*\n';

  // Find the reference page in the index
  let refFilepath = null;
  for (const [fp, entry] of index) {
    if (entry.data['file.name'] === refPageName) { refFilepath = fp; break; }
  }
  if (!refFilepath) return `> *Reference page "${refPageName}" not found*\n`;

  // Read and strip frontmatter
  let raw;
  try { raw = fs.readFileSync(refFilepath, 'utf8'); } catch { return null; }
  raw = raw.replace(/^---[\s\S]*?---\r?\n/, '');

  // Extract each tag's section
  let result = '';
  for (const trait of tags) {
    const rx = new RegExp('###### ' + escRx(trait) + '([\\s\\S]*?)(?=######|$)', 'i');
    const match = rx.exec(raw);
    if (match) result += `###### ${trait}\n${match[1].trim()}\n\n`;
    else result += `###### ${trait}\n> *Trait definition not found.*\n\n`;
  }
  return result || '> *No matching traits found*\n';
}

// ─── Block Processing ─────────────────────────────────────────────────────────

function processCodeBlocks(content, index, currentData) {
  let flagged = 0;
  content = content.replace(/```dataview\r?\n([\s\S]*?)```/gi, (_, qs) => {
    const q = parseDataviewQuery(qs);
    if (!q) return ['> [!warning] Unsupported Dataview query — convert manually', '> ```', ...qs.trimEnd().split('\n').map(l => '> ' + l), '> ```', ''].join('\n');
    return executeQuery(q, index);
  });
  content = content.replace(/```dataviewjs\r?\n([\s\S]*?)```/gi, (match, code) => {
    // Try known patterns first
    const resolved =
      tryResolveDVPageField(code.trim(), currentData, index) ||
      tryResolveTraits(code.trim(), currentData, index);
    if (resolved !== null) return resolved;
    // Unknown pattern — flag for manual work
    flagged++;
    return ['> [!danger] DataviewJS block — requires manual conversion to web', '> [MANUAL_CONVERSION_NEEDED]', '', match, ''].join('\n');
  });
  return { content, flagged };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const stats = { converted: 0, copied: 0, flaggedJS: 0, errors: 0 };

function processMarkdown(filepath, index) {
  try {
    const raw = fs.readFileSync(filepath, 'utf8');
    const { data, content: rawContent } = parseFrontmatter(raw);
    let content = replaceInlineFields(stripStaleCallouts(rawContent), data);
    const { content: processed, flagged } = processCodeBlocks(content, index, data);
    stats.flaggedJS += flagged;
    //const outPath = path.join(OUTPUT_DIR, path.relative(VAULT_DIR, filepath));
    const relPath  = path.relative(VAULT_DIR, filepath);
    const baseName = path.basename(filepath, '.md');
    const dirName  = path.basename(path.dirname(filepath));
    const renamed  = baseName === dirName ? 'index.md' : path.basename(filepath);
    const outPath  = path.join(OUTPUT_DIR, path.dirname(relPath), renamed); 
    //
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, rebuildFile(data, processed), 'utf8');
    stats.converted++;
  } catch (e) {
    console.error(`  [error] ${filepath}: ${e.message}`);
    stats.errors++;
  }
}

function copyFile(filepath) {
  try {
    const outPath = path.join(OUTPUT_DIR, path.relative(VAULT_DIR, filepath));
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.copyFileSync(filepath, outPath);
    stats.copied++;
  } catch (e) {
    console.error(`  [error] copy ${filepath}: ${e.message}`);
    stats.errors++;
  }
}

function main() {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║     Obsidian → Quartz Converter          ║');
  console.log('╚══════════════════════════════════════════╝\n');
  console.log(`Vault:   ${VAULT_DIR}`);
  console.log(`Output:  ${OUTPUT_DIR}`);
  console.log(`Parser:  ${grayMatter ? 'gray-matter (installed)' : 'built-in'}\n`);

  const { md, other } = walkDir(VAULT_DIR);
  console.log(`Found ${md.length} markdown + ${other.length} other files\n`);

  console.log('Building file index...');
  const index = buildIndex(md);
  console.log(`Indexed ${index.size} files\n`);

  console.log('Processing markdown...');
  let i = 0;
  for (const f of md) { processMarkdown(f, index); i++; if (i % 25 === 0) process.stdout.write(`  ${i}/${md.length}\r`); }
  process.stdout.write(`  ${i}/${md.length}\n`);

  console.log('Copying other files...');
  for (const f of other) copyFile(f);

  console.log('\n══════════════════════════════════════════');
  console.log(`  ✓ Markdown converted : ${stats.converted}`);
  console.log(`  ✓ Files copied       : ${stats.copied}`);
  if (stats.flaggedJS) console.log(`  ⚠ DataviewJS blocks  : ${stats.flaggedJS}  ← need manual work`);
  if (stats.errors)    console.log(`  ✗ Errors             : ${stats.errors}`);
  console.log('══════════════════════════════════════════\n');
  if (stats.flaggedJS) console.log(`Find all flagged pages:\n  grep -rl "MANUAL_CONVERSION_NEEDED" "${OUTPUT_DIR}"\n`);
  if (stats.flaggedJS) console.log(`Or use:\n  Get-ChildItem -Recurse | Select-String "MANUAL_CONVERSION_NEEDED" | Select-Object -ExpandProperty Path -Unique" "${OUTPUT_DIR}"\n`);
}

main();