---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Ice Technique - Practical
Attribute Prerequisite:
  - CON 3
Skill Prerequisite:
  - Aethermancy (Skilled)
Anti Requisite: ''
description: Your ice manifolds become your party’s dependable lever.
tags:
  - feat
  - maxem
  - element
  - ice
file.name: Ice Technique - Signature
file.path: c_Feats/Maxem/Elements/Ice/Ice Technique - Signature.md
file.folder: c_Feats/Maxem/Elements/Ice
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #ice

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your ice manifolds become your party’s dependable lever.*

Learn two additional Ice manifolds.

When you hit a target with an Ice manifold and they are already affected by a cold condition (Slowed, Frozen, persistent cold damage), you choose:
* the effect's duration is extended by 1 round, or 
* the persistent damage ticks once immediately.
