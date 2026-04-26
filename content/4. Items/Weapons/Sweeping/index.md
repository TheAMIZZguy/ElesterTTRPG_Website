---
type: weapon-group
CSE: >-
  The target of the attack becomes [[Off-Guard]] until the start of your next
  turn.
GraphView: '[[Weapons]]'
file.name: Sweeping
file.path: 4. Items/Weapons/Sweeping/Sweeping.md
file.folder: 4. Items/Weapons/Sweeping
tags: []
---
Long-reach weapons designed for **wide sweeps, battlefield control, and overwhelming force**, often excelling at keeping enemies at bay

##### **Proficiency Tiers**
- **Improvised** – Long objects repurposed for combat
    - _Examples:_ Pipe, Scythe
- **Simple** – Basic long-reaching weapons
    - _Examples:_ Quarterstaff, Staff, Pike
- **Martial** – Long weighted weapons requiring training to be used in a controlled manner
    - _Examples:_ Halberd, Bec de Corbin, Glaive
- **Advanced** – Unique weapons requiring a different skillset to use
    - _Examples:_ Greatsword, War Scythe


###### Critical Specialization Effect: 
*The target struggles to maintain a defensive position after a heavy hit*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Sweeping" 
WHERE type = "weapon" 
SORT file.name ASC
```
