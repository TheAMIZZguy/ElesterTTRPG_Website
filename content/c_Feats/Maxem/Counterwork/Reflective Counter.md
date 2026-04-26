---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Disrupt Weave
Attribute Prerequisite: CON 4
Skill Prerequisite:
  - Aethermancy (Mastered)
Anti Requisite: ''
description: Your opposition can turn a hostile evocation back on its owner.
tags:
  - feat
  - maxem
  - counterwork
  - reaction
file.name: Reflective Counter
file.path: c_Feats/Maxem/Counterwork/Reflective Counter.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your opposition can turn a hostile evocation back on its owner.*

When you critically succeed at Counter-Evoke, you may reflect the manifold:
- Choose a new target/point within the original range limits.
- No other changes, it still uses the initial evocation roll

