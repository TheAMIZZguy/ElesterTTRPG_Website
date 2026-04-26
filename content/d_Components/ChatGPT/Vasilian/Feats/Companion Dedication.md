---
type: feat
class: Vasilian
Level Prerequisite: 2
tags:
  - vasilian
  - companion
  - dedication
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: CHA 2+
Skill Prerequisite: Animal Handling (Trained)
Anti Requisite: null
description: You build plans that include another mind.
file.name: Companion Dedication
file.path: d_Components/ChatGPT/Vasilian/Feats/Companion Dedication.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #companion #dedication

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You build plans that include another mind.*

---
You gain one **Companion** (use your campaign’s Companion rules / GM stat block). The Companion understands your cues and counts as an allied creature.

## Threaded Command
When you Mark your Companion, that Mark does not count toward Strain.

**Dedication rule:** After taking a dedication feat, you can’t take another dedication feat until you’ve taken **two additional feats** with this dedication’s tag (GM enforcement).
