---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Tempo Specialist
Attribute Prerequisite: WIT 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can compress casting time without tearing the weave.
tags:
  - feat
  - maxem
  - weave
  - tempo
  - Economy
file.name: Quicken Mastery
file.path: c_Feats/Maxem/Weaves/Quicken Mastery.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #tempo #Economy

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can compress casting time without tearing the weave.*


When you apply [[Quicken]], you can choose:
- reduce the total MP cost of the manifold by **1**, or
- Manifolds cannot cost 4 AP from manifolds
