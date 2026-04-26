---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Tempo Specialist
Attribute Prerequisite:
  - WIT 3
Skill Prerequisite:
  - Aetherics (Mastered)
Anti Requisite: ''
description: You can set conditions that fire exactly when you intend.
tags:
  - feat
  - maxem
  - weave
file.name: Trigger Savant
file.path: c_Feats/Maxem/Weaves/Trigger Savant.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can set conditions that fire exactly when you intend.*

If you know [[Trigger]], you may set two trigger conditions instead of one.

When your [[Trigger|triggered]] manifold fires, it gains +1 Status bonus to its attack roll / Difficulty (if applicable).
