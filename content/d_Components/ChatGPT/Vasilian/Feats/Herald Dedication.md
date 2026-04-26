---
type: feat
class: Vasilian
Level Prerequisite: 2
tags:
  - vasilian
  - herald
  - dedication
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: WIT 2+
Skill Prerequisite: Persuasion (Trained) OR Tactics (Trained)
Anti Requisite: null
description: 'Your reads become orders, and your orders become outcomes.'
file.name: Herald Dedication
file.path: d_Components/ChatGPT/Vasilian/Feats/Herald Dedication.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #herald #dedication

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your reads become orders, and your orders become outcomes.*

---
You gain access to [[Vasilian Rally Thread]].

**Dedication rule:** After taking a dedication feat, you can’t take another dedication feat until you’ve taken **two additional feats** with this dedication’s tag (GM enforcement).
