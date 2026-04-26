---
type: Essence
tier: 1
essence-type: Irritant
delivery: Contact (Doused)
defense: MD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Irritant
  - Binder
  - Ground Catalyst
named-reagents: null
tags:
  - binder
  - contact
  - essence
  - ground-catalyst
  - irritant
  - md
  - tier-1
description: A contact irritant that spikes anxiety.
price: TODO
chance-of-detection: 0%
file.name: Panic Prickle
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Panic Prickle.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#binder #contact #essence #ground-catalyst #irritant #md #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Irritant, Binder, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*A contact irritant that spikes anxiety.*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | -1 to all mental actions for 1 round. |
| **Standard** | -1 to the next mental action. |
| **Diluted** | -1 to the next mental action. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
