---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Ice Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can lock motion in an instant.
tags:
  - feat
  - maxem
  - element
  - ice
file.name: Ice - Snap-Freeze
file.path: c_Feats/Maxem/Elements/Ice/Ice - Snap-Freeze.md
file.folder: c_Feats/Maxem/Elements/Ice
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #ice

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can lock motion in an instant.*

When you hit a creature with an Ice manifold that imposes [[2. Rules/4. General Rules/Conditions/Slowed|Slow 2]] or higher, the creature is also [[Immobilized]] for the current round.
