---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Risk Specialist
Attribute Prerequisite:
  - WIL 3
  - CON 3
Skill Prerequisite:
  - Aethermancy (Mastered)
Anti Requisite: ''
description: You can overcharge without losing the plot.
tags:
  - feat
  - maxem
  - weave
  - risk
  - power
file.name: Overcharge Control
file.path: c_Feats/Maxem/Weaves/Overcharge Control.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #risk #power

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can overcharge without losing the plot.*

When you apply [[Overcharge]] and get a Critical Hit before Overcharge comes into effect:
- You may choose to direct the “extra critical” into a free use of a Weave that is tagged with Delivery


