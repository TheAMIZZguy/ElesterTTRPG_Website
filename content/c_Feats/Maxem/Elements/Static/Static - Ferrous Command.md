---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Static Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can bully iron with fields and charge.
tags:
  - feat
  - maxem
  - element
  - static
file.name: Static - Ferrous Command
file.path: c_Feats/Maxem/Elements/Static/Static - Ferrous Command.md
file.folder: c_Feats/Maxem/Elements/Static
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #static

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can bully iron with fields and charge.*

When you use magnetism/charge to move a ferrous object, increase the maximum weight you can meaningfully affect by one manifold level

If you hit a creature with a Static manifold, you may also
* Attempt a Disarm (with the same evocation roll vs PD)  
* Move a small ferrous item within 5 paces, 1 pace in any direction
