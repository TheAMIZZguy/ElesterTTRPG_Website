---
type: feat
class: Maxem
Level Prerequisite: 1
Feat Prerequisite: Maxem Initiate
Attribute Prerequisite: ''
Skill Prerequisite: Aetherics (Trained)
Anti Requisite: ''
description: You can feel fresh excitation and lingering residue in your Element.
tags:
  - feat
  - maxem
  - core
  - counterwork
  - utility
file.name: Field Sense
file.path: c_Feats/Maxem/Core/Field Sense.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #counterwork #utility

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can feel fresh excitation and lingering residue in your Element.*

You learn the Detect Residue I action
- You learn whether your attuned Element was evoked here recently, and roughly how intense it was (minor / moderate / major).
- You can follow the “scent” of residue as a trail with a Perception or Aetherics check (GM sets difficulty).
