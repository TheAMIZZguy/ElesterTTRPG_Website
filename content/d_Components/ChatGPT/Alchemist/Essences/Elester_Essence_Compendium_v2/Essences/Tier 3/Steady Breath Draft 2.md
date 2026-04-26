---
type: Essence
tier: 3
essence-type: Fortifier
delivery: Ingested (Potion/Food)
defense: MD
AP-cost: 1 (consume)
range: Self/Ally
area: —
onset: 1 round
duration: 10 minutes
reagents:
  - Fortifier
  - Solvent
  - Ground Catalyst
named-reagents:
  - Siren Pollen
tags:
  - essence
  - fortifier
  - ground-catalyst
  - ingested
  - md
  - named-reagent
  - solvent
  - tier-3
description: +1 MD for 10 minutes
price: TODO
chance-of-detection: TODO%
file.name: Steady Breath Draft 2
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3/Steady Breath Draft 2.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  3
---
# —
#essence #fortifier #ground-catalyst #ingested #md #named-reagent #solvent #tier-3

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 3 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Ingested (Potion/Food) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Fortifier, Solvent, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Self/Ally | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: 1 round <br> **Duration**: 10 minutes |  |

## Description
*+1 MD for 10 minutes*

## Application
Guaranteed unless countered.
- On consumption, track **Onset**.
- At the end of Onset, the essence applies at brewed **Potency** unless neutralized by an antidote/cleanser in time (GM).

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | +1 MD for 10 minutes (strong). |
| **Standard** | +1 MD for 10 minutes. |
| **Diluted** | +1 MD for 1 minute. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
