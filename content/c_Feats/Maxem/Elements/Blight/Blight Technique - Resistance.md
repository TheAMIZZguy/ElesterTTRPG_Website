---
type: feat
class: Maxem
Level Prerequisite: 2
Feat Prerequisite: Elemental Attunement (Blight)
Attribute Prerequisite: CON 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: Your body has slowly learned to resist the effects you produce.
tags:
  - feat
  - maxem
  - element
  - blight
  - passive
file.name: Blight Technique - Resistance
file.path: c_Feats/Maxem/Elements/Blight/Blight Technique - Resistance.md
file.folder: c_Feats/Maxem/Elements/Blight
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #blight #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your body has slowly learned to resist the effects you produce.*

You gain Resistance 1 against any acid or poison effects.

This can be taken multiple times to increase the effects by 1.
