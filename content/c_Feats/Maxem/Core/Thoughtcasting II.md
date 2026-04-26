---
type: feat
class: Maxem
Level Prerequisite: 12
Feat Prerequisite: Thoughtcasting I
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: 'You can evoke with no outward sign, pure intent.'
tags:
  - feat
  - maxem
  - core
  - anchors
  - stealth
  - passive
file.name: Thoughtcasting II
file.path: c_Feats/Maxem/Core/Thoughtcasting II.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #anchors #stealth #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can evoke with no outward sign, pure intent.*

If you are evoking with a Complexity at least 10 below your maximum, you can evoke it without needing to vocalize or even think about it.

When you Evoke silently, increase the reaction DC by 4 and this affects Vasilian even when they have a Mark on you.
