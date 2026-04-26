---
type: feat
class: Maxem
Level Prerequisite: 6
Feat Prerequisite: >-
  Maxem Initiate AND a Vasilian feat that grants deep Field-reading (e.g.,
  Vasilian Adept)
Attribute Prerequisite: 'CHA 2, CON 3'
Skill Prerequisite:
  - Aetherology (Trained)
Anti Requisite: Any Elemental Attunement II or higher
description: You use Field-reading discipline to force your mind to learn a second Element.
tags:
  - feat
  - maxem
  - magus
file.name: Magus Attunement
file.path: c_Feats/Maxem/Elements/Magus/Magus Attunement.md
file.folder: c_Feats/Maxem/Elements/Magus
---

# —  *(Level `=choice(this["Level Prerequisite"],this["Level Prerequisite"],0)`)*
#feat #maxem #magus

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---

*You use Field-reading discipline to force your mind to learn a second Element.*

You become a Magus candidate. Choose a second Element (different from your attunement).

You gain:
- Second Element Access: You may learn and evoke manifolds from that second Element.
- Balanced Study Rule: You must know at least x manifolds in every Element you can access before you learn x+1 manifolds in any one of them.  
  *(Example: if you can access 2 Elements, you must know 1 in each before learning a second in either.)*

Learn one Level 0–1 manifold from your new Element.
