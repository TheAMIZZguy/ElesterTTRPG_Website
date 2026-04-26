---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Blight Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: Your blight eats the tools of war.
tags:
  - feat
  - maxem
  - element
  - blight
file.name: Blight - Corrosive Patina
file.path: c_Feats/Maxem/Elements/Blight/Blight - Corrosive Patina.md
file.folder: c_Feats/Maxem/Elements/Blight
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #blight

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your blight eats the tools of war.*

When you deal Blight damage to a creature or object, you may spend 1 MP to leave a Corrosive Patina on them. 
While the Patina is active, the first time anything touches or strikes the target each round, the touching creature or object takes 1d4 acid damage.

The Patina lasts until the target takes a full action to remove it or until the end of the encounter.
