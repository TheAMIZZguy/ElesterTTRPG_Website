---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Fire Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: Intense fire overwhelms the senses before the body can react.
tags:
  - feat
  - maxem
  - element
  - fire
  - passive
file.name: Fire - Blinding Light
file.path: c_Feats/Maxem/Elements/Fire/Fire - Blinding Light.md
file.folder: c_Feats/Maxem/Elements/Fire
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #fire #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Intense fire overwhelms the senses before the body can react.*

When you Evoke a Fire manifold with Area that deals damage, creatures hit by it who fail the attack roll by 5 or less also have their visual sense precision reduced by 1 tier until the end of the round.
