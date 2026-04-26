---
type: feat
class: Maxem
Level Prerequisite: 14
Feat Prerequisite: Blight Technique - Dominance
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: >-
  You can slightly modify your chassis to affect creatures and objects built to
  withstand standard effects.
tags:
  - feat
  - maxem
  - element
  - blight
file.name: Blight Technique - Sovereign
file.path: c_Feats/Maxem/Elements/Blight/Blight Technique - Sovereign.md
file.folder: c_Feats/Maxem/Elements/Blight
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #blight

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can slightly modify your chassis to affect creatures and objects built to withstand standard effects.*


When you Evoke a Blight manifold that is of type Harm, you may choose to modify it:
- If the target has Poison or Acid resistance, ignore 1 level of that Resistance.
- If the target does not have Poison or Acid resistance, they gain [[Poisoned|Poisoned 1]] if they were not already Poisoned.

Additionally, when a creature you have Poisoned (and is still Poisoned from your manifold) dies, you recover 1 MP for each level of Poisoned they had. 
