---
type: feat
class: Maxem
Level Prerequisite: 12
Feat Prerequisite: Unravel Sustain
Attribute Prerequisite: CON 4
Skill Prerequisite: Aethermancy (Legendary)
Anti Requisite: ''
description: You can tear down an active threatening manifold.
tags:
  - feat
  - maxem
  - counterwork
  - reaction
file.name: Reactive Dispel
file.path: c_Feats/Maxem/Counterwork/Reactive Dispel.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can tear down an active threatening manifold.*


Action 1 AP
**Requirements:** 
- On a trigger manifold
- You can affect the target (area of effect, within range, etc.).
- You are of the same or opposite element.
- You know the location of the manifold

Make an Evocation roll
- If your result meets or exceeds the opponent’s Evocation result, you counter it:
	- The sustained effect ends immediately (even if the caster would normally keep paying Mana).
	- The manifold blends into its surroundings


Cost is 1 MP, 5 Complexity. This does not count as an evocation.
If you know what the manifold is (possibly from a residue analysis) then you gain a +2 Status Bonus towards the roll


Aside Note
- Should this be merged with Unravel Sustain?
