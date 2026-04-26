---
type: weapon-group
CSE: >-
  The target of the attack is moved up to 2 units away (you choose the
  distance), this is forced movement.
GraphView: '[[Weapons]]'
file.name: Shield
file.path: 4. Items/Weapons/Shield/Shield.md
file.folder: 4. Items/Weapons/Shield
tags: []
---
Shields used offensively, either by slamming, bashing, or controlling an enemy’s movement with sheer force and weight.

##### **Proficiency Tiers**
- **Improvised** – Wide Items that are roughly a shield
    - _Examples:_ wide of a Coffee Table
- **Simple** – Basic Shield Strikes
    - _Examples:_ Round Shield, Kite Shield
- **Martial** – Shields with offensive modifications
    - _Examples:_ Spiked Shield, Razor Shield
- **Advanced** – Cumbersome Shields
    - _Examples:_ Tower Shield


###### Critical Specialization Effect: 
*A hit from a defensive item is bound to make someone stumble*

—


```dataview 
TABLE WITHOUT ID file.name AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Shield" 
WHERE type = "weapon" 
SORT file.name ASC
```

TODO this should be in the armour section (and linked here?)
