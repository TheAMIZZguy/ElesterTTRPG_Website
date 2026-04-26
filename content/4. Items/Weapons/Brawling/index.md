---
type: weapon-group
CSE: >-
  The target of the attack gains [[Slowed|Slowed 1]] until the end of your next
  turn.
GraphView: '[[Weapons]]'
file.name: Brawling
file.path: 4. Items/Weapons/Brawling/Brawling.md
file.folder: 4. Items/Weapons/Brawling
tags: []
---
Close-combat weapons that rely on **brutality, grappling, or disabling strikes**. 
These weapons enhance natural body attacks like punches and kicks or make use of martial arts techniques.

##### **Proficiency Tiers**
- **Improvised** – Exists only to not give penalties for unarmed attacks
    - _Examples:_ A punch with your fist (untrained)
- **Simple** – Basic striking enhancements, easy to wear and use
    - _Examples:_ Caestus, A punch with your fist (trained)
- **Martial** – Weapons designed for trained hand-to-hand fighters or harder to use weapons
    - _Examples:_ Gauntlet, Weighted Handwraps
- **Advanced** – Specialized weapons that require advanced martial skill to use effectively
    - _Examples:_ Claws (Tekko-Kagi), Spiked Gauntlet


###### Critical Specialization Effect: 
*Your strike hit a light pressure-point of the target*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Brawling" 
WHERE type = "weapon" 
SORT file.name ASC
```



