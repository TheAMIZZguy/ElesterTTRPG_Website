---
file.name: Armour
file.path: 4. Items/Armour/Armour.md
file.folder: 4. Items/Armour
tags: []
---

Armour increases your character's defences, but some medium or heavy armour can hamper movement. If you want to increase your characters defence beyond the protection your armour provides, they can use a shield. Armour protects your character only while worn. Armour is grouped to classify their protective style and potential effects. They can be upgraded, broken, repaired, and used in a variety of ways.


### Proficiency and Proficiency Tiers
Armour, aside from being in groups, require a certain amount of proficiency to be able to use, these levels are: Unarmoured, Light, Medium, Heavy, Advanced
- Although these tiers are named to give intuitive names to the proficiencies, they can also be called by the usual proficiency terms: Untrained, Trained, Skilled, Mastered, Legendary

Proficiencies are split between armour groups, so you need proficiencies in separate armour groups to gain the proficiency bonuses and tiers for each [[armour group]]

Using armour in an armour group you have no proficiency caps your proficiency bonus on any ability and skill (including attacks) to a +0. Additionally, you have a -2 item penalty to casting spells; but if you have an under-proficiency this becomes simply -1. 
- *Example*: having Proficiency in Light Armour for the Cloth group and using Heavy Cloth armour means you add -1 to your spells. 

- **Unarmoured** 
	- Something that doesn't get in the way at all, often day-to-day clothes or decorative 
	- 1 Upgrade Slot
- **Light** 
	- Simple armour meant to be easy to use but aren't particularly strong, also used by those that prefer to fight with speed
	- 1 Upgrade Slot
- **Medium**
	- Armour used by those who expect to take a few hits, but do not expect to be in the thickest part of a battle
	- 2 Upgrade Slots
- **Heavy**
	- Fortified armour meant to protect the user as effectively as possible, often at the cost of mobility
	- 3 Upgrade Slots
- **Advanced**
	- Armour that is unique enough in how it is used to the point it needs specialized training
	- 3 Upgrade Slots


##### Upgrading Armour
Armour is not a static system, warriors and countries throughout history have searched for ways to customize their gear to get the advantage
Certain styles have become staples of the styles of cultures and not every upgrade is available in every part of the world, some travelers go on long quests to find master craft smiths to upgrade their gear
The full system is described under (TODO CRAFTING) but here is a handy description

**Quality**
Quality is the most basic measure of armour. Often determined by the material but also the skill of the craftsman in making it to make it as balanced and reinforced as possible
(Note to self, material limits the quality, but a high enough craftsman can bring it +1 level, or -1 level if they are not high enough)
Applies to all Armour
- Wretched (-2)
	- Generally seen in a Poor quality armour that was [[Broken]] but never repaired
	- Half the HP
	- No Upgrade Slots
- Poor (-1)
	- Basic cheap starting armour, and the go-to for non-combatants to have on themselves for protection
	- -1 Upgrade Slots
- Standard (+0)
	- The most cost effective armour, standard quality to equip soldiers with 
	- No change to Upgrade Slots
- Well-Made (+1)
	- The pricier variant of armour, more often used by officers or more expensive escorts
	- Twice the HP
	- +1 Upgrade Slot
- Master-Craft (+2)
	- The armour of aristocracy and the most famous warriors
	- Twice the HP
	- +2 Upgrade Slots


**Stacking:** 
- If an upgrade grants a tag your armor already has, **increase that tag’s tier** (e.g., _Infusing 1 → 2_), rather than stacking separate bonuses.


**Upgrade Slots**
- Modifications to weapons that increase its damage or capabilities
**Crystal Upgrades**
- Aetherical Upgrades that majorly increase damage or capabilities
**Black Iron Materials**
- Material benefits against those that wield the fields
**Modifications**
- Minor trait or bonus additions to armour


##### Armour Specialization Effect
Certain effects can grant you benefits against certain types of enemies who prefer certain damage. The exact effect depends on which armour group your armour belongs to, as listed below. You can always decide not to add the armour specialization effect of your gear.


| Armour Group | Armour Specialization Effects |
| --- | --- |
| — | — |
| — | — |
| — | — |
| — | — |
| — | — |



### Physical Defence Calculation
Represents being strong enough to take or evade an attack successfully

