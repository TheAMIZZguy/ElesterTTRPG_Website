---
type: feat
class: Vasilian
Level Prerequisite: 4
tags:
  - vasilian
  - analyst
  - domains
Feat Prerequisite: Analyst Dedication
Attribute Prerequisite: null
Skill Prerequisite: null
Anti Requisite: null
description: 'Your Marks become a tracking line, not just a combat read.'
file.name: Hunter's Thread
file.path: d_Components/ChatGPT/Vasilian/Feats/Hunter's Thread.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #analyst #domains

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your Marks become a tracking line, not just a combat read.*

---
When you Mark a creature, you also learn:
- its current movement mode and approximate pace
- whether it is wounded/tired (coarse read)
- whether it is acting with intent to flee, fight, or stall (coarse read)
