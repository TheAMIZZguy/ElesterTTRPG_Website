---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Magus Attunement
Attribute Prerequisite:
  - CHA 3
  - CON 3
Skill Prerequisite:
  - Aetherics (Skilled)
Anti Requisite: ''
description: You can hold multiple elemental languages without tearing your focus.
tags:
  - feat
  - maxem
  - element
file.name: Magus Discipline
file.path: c_Feats/Maxem/Elements/Magus/Magus Discipline.md
file.folder: c_Feats/Maxem/Elements/Magus
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can hold multiple elemental languages without tearing your focus.*

Choose two additional Elements you can now access (for a total of 4).

For each new Element, learn one Manifold from that Element.

Your Balanced Study Rule expands: 
- You may have a difference of 2 between the number of manifolds you know in different elements.
- You may have a single element that has a difference of 3
