---
type: feat
class: Maxem
Level Prerequisite: 1
Feat Prerequisite: Maxem Initiate
Attribute Prerequisite:
  - KNO 1
Skill Prerequisite: Aetherology (Trained)
Anti Requisite: null
description: You bind your practice to a single Element and learn its language.
tags:
  - feat
  - maxem
  - core
  - element
  - repeatable
file.name: Manifold Study
file.path: c_Feats/Maxem/Core/Manifold Study.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #element #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You bind your practice to a single Element and learn its language.*

Learn 1 new Manifold

This can be taken several times

