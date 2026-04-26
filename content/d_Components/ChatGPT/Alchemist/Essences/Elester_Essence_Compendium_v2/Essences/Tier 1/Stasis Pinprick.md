---
type: Essence
tier: 1
essence-type: Toxin
delivery: Injury (Coat/Dart)
defense: PD
AP-cost: 1 (coat)
range: Touch
area: —
onset: On delivery (on hit/infliction)
duration: 1 minute
reagents:
  - Toxin
  - Binder
  - Ground Catalyst
named-reagents: null
tags:
  - binder
  - essence
  - ground-catalyst
  - injury
  - pd
  - tier-1
  - toxin
description: A pinprick toxin that shuts off reactions.
price: TODO
chance-of-detection: 0%
file.name: Stasis Pinprick
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Stasis Pinprick.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#binder #essence #ground-catalyst #injury #pd #tier-1 #toxin

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Injury (Coat/Dart) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Toxin, Binder, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: On delivery (on hit/infliction) <br> **Duration**: 1 minute |  |

## Description
*A pinprick toxin that shuts off reactions.*

## Application
Guaranteed once delivered into a wound.
- Delivery trigger (GM default): the coated strike/dart must deal at least **1 damage after reduction**.
- Once delivered: essence applies at brewed **Potency** (immediate unless it lists an Onset).
- Antidotes/cleanser effects can still prevent or reduce effects if taken in time.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | No reactions for 1 minute. |
| **Standard** | No reactions until end of next turn. |
| **Diluted** | No reactions until end of next turn. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