When receiving an attack that harms you through physical means (typically a regular attack, physical contact, or containing the Physical tag) you reduce the damage by your Physical Defence
- There are many bonuses and penalties that can effect your PD, but your armour is generally the largest indicator of the value, providing the Item Bonus

Add Static modifiers
- Bonuses and penalties added
- Including ones from conditions like [[Off-Guard]]
Reducing the attack roll value by your Physical Defence determines the damage you take (to a minimum of 0) 

**Physical Defence** = 5 + STR/DEX mod + bonuses (including armour) - penalties 
**Damage** = Attack Roll - Physical Defence 


### Multiple Pieces of Armour
Armour is tagged with the body parts it protects. And while you cannot wear two pieces of armour in the same slot, you can do so for different slots
- Doing this does *not* increase your Physical Defence by adding all the PD bonuses of the armour 
- When calculating your PD, you consider the item bonus only of the piece that has the highest bonus

The main purpose of using additional pieces of armour are as a backup if your main armour is [[Broken]] (so you still have a high PD). And for filling up unused upgrade slots.
- *Example*, if your main piece of armour (the one with the highest PD bonus) has 3 upgrade slots but only two are being used, then you may use the upgrade of an additional piece of armour that you have equipped
	- Note that the main armour upgrade slots take priority, so you cannot choose to not use a used slot
