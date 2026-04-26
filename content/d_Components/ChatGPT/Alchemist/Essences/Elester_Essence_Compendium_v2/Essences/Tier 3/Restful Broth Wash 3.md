---
type: Essence
tier: 3
essence-type: Fortifier
delivery: Contact (Doused)
defense: PD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Fortifier
  - Binder
  - Ground Catalyst
named-reagents:
  - Blight Bloom
tags:
  - binder
  - contact
  - essence
  - fortifier
  - ground-catalyst
  - named-reagent
  - pd
  - tier-3
description: +1 to next attack roll
price: TODO
chance-of-detection: 0%
file.name: Restful Broth Wash 3
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Restful Broth Wash 3.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#binder #contact #essence #fortifier #ground-catalyst #named-reagent #pd #tier-3

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Fortifier, Binder, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*+1 to next attack roll*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | +1 to next attack roll (strong). |
| **Standard** | +1 to next attack roll. |
| **Diluted** | +1 to next attack roll. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
