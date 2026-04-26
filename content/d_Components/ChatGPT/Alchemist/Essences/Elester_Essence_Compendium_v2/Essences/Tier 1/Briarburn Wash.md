---
type: Essence
tier: 1
essence-type: Mender
delivery: Contact (Doused)
defense: PD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Mender
  - Binder
  - Ground Catalyst
named-reagents: null
tags:
  - binder
  - contact
  - essence
  - ground-catalyst
  - mender
  - pd
  - tier-1
description: Restore 1d6 HP
price: TODO
chance-of-detection: 0%
file.name: Cold Vein Wash 2
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Cold Vein Wash 2.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#binder #contact #essence #ground-catalyst #mender #pd #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Mender, Binder, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*Restore 1d6 HP*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | Restore 1d6 HP (strong). |
| **Standard** | Restore 1d6 HP. |
| **Diluted** | Restore 1d4 HP. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
