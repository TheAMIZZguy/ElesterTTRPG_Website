---
type: feat
class: Maxem
Level Prerequisite: 2
Feat Prerequisite: Maxem Initiate (Death)
Attribute Prerequisite:
  - INT 1
Skill Prerequisite:
  - Aethermancy (Trained)
Anti Requisite: ''
description: You can impose death terms on the battlefield.
tags:
  - feat
  - maxem
  - element
  - death
file.name: Death Technique - Practical
file.path: c_Feats/Maxem/Elements/Death/Death Technique - Practical.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can impose death terms on the battlefield.*

Learn two manifolds from Death.

When you successfully apply an extract manifold to a creature, you may immediately learn one piece of information about them of your choice: 
* Their current HP band (full / bloodied / critical) (GM Discretion)
* Their current BP band (full / bloodied / critical) (GM Discretion)
* Their Maximum HP
* Their Maximum VP
* Their highest Defence value
* How many conditions they are currently affected by
