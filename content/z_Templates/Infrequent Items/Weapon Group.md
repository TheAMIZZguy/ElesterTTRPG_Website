---
type: weapon-group
CSE: null
file.name: Weapon Group
file.path: z_Templates/Infrequent Items/Weapon Group.md
file.folder: z_Templates/Infrequent Items
tags: []
---
Weapons group description.

##### **Proficiency Tiers**
- **Improvised** – Makeshift weapons
    - _Examples:_ 
- **Simple** – Weapons one can learn to use with light practice
    - _Examples:_ 
- **Martial** – Stronger, faster, or specialized weapons
    - _Examples:_ 
- **Exotic** – Weapons that are better or uniquely different
    - _Examples:_ 


###### Critical Specialization Effect: 
*Description*

—


```dataview 
TABLE WITHOUT ID file.name AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/X" 
WHERE type = "weapon" 
SORT file.name ASC
```

