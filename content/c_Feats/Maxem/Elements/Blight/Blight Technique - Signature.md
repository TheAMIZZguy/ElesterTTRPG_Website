---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Blight Technique - Practical
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: Your blight manifolds become your party’s dependable lever.
tags:
  - feat
  - maxem
  - element
  - blight
file.name: Blight Technique - Signature
file.path: c_Feats/Maxem/Elements/Blight/Blight Technique - Signature.md
file.folder: c_Feats/Maxem/Elements/Blight
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #blight

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your blight manifolds become your party’s dependable lever.*

Reduce the total Mana cost of your Blight manifolds of one Class by **1**

When you hit a creature wearing armour or carrying a weapon with a Blight manifold, you may choose to have the damage apply to their equipment instead of them.
