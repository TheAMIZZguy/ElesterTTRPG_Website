---
type: Essence
tier: 1
essence-type: Irritant
delivery: Inhaled (Dust/Smoke)
defense: PD
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
  - pd
  - tier-1
description: Thick smoke that forces breathing discipline.
price: TODO
chance-of-detection: 0%
file.name: Coughing Smoke
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Coughing Smoke.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#aspirant #essence #ground-catalyst #inhaled #irritant #pd #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Inhaled (Dust/Smoke) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Irritant, Aspirant, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 15 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 10-ft burst cloud <br> **Onset**: On exposure (enter/start turn) <br> **Duration**: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round |  |

## Description
*Thick smoke that forces breathing discipline.*

## Application
No roll-to-effect.
- A creature/object is **exposed** if it shares a space with the cloud **at the end of its turn**.
- A creature may spend **1 AP** to **Hold Breath** until the start of its next turn; if it does, it is not exposed by inhalation during that window.
- On exposure: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | Target must spend 2 AP next turn to steady breathing or take -1 to all actions that turn. |
| **Standard** | Target must spend 1 AP next turn to steady breathing or take -1 to all actions that turn. |
| **Diluted** | Target must spend 1 AP next turn to steady breathing or take -1 to all actions that turn. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
