---
file.name: Weapons
file.path: 4. Items/Weapons/Weapons.md
file.folder: 4. Items/Weapons
tags: []
---


Weapons are grouped to classify their style and potential effects, most notably the Critical Specialization Effect.
They can be upgraded, broken, repaired, and used in a variety of ways.


### Proficiency and Proficiency Tiers
Weapons, aside from having groups, require a certain amount of proficiency to be able to use, these levels are: Improvised, Simple, Martial, Advanced
- Although these tiers are named to give intuitive names to the proficiencies, they can also be called by the usual proficiency terms: Trained, Skilled, Mastered, Legendary

Proficiencies are split between weapon groups, so you need proficiencies in separate weapon groups to gain the proficiency bonuses and tiers for each weapon group

Using a weapon in a weapon group you have no proficiency in gets you a -2 proficiency penalty. But if you have an under-proficiency this becomes simply +0
- *Example*: having Proficiency in Simple Weapons for the Bladed group and using an Advanced Bladed weapon means you add +0 to your attack rolls as your proficiency bonus

- **Improvised** 
	- Weapons
		- Makeshift weapons that one may find themselves scrambling to use when a real weapon isn't available
		- Not able to cause a Critical Specialization Effect
	- Proficiency
		- +0 to Attack Rolls
- **Simple** 
    - Weapons
	    - Weapons that are meant to be easy to use but aren't particularly strong or are not ideal for combat
	    - 1 Upgrade Slot, 0 Crystal Slot
	- Proficiency
		- +2 to Attack Rolls
- **Martial**
    - Weapons
	    - Weapons made for combat and require training to effectively use
	    - 2 Upgrade Slots, 1 Crystal Slot
	- Proficiency
		- +4 to Attack Rolls
- **Advanced**
    - Weapons
	    - Weapons with specific uses or unique effects that may differ from the rest of the group
	    - 3 Upgrade Slots, 1 Crystal Slot OR 2 Upgrade Slots, 2 Crystal Slots 
	- Proficiency
		- +6 to Attack Rolls


##### Upgrading Weapons
Weapons are not a static system, warriors and countries throughout history have searched for ways to customize their gear to get the advantage
Certain styles have become staples of the styles of cultures and not every upgrade is available in every part of the world, some travelers go on long quests to find master craft smiths to upgrade their gear
The full system is described under (TODO CRAFTING) but here is a handy description

**Quality**
Quality is the most basic measure of a weapon. Often determined by the material but also the skill of the craftsman in making it to make it as balanced and reinforced as possible
(Note to self, material limits the quality, but a high enough craftsman can bring it +1 level, or -1 level if they are not high enough)
Applies to all Weapons
- Wretched (-2)
	- Generally obtained from a Poor quality weapon that was broken but never repaired
	- Half the HP
	- No Upgrade or Crystal Slots
- Poor (-1)
	- Basic cheap starting weapons, and the go-to for non-combatants to have on themselves for protection
	- -1 Upgrade Slot
- Standard (+0)
	- The most cost effective weapons, standard quality to equip soldiers with 
	- No change to Upgrade Slots
- Well-Made (+1)
	- The pricier variant of weapons, more often used by officers or more expensive escorts
	- Twice the HP
	- +1 Upgrade Slots
- Master-Craft (+2)
	- The weapons of aristocracy and the most famous warriors
	- Twice the HP
	- +1 Upgrade Slot, +1 Crystal Slot

**Upgrade Slots**
- Modifications to weapons that increase its damage or capabilities
**Crystal Upgrades**
- Aetherical Upgrades that majorly increase damage or capabilities
**Black Iron Materials**
- Material benefits against those that wield the fields
**Modifications**
- Minor trait or bonus additions to weapons

**Ammunition**
- Luckily much easier to craft (lower level required to master-craft it)
- Standard: Only have 1 upgrade 
- Well-Made: Only have 1 upgrade OR 1 Crystal
- Master-Craft: Only have 1 upgrade and 1 Crystal
- Weapons that require Ammunition 
	- Standard: Only have 1 upgrade 
	- Well-Made: Only have 1 upgrade OR 1 Crystal
	- Master-Craft: Only have 1 upgrade and 1 Crystal OR 2 upgrade

