---
type: feat
class: Maxem
Level Prerequisite: 14
Feat Prerequisite: Death Technique - Dominance
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: You are no longer merely using death—you are speaking it as a native.
tags:
  - feat
  - maxem
  - element
  - death
file.name: Death Technique - Sovereign
file.path: c_Feats/Maxem/Elements/Death/Death Technique - Sovereign.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You are no longer merely using death—you are speaking it as a native.*

Learn two additional Death manifolds.

When you Evoke a Death manifold that is of type Harm, you may choose to modify it:
- If the target has Necrotic resistance, ignore 1 level of that resistance.
- If the target does not have Necrotic resistance, they gain Hexed 1 if they were not already Hexed.

Additionally, when a creature you have Hexed (and is still hexed from your manifold) dies, you recover 1 MP for each level of Hexed they had. 
