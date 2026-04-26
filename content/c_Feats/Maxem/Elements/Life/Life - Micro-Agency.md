---
type: feat
class: Maxem
Level Prerequisite: 10
Feat Prerequisite: Life Technique - Signature
Attribute Prerequisite:
  - CON 3
  - INT 1
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: You can give small things a will of their own.
tags:
  - feat
  - maxem
  - element
  - life
file.name: Life - Micro-Agency
file.path: c_Feats/Maxem/Elements/Life/Life - Micro-Agency.md
file.folder: c_Feats/Maxem/Elements/Life
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #element #life

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can give small things a will of their own.*

You may use [[Regenerate]] on plant-life around you to make it grow
* At GM discretion based on the amount of MP used, the total area of effect, and the specific plant

When you Evoke a Life manifold on an object (tool, weapon, rope, latch), you can temporarily grant it a simple programmed behavior (open/close, tighten, hold tension, pulse light, etc.) 
* This lasts for the duration of the manifold
	* Or if the duration is instant: can be for 1 round if in an encounter or 10 seconds if not 
* This includes Regenerate
* The behaviour never exceeds what the object could do physically.

Creatures you control through Animate, Vitalize, or Swarmlet gain +1 to all their defenses while within your Conscious Range.
