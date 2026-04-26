---
type: feat
class: Vasilian
Level Prerequisite: 2
tags:
  - vasilian
  - precision
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: null
Skill Prerequisite: Aetherics (Trained)
Anti Requisite: null
description: 'A microexpression, a breath, a weight shift — it’s enough.'
file.name: Live Read
file.path: d_Components/ChatGPT/Vasilian/Feats/Live Read.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #precision

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*A microexpression, a breath, a weight shift — it’s enough.*

---
When you succeed on a CHA vs MD/AD roll from a Vasilian action, you also learn one immediate “tell” (choose or GM chooses):
- Their next action type (attack / move / interact / speak / cast)
- An emotional state shift
- The object of focus they’re tracking

**Scaling**
- **Skilled**: Learn two tells.
- **Mastered**: Learn one tell even on a failure.
- **Legendary**: Learn a tell from a crowd (GM picks a representative target).
