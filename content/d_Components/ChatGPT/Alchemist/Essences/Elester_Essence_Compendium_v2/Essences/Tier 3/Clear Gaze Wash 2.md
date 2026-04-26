---
type: Essence
tier: 3
essence-type: Purifier
delivery: Contact (Doused)
defense: PD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Purifier
  - Solvent
  - Ground Catalyst
named-reagents: null
tags:
  - contact
  - essence
  - ground-catalyst
  - pd
  - purifier
  - solvent
  - tier-3
description: End one residue/ongoing essence effect (GM)
price: TODO
chance-of-detection: 0%
file.name: Clear Gaze Wash 2
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Clear Gaze Wash 2.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#contact #essence #ground-catalyst #pd #purifier #solvent #tier-3

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Purifier, Solvent, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*End one residue/ongoing essence effect (GM)*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | Remove two relevant effects (or one severe) (GM). End one residue/ongoing essence effect (GM) |
| **Standard** | Remove one relevant effect (GM). End one residue/ongoing essence effect (GM) |
| **Diluted** | Remove one relevant effect (GM). End one residue/ongoing essence effect (GM) (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
