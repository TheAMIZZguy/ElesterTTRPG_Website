---
tags:
  - elester
  - rules
  - martial
  - primer
file.name: Combat Rules - Martial
file.path: d_Components/ChatGPT/Martial/Combat Rules - Martial.md
file.folder: d_Components/ChatGPT/Martial
---

# Martial Rules Primer

Direct-reference rules for **weapons, armour, shields, maneuvers, and mounted combat**.  
For action economy, reactions, initiative, conditions, and the reaction stack, see the Combat Rules.

---

## Weapons

### Weapon groups and categories
Every weapon has:
- **Weapon Group** (Bladed, Impact, Thrusting, etc.)
- **Weapon Category**: **Improvised**, **Simple**, **Martial**, **Advanced**

Proficiency is **per weapon group**.

### Proficiency contribution by category
Add this to Strikes you are proficient with:
- **Improvised**: **+0**
- **Simple**: **+2**
- **Martial**: **+4**
- **Advanced**: **+6**

### No proficiency vs under-proficiency
When making Strikes with a weapon:
- **No proficiency in the weapon’s group**: **–2 proficiency penalty** to the attack roll.
- **Under-proficient** (you have the group, but not the weapon’s category): your proficiency contribution becomes **+0** (instead of –2).

### Unarmed
Unarmed Strikes are **Brawling**.

---

## Strikes, damage, and criticals

### Attack roll and damage
**Attack Roll** = weapon damage die + STR/DEX mod + proficiency + bonuses − penalties  
**Damage** = Attack Roll − target **PD** (minimum 0)

### Exploding dice
If you roll the **maximum** on a weapon damage die, roll it again and add (repeatable).

### Degrees of success
Use the Combat Rules degrees-of-success vs **PD** (including ±10 rules if present).

### Critical effects
On a **critical success**, apply any relevant critical effects:
- weapon traits (Deadly/Fatal/etc.)
- **CSE** (if enabled; see below)

---

## Weapon traits and tags

Weapons can have traits/tags (Agile, Reach, Parry, etc.).

### Passive vs active traits
- **Passive traits** apply automatically.
- Traits that grant an **action/reaction**, or that **replace** a maneuver’s normal rules, require the appropriate **martial feat/technique** if your feat rules gate them.

### Core weapon fields
- **Range Increment**: beyond the first increment take **–2 per increment**, up to 6 increments (beyond 6 is impossible).
- **Reload**: number of **Interact** actions required.
- **Hands**: 1, 1+, or 2. A 1+ weapon can be held in one hand, but needs a free hand to attack.
- **Ammunition**: using ammunition destroys it (unless your ammo rules say otherwise).

### Quick tag reference (combat-relevant)
- **Agile**: MAP becomes –3/–6 instead of –4/–8.
- **Backstabber**: +1 damage vs Off-Guard.
- **Backswing**: after missing on your turn, +1 circumstance to your next attack with this weapon before end of turn.
- **Concealable**: bonus to Slyness checks/DCs to hide or conceal the weapon.
- **Deadly**: on a crit, roll an extra die of the same size.
- **Fatal**: on a crit, weapon die increases a step (per your die ladder).
- **Finesse**: use DEX instead of STR for attack rolls (melee).
- **Free-Hand**: doesn’t occupy the hand; can’t be Disarmed (see weapon rules).
- **Long**: –2 circumstance to attack targets within 1 unit.
- **Nonlethal**: can’t deal VP damage; lethal at –2 circumstance.
- **Parry**: action to gain +1 circumstance to PD (if enabled).
- **Reach**: attack at 2 units; increases creature reach by 1 if it already has reach.
- **Sweep**: +1 circumstance to attack if you already attacked a different target this turn using this weapon.
- **Thrown**: can be thrown; uses your thrown range formula; counts as Throwing group when thrown.
- **Two-Handed**: changes damage die when wielded in two hands.
- **Twin**: grants your twin rider when paired (if enabled).
- **Versatile**: choose alternate damage type listed.
- **Volley**: –2 circumstance when targets are within the listed close range.
- **Weighted**: use STR instead of DEX for attack rolls (as defined).

Trait-based maneuver tags:
- **Trip / Shove / Grapple / Disarm** traits can enable weapon-based versions of those maneuvers (if enabled).

---

## Critical Specialization Effects (CSE)

Each weapon group has a **Critical Specialization Effect**.
- CSE is optional: you can always choose **not** to apply it.
- If CSE is gated behind training, you must have the appropriate **CSE training** for that weapon group.

