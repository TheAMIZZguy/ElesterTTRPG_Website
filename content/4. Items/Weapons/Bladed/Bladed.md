---
type: weapon-group
CSE: >-
  The target of the attack gains [[Clumsy|Clumsy 1]] until the end of your next
  turn.
GraphView: '[[Weapons]]'
file.name: Bladed
file.path: 4. Items/Weapons/Bladed/Bladed.md
file.folder: 4. Items/Weapons/Bladed
tags: []
---
Balanced weapons that are **effective in slashing, stabbing, and parrying**, making them reliable and adaptable in nearly any combat situation.

##### **Proficiency Tiers**
- **Improvised** – Bladed objects that aren’t true weapons
    - _Examples:_ Machete, Kitchen Knife
- **Simple** – Easy-to-use impact weapons that deal solid damage.
    - _Examples:_ Shortsword, Scimitar, Sawtooth Saber, Knife
- **Martial** – Heavier, stronger versions of simple weapons, often designed for war.
    - _Examples:_ Longsword, Bastard Sword, Rapier, Falchion, Spiral Rapier, Broadsword
- **Advanced** – Advanced weapons that incorporate unique features or techniques.
    - _Examples:_ Flame-Bladed Sword, Dual Bladed Sword, Dandpatta, Buugeng


**Critical Specialization Effect**: 
*Evading your attacks took quite a bit of effort on the part of your target*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category AS "Category", weapon-group AS "Group", tags AS "Tags", damage-dice AS "Damage", bulk AS "Bulk", hands AS "Hands", price AS "Price"
FROM "4. Items/Weapons/Bladed" 
WHERE type = "weapon" 
SORT file.name ASC
```

Other comments, weapon variants
- Longsword
	- Sword-Scythe Swapper
- Falchion
	- Hook-Sword
- Rapier
	- Cane Sword

