---
type: feat
class: Maxem
Level Prerequisite: 2
Feat Prerequisite: Field Sense
Attribute Prerequisite:
  - WIT 1
Skill Prerequisite: Aetherology (Skilled)
Anti Requisite: ''
description: 'You can read residue as evidence: intent, direction, and technique.'
tags:
  - feat
  - maxem
  - counterwork
file.name: Residue Analyst
file.path: c_Feats/Maxem/Counterwork/Residue Analyst.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can read residue as evidence: intent, direction, and technique.*

When you use Field Sense to detect residue, you can also attempt to Identify the Manifold:
- With a successful Aetherology (or Aetherics) check, you learn the manifold-type (Launch, Transmute, etc.) and one notable weave component (Area, Range, Trigger, etc.), if present.
- On a critical success, you also learn the approximate MP and Complexity bands (low / medium / high).

You gain a +1 circumstance bonus to these checks if you personally know the manifold involved.
