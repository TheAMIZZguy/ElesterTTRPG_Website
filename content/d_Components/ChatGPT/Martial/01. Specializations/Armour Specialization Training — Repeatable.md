---
Level Prerequisite: 3
tags:
  - martial
  - armour
  - ase
  - repeatable
Feat Prerequisite:
  - - - 00. Proficiencies/Armour/Armour Training (Medium) — Repeatable
Attribute Prerequisite: {}
Skill Prerequisite:
  Fortitude: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 armour group you have Medium training in: Cloth,
  Composite, Leather, Steel, Wood.


  While wearing Medium/Heavy/Advanced armour of that group, you may activate
  that group’s **Armour Specialization Effect (ASE)**.

  You can always choose not to apply ASE.
file.name: Armour Specialization Training — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/01. Specializations/Armour Specialization
  Training — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/01. Specializations
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #armour #ase #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 armour group you have Medium training in: Cloth, Composite, Leather, Steel, Wood.

While wearing Medium/Heavy/Advanced armour of that group, you may activate that group’s **Armour Specialization Effect (ASE)**.
You can always choose not to apply ASE.
*
