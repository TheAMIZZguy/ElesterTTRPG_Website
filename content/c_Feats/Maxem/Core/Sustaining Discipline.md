---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Weave Study
Attribute Prerequisite:
  - PRE 3
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: You can keep effects running with less constant strain.
tags:
  - feat
  - maxem
  - core
  - tempo
  - passive
file.name: Sustaining Discipline
file.path: c_Feats/Maxem/Core/Sustaining Discipline.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #tempo #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can keep effects running with less constant strain.*

When you pay Mana to [[Sustain]] an effect, reduce the sustain cost by x (as defined in Sustain).
If you sustain multiple effects, choose which one benefits each round.


