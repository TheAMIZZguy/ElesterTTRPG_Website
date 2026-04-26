---
type: armour
armour-group: Wood
primary-material: Wood
armour-category: Light
PD-bonus: 3
speed-penalty: 0
bulk: '1'
price: null
str-req: null
dex-cap: null
tags:
  - Torso
  - Weathered
description: >-
  Wood kept alive through an intricate weave of leaves and dirt providing
  organic strength
Hardness: 3
HP: 14
BT: 3
file.name: Leaf Weave
file.path: 4. Items/Armour/Wood/Leaf Weave.md
file.folder: 4. Items/Armour/Wood
---


# — 
 #Torso #Weathered

| Combat                                   | Health                         | Proficiency                           |
| ---------------------------------------- | ------------------------------ | ------------------------------------- |
| **Physical Def**: 3       | **Hardness**: — | **Bulk**: 1                |
| **Speed Penalty**: 0 | **HP**: 14             | **Category**: Light |
| **Dexterity Cap**: —       | **BT**: 3             | **Group**: Wood       |

## Description
*Wood kept alive through an intricate weave of leaves and dirt providing organic strength*


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


  


## Other Notes




