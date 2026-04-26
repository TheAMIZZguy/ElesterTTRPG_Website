---
type: feat
class: Vasilian
Level Prerequisite: 18
tags:
  - vasilian
  - capstone
  - translation
Feat Prerequisite: Vasilian Sage
Attribute Prerequisite: WIT 4+
Skill Prerequisite: null
Anti Requisite: null
description: Your callout becomes so clean it changes outcomes outright.
file.name: Perfect Translation
file.path: d_Components/ChatGPT/Vasilian/Feats/Perfect Translation.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #capstone #translation

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your callout becomes so clean it changes outcomes outright.*

---
Once per round, when you would grant a bonus from a Vasilian Exploit to an ally, you may instead choose one:
- Grant a reroll (take the new result), OR
- Turn a failure into a success (not a critical success).

You must declare this immediately after seeing the roll.
