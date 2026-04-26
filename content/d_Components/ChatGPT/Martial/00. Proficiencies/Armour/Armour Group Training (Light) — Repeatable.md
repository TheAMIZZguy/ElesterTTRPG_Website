---
Level Prerequisite: 1
tags:
  - martial
  - armour
  - proficiency
  - repeatable
Feat Prerequisite: []
Attribute Prerequisite: {}
Skill Prerequisite:
  Fortitude: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 armour group you do not already know: Cloth,
  Composite, Leather, Steel, Wood.


  You may wear **Light** armour of that group without “no proficiency”
  penalties.


  Unarmoured clothing is always usable without feats.


  Scaling knob (pick one and commit):

  - Fortitude scaling: Trained for 1–2 groups, Skilled for 3–4, Mastered for 5+.

  - Or STA scaling: require STA ≥ (# armour groups you already know).
file.name: Armour Group Training (Light) — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/00. Proficiencies/Armour/Armour Group Training
  (Light) — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/00. Proficiencies/Armour
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #armour #proficiency #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 armour group you do not already know: Cloth, Composite, Leather, Steel, Wood.

You may wear **Light** armour of that group without “no proficiency” penalties.

Unarmoured clothing is always usable without feats.

Scaling knob (pick one and commit):
- Fortitude scaling: Trained for 1–2 groups, Skilled for 3–4, Mastered for 5+.
- Or STA scaling: require STA ≥ (# armour groups you already know).
*
