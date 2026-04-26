---
Level Prerequisite: 3
tags:
  - martial
  - armour
  - technique
  - reaction
Feat Prerequisite: []
Attribute Prerequisite: {}
Skill Prerequisite:
  Tactics: Trained
Anti Requisite: []
description: |
  You can use the Positional tag actively.

  If your armour has Positional:
  - Spend 1 AP to halve damage taken; the prevented half goes to your armour.

  Without this feat, Positional is inactive for you.
file.name: Positional Defence Technique
file.path: >-
  d_Components/ChatGPT/Martial/02. Techniques/Armour/Positional Defence
  Technique.md
file.folder: d_Components/ChatGPT/Martial/02. Techniques/Armour
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #armour #technique #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You can use the Positional tag actively.

If your armour has Positional:
- Spend 1 AP to halve damage taken; the prevented half goes to your armour.

Without this feat, Positional is inactive for you.
*
