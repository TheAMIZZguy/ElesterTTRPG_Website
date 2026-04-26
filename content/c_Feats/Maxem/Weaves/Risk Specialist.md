---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Weave Study
Attribute Prerequisite: WIL 2
Skill Prerequisite:
  - Aethermancy (Skilled)
Anti Requisite: ''
description: You learn how to overdrive safely—or choose to gamble on purpose.
tags:
  - feat
  - maxem
  - weave
  - risk
  - passive
file.name: Risk Specialist
file.path: c_Feats/Maxem/Weaves/Risk Specialist.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #risk #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You learn how to overdrive safely—or choose to gamble on purpose.*

When you apply one of these weaves, you gain a +1 Status bonus to your AD against any unwilling effects from your evocation (backlash, unstable table results, overcharge riders).
- [[Overcharge]] 
- [[Unstable]]  
- [[Wild Potential]]
