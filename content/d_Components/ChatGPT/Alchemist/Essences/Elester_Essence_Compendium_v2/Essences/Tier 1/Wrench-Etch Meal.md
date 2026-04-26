---
type: Essence
tier: 1
essence-type: Provision
delivery: Provision (Meal/Drink)
defense: MD
AP-cost: Rest
range: Party
area: —
onset: On consumption
duration: Until next Rest
reagents:
  - Fortifier
  - Ground Catalyst
named-reagents: null
tags:
  - essence
  - fortifier
  - ground-catalyst
  - md
  - provision
  - tier-1
description: +1 to one social check in feast context (first use)
price: TODO
chance-of-detection: 0%
file.name: Wrench-Etch Meal
file.path: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1/Wrench-Etch Meal.md
file.folder: >-
  d_Components/ChatGPT/Alchemist/Essences/Elester_Essence_Compendium_v2/Essences/Tier
  1
---
# —
#essence #fortifier #ground-catalyst #md #provision #tier-1

| Brewing | Delivery | Market |
|---|---|---|
| **Tier**: 1 <br> **Brew DC**: `= 10 + 2 * this.tier` | **Delivery**: Provision (Meal/Drink) <br> **Defense**: MD | **Price**: TODO |
| **Reagents**: Fortifier, Ground Catalyst | **AP Cost**: `=this['AP-cost']` <br> **Range**: Party | **Chance of Detection**: `=this['chance-of-detection']` |
| **Named Reagents**: `=this['named-reagents']` | **Area**: — <br> **Onset**: On consumption <br> **Duration**: Until next Rest |  |

## Description
*+1 to one social check in feast context (first use)*

## Application
Applies on consumption.
- A creature can benefit from **1 meal** and **1 drink** at a time; consuming a new one replaces the old benefit of that category.
- Effects apply at brewed **Potency**.

## Effects by Potency
| Potency | Effects |
|---|---|
| **Potent** | +1 to one social check in feast context (first use) (strong). |
| **Standard** | +1 to one social check in feast context (first use). |
| **Diluted** | +1 to one social check in feast context (first use). (weaker; shorten duration / reduce magnitude). |

## Notes
- Effects are **fixed by Potency** (Potent/Standard/Diluted).
- If this essence is delivered but neutralized before onset/effect, it does nothing (per your antidote rules).
- Mishaps are handled by the **Alchemist Mishap rules**.
