---
Level Prerequisite: 3
tags:
  - martial
  - weapon
  - proficiency
  - repeatable
Feat Prerequisite:
  - - - 00. Proficiencies/Weapons/Weapon Group Training (Simple) — Repeatable
Attribute Prerequisite: {}
Skill Prerequisite:
  Tactics: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 weapon group you have **Simple** proficiency in.


  You gain **Martial proficiency** in that group.

  - Your proficiency contribution to attack rolls with **Martial** weapons in
  that group becomes **+4**.


  If you use an Advanced weapon in that group without Advanced training, you are
  **under-proficient** and your proficiency contribution becomes **+0** (per
  Weapons rules).
file.name: Weapon Training (Martial) — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/00. Proficiencies/Weapons/Weapon Training
  (Martial) — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/00. Proficiencies/Weapons
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #weapon #proficiency #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 weapon group you have **Simple** proficiency in.

You gain **Martial proficiency** in that group.
- Your proficiency contribution to attack rolls with **Martial** weapons in that group becomes **+4**.

If you use an Advanced weapon in that group without Advanced training, you are **under-proficient** and your proficiency contribution becomes **+0** (per Weapons rules).
*
