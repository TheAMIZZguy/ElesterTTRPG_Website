---
type: feat
class: Maxem
Level Prerequisite: 4
Feat Prerequisite: Weave Study
Attribute Prerequisite: WIT 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: 'You’re fluent in time—holding, echoing, and triggering effects.'
tags:
  - feat
  - maxem
  - weave
  - tempo
  - Economy
file.name: Tempo Specialist
file.path: c_Feats/Maxem/Weaves/Tempo Specialist.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #tempo #Economy

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You’re fluent in time—holding, echoing, and triggering effects.*

The first time each round you apply [[Duration]] or [[Hold]], reduce the total Mana cost by 1 (minimum 0).
