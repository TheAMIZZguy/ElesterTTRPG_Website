---
type: feat
class: Maxem
Level Prerequisite: 2
Feat Prerequisite: Manifold Study
Attribute Prerequisite: KNO 1
Skill Prerequisite:
  - Aetherology (Trained)
Anti Requisite: ''
description: You widen your vocabulary in your Element.
tags:
  - feat
  - maxem
  - manifold
  - passive
file.name: Elemental Repertoire
file.path: c_Feats/Maxem/Manifolds/Elemental Repertoire.md
file.folder: c_Feats/Maxem/Manifolds
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #manifold #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You widen your vocabulary in your Element.*

Learn a number of Manifolds equal to your KNO - 2
