---
type: Essence
tier: 3
essence-type: Caustic
delivery: Shatter (Vial)
defense: PD
AP-cost: 1
range: 20 ft
area: 5-ft burst
onset: Immediate (on shatter)
duration: 1 minute
reagents:
  - Caustic
  - Volatile
  - Ground Catalyst
named-reagents:
  - Void Slag
tags:
  - caustic
  - essence
  - ground-catalyst
  - named-reagent
  - pd
  - shatter
  - tier-3
  - volatile
description: A brutal caustic burst that eats armor and flesh.
price: TODO
chance-of-detection: 0%
file.name: Steel-Eater Vial
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Steel-Eater Vial.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#caustic #essence #ground-catalyst #named-reagent #pd #shatter #tier-3 #volatile

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Shatter (Vial) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Caustic, Volatile, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 20 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 5-ft burst <br> **Onset**: Immediate (on shatter) <br> **Duration**: 1 minute |  |

## Description
*A brutal caustic burst that eats armor and flesh.*

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
| **Potent** | 4d6 damage and -2 PD for 1 minute (or until cleansed). |
| **Standard** | 3d6 damage and -1 PD for 1 minute (or until cleansed). |
| **Diluted** | 2d6 damage and -1 PD for 1 minute (or until cleansed). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
