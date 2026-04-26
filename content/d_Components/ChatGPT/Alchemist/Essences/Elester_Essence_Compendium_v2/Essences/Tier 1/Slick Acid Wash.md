---
type: Essence
tier: 1
essence-type: Toxin
delivery: Contact (Doused)
defense: PD
AP-cost: 1
range: Touch
area: —
onset: Immediate (on contact)
duration: As listed
reagents:
  - Toxin
  - Solvent
  - Ground Catalyst
named-reagents: null
tags:
  - contact
  - essence
  - ground-catalyst
  - pd
  - solvent
  - tier-1
  - toxin
description: Target's next AP spent on Strikes costs +1 AP (GM).
price: TODO
chance-of-detection: 0%
file.name: Sourflash Wash 2
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Sourflash Wash 2.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#contact #essence #ground-catalyst #pd #solvent #tier-1 #toxin

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Contact (Doused) <br> **Defense**: PD | **Price**: TODO |
| **Reagents**: Toxin, Solvent, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Touch | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: Immediate (on contact) <br> **Duration**: As listed |  |

## Description
*Target's next AP spent on Strikes costs +1 AP (GM).*

## Application
Willing target: applies immediately (no roll-to-effect).
Unwilling target: you must successfully apply contact (GM default: touch-style attack vs **PD**, or target is Grabbed/Restrained).
Once applied: essence applies at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | 2d6 damage. Also Target's next AP spent on Strikes costs +1 AP (GM). |
| **Standard** | 1d6 damage. Target's next AP spent on Strikes costs +1 AP (GM). |
| **Diluted** | 1d4 damage. Target's next AP spent on Strikes costs +1 AP (GM). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
