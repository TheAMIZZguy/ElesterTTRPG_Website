---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Anchor Discipline
Attribute Prerequisite: WIL 2
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: 'You can evoke without speaking, holding intent in breath and posture.'
tags:
  - feat
  - maxem
  - core
  - anchors
  - stealth
  - passive
file.name: Silent Evocation
file.path: c_Feats/Maxem/Core/Silent Evocation.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #anchors #stealth #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can evoke without speaking, holding intent in breath and posture.*

If you are evoking with a Complexity at least 4 below your maximum, you can evoke it without needing to vocalize it (you still need to think about it).

When you Evoke silently, increase the reaction DC by 2.
