---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Flow Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can impose flow terms on the battlefield.
tags:
  - feat
  - maxem
  - element
  - flow
file.name: Flow Technique - Dominance
file.path: c_Feats/Maxem/Elements/Flow/Flow Technique - Dominance.md
file.folder: c_Feats/Maxem/Elements/Flow
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #flow

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can impose flow terms on the battlefield.*

You can spend 3MP to increase your movement actions or that of a willing creature by double the amount
* if said willing creature runs into another creature, the other creature takes 1d4 bludgeoning damage
