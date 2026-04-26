---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Counter-Evoke
Attribute Prerequisite: WIT 3
Skill Prerequisite: Aetherics (Mastered)
Anti Requisite: ''
description: 'You can peel a single weave off an enemy manifold, letting the rest go wrong.'
tags:
  - feat
  - maxem
  - counterwork
file.name: Disrupt Weave
file.path: c_Feats/Maxem/Counterwork/Disrupt Weave.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can peel a single weave off an enemy manifold, letting the rest go wrong.*

Instead of a Counter-Evoke you may choose to disrupt instead of cancel:
- You may reduce the MP and Complexity by 3 to a minimum of 0
- Select one weave (Area, Range, Duration, Trigger, etc.).
- That weave is removed from the opponent’s evocation as it resolves.

Examples:
- remove Area → it hits only the primary target,
- remove Range → it fails to reach,
- remove Trigger → it goes off immediately or not at all (GM).

