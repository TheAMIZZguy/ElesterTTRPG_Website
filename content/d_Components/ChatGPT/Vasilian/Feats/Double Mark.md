---
type: feat
class: Vasilian
Level Prerequisite: 6
tags:
  - vasilian
  - coverage
Feat Prerequisite: Vasilian Discipline
Attribute Prerequisite: null
Skill Prerequisite: null
Anti Requisite: null
description: You can track two focal points as one picture.
file.name: Double Mark
file.path: d_Components/ChatGPT/Vasilian/Feats/Double Mark.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #coverage

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You can track two focal points as one picture.*

---
When you use [[Vasilian Mark]], you may also Mark a **second** target within 10 paces of the first (or an immediate attached scene-feature like their shield or mount).

This creates separate Threads and counts toward Strain normally.

**Scaling**
- **Mastered**: The second Mark does not cost an extra Thread **once per round**.
- **Legendary**: The second Mark can be up to 30 paces from the first.
