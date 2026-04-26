---
type: feat
class: Maxem
Level Prerequisite: 4
Feat Prerequisite: Weave Study
Attribute Prerequisite:
  - WIT 2
Skill Prerequisite: Aethermancy (Skilled)
Anti Requisite: ''
description: 'You learn to make smaller, cleaner evocations for the same result.'
tags:
  - feat
  - maxem
  - weave
  - economy
file.name: Economy Specialist
file.path: c_Feats/Maxem/Weaves/Economy Specialist.md
file.folder: c_Feats/Maxem/Weaves
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #weave #economy

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You learn to make smaller, cleaner evocations for the same result.*

Your first instance of [[Conserve]] or [[Anchor]] per round does not increase the Complexity.
