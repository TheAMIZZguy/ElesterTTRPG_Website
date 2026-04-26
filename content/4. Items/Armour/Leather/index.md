---
type: armour-group
ASE: >-
  Resistance 1 to all Bludgeoning Damage when using Medium Armour, this
  increases to 2 for Heavy or Advanced.
file.name: Leather
file.path: 4. Items/Armour/Leather/Leather.md
file.folder: 4. Items/Armour/Leather
tags: []
---


Solid boiled leather provides a strong protective hide not unlike the creatures it often comes from. 

##### **Proficiency Tiers**
- **Unarmoured** – Armour anyone can use
    - _Examples:_ Aprons
- **Light** – Simple Armour offering more protection t
    - _Examples:_ Leather Armour 
- **Medium** – Armour one can learn to use with some practice
    - _Examples:_ Boiled Leather Hauberk
- **Heavy** – Stronger, better, or specialized armour
    - _Examples:_ 
- **Advanced** – Armour that is uniquely different
    - _Examples:_ 


###### Armour Specialization Effect: 
*The thick skin of the armour moves in unison to displace damage*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/Armour/Leather" 
WHERE type = "armour" 
SORT file.name ASC
```


####  Intended Use

- Good lighter armour for those that expect to take blows from objects or fists

#### Weaknesses

- Can't protect to much at the higher levels
