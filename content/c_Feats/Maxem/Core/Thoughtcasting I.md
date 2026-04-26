---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Somatic Minimalism
Attribute Prerequisite:
  - CON 3
Skill Prerequisite:
  - Aethermancy (Mastered)
Anti Requisite: ''
description: 'You can evoke with no outward sign, pure intent.'
tags:
  - feat
  - maxem
  - core
  - anchors
  - stealth
  - passive
file.name: Thoughtcasting I
file.path: c_Feats/Maxem/Core/Thoughtcasting I.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #anchors #stealth #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can evoke with no outward sign, pure intent.*

If you are evoking with a Complexity at least 5 below your maximum, you can evoke it without needing to vocalize it.

When you Evoke silently, increase the reaction DC by 4. This does not affect Vasilian who have an active Mark on you.
