---
type: Essence
tier: 1
essence-type: Irritant
delivery: Contact (Doused)
defense: PD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Irritant
  - Solvent
  - Ground Catalyst
named-reagents: null
tags:
  - contact
  - essence
  - ground-catalyst
  - irritant
  - pd
  - solvent
  - tier-1
description: A thin oil that makes footing unreliable.
price: TODO
chance-of-detection: 0%
file.name: Slick-Step Oil
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Slick-Step Oil.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#contact #essence #ground-catalyst #irritant #pd #solvent #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Irritant, Solvent, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*A thin oil that makes footing unreliable.*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | First 5 ft moved next turn is difficult terrain; -1 to movement checks for 1 round. |
| **Standard** | -1 to movement checks for 1 round. |
| **Diluted** | -1 to movement checks for 1 round. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
