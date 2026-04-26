---
type: feat
class: Vasilian
Level Prerequisite: 10
tags:
  - vasilian
  - foundation
Feat Prerequisite: Vasilian Discipline
Attribute Prerequisite: 'CHA 3+, WIT 2+'
Skill Prerequisite: Aetherics (Mastered)
Anti Requisite: null
description: 'Even under stress, you don’t lose the thread — you tighten it.'
file.name: Vasilian Virtuoso
file.path: d_Components/ChatGPT/Vasilian/Feats/Vasilian Virtuoso.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #foundation

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Even under stress, you don’t lose the thread — you tighten it.*

---
Your Vasilian Mastery becomes **Mastered**.

## Hold Under Disruption
When you would be forced to Release Threads due to a disruption (GM call), you may keep **one** Thread without counting it toward Strain until the start of your next turn (you still cannot exceed Max Strain after that point).
