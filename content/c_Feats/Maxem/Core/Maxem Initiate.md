---
type: feat
class: Maxem
Level Prerequisite: 1
Feat Prerequisite: ''
Attribute Prerequisite: CON 1
Skill Prerequisite: null
Anti Requisite: ''
description: 'You have learned to evoke a Field through will, anchors, and practiced intent.'
tags:
  - feat
  - maxem
  - core
file.name: Maxem Initiate
file.path: c_Feats/Maxem/Core/Maxem Initiate.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You have learned to evoke a Field through will, anchors, and practiced intent.*

**You become a Maxem.** You gain the following: ^80cc7a
- **Evoke**: You can evoke manifolds you know from your attuned Element (or from multiple Elements if you later become a Magus). 
	- You can evoke up to a Complexity of 2
	- You can use at most 2 Weaves on a manifold
- **Anchors**:  ^9b0f84
	- You must evoke manifolds with a physical anchor of Staff
	- You must evoke manifolds with a mental anchor of Spoken
- **Evocation Roll**: 
	- Your attribute and modifier for evocations is Connection (CON)
- **Chassis**: 
	- Learn 1 Manifold
	- Learn 1 Weave



**Training:** You become **Trained in Aethermancy** (if you were not already).


Choose ONE element to be attuned to, you may not change this later
* Fire
* Ice
* Life
* Death
* Flow
* Static
* Earth
* Blight
