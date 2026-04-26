---
Level Prerequisite: 3
tags:
  - martial
  - weapon
  - cse
  - repeatable
Feat Prerequisite:
  - - - 00. Proficiencies/Weapons/Weapon Training (Martial) — Repeatable
Attribute Prerequisite: {}
Skill Prerequisite:
  Tactics: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 weapon group you have Martial proficiency in: Bladed,
  Brawling, Flexible, Impact, Ranged, Shield, Sweeping, Throwing, Thrusting.


  When you critically hit with a weapon of that group, you may apply that
  group’s **Critical Specialization Effect (CSE)**.

  You can always choose not to apply CSE.
file.name: Critical Specialization Training — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/01. Specializations/Critical Specialization
  Training — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/01. Specializations
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #weapon #cse #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 weapon group you have Martial proficiency in: Bladed, Brawling, Flexible, Impact, Ranged, Shield, Sweeping, Throwing, Thrusting.

When you critically hit with a weapon of that group, you may apply that group’s **Critical Specialization Effect (CSE)**.
You can always choose not to apply CSE.
*
