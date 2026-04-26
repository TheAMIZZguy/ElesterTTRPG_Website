---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Tempo Specialist
Attribute Prerequisite:
  - WIT 3
Skill Prerequisite:
  - Aethermancy (Mastered)
Anti Requisite: ''
description: You can repeat an effect without duplicating the full effort.
tags:
  - feat
  - maxem
  - weave
  - tempo
  - Economy
file.name: Echo Mastery
file.path: c_Feats/Maxem/Weaves/Echo Mastery.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #tempo #Economy

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can repeat an effect without duplicating the full effort.*

When you apply [[Echo]]:
- Each instance costs 1 less Mana than the previous evocation normal (minimum 0), and
- You may choose a different target point/creature for the echo (within the same overall Range).

