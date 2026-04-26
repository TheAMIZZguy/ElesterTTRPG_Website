---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Death Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can take vitality and will from the living.
tags:
  - feat
  - maxem
  - element
  - death
  - passive
file.name: Death - Siphoning Touch
file.path: c_Feats/Maxem/Elements/Death/Death - Siphoning Touch.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can take vitality and will from the living.*

When you hit a creature with a Death manifold that deals damage, you may choose to siphon: 
* you gain temporary HP equal to the damage dealt.

This temporary HP expires at the end of the round.
