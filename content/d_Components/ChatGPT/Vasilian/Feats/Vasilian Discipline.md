---
type: feat
class: Vasilian
Level Prerequisite: 5
tags:
  - vasilian
  - foundation
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: CHA 2+
Skill Prerequisite: Aetherics (Skilled)
Anti Requisite: null
description: You stop guessing and start committing.
file.name: Vasilian Discipline
file.path: d_Components/ChatGPT/Vasilian/Feats/Vasilian Discipline.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #foundation

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You stop guessing and start committing.*

---
Your Vasilian Mastery becomes **Skilled**.

Choose one:
- Increase **Aetherics** proficiency by 1 step, OR
- Increase **Perception** proficiency by 1 step.