(See weapon-group pages for each group’s CSE text.)

---

## Weapon durability and quality

### Durability
Weapons have **Hardness**, **HP**, and **BT**.
- **HP = 0**: destroyed (scrap), including upgrades.
- **HP ≤ BT**: **Broken**; only usable as an improvised weapon (per your rule).

### Quality
- **Wretched (–2)**: half HP; no upgrade/crystal slots
- **Poor (–1)**: –1 upgrade slot
- **Standard (+0)**: normal slots
- **Well-Made (+1)**: double HP; +1 upgrade slot
- **Master-Craft (+2)**: double HP; +1 upgrade slot; +1 crystal slot

---

## Armour

### Armour groups and tiers
Every armour has:
- **Armour Group** (Cloth, Leather, etc.)
- **Armour Tier**: **Unarmoured**, **Light**, **Medium**, **Heavy**, **Advanced**

Proficiency is **per armour group**.

### No proficiency vs under-proficiency
When wearing armour:
- **No proficiency in the armour’s group**:
  - your proficiency bonus on any ability/skill (including attacks) is capped at **+0**
  - **–2 item penalty to casting**
- **Under-proficient** (you have the group, but not the tier): casting penalty becomes **–1** instead.

---

## Physical Defence and stacking

### Physical Defence
**PD** = 5 + STR/DEX mod + bonuses (including armour) − penalties  
Damage from physical attacks uses **Damage = Attack Roll − PD** (min 0).

### Multiple armour pieces
- PD item bonuses do **not** stack.
- Use the **highest** armour item bonus among worn pieces.

Extra pieces are mainly for:
- backup if main armour becomes **Broken**
- filling unused upgrade slots (per your slot priority rules)

---

## Armour durability and quality

### Durability
Armour has **Hardness**, **HP**, and **BT**.
- **HP = 0**: destroyed (scrap), including upgrades.
- **HP ≤ BT**: **Broken**, reducing effectiveness (per your Broken rules/tags).

### Upgrade slots by tier
- **Unarmoured**: 1
- **Light**: 1
- **Medium**: 2
- **Heavy**: 3
- **Advanced**: 3

### Quality
- **Wretched (–2)**: half HP; no upgrade slots
- **Poor (–1)**: –1 upgrade slot
- **Standard (+0)**: no change
- **Well-Made (+1)**: double HP; +1 upgrade slot
- **Master-Craft (+2)**: double HP; +2 upgrade slots

### Tag stacking from upgrades
If an upgrade grants a tag you already have, **increase that tag’s tier** (e.g., Infusing 1 → 2) instead of stacking separate bonuses.

---

## Armour tags and ASE

### Armour tags
Passive tags always apply. Tags that grant actions/reactions may require the appropriate **martial technique** if your feat rules gate them.

### Armour Specialization Effects (ASE)
Each armour group has an **ASE**.
- ASE is optional.
- If gated, you must have the appropriate **ASE training** for that armour group.

(See armour-group pages for ASE text.)

---

## Shields

If your rules gate shield defence:
- You need the appropriate **shield training** to gain shield defensive actions/reactions (Raise/Block/etc.).

If shields have Hardness/HP/BT:
- blocking can damage the shield
- shields can become Broken or be destroyed.

---

## Maneuvers

Maneuvers are martial actions that use a skill and target a defence.

Common defaults (typical):
- **Trip**: Agility → PD
- **Shove**: Fortitude → PD
- **Grapple**: Fortitude → PD
- **Disarm**: Agility → PD
- **Feint**: Slyness → Mental Defence

Weapon traits (Trip/Shove/Grapple/Disarm) may allow a weapon-based version (reach/range increment, item bonus) if enabled.

---

## Mounted combat

### Mount proficiency
Mounts are grouped into proficiency types (example):
- Pack Mounts, Riding Mounts, War Mounts, Draft Mounts, Exotic Mounts

If you ride a mount you are **not** proficient with, apply under-proficiency consequences appropriate to your system (unstable attacks, risk of being unseated, control checks under stress).

### Mounted basics
- You use the mount’s movement and positioning.
- Penalties for attacking from a moving platform (if any) are reduced by mounted training/feats.
- Heavy armour and charges typically require war-mount training and mounted techniques.

### Barding
If your system uses barding tiers:
- Light/Medium/Heavy barding should require training to avoid control penalties and spooking.
