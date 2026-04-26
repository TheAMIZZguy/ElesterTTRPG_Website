---
type: feat
class: Maxem
Level Prerequisite: 14
Feat Prerequisite: Reactive Dispel
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: You can cut through hostile evocation for a moment.
tags:
  - feat
  - maxem
  - counterwork
  - passive
file.name: Disruptive Evocation
file.path: c_Feats/Maxem/Counterwork/Disruptive Evocation.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can cut through hostile evocation for a moment.*

At the cost of 5MP, any area your fields pass through automatically count as a Counter-Evoke.