- The additional piece of armour that is being used to fill an empty upgrade slot can only have one upgrade slot being used (and any other upgrade slots empty)
- Any upgrade that applies only to the armor itself like [[Armour Upgrades#Protective Coating|Protective Coating]] does not count against this limit and may be applied multiple times


### Armour Durability
See Material Statistics for a full breakdown (TODO)

Armour has Hardness, Hit Points, and Breaking Threshold
- It is rarer for armours to take damage, but it can occur in cases of being targeted for breaking by certain abilities, or by choice as a defensive action
- If its HP reaches 0, the armour is irrecoverably destroyed to scrap, including upgrades
- If its HP reaches the BT (equal or lower), it becomes [[Broken]], reducing its effectiveness significantly

TODO comment on armour taking damage on some situations
- intentiaonally targetted
- specific materials like acid
- on crits (and specific damage thresholds?)
- specific weapons 


### Body Traits
See [[#Multiple Pieces of Armour]]

###### Arms
- Covers the arms and sometimes the hands

###### Head
- Covers the head

###### Legs
- Covers the legs and sometimes the feet

###### Torso
- Covers the chest and back


### Common Armour Traits and Attributes
###### Bulwark
*The armor covers you so completely that it provides benefits against some damaging effects*
- The threshold for you to take a critical hit increases 
	- +1 for light/medium armour
	- +2 for heavy/advanced armour

###### Comfort
*The armor is so comfortable that you can rest normally while wearing it*
- Wearing this armour counts as wearing no armour when it comes to [[Rest]] and fatigue recovery

###### Entrench
*You can position yourself in the armor or reposition its articulated pieces to better protect against some attacks*
- Entrench always includes a tag indicating a type of attack
	- i.e. "Entrench Melee"
- If you're proficient in this armor, while wearing it you can spend a single action to gain a +1 circumstance bonus to Physical Defence against the tagged type of attack until the start of your next turn

###### Flexible
*The armor moves easily and doesn’t hinder most actions*
- You don’t apply its check penalty to Agility, Riding, or Fortitude checks

###### Hindering
*This armor is so heavy or stiff it slows you down no matter what*
- You take a -1 penalty to all your Speeds (to a minimum of a 1-pace Speed)
- This is separate from and in addition to the armor's Speed penalty, and affects you even if your Strength or an ability lets you reduce or ignore the armor's Speed penalty

###### Laminar
*The armor is made up of layered sections, so when it breaks, it isn't as much of a problem*
- The status penalty to Physical Defence if this armor is [[Broken]] is 
	- No penalty for light armor
	- -1 for medium armor
	- -2 for heavy/advanced armor

###### Noisy
*This armor is loud and likely to alert others to your presence*
- The armor’s check penalty applies to Slyness checks even if you have the required Strength modifier

###### Ponderous
*The armor has moving parts or other complications that lengthen the wearer's initial reaction time*
- While wearing the armor, you take a -1 penalty to initiative checks
	- If you don't meet the armor's required Strength modifier, this penalty increases to be equal to the armor's check penalty if it's worse


### Additional Tags
###### Absorbing
*The flow of magic is halted with this armour*
- Absorbing always includes a type and a number
	- i.e. "Absorbing Static 2"
- You gain resistance equal to the number stated, to the type of Aether cast
- The armour is [[Broken]] if it absorbs more damage than necessary to go from unbroken to broken 

###### Aquadynamic
*This armor is made for use underwater, with streamlined design and buoyant materials used in strategic places*
- You don’t apply the armor’s check penalty to Fortitude or Agility checks in water or similar liquids

###### Attached
- Treat any attempts to disarm you of this gear as 1 level of success lower

###### Braced
*This armour is designed to plant and absorbed momentum*
- While wearing this armour, you can spend 1 AP to brace yourself
	- Until the start of your next turn you gain a +5 circumstance bonus to resist forced movement (If it has the move tag?)

###### Camouflaged
- While motionless you become [[Hidden]] if you were already [[Concealed]]

###### Civilized
*The armour speaks of peace*
- May be worn in places where armour is not generally allowed

###### Conductive
- The armour has Weakness 1 to Lightning (TODO terminology)

###### Depleting
*The flow of magic is impeded with this armour*
- Depleting always includes a type and a number
	- i.e. "Depleted Static 2"
- The effects of any Aether cast of the given type gets an item penalty equal to the number of the effect

###### Flammable
- The armour has Weakness 1 to Fire

###### Hardened
- Cannot take [[Persistent Damage]] while wearing this armour, unless critically hit

###### Inconspicuous
*This armour is designed to be inconspicuous*
- You gain a +1 circumstance bonus to Slyness checks and DCs to hide or conceal armour

###### Infusing
*The flow of magic is eased with this armour*
- Infused always includes a type and a number
	- i.e. "Infused Life 2"
- The effects of any Aether you cast of the given type gets an item bonus equal to the number of the effect

###### Insulating
*Made for the elements*
- While worn, doubles the time needed to fall under the effects of extreme weather

###### Polished
- When under the effect of a Light-Tagged spell (TODO terminology) your visibility is dropped to [[Concealed]] if it was in [[Observed]]
	- This effects lasts until until the start of your next turn

###### Positional
- You may spend 1 AP to reduce any damage taken by half which instead go to your armour

###### Redirective
- Trigger: A melee attack Fails against you
- Effect: You may impose [[Off-Guard]] on the attacker

###### Riding
- Gain an item bonus of +1 to riding

###### Sealed
*The armor forms a near airtight barrier against the environment*
- You gain Resistance 2 against any attacks tagged with airborne

###### Silent
- You gain a +1 item bonus to slyness checks when moving or tracking you

###### Sticky
*Weapons can get stuck in this armour*
- A weapon that is stuck to the armour requires an interaction action (1 AP) to free it

###### Striking
*This armour can be used offensively to make attacks*
- While wearing this armour, if you are proficient with it, you can use it to make attacks
	- It counts as a Simple [[Impact]] 1d4 weapon if it does not have any weapon statistics

###### Symbiotic
*This armour interacts directly with your consciousness*
- You gain a +1 item bonus to your Mental Defence

###### Uniform
- Recognized as part of a military, guild, or official group
- Peoples reactions may be altered accordingly

###### Unbreakable
- This item's [[Broken]] threshold becomes 0
- This does not stop the item from being destroyed

###### Warding
*The armor covers you so completely that it provides benefits against some damaging effects*
- While wearing this armor, attack rolls against you cannot critically succeed
- While wearing this armor, attack rolls against you cannot critically fail

###### Weathered
- The armour has Weakness 1 to Acid and Blight


### Armour List


```dataview 
TABLE WITHOUT ID link(file.name) AS "Armour", description AS "Description", armour-category AS "Category", armour-group AS "Group", tags AS "Tags", p-def AS "Physical Defence", dex-cap AS "Dexterity Cap", str-req AS "Strength Requirement", speed-penalty AS "Speed penalty", bulk AS "Bulk", price AS "Price"
FROM "4. Items/Armour" 
WHERE type = "armour" 
SORT file.name ASC 
FLATTEN description
```



## TO-DOS

- More specialized pieces of armour like head/arm/leg-only armour like bracers etc.
- Better synergy of traits and upgrading and the armour 
- Balancing
