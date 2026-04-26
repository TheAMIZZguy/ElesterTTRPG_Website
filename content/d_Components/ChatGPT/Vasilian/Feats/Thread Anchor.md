---
type: feat
class: Vasilian
Level Prerequisite: 4
tags:
  - vasilian
  - coverage
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: PRE 2+
Skill Prerequisite: null
Anti Requisite: null
description: Your focus doesn’t fall apart just because the scene moves.
file.name: Thread Anchor
file.path: d_Components/ChatGPT/Vasilian/Feats/Thread Anchor.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #coverage

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*Your focus doesn’t fall apart just because the scene moves.*

---
## Mark Persistence
Losing line of sight does not end your Mark until **5 minutes** have passed (instead of 1 minute).

## Distraction Resistance
Minor distractions (GM call) don’t force you to Release Threads.

**Scaling**
- **Mastered**: You can keep a Mark through total cover for up to 5 minutes if you know the target stayed within 60 paces.
- **Legendary**: You can keep one Mark for 10 minutes even if the target leaves 60 paces, as long as you still know their general direction (GM adjudication).