##### Critical Specialization Effect
Certain effects can grant you benefits when you make a Strike with certain weapons and get a critical success. The exact effect depends on which weapon group your weapon belongs to, as listed below. You can always decide not to add the critical specialization effect of your weapon.


| Weapon Group | Critical Specialization Effect |
| --- | --- |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |



### Attack Rolls and Damage
When making an attack you will generally roll the damage dice as described by the weapon
- Damage di(c)e as a "damage" di(c)e which determines the main variance of you dealing damage
- If you roll the maximum number on a die then you can roll it again and add the value to your attack roll
	- This can happen multiple times
Add Static modifiers
- Bonuses and penalties added
- Including ones from conditions like Off-Guard
Then the amount you beat the Physical Defence is the damage you deal 

**Attack Roll** = damage di(c)e + STR/DEX mod + proficiency + bonuses - penalties 
**Damage** = Attack Roll - Physical Defence

If you deal more damage than their Defence, then this is a critical hit and any critical hit effects activate, including [[Weapons#Critical Specialization Effect|CSE]] effects 
- *Example*: If their Physical Defence is 7 you need to deal equal to or more than 7 damage (or equivalently $7\times2=14$ on the attack roll) for it to count as a critical hit


### Multiple Attack Penalty
If you use an action with the attack trait more than once on the same turn, your attacks after the first take a penalty called a multiple attack penalty
- Your second attack takes a –4 penalty, and any subsequent attacks take a –8 penalty.  
  
The multiple attack penalty is counted separate when it isn't your turn 
- *Example*, attacking twice as a reaction before your turn does not mean you start your turn with a -10 to your first attack, but the second attack as a reaction did have a -5


### Unarmed Attacks
Unarmed attacks such as a punch or a kick are part of the Brawling Group and require at least one level of proficiency to do so without penalties


### Weapon Durability
See Material Statistics for a full breakdown (TODO)

Weapons have Hardness, Hit Points, and Breaking Threshold
- It is rare for weapons to take damage, but it can occur in cases of being targeted for breaking by certain creatures or abilities
- If its HP reaches 0, the weapon is irrecoverably destroyed to scrap, including upgrades
- If its HP reaches the BT (equal or lower), it becomes [[Broken]], removing it from being useable in combat as anything other than an improvised weapon in its group


### Common Weapon Traits and Attributes
###### Range
Ranged and thrown weapons have a range increment
- Attacks with these weapons work normally up to that distance
- Attack rolls beyond a weapon's range increment take a –2 penalty for each additional multiple of that increment between you and the target
- Attacks beyond the sixth range increment are impossible.  
  
For example, a weapon with a range of (10 units) takes no penalty against a target up to 10 units away, a –2 penalty against a target beyond 10 units but up to 20 units away, and a –4 penalty against a target beyond 20 units but up to 30 units away, and so on, up to 60 units.

###### Reload
While all weapons need some amount of time to get into position, many ranged weapons also need to be loaded and reloaded
- This entry indicates how many Interact actions it takes to reload such weapons or draw certain thrown weapons, like shuriken
	- This can be 0 if drawing ammunition and firing or throwing the weapon are part of the same action
	- If an item takes 2 or more actions to reload, the GM determines whether they must be performed together as an activity, or you can spend some of those actions during one turn and the rest during your next turn.   
- An item with an entry of “—” must be drawn to be thrown, which usually takes an Interact action just like drawing any other weapon

Reloading a ranged weapon and drawing a thrown weapon both require a free hand
- Switching your grip to free a hand and placing your hands in the necessary grip to wield the weapon are both included in the actions you spend to reload a weapon.

###### Bulk
A weapon’s Bulk is increased or decreased if it’s sized for creatures that aren’t Small or Medium size, following the rules on TODO

###### Hands
Some weapons require one hand to wield, and others require two
- A few items, such as a longbow, list 1+ for its Hands entry
	- You can hold a weapon with a 1+ entry in one hand, but the process of shooting it requires using a second to retrieve, nock, and loose an arrow
	- This means you can do things with your free hand while holding the bow without changing your grip, but the other hand must be free when you shoot
	- To properly wield a 1+ weapon, you must hold it in one hand and also have a hand free
  
Weapons requiring two hands typically deal more damage
- Some one-handed weapons have the two-hand trait, causing them to deal a different size of weapon damage die when used in two hands
- In addition, some abilities require you to wield a weapon in two hands
	- You meet this requirement while holding the weapon in two hands, even if it doesn't require two hands or have the two-hand trait
  
If an action or other ability requires you to use a “two-handed weapon,” it applies for any weapon you wield in two hands
- Any permanent adjustments to the weapon, such as an upgrade that can be added to a “one-handed weapon,” uses the Hands entry in the weapon table exactly (1+ counts as one-handed for this purpose).

###### Ammunition
Some entries in the ranged weapons tables are followed by an entry for the type of ammunition that weapon launches
- The damage die is determined by the weapon, not the ammunition
	- Except in the case of some ammunition as upgrades
	- Because that and other relevant statistics vary by weapon, ammunition entries list only the name, quantity, Price, and Bulk
- Using ammunition destroys it


### Additional Tags
###### Agile
- The multiple attack penalty you take with this weapon on the second attack on your turn is –3 instead of –4, and –6 instead of –8 on the third and subsequent attacks in the turn

###### Adaptable
- An adaptable weapon can be categorized in separate weapons groups, either by choice or usage
	- For instance, a knife used as a melee weapon is treated as part of the Bladed group, but when thrown is treated as being in the Throwing group
	- Proficiency rules still apply to the weapon group chosen
	- For weapons where it may be part of two groups for the same attack, the first group listed is the default one if one isn't declared before the attack is rolled

###### Backstabber
- When you hit an [[Off-Guard]] creature, this weapon deals 1 additional damage

###### Backswing
- You can use the momentum from a missed attack with this weapon to lead into your next attack
- After missing with this weapon on your turn, you gain a +1 circumstance bonus to your next attack with this weapon before the end of your turn

###### Concealable
- This weapon is designed to be inconspicuous or easily concealed
- You gain a +2 circumstance bonus to Slyness checks and DCs to hide or conceal a weapon with this trait

###### Deadly
- On a critical hit, the weapon rolls an additional die of the same amount

###### Disarm
- You can use this weapon to Disarm with the Fortitude skill even if you don’t have a free hand
- This uses the weapon’s reach (if different from your own) and adds the weapon’s item bonus to attack rolls (if any) as an item bonus to the Fortitude check
- If you critically fail a check to Disarm using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure. On a critical success, you still need a free hand if you want to take the item.

###### Fatal
- On a critical hit, the hit die of the weapon goes up a die

###### Finesse
- You can use your Dexterity modifier instead of your Strength modifier on attack rolls using this melee weapon

###### Forceful
- *This weapon becomes more dangerous as you build momentum*
- When you attack with it more than once on your turn, each later attack gains a circumstance bonus to damage equal to double the number of attacks taken.
	- So the second attack with a Forceful weapon will have a +2 circumstance bonus, and the third +3

###### Free-Hand
- This weapon doesn’t take up your hand and can't be Disarmed
- You can use the hand covered by your free-hand weapon to wield other items, perform manipulate actions, and so on
	- You can’t attack with a free-hand weapon if you’re wielding anything in that hand or otherwise using that hand
	- When you’re not wielding anything and not otherwise using the hand, you can use abilities that require you to have a hand free as well as those that require you to be wielding a weapon in that hand
- Each of your hands can have only one free-hand weapon on it.

###### Grapple
- You can use this weapon to Grapple with the Fortitude skill even if you don’t have a free hand
- This uses the weapon’s reach (if different from your own) and adds the weapon’s item bonus to attack rolls (if any) as an item bonus to the Fortitude check
- If you critically fail a check to Grapple using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure. On a critical success, you still need a free hand if you want to take the item.

###### Long
- *This melee weapon is less effective at close distances*
- Your attacks against targets within 1 unit take a -2 circumstance penalty

###### Nimble
- You can make melee attacks with this weapon against a source that is inducing the Grabbed condition without needing to roll a flat check
- You can make melee attacks with this weapon against a source that is inducing the Restrained condition by passing a DC 10 flat check, otherwise losing the action

###### Nonlethal
- Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them
	- Attacks with this weapon cannot deal VP damage
- You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty

###### Parry
- *This weapon can be used defensively to block attacks*
- While wielding this weapon, if you are proficient with it, you can spend a single action to position your weapon defensively, gaining a +1 circumstance bonus to Physical Defence until the start of your next turn

###### Reach
- This weapon can be used to attack enemies up to 2 units away instead of only adjacent enemies. For creatures with reach, the weapon increases their reach by 1 unit

###### Riding
- You are able to use this weapon while mounted on an animal without incurring penalties

###### Shove
- The weapon can be used to Shove with the Fortitude skill, even if you don't have a free hand
	- This uses the weapon’s reach
	- And adds the weapon’s item bonus to attack rolls as an item bonus to the Fortitude check instead of Strength 
- Using the weapon this way doesn’t deal any damage
- If you critically fail a check to Shove using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure 

###### Sweep
- *This weapon makes wide swinging attacks*
- When you attack with this weapon, you gain a +1 circumstance bonus to your attack roll if you already attempted to attack a different target this turn using this weapon.

###### Tethered
- This weapon is attached to a length of rope or chain that allows you to retrieve it after it has left your hand
- If you have a free hand (including if you've just thrown a two-handed tethered weapon and have a hand holding nothing but the weapon's tether), you can use an Interact action to pull the weapon back into your grasp
	- Unless it's being held by another creature

###### Trip (Including Ranged Trip)
- The weapon can be used to Trip with the Fortitude skill, even if you don't have a free hand
	- This uses the weapon’s first range increment or the weapon's reach as applicable
	- And adds the weapon’s item bonus to attack rolls as an item bonus to the Fortitude check instead of Strength 
- Using the weapon this way doesn’t deal any damage
- If you critically fail a check to Trip using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure 
	- This does not apply if the weapon was thrown

###### Thrown
- You can throw this weapon as a ranged attack
- It is part of the Throwing group when thrown
	- You add your Strength modifier to attack rolls as you would for a melee weapon
- The range you can throw a weapon is equal to 2 + Dex (min 1) up to double that range at a -2 circumstance penalty

###### Two-Handed
- This weapon can be wielded with two hands to change its weapon damage die to the indicated value
	- This change applies to all the weapon’s damage dice

###### Twin
- These weapons are used as a pair
- When you attack with a twin weapon, you add a circumstance bonus to the damage roll equal to the weapon’s number of damage dice if you have previously attacked with a different weapon of the same type this turn
	- The weapons must be of the same type, but they don’t need to have the same upgrades
- (TODO REMOVE THIS AND HAVE IT BE A FEAT TO USE ANY TWO ONE HANDED ONES?)

###### Versatile
- A versatile weapon can be used to deal a different type of damage than its listed type
	- This trait indicates the alternate damage type
	- For instance, a piercing weapon with Versatile S can deal piercing or slashing damage
	- You choose the damage type each time you attack

###### Volley
- *This ranged weapon is less effective at close distances*
- Your attacks against targets that are at a distance within the range listed take a –2 circumstance penalty

###### Weighted
- You can use your Strength modifier instead of your Dexterity modifier on attack rolls using this melee weapon


Comments to self
- Add some traits from pf2e as advanced bonuses: like Grapple added to the chain hook


### Weapons List


```dataview 
TABLE WITHOUT ID file.link AS "Name", weapon-group AS "Group", weapon-category AS "Category", description AS "Description", damage-dice AS "Damage Dice", bulk AS "Bulk", price AS "Price", range AS "Range", ammunition AS "Ammunition", hands AS "Hands", tags AS "Tags" 
FROM "4. Items/Weapons" 
WHERE type = "weapon" 
SORT file.name ASC 
FLATTEN description
```
