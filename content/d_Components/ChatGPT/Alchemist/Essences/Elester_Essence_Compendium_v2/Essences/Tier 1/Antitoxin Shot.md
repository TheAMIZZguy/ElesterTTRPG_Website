---
type: Essence
tier: 1
essence-type: Stabilizer
delivery: Ingested (Potion/Food)
defense: PD
AP-cost: 1 (consume)
range: Self/Ally
area: —
onset: 1 minute
duration: 10 minutes
reagents:
  - Stabilizer
  - Solvent
  - Ground Catalyst
named-reagents: null
tags:
  - essence
  - ground-catalyst
  - ingested
  - pd
  - solvent
  - stabilizer
  - tier-1
description: Hardens the body against toxins.
price: TODO
chance-of-detection: TODO%
file.name: Antitoxin Shot
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Antitoxin Shot.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#essence #ground-catalyst #ingested #pd #solvent #stabilizer #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Ingested (Potion/Food) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Stabilizer, Solvent, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Self/Ally | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: 1 minute <br> **Duration**: 10 minutes |  |

## Description
*Hardens the body against toxins.*

## Application
Guaranteed unless countered.
- On consumption, track **Onset**.
- At the end of Onset, the essence applies at brewed **Potency** unless neutralized by an antidote/cleanser in time (GM).

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | +2 vs toxin effects for 10 minutes; reduce toxin tier by 1 on first hit. |
| **Standard** | +2 vs toxin effects for 10 minutes. |
| **Diluted** | +1 vs toxin effects for 1 minute. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
