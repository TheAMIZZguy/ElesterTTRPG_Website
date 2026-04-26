---
type: Essence
tier: 3
essence-type: Toxin
delivery: Inhaled (Dust/Smoke)
defense: MD
AP-cost: 1
range: 15 ft
area: 10-ft burst cloud
onset: On exposure (enter/start turn)
duration: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round
reagents:
  - Toxin
  - Aspirant
  - Ground Catalyst
named-reagents: null
tags:
  - aspirant
  - essence
  - ground-catalyst
  - inhaled
  - md
  - tier-3
  - toxin
description: Target cannot take reactions until end of next turn.
price: TODO
chance-of-detection: 0%
file.name: Quiet Mind Dust 2
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Quiet Mind Dust 2.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#aspirant #essence #ground-catalyst #inhaled #md #tier-3 #toxin

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Inhaled (Dust/Smoke) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Toxin, Aspirant, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 15 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 10-ft burst cloud <br> **Onset**: On exposure (enter/start turn) <br> **Duration**: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round |  |

## Description
*Target cannot take reactions until end of next turn.*

## Application
No roll-to-effect.
- A creature/object is **exposed** if it shares a space with the cloud **at the end of its turn**.
- A creature may spend **1 AP** to **Hold Breath** until the start of its next turn; if it does, it is not exposed by inhalation during that window.
- On exposure: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 4d6 damage. Also Target cannot take reactions until end of next turn. |
| **Standard** | 3d6 damage. Target cannot take reactions until end of next turn. |
| **Diluted** | 2d6 damage. Target cannot take reactions until end of next turn. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
