---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Life Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can impose life terms on the battlefield.
tags:
  - feat
  - maxem
  - element
  - life
  - passive
file.name: Life Technique - Dominance
file.path: c_Feats/Maxem/Elements/Life/Life Technique - Dominance.md
file.folder: c_Feats/Maxem/Elements/Life
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #life #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can impose life terms on the battlefield.*

Learn two additional Life manifolds.

Apply only the maximum effect:
* Healing over 25% of a creatures Maximum HP will also restore 1 VP and remove [[Poisoned|Poisoned 1]] or [[Hexed|Hexed 1]] 
* Healing over 50% of a creatures Maximum HP will also restore 2 VP and remove [[Poisoned|Poisoned 2]] or [[Hexed|Hexed 2]]

Apply only the maximum effect:
* Healing over 25% of a creatures Maximum VP will also restore one level of [[Rest]]
* Healing over 50% of a creatures Maximum VP will also restore one level of [[Rest]] or [[Doomed]]


Notes:
* A tie still allows for the effect to take place
* The HP effect may trigger the VP effect
