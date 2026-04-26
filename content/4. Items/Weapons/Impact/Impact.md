---
type: weapon-group
CSE: 'For each damage die of the weapon, add 2 additional damage.'
GraphView: '[[Weapons]]'
file.name: Impact
file.path: 4. Items/Weapons/Impact/Impact.md
file.folder: 4. Items/Weapons/Impact
tags: []
---
Weapons that deal *raw, concussive, or cleaving damage*, designed to break bones, crush armor, or hack through flesh with overwhelming force. 
These weapons rely on momentum, weight, and force rather than finesse.

##### **Proficiency Tiers**
- **Improvised** – Everyday objects used as blunt-force weapons.
    - _Examples:_ Brick, Chair Leg, Fire Poker, Meat Cleaver
- **Simple** – Easy-to-use impact weapons
    - _Examples:_ Club, Hatchet, War Pick, Baton
- **Martial** – Heavier, stronger versions of simple weapons, specifically designed for war
    - _Examples:_ Battle Axe, Great Club, Warhammer
- **Advanced** – Advanced weapons that incorporate unique features or techniques.
    - _Examples:_ Great Axe, Horseman’s Pick, Maul


###### Critical Specialization Effect: 
*The enemy didn't fully manage to lean away from the hit*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Impact" 
WHERE type = "weapon" 
SORT file.name ASC
```

