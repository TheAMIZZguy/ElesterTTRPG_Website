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
  Agility: Trained
Anti Requisite: []
description: |
  You can use the Redirective tag actively.

  Trigger: A melee attack **fails** against you.
  Effect: You may impose Off-Guard on the attacker.

  Without this feat, Redirective is inactive for you.
file.name: Redirective Defence Technique
file.path: >-
  d_Components/ChatGPT/Martial/02. Techniques/Armour/Redirective Defence
  Technique.md
file.folder: d_Components/ChatGPT/Martial/02. Techniques/Armour
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #armour #technique #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You can use the Redirective tag actively.

Trigger: A melee attack **fails** against you.
Effect: You may impose Off-Guard on the attacker.

Without this feat, Redirective is inactive for you.
*
