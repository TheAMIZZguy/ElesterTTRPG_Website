---
type: feat
class: Vasilian
Level Prerequisite: 4
tags:
  - vasilian
  - translation
  - teamwork
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: CHA 2+
Skill Prerequisite: null
Anti Requisite: null
description: Your read becomes useful the moment you share it.
file.name: Shared Thread
file.path: d_Components/ChatGPT/Vasilian/Feats/Shared Thread.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #translation #teamwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your read becomes useful the moment you share it.*

---
When you use a Vasilian Exploit that targets a Marked creature, you may designate one ally who can perceive your cue.

That ally may treat the target as **Marked** for the purpose of **one** action they take before the start of your next turn.

**Scaling**
- **Skilled**: Two allies.
- **Mastered**: The ally can use it for **two** actions instead of one.
- **Legendary**: The ally can use it for **one reaction** as well.
