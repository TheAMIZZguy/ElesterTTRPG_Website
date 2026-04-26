---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Death Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can impose death terms on the battlefield.
tags:
  - feat
  - maxem
  - element
  - death
  - counterwork
file.name: Death Technique - Dominance
file.path: c_Feats/Maxem/Elements/Death/Death Technique - Dominance.md
file.folder: c_Feats/Maxem/Elements/Death
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #death #counterwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can impose death terms on the battlefield.*

Learn one manifold from Death.

If you counter-evoke a life manifold you can spend 1AP and 2 MP to redirect it to you, paying MP from the original evoker to gain the minimum additional distance manifolds to reach you if it could not.
if they do not have sufficient MP, they end up using VP instead
