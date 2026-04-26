---
type: feat
class: Maxem
Level Prerequisite: 1
Feat Prerequisite: Maxem Initiate
Attribute Prerequisite: PRE 1
Skill Prerequisite: ''
Anti Requisite: ''
description: You can push a little more will through your Field before fatigue sets in.
tags:
  - feat
  - maxem
  - core
  - mana
file.name: Mana Reserve
file.path: c_Feats/Maxem/Core/Mana Reserve.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #mana

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can push a little more will through your Field before fatigue sets in.*

Increase your Mana maximum by +4.

Special: You can take this feat multiple times. Each time, increase Mana maximum by +2 again.
