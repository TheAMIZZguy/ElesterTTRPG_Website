---
Level Prerequisite: 1
tags:
  - martial
  - weapon
  - proficiency
  - repeatable
Feat Prerequisite: []
Attribute Prerequisite: {}
Skill Prerequisite:
  Tactics: Trained
Anti Requisite: []
description: >
  **Repeatable.** Choose 1 weapon group you do not already know: Bladed,
  Brawling, Flexible, Impact, Ranged, Shield, Sweeping, Throwing, Thrusting.


  You gain **Simple proficiency** in that group.

  - Your proficiency contribution to attack rolls with **Simple** weapons in
  that group becomes **+2**.


  Improvised weapons are always usable at +0 (no feat) and never trigger CSE.


  Scaling knob (pick one and commit):

  - Tactics scaling: Trained for your 1st–2nd weapon group, Skilled for 3rd–4th,
  Mastered for 5+.

  - WIT/KNO scaling: require WIT ≥ (# weapon groups you already know).
file.name: Weapon Group Training (Simple) — Repeatable
file.path: >-
  d_Components/ChatGPT/Martial/00. Proficiencies/Weapons/Weapon Group Training
  (Simple) — Repeatable.md
file.folder: d_Components/ChatGPT/Martial/00. Proficiencies/Weapons
---
# —  *(Level `=choice(this["Level Prerequisite"],0,0)`)*

#martial #weapon #proficiency #repeatable

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
***Repeatable.** Choose 1 weapon group you do not already know: Bladed, Brawling, Flexible, Impact, Ranged, Shield, Sweeping, Throwing, Thrusting.

You gain **Simple proficiency** in that group.
- Your proficiency contribution to attack rolls with **Simple** weapons in that group becomes **+2**.

Improvised weapons are always usable at +0 (no feat) and never trigger CSE.

Scaling knob (pick one and commit):
- Tactics scaling: Trained for your 1st–2nd weapon group, Skilled for 3rd–4th, Mastered for 5+.
- WIT/KNO scaling: require WIT ≥ (# weapon groups you already know).
*
