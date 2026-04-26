---
type: feat
class: Maxem
Level Prerequisite: 4
Feat Prerequisite: Ice Technique - Practical
Attribute Prerequisite:
  - "\_INT 1"
Skill Prerequisite: null
Anti Requisite: ''
description: You build structures that hold under stress.
tags:
  - feat
  - maxem
  - element
  - ice
file.name: Ice - Preservation
file.path: c_Feats/Maxem/Elements/Ice/Ice - Preservation.md
file.folder: c_Feats/Maxem/Elements/Ice
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #ice

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You build structures that hold under stress.*

You can encase an object or willing creature in a thin layer of ice. While encased:
- Objects do not decay, rust, or degrade.
- A creature is in a state similar to [[Petrified]] but of Ice
	- A creature is in a state of suspended metabolism: they do not need food, water, or air, and do not bleed out. They cannot act.
	- The ice casing has HP equal to your CON × 4 and BT 2.
	- Bulk does not double
- 1 MP per cubic pace
- The duration of any duration manifolds is increased tenfold

Breaking the casing spending 4 AP to consciously dissolve it, or when the manifold is no longer sustained ends the effect immediately with no harm.
- Dissolving it takes 1 minute
