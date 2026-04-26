---
type: feat
class: Maxem
Level Prerequisite: 3
Feat Prerequisite: Maxem Initiate (Blight)
Attribute Prerequisite: CON 2
Skill Prerequisite:
  - Aethermancy (Trained)
  - Aetherics (Trained) OR Perception (Trained)
Anti Requisite: ''
description: Your body has slowly learned to resist the effects you produce.
tags:
  - feat
  - maxem
  - element
  - blight
file.name: Blight Technique - Practical
file.path: c_Feats/Maxem/Elements/Blight/Blight Technique - Practical.md
file.folder: c_Feats/Maxem/Elements/Blight
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #blight

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your body has slowly learned to resist the effects you produce.*

Learn one manifolds from Blight.

Your Blight effects can now spread: when an object increases Blight rank, you may spend 3 MP to make adjacent objects of the same Material Class gain Blight rank 1.
