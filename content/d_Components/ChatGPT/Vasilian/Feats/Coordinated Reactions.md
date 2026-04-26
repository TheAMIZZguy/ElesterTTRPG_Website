---
type: feat
class: Vasilian
Level Prerequisite: 6
tags:
  - vasilian
  - herald
  - teamwork
Feat Prerequisite: Herald Dedication
Attribute Prerequisite: WIT 3+
Skill Prerequisite: null
Anti Requisite: null
description: Your callouts help allies spend reactions efficiently.
file.name: Coordinated Reactions
file.path: d_Components/ChatGPT/Vasilian/Feats/Coordinated Reactions.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #herald #teamwork

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your callouts help allies spend reactions efficiently.*

---
When you have a Mark on a creature, allies who can perceive you gain **+1** to meet reaction thresholds against that creature.

This does not grant extra reactions; it just helps allies use the reactions they already have.

**Scaling**
- **Legendary**: +2 instead.
