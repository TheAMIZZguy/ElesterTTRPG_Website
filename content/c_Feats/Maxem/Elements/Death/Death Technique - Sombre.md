---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Death Technique - Practical
Attribute Prerequisite:
  - INT 2
Skill Prerequisite: null
Anti Requisite: ''
description: Your death manifolds are fearful.
tags:
  - feat
  - maxem
  - element
  - death
  - passive
file.name: Death Technique - Sombre
file.path: c_Feats/Maxem/Elements/Death/Death Technique - Sombre.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your death manifolds are fearful.*


Any creature other than you within 10 paces of you
* Cannot recover from negative conditions tagged with #Mental 
* Has -1 Circumstance penalty to their MD
