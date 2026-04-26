---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Ice Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You build structures that hold under stress.
tags:
  - feat
  - maxem
  - element
  - ice
file.name: Ice - Cold Architecture
file.path: c_Feats/Maxem/Elements/Ice/Ice - Cold Architecture.md
file.folder: c_Feats/Maxem/Elements/Ice
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #ice

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You build structures that hold under stress.*

When you create Ice terrain/structures, they are sustained for 1 round for free.

When you Evoke Condense to convert gas to liquid in an area, you may choose one:
- The resulting liquid is deposited as difficult terrain in the area.
- The resulting liquid immediately flash-freezes, applying the area as ice terrain rather than liquid.
Additionally, you can use Condense on smoke, fog, or gaseous conditions to immediately reduce their radius by half.
