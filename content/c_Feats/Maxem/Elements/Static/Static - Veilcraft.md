---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Static Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can make perception lie cleanly.
tags:
  - feat
  - maxem
  - element
  - static
file.name: Static - Veilcraft
file.path: c_Feats/Maxem/Elements/Static/Static - Veilcraft.md
file.folder: c_Feats/Maxem/Elements/Static
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #static

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can make perception lie cleanly.*

When you Evoke a Static manifold that affects light/vision (e.g. brighten/darken/illusion), you can choose one extra refinement:
- no audible tell,
- no obvious shimmer at the edge,
- or it matches a specific angle/source.

This improves the difficulty of mundane detection by one step (GM).
