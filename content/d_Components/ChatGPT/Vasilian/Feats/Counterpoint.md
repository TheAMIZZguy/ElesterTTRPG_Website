---
type: feat
class: Vasilian
Level Prerequisite: 6
tags:
  - vasilian
  - teamwork
  - domains
Feat Prerequisite: Vasilian Discipline
Attribute Prerequisite: CHA 2+
Skill Prerequisite: null
Anti Requisite: null
description: You can’t cast — but you can still see where a cast will break.
file.name: Counterpoint
file.path: d_Components/ChatGPT/Vasilian/Feats/Counterpoint.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #teamwork #domains

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You can’t cast — but you can still see where a cast will break.*

---
## Counter-Evoke Support
When a creature you have Marked begins an evocation within 60 paces and you have at least one Tune Thread active, choose one ally attempting a counter-evoke/disruption. They gain **+1** on that attempt.

**Scaling**
- **Mastered**: +2 if you are Tuned to the evocation’s Field.
- **Legendary**: Once per round, you may also impose −1 on the caster’s roll (if the system uses opposed rolls).
