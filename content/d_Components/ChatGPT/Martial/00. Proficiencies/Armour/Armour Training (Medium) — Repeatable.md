---
Level Prerequisite: 3
tags:
  - martial
  - armour
  - proficiency
  - repeatable
Feat Prerequisite:
  - - - 00. Proficiencies/Armour/Armour Group Training (Light) — Repeatable
Attribute Prerequisite: {}
Skill Prerequisite:
  Fortitude: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 armour group you have Light training in.


  You may wear **Medium** armour of that group without under-proficiency
  penalties.


  If you wear Heavy/Advanced in that group without the corresponding training,
  you are under-proficient (casting penalty becomes -1).
file.name: Armour Training (Medium) — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/00. Proficiencies/Armour/Armour Training (Medium)
  — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/00. Proficiencies/Armour
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #armour #proficiency #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 armour group you have Light training in.

You may wear **Medium** armour of that group without under-proficiency penalties.

If you wear Heavy/Advanced in that group without the corresponding training, you are under-proficient (casting penalty becomes -1).
*
