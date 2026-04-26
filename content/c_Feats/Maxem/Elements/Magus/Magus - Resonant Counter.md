---
type: feat
class: Maxem
Level Prerequisite: 12
Feat Prerequisite: Magus Discipline
Attribute Prerequisite:
  - INT 2
Skill Prerequisite:
  - Aetherology (Mastered)
Anti Requisite: null
description: You understand the fields in ways others cannot
tags:
  - feat
  - maxem
  - magus
file.name: Magus - Resonant Counter
file.path: c_Feats/Maxem/Elements/Magus/Magus - Resonant Counter.md
file.folder: c_Feats/Maxem/Elements/Magus
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #magus

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You understand the fields in ways others cannot*

When you Counter-Evoke a manifold of an Element you know at least two manifolds from, you gain a +2 status bonus to the counter-evoke roll.

On a Critical Success, you may choose to absorb 1 MP from the countered evocation rather than spending your own.
