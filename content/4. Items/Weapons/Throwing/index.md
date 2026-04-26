---
type: weapon-group
CSE: 'The target of the attack gains [[Persistent Damage|1d6 Persistent Bleeding]].'
GraphView: '[[Weapons]]'
file.name: Throwing
file.path: 4. Items/Weapons/Throwing/Throwing.md
file.folder: 4. Items/Weapons/Throwing
tags: []
---
Weapons meant to be **hurled or slung**, often lightweight or single-use but capable of devastating effects.

##### **Proficiency Tiers**
- **Improvised** – Objects that are thrown out of necessity
    - _Examples:_ Rock, Brick, Bottle
- **Simple** – Basic Throwing weapons
    - _Examples:_ Throwing Knife, Sling, Dart, Bolas
- **Martial** – Stronger, faster, or specialized throwing weapons
    - _Examples:_ Chakram, Shuriken, Javelin
- **Advanced** – Throwing weapons with unique effects
    - _Examples:_ Boomerang, Atlatl, Slingshot Staff


###### Critical Specialization Effect: 
*The throw hit something the target wasn't expecting to get hit*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Throwing" 
WHERE type = "weapon" 
SORT file.name ASC
```
