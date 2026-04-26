---
type: Essence
tier: 3
essence-type: Irritant
delivery: Shatter (Vial)
defense: MD
AP-cost: 1
range: 20 ft
area: 5-ft burst
onset: Immediate (on shatter)
duration: Instant (plus any residue/area)
reagents:
  - Irritant
  - Volatile
  - Ground Catalyst
named-reagents:
  - Moon-Lime
tags:
  - essence
  - ground-catalyst
  - irritant
  - md
  - named-reagent
  - shatter
  - tier-3
  - volatile
description: Target is Overwhelmed (Sight) 1 round (GM).
price: TODO
chance-of-detection: 0%
file.name: Bold Tea Vial
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Bold Tea Vial.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#essence #ground-catalyst #irritant #md #named-reagent #shatter #tier-3 #volatile

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Shatter (Vial) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Irritant, Volatile, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 20 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 5-ft burst <br> **Onset**: Immediate (on shatter) <br> **Duration**: Instant (plus any residue/area) |  |

## Description
*Target is Overwhelmed (Sight) 1 round (GM).*

## Application
**Thrown Application Check** (roll-to-effect):
- Make a thrown-style check against the target's listed **Defense**.
- Use your **Thrown Weapon** proficiency (martial tree) and the same attribute you use for thrown weapons (usually **DEX**).
- Success: essence applies at brewed **Potency**.
- Failure: no effect (vial still shatters; residue only if the essence says so).
- Crits: treat as Success/Failure unless the essence says otherwise.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 4d6 damage. Also Target is Overwhelmed (Sight) 1 round (GM). |
| **Standard** | 3d6 damage. Target is Overwhelmed (Sight) 1 round (GM). |
| **Diluted** | 2d6 damage. Target is Overwhelmed (Sight) 1 round (GM). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
