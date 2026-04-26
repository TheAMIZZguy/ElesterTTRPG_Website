---
type: feat
class: Vasilian
Level Prerequisite: 18
tags:
  - vasilian
  - capstone
  - coverage
Feat Prerequisite: Vasilian Sage
Attribute Prerequisite: null
Skill Prerequisite: null
Anti Requisite: null
description: 'For a moment, you hold more than anyone should.'
file.name: Threadmaster
file.path: d_Components/ChatGPT/Vasilian/Feats/Threadmaster.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #capstone #coverage

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*For a moment, you hold more than anyone should.*

---
Once per encounter, you may exceed Maximum Strain by **2** until the start of your next turn.
After that, you must immediately Release Threads down to Maximum Strain.
