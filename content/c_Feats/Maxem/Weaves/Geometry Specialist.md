---
type: feat
class: Maxem
Level Prerequisite: 4
Feat Prerequisite: Weave Study
Attribute Prerequisite: WIT 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: 'You’re fluent in shape, distance, and exclusion.'
tags:
  - feat
  - maxem
  - weave
  - geometry
  - Economy
  - passive
file.name: Geometry Specialist
file.path: c_Feats/Maxem/Weaves/Geometry Specialist.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #geometry #Economy #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You’re fluent in shape, distance, and exclusion.*

When you apply Area or Range, reduce the total Mana cost by 1 once per Evoke (minimum 0).
