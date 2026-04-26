---
type: Essence
tier: 1
essence-type: Caustic
delivery: Shatter (Vial)
defense: PD
AP-cost: 1
range: 20 ft
area: 5-ft burst
onset: Immediate (on shatter)
duration: Instant (plus any residue/area)
reagents:
  - Caustic
  - Volatile
  - Ground Catalyst
named-reagents: null
tags:
  - caustic
  - essence
  - ground-catalyst
  - pd
  - shatter
  - tier-1
  - volatile
description: Shard-and-burn vial that punishes movement.
price: TODO
chance-of-detection: 0%
file.name: Glass-Spall Vial
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Glass-Spall Vial.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#caustic #essence #ground-catalyst #pd #shatter #tier-1 #volatile

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Shatter (Vial) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Caustic, Volatile, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: 20 ft | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: 5-ft burst <br> **Onset**: Immediate (on shatter) <br> **Duration**: Instant (plus any residue/area) |  |

## Description
*Shard-and-burn vial that punishes movement.*

## Application
**Thrown Application Check** (roll-to-effect):
- Make a thrown-style check against the target's listed **Defense**.
- Use your **Thrown Weapon** proficiency (martial tree) and the same attribute you use for thrown weapons (usually **DEX**).
- Success: essence applies at brewed **Potency**.
- Failure: no effect (vial still shatters; residue only if the essence says so).
- Crits: treat as Success/Failure unless the essence says otherwise.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 1d6 damage; if moved this round, -2 Agility checks next turn. |
| **Standard** | 1d6 damage; if moved this round, -1 Agility checks next turn. |
| **Diluted** | 1d4 damage; if moved this round, -1 Agility checks next turn. |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
