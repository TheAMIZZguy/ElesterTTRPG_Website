---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Fire Technique - Practical
Attribute Prerequisite:
  - CON 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: Your body is used to the heat.
tags:
  - feat
  - maxem
  - element
  - fire
file.name: Fire Technique - Signature
file.path: c_Feats/Maxem/Elements/Fire/Fire Technique - Signature.md
file.folder: c_Feats/Maxem/Elements/Fire
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #fire

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your body is used to the heat.*

When you apply Excited to yourself, you may choose which stat gains the bonus and which one gains the negative.
When a creature or object affected by Radiance interacts with the field and triggers the instability roll, you may spend 1 MP as a free action to add +1 to the instability die result.

