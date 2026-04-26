---
Level Prerequisite: 3
tags:
  - martial
  - weapon
  - technique
  - control
Feat Prerequisite: []
Attribute Prerequisite: {}
Skill Prerequisite:
  Fortitude: Trained
Anti Requisite: []
description: >
  You can use weapon traits that convert maneuvers into weapon-based control:

  - Trip, Shove, Disarm, Grapple.


  If you wield a weapon with one of these traits and you are proficient with it,
  you may use the trait’s maneuver rules (Fortitude + weapon reach/range
  increment + item bonus) instead of generic maneuver rules.


  Without this feat, you must use generic maneuvers and don’t get the
  weapon-based benefits.
file.name: Control Implement Technique
file.path: >-
  d_Components/ChatGPT/Martial/02. Techniques/Weapons/Control Implement
  Technique.md
file.folder: d_Components/ChatGPT/Martial/02. Techniques/Weapons
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #weapon #technique #control

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You can use weapon traits that convert maneuvers into weapon-based control:
- Trip, Shove, Disarm, Grapple.

If you wield a weapon with one of these traits and you are proficient with it, you may use the trait’s maneuver rules (Fortitude + weapon reach/range increment + item bonus) instead of generic maneuver rules.

Without this feat, you must use generic maneuvers and don’t get the weapon-based benefits.
*
