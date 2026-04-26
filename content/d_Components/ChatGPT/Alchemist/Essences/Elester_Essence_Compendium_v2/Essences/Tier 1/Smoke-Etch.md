---
type: Essence
tier: 1
essence-type: Caustic
delivery: Inhaled (Dust/Smoke)
defense: PD
AP-cost: 1
range: 15 ft
area: 10-ft burst cloud
onset: On exposure (enter/start turn)
duration: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round
reagents:
  - Caustic
  - Aspirant
  - Ground Catalyst
named-reagents: null
tags:
  - aspirant
  - caustic
  - essence
  - ground-catalyst
  - inhaled
  - pd
  - tier-1
description: Thin corrosive haze that burns on inhalation.
price: TODO
chance-of-detection: 0%
file.name: Smoke-Etch
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Smoke-Etch.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#aspirant #caustic #essence #ground-catalyst #inhaled #pd #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Inhaled (Dust/Smoke) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Caustic, Aspirant, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 15 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 10-ft burst cloud <br> **Onset**: On exposure (enter/start turn) <br> **Duration**: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round |  |

## Description
*Thin corrosive haze that burns on inhalation.*

## Application
No roll-to-effect.
- A creature/object is **exposed** if it shares a space with the cloud **at the end of its turn**.
- A creature may spend **1 AP** to **Hold Breath** until the start of its next turn; if it does, it is not exposed by inhalation during that window.
- On exposure: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 1d6 damage on exposure. |
| **Standard** | 1d4 damage on exposure. |
| **Diluted** | 1d4 damage on exposure. (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
