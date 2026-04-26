---
type: Essence
tier: 2
essence-type: Irritant
delivery: Inhaled (Dust/Smoke)
defense: AD
AP-cost: 1
range: 15 ft
area: 10-ft burst cloud
onset: On exposure (enter/start turn)
duration: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round
reagents:
  - Irritant
  - Aspirant
  - Aetherical Catalyst
named-reagents: null
tags:
  - ad
  - aetherical-catalyst
  - aspirant
  - essence
  - inhaled
  - irritant
  - tier-2
description: Aetherical grit that increases spellcasting friction.
price: TODO
chance-of-detection: 0%
file.name: Mana-Friction Dust
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  2/Mana-Friction Dust.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  2
---
# —
#ad #aetherical-catalyst #aspirant #essence #inhaled #irritant #tier-2

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 2 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Inhaled (Dust/Smoke) <br> **Defense**: AD | **Price**: TODO |
| **Reagents**: Irritant, Aspirant, Aetherical Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 15 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 10-ft burst cloud <br> **Onset**: On exposure (enter/start turn) <br> **Duration**: Cloud 1 minute; decays Potent→Standard→Diluted→Inert each round |  |

## Description
*Aetherical grit that increases spellcasting friction.*

## Application
No roll-to-effect.
- A creature/object is **exposed** if it shares a space with the cloud **at the end of its turn**.
- A creature may spend **1 AP** to **Hold Breath** until the start of its next turn; if it does, it is not exposed by inhalation during that window.
- On exposure: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | -2 to evoke/cast-style actions for 1 round (GM). |
| **Standard** | -1 to evoke/cast-style actions for 1 round (GM). |
| **Diluted** | -1 to evoke/cast-style actions for 1 round (GM). (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
