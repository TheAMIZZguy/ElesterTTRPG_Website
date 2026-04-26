---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Static Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can impose static terms on the battlefield.
tags:
  - feat
  - maxem
  - element
  - static
file.name: Static Technique - Dominance
file.path: c_Feats/Maxem/Elements/Static/Static Technique - Dominance.md
file.folder: c_Feats/Maxem/Elements/Static
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #static

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can impose static terms on the battlefield.*

Learn two manifolds from Static

When you successfully Magnetize or Electrify an object being held or worn by a creature, they take an additional 2 lightning damage per damage they take that causes electric damage, so long as they are still adjacent to said object 

