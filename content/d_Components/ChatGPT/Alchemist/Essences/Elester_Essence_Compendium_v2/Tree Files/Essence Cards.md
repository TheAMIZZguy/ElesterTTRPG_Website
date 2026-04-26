---
file.name: Essence Cards
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Tree
  Files/Essence Cards.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Tree
  Files
tags: []
---
# Essence Cards

> [!danger] DataviewJS block — requires manual conversion to web
> [MANUAL_CONVERSION_NEEDED]

```dataviewjs
const pages = dv.pages('"Essences"').where(p => p.type == 'Essence').sort(p => p.tier, 'asc');
const byTier = {};
for (const p of pages) (byTier[p.tier ?? 'Unsorted'] ??= []).push(p);
for (const t of Object.keys(byTier)) {
  dv.header(2, 'Tier ' + t);
  const wrap = dv.el('div', '', { cls: 'elester-feat-grid' });
  for (const p of byTier[t]) {
    const card = dv.el('div', '', { cls: 'elester-feat-card' });
    dv.el('div', p.file.link, { container: card, cls: 'elester-feat-title' });
    dv.el('div', `${p['essence-type']} • ${p.delivery} • vs ${p.defense}`, { container: card, cls: 'elester-feat-meta' });
    dv.el('div', (p.description ?? ''), { container: card, cls: 'elester-feat-summary' });
    wrap.appendChild(card);
  }
}
```





