---
type: armour
armour-group: Wood
primary-material: Wood
armour-category: Medium
PD-bonus: 5
speed-penalty: 1
bulk: '1'
price: null
str-req: 1
dex-cap: '4'
tags:
  - Torso
  - Weathered
  - Flammable
description: Made from the hardest wood
Hardness: 3
HP: 20
BT: 10
file.name: Wooden Breastplate
file.path: 4. Items/Armour/Wood/Wooden Breastplate.md
file.folder: 4. Items/Armour/Wood
---


# — 
 #Torso #Weathered #Flammable

| Combat                                   | Health                         | Proficiency                           |
| ---------------------------------------- | ------------------------------ | ------------------------------------- |
| **Physical Def**: 5       | **Hardness**: — | **Bulk**: 1                |
| **Speed Penalty**: 1 | **HP**: 20             | **Category**: Medium |
| **Dexterity Cap**: 4       | **BT**: 10             | **Group**: Wood       |

## Description
*Made from the hardest wood*


## Shop and Crafting Information
- **Price**: —
- **Primary Material**: Wood
- **Crafting Requirements**: TODO? 
- **Crafting Time**: TODO?


## Armour Critical Effect
Upon taking a melee hit that makes the armour pass a breaking threshold, or if the hit was a critical hit: the foe takes 3 piercing damage with Medium armour, 5 for Advanced armour.




## Traits
 
###### Torso
- Covers the chest and back


### Common Armour Traits and Attributes

###### Weathered
- The armour has Weakness 1 to Acid and Blight


### Armour List


```dataview 
TABLE WITHOUT ID link(file.name) AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/Armour" 
WHERE type = "armour" 
SORT file.name ASC 
FLATTEN description
```



## TO-DOS

- More specialized pieces of armour like head/arm/leg-only armour like bracers etc.
- Better synergy of traits and upgrading and the armour 
- Balancing

###### Flammable
- The armour has Weakness 1 to Fire


  


## Other Notes




