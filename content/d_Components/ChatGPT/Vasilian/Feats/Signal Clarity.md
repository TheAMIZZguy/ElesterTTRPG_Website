---
type: feat
class: Vasilian
Level Prerequisite: 4
tags:
  - vasilian
  - precision
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: null
Skill Prerequisite: null
Anti Requisite: null
description: You stop falling for your own worst reads.
file.name: Signal Clarity
file.path: d_Components/ChatGPT/Vasilian/Feats/Signal Clarity.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #precision

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You stop falling for your own worst reads.*

---
When you would critically fail (−10) a CHA vs MD/AD roll from a Vasilian action, treat it as a normal failure instead.

**Scaling**
- **Mastered**: Once per round, when you fail such a roll, you may reroll and take the new result.
- **Legendary**: You can also negate one normal failure per round (treat as success) if you have at least 2 Threads on the target (Tune+Mark counts).
