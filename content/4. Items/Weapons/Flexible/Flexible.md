---
type: weapon-group
CSE: 'The target of the attack becomes [[Prone]].'
GraphView: '[[Weapons]]'
file.name: Flexible
file.path: 4. Items/Weapons/Flexible/Flexible.md
file.folder: 4. Items/Weapons/Flexible
tags: []
---
Weapons that rely on **flexibility, unpredictability, and control**, excelling in tripping, binding, and bypassing defenses

##### **Proficiency Tiers**
- **Improvised** – Flexible items not meant for combat
    - _Examples:_ Rope, Chain, Belt
- **Simple** – Basic chain-based weapons
    - _Examples:_ Whip, Nunchaku
- **Martial** – Heavier, deadlier versions of chain weapons
    - _Examples:_ Chain Whip, Rope Darts, Flail, War Flail
- **Advanced** – Extremely specialized chain weapons
    - _Examples:_ Kusarigama, Chain Sword, Bladed Diabolo


###### Critical Specialization Effect: 
*The chain wrapped around the target such that they were thrown down*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price" 
FROM "4. Items/Weapons/Flexible" 
WHERE type = "weapon" 
SORT file.name ASC
```

