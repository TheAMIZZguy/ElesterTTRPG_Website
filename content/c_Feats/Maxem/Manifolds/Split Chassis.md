---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Elemental Repertoire
Attribute Prerequisite:
  - KNO 2
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can merge two simple chassis intents into one evocation.
tags:
  - feat
  - maxem
  - manifold
file.name: Split Chassis
file.path: c_Feats/Maxem/Manifolds/Split Chassis.md
file.folder: c_Feats/Maxem/Manifolds
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #manifold

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can merge two simple chassis intents into one evocation.*

You can help an ally Evoke using 1 AP and a chosen amount of MP, x, over 0 to reduce their MP cost by x + 1.
