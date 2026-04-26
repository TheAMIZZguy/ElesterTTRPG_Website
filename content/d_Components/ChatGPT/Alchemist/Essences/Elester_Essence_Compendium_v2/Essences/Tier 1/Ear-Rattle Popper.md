---
type: Essence
tier: 1
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
named-reagents: null
tags:
  - essence
  - ground-catalyst
  - irritant
  - md
  - shatter
  - tier-1
  - volatile
description: A sharp concussive pop designed to overwhelm hearing.
price: TODO
chance-of-detection: 0%
file.name: Ear-Rattle Popper
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Ear-Rattle Popper.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#essence #ground-catalyst #irritant #md #shatter #tier-1 #volatile

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Shatter (Vial) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Irritant, Volatile, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 20 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 5-ft burst <br> **Onset**: Immediate (on shatter) <br> **Duration**: Instant (plus any residue/area) |  |

## Description
*A sharp concussive pop designed to overwhelm hearing.*

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
| **Potent** | Overwhelmed (Hearing) 30 seconds; also -1 to reaction capacity next round (GM). |
| **Standard** | Overwhelmed (Hearing) 30 seconds. |
| **Diluted** | Overwhelmed (Hearing) 30 seconds. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
