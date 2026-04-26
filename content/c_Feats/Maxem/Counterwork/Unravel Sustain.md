---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Counter-Evoke
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can unhook a sustained effect from its evoker.
tags:
  - feat
  - maxem
  - counterwork
  - reaction
file.name: Unravel Sustain
file.path: c_Feats/Maxem/Counterwork/Unravel Sustain.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can unhook a sustained effect from its evoker.*


Action 1 AP
**Requirements:** 
- On a sustained manifold
- You can affect the target (area of effect, within range, etc.).
- You are of the same or opposite element.
- You know the location of the manifold

Make an Evocation roll
- If your result meets or exceeds the opponent’s Evocation result, you counter it:
	- The sustained effect ends immediately (even if the caster would normally keep paying Mana).
	- The manifold blends into its surroundings


Cost is 5 MP, 1 Complexity. This does not count as an evocation.
If you know what the manifold is (possibly from a residue analysis) then you gain a +2 Status Bonus towards the roll

