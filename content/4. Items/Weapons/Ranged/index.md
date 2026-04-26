---
type: weapon-group
CSE: >-
  If the target of the attack is adjacent to a surface it gets stuck to that
  surface by the missile. The targets is [[Immobilized]] and must spend an
  Interact action to attempt a DC 10 Fortitude check to pull the missile free.
  It cannot move the its space until it succeeds. If the creature cannot become
  stuck, it gains [[Stunned|Stunned 1]] instead.
GraphView: '[[Weapons]]'
file.name: Ranged
file.path: 4. Items/Weapons/Ranged/Ranged.md
file.folder: 4. Items/Weapons/Ranged
tags: []
---
Weapons that **strike from a distance with precision and force**, requiring careful aim, reload time, or positioning for maximum effectiveness

##### **Proficiency Tiers**
- **Improvised** – Crude or makeshift ranged options
    - _Examples:_ Slingshot
- **Simple** – Common ranged weapons used for sport and basic combat
    - _Examples:_ Shortbow, Light Crossbow, Alchemical Crossbow
- **Martial** – Weapons designed for combat with superior range and force
    - _Examples:_ Longbow, Horsebow, Crossbow
- **Advanced** – Weapons requiring years of training to effectively use
    - _Examples:_ Warbow, Heavy Horsebow, Heavy Crossbow, Gauntlet Bow, Siege Weapons


###### Critical Specialization Effect: 
—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Ranged" 
WHERE type = "weapon" 
SORT file.name ASC
```


#### Bolts/Arrows
- Standard
- Thin (-1 damage but +3 units range)
- Hollowpoint (-1 to armoured +1 to unarmored)
- Bulbed (-3 units range, -3 damage, can hold a potion, only alchemical crossbow)
