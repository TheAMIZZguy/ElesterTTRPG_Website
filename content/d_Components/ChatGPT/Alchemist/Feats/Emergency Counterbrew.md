---
Tier: Mastered
Category: Defense
Summary: >-
  Stop an essence from taking effect at the last second—if you’re willing to
  risk a mishap.
Prerequisites:
  - - - Alchemist Dedication
  - Tool (Alchemy Kit) — Mastered
  - WIT 3+
  - WIL 3+
Actions: null
Reaction Cost: ◇
Trigger: A creature in Touch would be affected by an essence effect for the first time.
Requirements: You have reagents on hand and your kit accessible.
Frequency: null
tags:
  - alchemist-feat
  - defense
  - reaction
file.name: Emergency Counterbrew
file.path: d_Components/ChatGPT/Alchemist/Feats/Emergency Counterbrew.md
file.folder: d_Components/ChatGPT/Alchemist/Feats
---
# —  `=this['Tier']` / `=this['Category']`

#alchemist-feat #defense #reaction

**Prerequisites**: Alchemist Dedication, Tool (Alchemy Kit) — Mastered, WIT 3+, WIL 3+
**Reaction Cost**: `=this['Reaction Cost']`
**Requirements**: `=this['Requirements']`
**Trigger**: `=this['Trigger']`

---

*Stop an essence from taking effect at the last second—if you’re willing to risk a mishap.*

---
You attempt a **Quick-Brew** counter-essence as a reaction.

Make a Brew Check vs the triggering essence’s Tier (GM sets Tier if unknown).
- **Success**: the target gains **+2** to the relevant Defense vs that triggering effect.
- **Critical Success**: as success, and reduce any condition tier applied by **1** (minimum 0).

If this reaction produces a Mishap, resolve it immediately (mid-stack).
