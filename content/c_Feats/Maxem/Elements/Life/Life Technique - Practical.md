---
type: feat
class: Maxem
Level Prerequisite: 2
Feat Prerequisite: Maxem Initiate (Life)
Attribute Prerequisite: CON 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: You learn to evoke life effects reliably under stress.
tags:
  - feat
  - maxem
  - element
  - life
file.name: Life Technique - Practical
file.path: c_Feats/Maxem/Elements/Life/Life Technique - Practical.md
file.folder: c_Feats/Maxem/Elements/Life
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #life

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You learn to evoke life effects reliably under stress.*

Learn two additional Life manifolds.

You can reduce the Complexity of an evocation by 1 (to a minimum of 1) for each time you have evoked that same manifold that day and used at least 2MP.
