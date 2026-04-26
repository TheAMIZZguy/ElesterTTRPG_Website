---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite:
  - Earth Technique - Practical
Attribute Prerequisite:
  - CON 2
Skill Prerequisite:
  - Aetherics (Trained)
Anti Requisite: ''
description: Knowledge of the material world.
tags:
  - feat
  - maxem
  - element
  - earth
file.name: Earth Technique - Dominance
file.path: c_Feats/Maxem/Elements/Earth/Earth Technique - Dominance.md
file.folder: c_Feats/Maxem/Elements/Earth
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #earth

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Knowledge of the material world.*

Learn one additional Earth manifold.

When you Evoke an Earth manifold, you may affect two different Material Classes you know in the same evocation. 
Each class is treated as a separate effect with its own area, but both originate from the same evocation and count as one action.

Additionally, your created or transmuted structures can now be reinforced as part of creation 
* choose either +2 HP or +1 BT at time of evocation
