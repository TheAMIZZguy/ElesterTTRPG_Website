---
type: weapon-group
CSE: >-
  Choose one creature adjacent to the initial target and within reach. If its
  Physical Defence is lower than your attack roll result for the critical hit,
  you deal damage to that creature equal to the surplus in the hit to AC. This
  amount cannot allow for another [[Weapons#Critical Specialization
  Effect|Critical Specialization Effect]], and no bonuses or other additional
  dice apply to this damage.
GraphView: '[[Weapons]]'
file.name: Thrusting
file.path: 4. Items/Weapons/Thrusting/Thrusting.md
file.folder: 4. Items/Weapons/Thrusting
tags: []
---
Thrusting weapons that focus on **precision, speed, and efficient stabbing techniques**, making them excellent for **aggressive and reactive combat.**

##### **Proficiency Tiers**
- **Improvised** – Makeshift "pointy sticks"
    - _Examples:_ Sharpened Stick, Pitchfork, Fire Poker
- **Simple** – Basic Thrusting weapons
    - _Examples:_ Spear
- **Martial** – Stronger, Battle-Oriented weapons
    - _Examples:_ Great Spear, Rapier, Trident
- **Advanced** – Use-specific Spears
    - _Examples:_ Man-Catcher, Ranseur, Lance


###### Critical Specialization Effect: 
*Your attack was such a blur, you were able to hit a second target in the span of one attack*

—


```dataview 
TABLE WITHOUT ID link(file.name) AS "Weapon", description AS "Description", weapon-category as "Category", weapon-group as "Group", tags as "Tags", damage-dice as "Damage", hands as "Hands", price as "Price"
FROM "4. Items/Weapons/Thrusting" 
WHERE type = "weapon" 
SORT file.name ASC
```

