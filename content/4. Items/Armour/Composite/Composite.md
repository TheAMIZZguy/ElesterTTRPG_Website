---
type: armour-group
ASE: >-
  Resistance 1 to all Piercing Damage when using Medium Armour, this increases
  to 2 for Heavy or Advanced.
file.name: Composite
file.path: 4. Items/Armour/Composite/Composite.md
file.folder: 4. Items/Armour/Composite
tags: []
---


Made from mixes of materials and techniques, the numerous overlapping pieces of armour provide strong support from piercing.

##### **Proficiency Tiers**
- **Unarmoured** – Armour anyone can use
    - _Examples:_ Ceremonial Gear
- **Light** – Simple Armour offering more protection t
    - _Examples:_ 
- **Medium** – Armour one can learn to use with some practice
    - _Examples:_ Brigandine, Scale Maille
- **Heavy** – Stronger, better, or specialized armour
    - _Examples:_ Lamellar, Splint Armour
- **Advanced** – Armour that is uniquely different
    - _Examples:_ Shear-Gel Brigandine (cloth? non-newtonian)


###### Armour Specialization Effect: 
*The numerous overlapping pieces of this armour protect you from piercing attacks*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/Armour/Composite" 
WHERE type = "armour" 
SORT file.name ASC
```



#### Intended Use

- Adaptable to many missions, especially when enemy prep is unknown
- Covers many weaknesses but **master of none**

#### Weaknesses

- Can be harder to repair
