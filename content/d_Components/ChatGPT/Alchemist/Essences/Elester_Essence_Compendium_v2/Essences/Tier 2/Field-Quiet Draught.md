---
type: Essence
tier: 2
essence-type: Stabilizer
delivery: Ingested (Potion/Food)
defense: AD
AP-cost: 1 (consume)
range: Self/Ally
area: —
onset: 1 minute
duration: 10 minutes
reagents:
  - Stabilizer
  - Solvent
  - Aetherical Catalyst
named-reagents: null
tags:
  - ad
  - aetherical-catalyst
  - essence
  - ingested
  - solvent
  - stabilizer
  - tier-2
description: Aetherical stabilizer that hardens field-coherence.
price: TODO
chance-of-detection: TODO%
file.name: Field-Quiet Draught
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  2/Field-Quiet Draught.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  2
---
# —
#ad #aetherical-catalyst #essence #ingested #solvent #stabilizer #tier-2

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 2 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Ingested (Potion/Food) <br> **Defense**: AD | **Price**: TODO |
| **Reagents**: Stabilizer, Solvent, Aetherical Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Self/Ally | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: 1 minute <br> **Duration**: 10 minutes |  |

## Description
*Aetherical stabilizer that hardens field-coherence.*

## Application
Guaranteed unless countered.
- On consumption, track **Onset**.
- At the end of Onset, the essence applies at brewed **Potency** unless neutralized by an antidote/cleanser in time (GM).

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | +2 AD for 10 minutes. |
| **Standard** | +1 AD for 10 minutes. |
| **Diluted** | +1 AD for 1 minute. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
