# Generate Maxem Canvas (v2)

Run in reading mode. Copy the JSON block and paste as full contents of your `.canvas` file.

---

```dataviewjs
// ============================================================
// CONFIG
// ============================================================
const FEAT_FOLDER = "c_Feats/Maxem";
const NODE_W      = 460;
const NODE_H      = 200;
const GAP         = 100;   // minimum gap between node edges
const RING_STEP   = 600;   // base radial distance per depth level
const MIN_INNER   = 500;   // minimum radius for depth-1 nodes

// ============================================================
// SECTOR ANGLES  (degrees, clockwise from right = 0)
// Canvas: +x right, +y down
//   0   = right
//   90  = down
//   180 = left
//   270 = up
//
// Paired opposites sit opposite each other so their element
// identities feel visually opposed.
// ============================================================
const SECTOR_ANGLES = {
  fire:        -45,   // upper-right
  ice:          45,   // lower-right
  life:         90,   // down
  death:       135,   // lower-left
  earth:       180,   // left
  blight:      225,   // upper-left
  flow:        270,   // up
  static:     -135,   // upper-left (opposing flow)
  magus:       -90,   // straight up — generalist, central
  counterwork: -165,  // upper-far-left
  weave:         15,  // right and slightly down
  manifold:    -15,   // right and slightly up
  anchors:    -120,   // upper-left
  core:       -100,   // near-straight up, slight left
};

// Feats that don't match any element/category tag fall here
const DEFAULT_SECTOR = "core";

// ============================================================
// CALLOUT TYPE  (determines colour in CSS)
// Priority: specific file name > element > function > default
// ============================================================
function calloutType(f) {
  if (f.file.name === "Maxem Initiate") return "maxem-init";

  const tags = (f.tags || [])
    .map(t => t.toString().replace(/^#/, "").toLowerCase());

  // Element colours — checked first so element feats always
  // get their element colour regardless of other tags
  for (const el of ["fire","ice","life","death","earth","blight","flow","static"]) {
    if (tags.includes(el)) return el;
  }
  if (tags.includes("magus"))       return "magus";

  // Functional / build-role colours
  if (tags.includes("counterwork")) return "counter";
  if (tags.includes("economy"))     return "economy";
  if (tags.includes("risk"))        return "risk";
  if (tags.includes("power"))       return "power";
  if (tags.includes("tempo"))       return "tempo";
  if (tags.includes("anchors"))     return "anchor";
  if (tags.includes("manifold"))    return "manifold";
  if (tags.includes("weave"))       return "weave";
  if (tags.includes("utility"))     return "utility";

  return "core-feat";
}

// ============================================================
// SECTOR ASSIGNMENT
// ============================================================
function getSector(f) {
  if (f.file.name === "Maxem Initiate") return "core";

  const tags = (f.tags || [])
    .map(t => t.toString().replace(/^#/, "").toLowerCase());

  for (const el of ["fire","ice","life","death","earth","blight","flow","static"]) {
    if (tags.includes(el)) return el;
  }
  if (tags.includes("magus"))       return "magus";
  if (tags.includes("counterwork")) return "counterwork";
  if (tags.includes("economy"))     return "weave";
  if (tags.includes("risk"))        return "weave";
  if (tags.includes("power"))       return "weave";
  if (tags.includes("tempo"))       return "weave";
  if (tags.includes("geometry"))    return "weave";
  if (tags.includes("weave"))       return "weave";
  if (tags.includes("anchors"))     return "anchors";
  if (tags.includes("manifold"))    return "manifold";

  return DEFAULT_SECTOR;
}

// ============================================================
// HELPERS
// ============================================================
function norm(s) {
  return (s || "").toString()
    .replace(/['"]/g,"").replace(/[_\-]/g," ")
    .replace(/\s+/g," ").trim().toLowerCase();
}

function parsePrereqs(f) {
  const raw = f["Feat Prerequisite"];
  if (!raw || raw === '""') return [];
  return raw.toString()
    .replace(/['"]/g,"")
    .split(/\s+AND\s+/i)
    .map(s => s.trim())
    .filter(Boolean);
}

function formatReqs(f) {
  const parts = [];
  const attr  = f["Attribute Prerequisite"];
  const skill = f["Skill Prerequisite"];
  if (attr  && attr  !== '""') parts.push(attr.toString());
  if (skill && skill !== '""') parts.push(skill.toString());
  return parts.length ? parts.join(" · ") : "None";
}

function buildText(f) {
  const ct    = calloutType(f);
  const level = f["Level Prerequisite"] ?? "?";
  const tags  = (f.tags||[]).map(t=>t.toString().replace(/^#/,"").toLowerCase());
  const rpt   = tags.includes("repeatable") ? " *(R)*" : "";
  const reqs  = formatReqs(f);
  const desc  = f.description ?? "";
  const anti  = f["Anti Requisite"];
  let text =
    `> [!${ct}] [[${f.file.name}]] *(Level ${level})*${rpt}\n` +
    `> **Prereq:** ${reqs}\n`;
  if (anti && anti !== '""')
    text += `> **Anti:** ${anti}\n`;
  text += `> \n> *${desc}*`;
  return text;
}

// Compute which side of a source node an arrow should leave from,
// and which side of the target it should arrive at,
// based on the vector between their centres.
function computeSides(sx, sy, tx, ty) {
  const dx = (tx + NODE_W/2) - (sx + NODE_W/2);
  const dy = (ty + NODE_H/2) - (sy + NODE_H/2);
  const adx = Math.abs(dx), ady = Math.abs(dy);

  // Pure diagonals: bias toward horizontal for readability
  if (adx >= ady * 0.5) {
    return dx >= 0
      ? { fromSide: "right", toSide: "left" }
      : { fromSide: "left",  toSide: "right" };
  } else {
    return dy >= 0
      ? { fromSide: "bottom", toSide: "top" }
      : { fromSide: "top",    toSide: "bottom" };
  }
}

// ============================================================
// LOAD
// ============================================================
const feats = dv.pages(`"${FEAT_FOLDER}"`)
  .where(f => f.type === "feat")
  .array();

if (!feats.length) {
  dv.paragraph(`⚠️ No feats found in "${FEAT_FOLDER}". Check the path.`);
  
} else {

// ============================================================
// NAME → FEAT MAP
// ============================================================
const byNorm = {};
for (const f of feats) byNorm[norm(f.file.name)] = f;

function resolveFeat(s) {
  const k = norm(s);
  if (byNorm[k]) return byNorm[k];
  // Partial prefix match
  for (const [key, feat] of Object.entries(byNorm)) {
    if (key.startsWith(k) || k.startsWith(key)) return feat;
  }
  return null;
}

// ============================================================
// ASSIGN DEPTH  (longest-path BFS)
// ============================================================
const depth = {};
for (const f of feats) depth[f.file.name] = 0;

for (let pass = 0; pass < feats.length; pass++) {
  let changed = false;
  for (const f of feats) {
    for (const ps of parsePrereqs(f)) {
      const p = resolveFeat(ps);
      if (!p) continue;
      const proposed = (depth[p.file.name] ?? 0) + 1;
      if (proposed > depth[f.file.name]) {
        depth[f.file.name] = proposed;
        changed = true;
      }
    }
  }
  if (!changed) break;
}

// ============================================================
// GROUP INTO SECTORS AND DEPTH BUCKETS
// ============================================================
// sectorDepth[sector][d] = [feat, ...]
const sectorDepth = {};
for (const f of feats) {
  const s = getSector(f);
  const d = depth[f.file.name];
  if (!sectorDepth[s]) sectorDepth[s] = {};
  if (!sectorDepth[s][d]) sectorDepth[s][d] = [];
  sectorDepth[s][d].push(f);
}

// ============================================================
// COMPUTE POSITIONS
// ============================================================
const positions = {};  // file.name → {x, y}

// Handle Maxem Initiate separately at origin
const initiate = feats.find(f => f.file.name === "Maxem Initiate");
if (initiate) {
  positions[initiate.file.name] = {
    x: -Math.round(NODE_W / 2),
    y: -Math.round(NODE_H / 2),
  };
}

for (const [sector, depthMap] of Object.entries(sectorDepth)) {
  const angleDeg = SECTOR_ANGLES[sector] ?? -90;
  const angleRad = angleDeg * Math.PI / 180;
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);

  // Perpendicular axis for spreading siblings
  const perpRad = angleRad + Math.PI / 2;
  const cosP = Math.cos(perpRad);
  const sinP = Math.sin(perpRad);

  const depths = Object.keys(depthMap).map(Number).sort((a,b) => a - b);

  for (const d of depths) {
    const nodes = depthMap[d];
    const n = nodes.length;

    // Radius: ensure nodes don't overlap along the perpendicular axis
    const perpSpace = n * (NODE_H + GAP);
    const minRadius = Math.max(
      MIN_INNER,
      d * RING_STEP,
      perpSpace / (2 * Math.PI / Object.keys(SECTOR_ANGLES).length)
    );
    const radius = Math.max(MIN_INNER + d * RING_STEP, d === 0 ? 0 : MIN_INNER);

    // Spread siblings perpendicular to the spoke direction
    const totalPerp = (n - 1) * (NODE_H + GAP);
    nodes.forEach((f, i) => {
      if (f.file.name === "Maxem Initiate") return;
      const offset = n === 1 ? 0 : -totalPerp/2 + i * (NODE_H + GAP);
      const cx = cosA * radius + cosP * offset;
      const cy = sinA * radius + sinP * offset;
      positions[f.file.name] = {
        x: Math.round(cx - NODE_W/2),
        y: Math.round(cy - NODE_H/2),
      };
    });
  }
}

// Fallback: any feat not yet placed
for (const f of feats) {
  if (!positions[f.file.name]) {
    positions[f.file.name] = { x: 0, y: 1000 };
  }
}

// ============================================================
// OVERLAP RESOLUTION  (simple iterative push)
// ============================================================
const OVERLAP_PASSES = 8;
const featNames = feats.map(f => f.file.name);

for (let pass = 0; pass < OVERLAP_PASSES; pass++) {
  let moved = false;
  for (let i = 0; i < featNames.length; i++) {
    for (let j = i+1; j < featNames.length; j++) {
      const a = positions[featNames[i]];
      const b = positions[featNames[j]];
      const overlapX = (NODE_W + GAP) - Math.abs(b.x - a.x);
      const overlapY = (NODE_H + GAP) - Math.abs(b.y - a.y);
      if (overlapX > 0 && overlapY > 0) {
        // Push along the smaller overlap axis
        const pushX = overlapX/2 + 1;
        const pushY = overlapY/2 + 1;
        if (overlapX < overlapY) {
          const dir = b.x >= a.x ? 1 : -1;
          a.x -= Math.round(pushX * dir);
          b.x += Math.round(pushX * dir);
        } else {
          const dir = b.y >= a.y ? 1 : -1;
          a.y -= Math.round(pushY * dir);
          b.y += Math.round(pushY * dir);
        }
        moved = true;
      }
    }
  }
  if (!moved) break;
}

// ============================================================
// BUILD JSON
// ============================================================
const sorted = [...feats].sort((a,b) => a.file.path.localeCompare(b.file.path));
const idOf = {};
sorted.forEach((f, i) => {
  idOf[f.file.name] = `n${i.toString().padStart(4,"0")}`;
});

const nodes = [];
const edges = [];
const seenEdges = new Set();

for (const f of feats) {
  const pos = positions[f.file.name];
  nodes.push({
    id:     idOf[f.file.name],
    type:   "text",
    text:   buildText(f),
    x:      pos.x,
    y:      pos.y,
    width:  NODE_W,
    height: NODE_H,
  });
}

for (const f of feats) {
  for (const ps of parsePrereqs(f)) {
    const parent = resolveFeat(ps);
    if (!parent || !idOf[parent.file.name]) continue;

    const key = `${idOf[parent.file.name]}→${idOf[f.file.name]}`;
    if (seenEdges.has(key)) continue;
    seenEdges.add(key);

    const sp = positions[parent.file.name];
    const tp = positions[f.file.name];
    const sides = computeSides(sp.x, sp.y, tp.x, tp.y);

    edges.push({
      id:       `e${edges.length.toString().padStart(5,"0")}`,
      fromNode: idOf[parent.file.name],
      fromSide: sides.fromSide,
      toNode:   idOf[f.file.name],
      toSide:   sides.toSide,
    });
  }
}

// ============================================================
// OUTPUT
// ============================================================
const json = JSON.stringify({ nodes, edges }, null, 2);

dv.paragraph(
  `Generated **${nodes.length} nodes**, **${edges.length} edges**.\n\n` +
  `Copy the JSON block below and paste it as the entire contents of your \`.canvas\` file.`
);

dv.paragraph("```json\n" + json + "\n```");
}
```
