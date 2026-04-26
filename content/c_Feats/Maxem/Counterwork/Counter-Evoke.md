---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: Residue Analyst
Attribute Prerequisite:
  - CON 2
Skill Prerequisite:
  - Aetherics (Skilled)
Anti Requisite: ''
description: >-
  You can snap your Element into opposition and cancel another evocation
  mid-form.
tags:
  - feat
  - maxem
  - counterwork
  - reaction
file.name: Counter-Evoke
file.path: c_Feats/Maxem/Counterwork/Counter-Evoke.md
file.folder: c_Feats/Maxem/Counterwork
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #counterwork #reaction

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can snap your Element into opposition and cancel another evocation mid-form.*

**Reaction**  (2 AP)
**Trigger:** A creature within 10 paces makes an Evocation.  
**Requirements:** 
- You can affect the target (area of effect, within range, etc.).
- You are of the same or opposite element.

Cost is equal to 2 less MP than used by the initial Evoker (to a minimum of 1). Complexity is equal to 2 less than the evocation. 

Make an Evocation roll
- If your result meets or exceeds the opponent’s Evocation result, you counter it:
	- The manifold blends into its surroundings and its Mana is spent.


