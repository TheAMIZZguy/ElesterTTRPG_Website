---
type: feat
class: Vasilian
Level Prerequisite: 2
tags:
  - vasilian
  - analyst
  - dedication
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: KNO 2+
Skill Prerequisite: Perception (Trained)
Anti Requisite: null
description: You specialize in turning a single target into a solved problem.
file.name: Analyst Dedication
file.path: d_Components/ChatGPT/Vasilian/Feats/Analyst Dedication.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #analyst #dedication

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You specialize in turning a single target into a solved problem.*

---
You gain access to [[Vasilian Analyze Pattern]].

**Dedication rule:** After taking a dedication feat, you can’t take another dedication feat until you’ve taken **two additional feats** with this dedication’s tag (GM enforcement).
