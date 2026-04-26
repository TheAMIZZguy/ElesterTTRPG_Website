---
type: feat
class: Maxem
Level Prerequisite: 8
Feat Prerequisite: Manifold Attunement
Attribute Prerequisite: CON 3
Skill Prerequisite: Aethermancy (Mastered)
Anti Requisite: ''
description: 'You can maintain a small, constant manipulation without exhausting yourself.'
tags:
  - feat
  - maxem
  - core
  - utility
  - passive
file.name: Fieldwalking
file.path: c_Feats/Maxem/Core/Fieldwalking.md
file.folder: c_Feats/Maxem/Core
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #core #utility #passive

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You can maintain a small, constant manipulation without exhausting yourself.*

Choose one minor, always-on expression of your Element (GM-approved), such as:
- keep your hands warm/cool,
- dim/brighten a small lantern-like glow,
- keep a cup of water still,
- slow the spread of rot on supplies.

This effect costs no Mana, but it cannot meaningfully affect combat without further evocation.
