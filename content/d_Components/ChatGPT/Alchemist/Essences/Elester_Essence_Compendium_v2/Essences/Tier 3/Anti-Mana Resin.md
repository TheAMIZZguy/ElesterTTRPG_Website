---
type: Essence
tier: 3
essence-type: Stabilizer
delivery: Contact (Doused)
defense: AD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: 1 minute
reagents:
  - Stabilizer
  - Binder
  - Aetherical Catalyst
named-reagents:
  - Null Crystal
tags:
  - ad
  - aetherical-catalyst
  - binder
  - contact
  - essence
  - named-reagent
  - stabilizer
  - tier-3
description: Aetherical resin that suppresses field coherence.
price: TODO
chance-of-detection: 0%
file.name: Anti-Mana Resin
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Anti-Mana Resin.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#ad #aetherical-catalyst #binder #contact #essence #named-reagent #stabilizer #tier-3

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: AD | **Price**: TODO |
| **Reagents**: Stabilizer, Binder, Aetherical Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: 1 minute |  |

## Description
*Aetherical resin that suppresses field coherence.*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | -3 AD for 1 minute (or until cleansed). |
| **Standard** | -2 AD for 1 minute (or until cleansed). |
| **Diluted** | -1 AD for 1 minute (or until cleansed). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
