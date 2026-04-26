---
type: Essence
tier: 1
essence-type: Irritant
delivery: Inhaled (Dust/Smoke)
defense: MD
AP-cost: 1
range: 15 ft
area: 10-ft burst cloud
onset: On exposure (enter/start turn)
duration: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round
reagents:
  - Irritant
  - Aspirant
  - Ground Catalyst
named-reagents: null
tags:
  - aspirant
  - essence
  - ground-catalyst
  - inhaled
  - irritant
  - md
  - tier-1
description: Target takes -1 to attacks for 1 round.
price: TODO
chance-of-detection: 0%
file.name: Wrench-Etch Dust
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Wrench-Etch Dust.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#aspirant #essence #ground-catalyst #inhaled #irritant #md #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Inhaled (Dust/Smoke) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Irritant, Aspirant, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 15 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 10-ft burst cloud <br> **Onset**: On exposure (enter/start turn) <br> **Duration**: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round |  |

## Description
*Target takes -1 to attacks for 1 round.*

## Application
No roll-to-effect.
- A creature/object is **exposed** if it shares a space with the cloud **at the end of its turn**.
- A creature may spend **1 AP** to **Hold Breath** until the start of its next turn; if it does, it is not exposed by inhalation during that window.
- On exposure: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 2d6 damage. Also Target takes -1 to attacks for 1 round. |
| **Standard** | 1d6 damage. Target takes -1 to attacks for 1 round. |
| **Diluted** | 1d4 damage. Target takes -1 to attacks for 1 round. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
