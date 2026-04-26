---
type: feat
class: Maxem
Level Prerequisite: 14
Feat Prerequisite: Ice Technique - Dominance
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: You are speaking in calming energy.
tags:
  - feat
  - maxem
  - element
  - ice
file.name: Ice Technique - Sovereign
file.path: c_Feats/Maxem/Elements/Ice/Ice Technique - Sovereign.md
file.folder: c_Feats/Maxem/Elements/Ice
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #ice

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You are speaking in calming energy.*

Learn two additional Ice manifolds 

When a creature fails to counter-evoke your Ice manifold, they gain [[2. Rules/4. General Rules/Conditions/Slowed|Slowed 1]] until the end of their next turn. 
The counter-evoke attempt itself costs them 1 additional MP than normal.
