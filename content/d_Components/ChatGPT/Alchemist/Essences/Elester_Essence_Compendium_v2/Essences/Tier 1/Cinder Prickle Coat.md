---
type: Essence
tier: 1
essence-type: Caustic
delivery: Injury (Coat/Dart)
defense: PD
AP-cost: 1 (coat)
range: Touch
area: —
onset: On delivery (on hit/infliction)
duration: As listed
reagents:
  - Caustic
  - Binder
  - Ground Catalyst
named-reagents: null
tags:
  - binder
  - caustic
  - essence
  - ground-catalyst
  - injury
  - pd
  - tier-1
description: Target takes -10 ft speed for 1 round.
price: TODO
chance-of-detection: 0%
file.name: Needle Haze Coat
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Needle Haze Coat.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#binder #caustic #essence #ground-catalyst #injury #pd #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Injury (Coat/Dart) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Caustic, Binder, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: On delivery (on hit/infliction) <br> **Duration**: As listed |  |

## Description
*Target takes -10 ft speed for 1 round.*

## Application
Guaranteed once delivered into a wound.
- Delivery trigger (GM default): the coated strike/dart must deal at least **1 damage after reduction**.
- Once delivered: essence applies at brewed **Potency** (immediate unless it lists an Onset).
- Antidotes/cleanser effects can still prevent or reduce effects if taken in time.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 2d6 damage. Also Target takes -10 ft speed for 1 round. |
| **Standard** | 1d6 damage. Target takes -10 ft speed for 1 round. |
| **Diluted** | 1d4 damage. Target takes -9 ft speed for 1 round. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
