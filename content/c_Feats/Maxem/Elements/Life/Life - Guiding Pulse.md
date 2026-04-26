---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Life Technique - Signature
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: Your healing is also direction and coordination.
tags:
  - feat
  - maxem
  - element
  - life
file.name: Life - Guiding Pulse
file.path: c_Feats/Maxem/Elements/Life/Life - Guiding Pulse.md
file.folder: c_Feats/Maxem/Elements/Life
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #life

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*Your healing is also direction and coordination.*

Learn 2 Life manifolds

When you restore HP or apply a buff to a creature with a Life manifold, you may also grant it a step of reposition (1 pace) to be used as a free action immediately.
* Happens directly after in the stack and does not increase the DEX requirements
Additionally, when you [[Stabilize]] a Dying creature, they do not gain the [[Dying]] condition again until the end of the round.

