---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Death Technique - Practical
Attribute Prerequisite: CON 3
Skill Prerequisite:
  - Aetherology (Skilled)
Anti Requisite: ''
description: Your death manifolds are fearful.
tags:
  - feat
  - maxem
  - element
  - death
  - counterwork
file.name: Death Technique - Signature
file.path: c_Feats/Maxem/Elements/Death/Death Technique - Signature.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death #counterwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your death manifolds are fearful.*

Learn two additional Death manifolds.

Any critically failed counter-evokes against your evokes gives you 2 MP from the evoker, if they do not have enough MP they lose that much VP instead.
