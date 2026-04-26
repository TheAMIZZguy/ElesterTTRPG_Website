---
type: armour-group
ASE: >-
  Resistance 1 to all Cold Damage when using Medium Armour, this increases to 2
  for Heavy or Advanced.
file.name: Cloth
file.path: 4. Items/Armour/Cloth/Cloth.md
file.folder: 4. Items/Armour/Cloth
tags: []
---
 

Often called the armour of the masses, it is the most frequently used armour for its simplicity and price

##### **Proficiency Tiers**
- **Unarmoured** – Armour anyone can use
    - _Examples:_ Gi, Scroll Robes, Explorers Clothing
- **Light** – Simple Armour offering more protection t
    - _Examples:_ Quilted Jerkin, Padded Tunic, Gambeson
- **Medium** – Armour one can learn to use with some practice
    - _Examples:_ Layered Gambeson
- **Heavy** – Stronger, better, or specialized armour
    - _Examples:_ 
- **Advanced** – Armour that is uniquely different
    - _Examples:_ Flow-Channel Gi (wind exaggerates movements)


###### Armour Specialization Effect: 
*The insulating layers keep a reserve of warmth for the body*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/Armour/Cloth" 
WHERE type = "armour" 
SORT file.name ASC
```




#### Intended Use

- Ideal for stealth missions, urban infiltration, nighttime ambushes
- Excellent for mobility or non-frontliners

#### Weaknesses

- Flammable 
- Less Protective

