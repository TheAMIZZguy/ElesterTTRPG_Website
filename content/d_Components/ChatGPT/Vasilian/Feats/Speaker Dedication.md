---
type: feat
class: Vasilian
Level Prerequisite: 2
tags:
  - vasilian
  - speaker
  - dedication
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: CHA 2+
Skill Prerequisite: Persuasion (Trained); Language x (Trained)
Anti Requisite: null
description: You read sincerity like a blade reads grain.
file.name: Speaker Dedication
file.path: d_Components/ChatGPT/Vasilian/Feats/Speaker Dedication.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #speaker #dedication

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You read sincerity like a blade reads grain.*

---
You gain access to [[Vasilian Catch Contradiction]].

**Dedication rule:** After taking a dedication feat, you can’t take another dedication feat until you’ve taken **two additional feats** with this dedication’s tag (GM enforcement).
