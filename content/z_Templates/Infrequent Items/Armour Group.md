---
type: armour-group
ASE: null
file.name: Armour Group
file.path: z_Templates/Infrequent Items/Armour Group.md
file.folder: z_Templates/Infrequent Items
tags: []
---


Weapons group description.

##### **Proficiency Tiers**
- **Unarmoured** – Armour anyone can use
    - _Examples:_ 
- **Light** – Simple Armour offering more protection t
    - _Examples:_ 
- **Medium** – Armour one can learn to use with some practice
    - _Examples:_ 
- **Heavy** – Stronger, better, or specialized armour
    - _Examples:_ 
- **Advanced** – Armour that is uniquely different
    - _Examples:_ 


###### Armour Specialization Effect: 
*Description*

—


```dataview 
TABLE WITHOUT ID file.name AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/ARMOUR/X" 
WHERE type = "armour" 
SORT file.name ASC
```

