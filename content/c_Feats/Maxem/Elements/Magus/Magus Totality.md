---
type: feat
class: Maxem
Level Prerequisite: 16
Feat Prerequisite: Magus - Resonant Counter
Attribute Prerequisite:
  - "\_CHA 4"
  - CON 4
Skill Prerequisite:
  - Aetherology (Mastered)
Anti Requisite: ''
description: You pay the full price and learn every Element’s language.
tags:
  - feat
  - maxem
  - magus
file.name: Magus Totality
file.path: c_Feats/Maxem/Elements/Magus/Magus Totality.md
file.folder: c_Feats/Maxem/Elements/Magus
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #magus

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You pay the full price and learn every Element’s language.*

Choose the remaining four Elements you do not yet access (you now access all 8).

For each of those Elements, learn one manifold.

Your Balanced Study Rule remains in effect, but your tolerance improves:
- You may be ahead by 3 manifolds in one Element (instead of 1)

