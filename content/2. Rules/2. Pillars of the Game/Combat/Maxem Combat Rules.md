---
file.name: Maxem Combat Rules
file.path: 2. Rules/2. Pillars of the Game/Combat/Maxem Combat Rules.md
file.folder: 2. Rules/2. Pillars of the Game/Combat
tags: []
---
# Maxem Rules (Reference)

This page is the **rules reference** for Maxems: the terms, costs, timing, and interruption/counterplay rules you need at the table.


## Core Terms


**Maxem**
* A Maxem evokes manifolds by shaping one Element/Field. You can evoke only manifolds of that element unless a feature explicitly overrides it.

**Manifold**: 
* A discrete aetherical effect (the “spell”).
* It has MP cost, Complexity, action cost, tags, and an effect entry.

**Weave**: 
* A modification applied to a manifold when evoking: shape, range, duration, riders, tuning. 
* Weaves usually add MP and/or Complexity.

**Evoking**:
* Is the act of "casting" a manifold: declaring it, paying costs, resolving rolls and effects.

**MP (Mana Points)**: 
* Is your evoking resource
* You spend it to evoke manifolds and certain weaves and feats.

**Complexity**:
* is the structural load of one evocation.
* Total Complexity = manifold Complexity + all weave Complexity. 
* A cast exceeding your maximum is illegal unless you Push.

There are no saving throws. Magical effects resolve as checks or attacks vs a Defence (PD / MD / AD as defined in core rules). 
Criticals still occur at ±10 vs the relevant Defence..


## MP (Mana Points)

### What MP is
MP is spent to evoke. If you can’t pay the MP cost, you can’t commit the evocation (unless a feature explicitly permits overdrawing).

### When you spend MP
- Evoking a manifold (base MP)
- Adding weaves (added MP)
- Maxem feats that list an MP cost

### MP recovery
MP recovery follows [[rest]] rules.

You may use VP instead of MP if you start with at least 1 MP.

## Complexity

### What Complexity is
Complexity is the “structural load” of *one* evocation.
- **Total Complexity** = manifold Complexity + all weave Complexity.

### Complexity limit
If the total exceeds your max:
- The evocation cannot be completed unless you have a feature that allows Pushing (casting above your limit with consequences).

Pushing past maximum Complexity adds +1 Dying at end of round per point exceeded.


## Manifold Entries

A manifold (with weaves) entry should list:
- Action Cost
- Range / Area / Target
- MP Cost
- Complexity
- Resolution: “Roll X vs Y Defence”
- Effect: including critical/success/failure lines if applicable


## Weaves

### When you choose weaves
You choose weaves when you evoke, not in advance.

### Using weaves
You may apply multiple weaves unless they conflict. 
* Add all MP and Complexity modifiers. 
* If two weaves both replace the same thing — shape, for instance — they are mutually exclusive unless one explicitly says it can stack.

A manifold's base AP cost increases by 1 for every 3 weaves applied.
* [[Quick Assembly]] raises this threshold to every 4 weaves.
*  TODO, reduce the AP cost of all manifolds by 1 *
* Using a weave to a higher level is considered to be applying a new weave

You can only cast manifolds up to 3 AP unless you take [[Weave Adept I]]
* Past that, the weave takes multiple rounds to take effect and can be countered between rounds or turns if you take [[Weave Adept II]]

By default, a manifold with no Delivery or Tempo weaves is instant and self-targeted. For just about all uses in play, you need at least one weave.


## Casting Procedure (Evoking a Manifold)

Use this every time you cast.

1) **Choose manifold** (must match your element)  
2) **Declare parameters** (targets, point, orientation, choices)  
3) **Declare weaves** (optional)  
4) **Check legality** (total MP & total Complexity; confirm anchors)  
5) **Pay MP** (on commit)  
6) **Resolve**
   - If it calls for a roll: roll the listed check/attack vs the listed Defence.
   - Apply ±10 criticals as normal.
7) **Track ongoing** (sustain, zones, durations, riders)


## Anchors

Anchors are the supports a maxem uses to will their consciousness into the fields. 
As Complexity grows, anchors become more demanding, with feats loosening the requirements

### Somatic Anchor
Practiced physical rhythms that help you exert your will. The tier you use affects reactions:

- Staff 
	- -1 Circumstance penalty to your DEX for the purpose of reactions with evocations
	- -1 to the DEX requirement to react against your evocations
- Wand 
	- -1 to the DEX requirement to react against your evocations
- Hand Motions 
	-  no modifier
- None 
	- +1 to the DEX requirement to react against your evocations

### Focus Anchor 

The exact manifold you are focused on, held in your mind.
From most to least demanding: 
* Verbal Speaking
* Thinking 
* None

See [[Thoughtcasting I|Thoughtcasting]] feats for how this unlocks.

### Material Requirements

Not an anchor, but some manifolds require a nearby component to evoke, Ex.:
* Water for a liquid-focused manifold, 
* open flame for certain Fire effects, 
* and so on. 

Material Requirements may be circumvented with some feats
- Such as extracting water from the air or even willing it into existence

### Anchor Requirements and Feats
For every 5 Complexity below your Maximum, you may reduce the tier of the somatic anchor by 1
* Ex. If your maximum complexity is 15, an evocation with a complexity of 5 only needs to do hand motions

Anchors must be used at their highest requirement unless feats allow exceptions
- Such as not requiring anchors that are as strict if the evoked manifold are lower than your maximum complexity. 


## Touch and Range

### Conscious Range
The starting range means the radius from yourself that a manifold can originate from.
This allows you to do things like having a touch-effect on someone that you are not touching. Or originating a direct attack further forwards, gaining that slight additional reach.

Your **Conscious Range** is equal to half (rounded down) your Presence (PRE) in paces.
- Negative PRE
	- Touch only includes yourself 
	- what would be known as "self" in other games
- PRE 0: 
	- Touch includes yourself, plus anything you are physically touching 
		- With either your body or anchor you are using to evoke 
	- What would be known as "touch" in other games

### Touch
Anything in your Conscious Range

### Ranged Attack 
Anything in the Conscious Range plus the range of the attack


## Disruption, Halting, and What Can Block Casting

### When a cast can be disrupted
An evocation can be interrupted while it is being committed/resolved, usually via:
- **Counter-Evokes** (see below)
- **Disrupt reactions** tied to the reaction stack
- **Losing required anchors** mid-cast (e.g., disarmed focus, hands bound)
- **Forced states** that break sustain/concentration (if the manifold uses sustain)
- **Suppression effects** (black-iron)

### Common “blocks” (hard prevents)
You cannot evoke a manifold if any of these apply and the manifold requires the affected anchor:
- Silenced / unable to speak 
	- blocks Verbal Focus
- Hands restrained / no functional gestures 
	- blocks Somatic Anchor
- Required material unavailable
	- blocks Material Anchor
- Black Iron Nearby 
	- blocks evocation entirely inside the zone unless explicitly overridden

### Halting an evocation (timing)
If an evocation is halted before resolution, it does not produce its effect.
- MP is still spent once you commit (Step 5) unless a feature explicitly refunds MP on disruption.
- If you were sustaining something and it’s disrupted, it ends at the timing the disruption specifies (usually immediately).


## Counter-Evoke (General Rule)

A **Counter-Evoke** is a reaction that attempts to interfere with an evocation as it’s being cast. 
Unlike other reactions which try to disrupt the evoker before the effect resolves, this one deliberately "intercepts" the incoming manifold by providing interfering waves in the fields. 
This is often done to try against stopping the entire effect, or to ensure the MP cost of the original evoker gets spent.

### Trigger
A creature you can perceive *begins* evoking a manifold.

### Requirements (baseline)
- You have the required AP and MP
- The AP and MP used cannot be more than that of the original Evocation
- You can perceive the caster and have line of effect to them
- You have enough DEX for the reaction tier required
- The Evocation cannot be range of Touch

### Resolution
A Counter-Evoke must succeed in
- Counter-Evoke roll vs the maxems Evoke Roll

(todo maybe more examples here on stopping parts of it? i.e. how you can use a small area around you to only block the effects around you rather than the whole thing. which allows MP conservation)

### Outcomes (default pattern)
- **Critical Success**: The evocation is halted and the caster suffers some backlash at GM discretion
- **Success**: The evocation is halted.  
- **Failure**: No effect; the evocation continues.  
- **Critical Failure**: Your counter collapses; you suffer the counter’s backlash (often MP loss, stagger, or a brief anchor lockout).

### Element interaction
Unless a feature says otherwise, you can counter-evoke:
- the same element
- the opposite element
- A Magus may treat all elements as their own for this purpose, provided they know at least one manifold of the element being countered.


TODO: partial counters(?)
* using a small area effect to block only the portion of a manifold that would affect your space rather than halting the whole thing. 
* This allows MP conservation and creates a different tactical option from full counter-evokes.

## Unstable Evokes

### Unstable Effects

Also known as Backlash, unstable effects occur when an evocation goes wrong in a way that rebounds on the caster or the surrounding field. 
It is distinct from simply failing an attack roll, something unplanned occurs.

Backlash triggers when:
- You critically fail a Counter-Evoke attempt
- You evoke with the Unstable weave and roll a 1 on the d4
- A manifold tagged with Radiance or Suspend successfully triggers field instability on its target
- You Push past your Complexity maximum and the manifold fails (critical failure on the evocation roll)
- A GM-determined exceptional circumstance (evoking in a null zone, evoking while Suppressed, etc.)

When Backlash Triggers, Roll on the relevant Unstable Aether Table for your Field.

### Unstable Aether Tables

Roll 1d6. Higher results are more severe.

#### Energy Field (Fire & Ice)

|d6|Result|
|---|---|
|1|**Heat Spike / Cold Snap** — A brief uncontrolled surge. You take 1d4 damage of your element's type (Fire or Cold). No other effect.|
|2|**Thermal Bleed** — The evocation bleeds energy outward. All creatures within 1 pace of you (including allies) take 1 damage of your element's type. You are unaffected.|
|3|**Anchor Burn** — Your focus anchor overloads with excess energy. If you are holding a Focus Anchor, it takes 1d4 damage to its BT. You gain Clumsy 1 until the end of your next turn as your hand or arm recoils.|
|4|**Field Excitation** — The surrounding field surges. Your next evocation this round costs 2 additional MP, as the field resists re-entry. If you have no MP remaining, you take 1d4 damage instead.|
|5|**Thermal Collapse** — The energy inverts. You gain the Suppressed condition until the end of your next turn. Any fire in your Conscious Range is extinguished (or any surface water in your range briefly freezes, for Ice).|
|6|**Uncontrolled Release** — The manifold releases in the wrong direction. The GM redirects the effect to a random valid target within range. If no valid target exists, you take the full effect yourself.|
#### Thought Field (Life & Death)

|d6|Result|
|---|---|
|1|**Vital Rebound** — A tremor of vitality or entropy passes through you. You take 1 HP damage that bypasses HP and goes directly to LP (minimum 0 LP damage).|
|2|**Awareness Bleed** — Your thoughts briefly broadcast. Any creature with Field Sense within 6 paces becomes aware of your exact position and that you just suffered backlash.|
|3|**Resonance Shock** — The Thought field briefly takes hold of your own mind. You gain Scattered 1 until the end of your next turn.|
|4|**Vital Drain** — The backlash draws on your own life energy to dissipate. You gain Hexed 1 until you take a short rest. If you already have Hexed, its value increases by 1 instead.|
|5|**Consciousness Bleed** — Your intent leaks outward. One creature of the GM's choice within 6 paces gains a 1-round compulsion toward you — they treat you as the subject of Absorbed until the end of their next turn.|
|6|**Field Inversion** — The manifold inverts in polarity. A Life manifold that was meant to heal instead deals 1d4 necrotic damage to its target. A Death manifold instead restores 1d4 HP to its target. Either way, the effect otherwise resolves as normal.|

---

#### Existence Field (Earth & Blight)

|d6|Result|
|---|---|
|1|**Matter Tremor** — A small shockwave runs through nearby material. Objects within 1 pace of you rattle or shift by an inch. Delicate objects make a flat check (DC 8) or fall over.|
|2|**Contamination Trace** — Your body briefly carries the element's signature. Earth: you leave powdery residue on everything you touch for 1 round, easily trackable. Blight: you smell distinctly of decay for 1 round — stealth checks are at −2.|
|3|**Structural Rebound** — The manifold's effect briefly touches your own body. Blight: you take 1d4 acid or poison damage. Earth: the matter partially crystallizes against you — you are Immobilized until the end of your next turn as material briefly fuses with your footing.|
|4|**Rank Bleed** — The element's rank effect applies to the nearest object within 1 pace (GM choice) at Rank 1 severity, regardless of intent.|
|5|**Field Saturation** — The Existence field rejects further interaction. All Earth or Blight manifolds you evoke until the end of the round cost 3 additional MP.|
|6|**Matter Surge** — The evocation over-creates or over-destroys. Earth: a random nearby surface grows 1d4 bits of crude matter in an inconvenient shape (GM decides). Blight: a 1-pace radius around the evocation point is blighted at Rank 1 for 1 round, affecting everything including allies.|

---

#### Force Field (Flow & Static)

|d6|Result|
|---|---|
|1|**Force Ripple** — A small concussive wave. You and all creatures adjacent to you are pushed 1 pace directly away from your position. No damage.|
|2|**Static Discharge** — A spark jumps from you to the nearest metallic object or creature within 2 paces. Deal 1 electric damage. If the target is wearing metal armour, deal 1d4 instead.|
|3|**Gravity Stutter** — Your personal gravity briefly fluctuates. You gain Clumsy 1 and Prone simultaneously until the start of your next turn as your footing becomes unreliable.|
|4|**Signal Bleed** — Your evocation briefly lit up the static field. Any illusions you are maintaining end immediately. Any creature using Field Sense within 12 paces detects a sudden sharp signal from your position.|
|5|**Magnetic Reversal** — Every ferrous object on your body (armour, weapons, belt buckles, coins) is simultaneously repelled outward. Make a flat check (DC 10) for each held item or it is flung 1d4 paces in a random direction. Armour buckles but stays on — you gain Clumsy 1 until the end of your next turn.|
|6|**Momentum Transfer** — The force of the failed evocation transfers entirely to your body. You are launched 1d4 paces in a random direction (GM rolls or determines). If you hit a solid surface, take 1d6 bludgeoning damage.|

## Interaction With the Reaction Stack

Counter-evokes and other disrupt reactions follow the combat chapter’s rules:
- They are declared into the reaction stack
- The stack resolves last declared -> first declared

If multiple counters/disruptions target the same evocation:
- Resolve them in stack order.
- Once the evocation is halted, later counters targeting that evocation fizzle unless they specify they still apply.


## Sustain / Concentration (if used)

If a manifold has [[Sustain]]:
- You must pay the sustain cost on the listed timing (typically each round).
- If you cannot or do not, the effect ends.


## Multi-Element Evocation  (auto-made by claude, TODO edit)
*This section is WIP pending full balancing of the rest of the system. The rules below are functional drafts — expect MAJOUR revision.*

## Resonant Evocation (Cooperative Evocation)

When two or more Maxems choose to combine their will into a single evocation, it is called a **Resonant Evocation**. This represents the rare and demanding act of two fields aligning toward one intent.

### Requirements

- All participants must be within 6 paces of each other
- All participants must be able to perceive each other
- The Lead Maxem must know the manifold being evoked

### Procedure

1. The **Lead Maxem** declares a Resonant Evocation and names the manifold and weaves as normal
2. Each **Assisting Maxem** declares their participation and commits an MP contribution (minimum 1, maximum equal to the Lead Maxems' base MP cost)
3. All participants pay their AP cost simultaneously — this uses the **Lead Maxems' action cost** for the manifold; Assisting Maxems each spend 2 AP regardless of the manifold's normal cost
4. All participants pay their declared MP
5. The Lead Caster's **effective Complexity maximum** increases by **2 per Assisting Caster** for this evocation only
6. Each Assisting Caster's contributed MP reduces the Lead Caster's MP cost **1-for-1** (to a minimum of 0)
7. The Lead Caster makes the evocation roll with a +1 status bonus per Assisting Caster
8. The evocation resolves normally

### Restrictions

- A Resonant Evoke counts as each participant's evocation for the round — no participant may evoke again until AP refreshes
- If the Lead Maxem is disrupted, all Assisting Maxem' MP is still spent
- A Resonant Evocation cannot be performed with the Quicken weave
- Maximum of 3 total participants (1 Lead + 2 Assisting) unless a feat explicitly permits more

## Resonant Evocation (Uncooperative Evocation)

When a Resonant Evocation happens without coordination 
as a reaction, an interception, or an accident of two fields meeting — it produces unpredictable results. This is not something you plan for; it's something you survive.

### Requirements

- Two Maxems of the same element simultaneously evoke within each other's Conscious Range without coordinating, at the GM's discretion
- A Counter-Evoke uses the same element as the original evocation and succeeds, but the counter-evoker rolls within 2 of the original evocation roll (a "near-collision" rather than a clean cancel)
- A manifold travels through the active field of another Maxem's sustained effect of the same element

### Procedure

1. ...

When uncooperative resonance is triggered, both Maxems roll on the Unstable Aether table for their shared Field.

### Restrictions

- ...

## Cross-Element Resonance (Magus Only)

A Magus who has learned two elements carries two distinct field relationships simultaneously. 
With effort, they can combine both in a single evocation — producing effects that neither element would create alone.

This is not a simple power increase. It is a genuinely different kind of manifold, and it taxes the Magus proportionally.

### Requirements

- The Magus must have Magus Discipline or higher (access to at least 4 elements)
- The Magus must know at least two manifolds of each element being combined
- The combined Complexity of both manifolds (as if evoked separately) must be within the Magus's maximum — no bonus from Resonant Evocation applies here

### Procedure

- The Magus declares a Cross-Element Evocation and names both manifolds and their shared weaves
- Check legality: total Complexity = first manifold's Complexity + second manifold's Complexity + all weaves. This must be within the Magus's maximum
- Pay MP for both manifolds combined, plus all weaves
- Spend the higher AP cost of the two manifolds + 1
- Make a single evocation roll. On a success, both effects resolve simultaneously on the same target or area. On a failure, only the primary manifold (the one with the higher Complexity) resolves; the secondary is lost with its MP spent
- A critical failure triggers backlash on both Fields — roll once on each relevant Unstable Aether table

The result is tagged with both elements and both Fields. 
Counter-Evokes against it must access both element to attempt a counter.
Residue from a Cross-Element Evocation is distinctive and identifiable as a Magus signature to anyone with Residue Analyst.

### Restrictions

- Can only combine elements the Magus has Magus Discipline access to
- Cannot be performed as a Resonant Evocation (cooperative or otherwise) — the mental load is the Magus's alone
- Cannot be performed with Quicken

TODO: define specific cross-element combinations and their signature effects (e.g. Fire + Ice producing a superheated steam effect, Life + Death producing a draining-then-restoring loop, Earth + Flow producing a liquefaction effect).

### Signature Resonance (Specific Feat Unlock)

_See [[Split Chassis]] feat for the cooperative variant that allows a partner to reduce your MP cost without performing a full Resonant Cast._


## Optional Rule: Environmental Field Strength (auto-made by claude, TODO edit)

_This rule adds setting texture and rewards Maxems who operate in their element's natural territory. GMs should enable this when it fits the tone of their campaign._

Every location has an ambient relationship with the eight Fields, expressed as its **Field State**. Most locations are Neutral across all Fields. Exceptional environments — volcanoes, glaciers, necrotic wastes, aetheric leylines — may have elevated or suppressed states.

### Field States

|State|Modifier|
|---|---|
|**Dormant**|The Field is nearly absent here. Evocations of this Element cost 1 additional MP. Any manifold using this Element must beat a flat check (DC 5) or fail entirely.|
|**Muted**|The Field is thin. Evocations cost 1 additional MP. No flat check required.|
|**Neutral**|Default. No modifier.|
|**Active**|The Field is lively. Evocations of this Element cost 1 less MP (minimum 0).|
|**Saturated**|The Field is overwhelming. Evocations of this Element cost 1 less MP and the caster gains +1 to evocation rolls. However, Counter-Evokes against this Element are at −2 (the field resists interruption).|
|**Overwhelmed**|The Field is at dangerous density. Evocations of this Element cost 0 MP for manifolds with base MP 2 or less. All other manifolds cost 1 less MP. The caster gains +2 to evocation rolls. The Unstable weave triggers a backlash roll on a 1 or 2 instead of just 1. Any critical failure on an evocation roll triggers a backlash as if the Unstable weave were applied.|

### Opposed Elements

The eight elements naturally pair as opposites:

- Fire ↔ Ice
- Life ↔ Death
- Earth ↔ Blight
- Flow ↔ Static

When a location has a Field State above Neutral for one element, its opposite element is typically one step lower. A Saturated Fire zone is typically a Muted Ice zone. This is not a strict rule — the GM may break the symmetry for narrative reasons (a site of great battle might have both Life and Death Saturated simultaneously).

### Detecting Field State

A Maxem with Field Sense may spend 1 AP to read the ambient field state of their own element at their current location. A successful Aetherics check (DC 10) reveals the current state. A Vasilian with appropriate feats may read all field states simultaneously.

### Example Environments

|Environment|Notable Field State|
|---|---|
|Active volcano|Fire: Overwhelmed / Ice: Dormant|
|Deep glacier|Ice: Saturated / Fire: Muted|
|Ancient battlefield (recent)|Death: Active, Life: Muted|
|Sacred healing grove|Life: Saturated|
|Blighted wasteland|Blight: Active, Earth: Muted, Life: Dormant|
|Raging ocean storm|Flow: Overwhelmed|
|Dense fog bank|Static: Muted, Flow: Active|
|Black Iron mine|All Fields: Dormant within the vein|

### Field State and Non-Maxems

An Overwhelmed or Saturated field is perceptible even to non-Maxems as a background sense of wrongness, pressure, warmth, cold, or unease. The GM may give circumstance bonuses to Perception checks in such locations when players are actively noticing their surroundings.


## Black Iron and Aetheric Suppression (auto-made by claude, TODO edit)

Black Iron is the common name for a rare metallic alloy whose internal structure disrupts the Fields. 
Unlike most materials, which exist within the Fields and are shaped by them, Black Iron appears to exist _adjacent_ to them — its presence does not register cleanly in any Field, and its effect on nearby evocation is immediate and severe.

### Properties

Black Iron is visually distinctive: it has a deep matte finish that seems to absorb light slightly, and resists both Earth creation manifolds and Blight corrosion at all ranks (it cannot be created or destroyed by the Existence field). It is cold to the touch regardless of ambient temperature. Maxems and Vasilians often describe proximity to Black Iron as a "deadening" sensation — as if they are suddenly slightly further from the world.

_(TODO: Define Black Iron's physical stats — Hardness, HP, BT, and weight. Consider whether it should be heavier or lighter than iron for equipment design purposes.)_

### Aetheric Suppression Zone

Any evocation attempted within the **Suppression Radius** of a Black Iron source is affected:

|Black Iron Mass|Suppression Radius|
|---|---|
|Small item (knife, ring, coin)|1 pace|
|Medium item (sword blade, plate panel)|2 paces|
|Large item (door, wall panel, cage)|4 paces|
|Structural (room lined with Black Iron)|Entire enclosed space|

_(TODO: Determine whether suppression radius stacks when multiple Black Iron items are present, or whether it is determined by the largest single source.)_

Within the Suppression Radius, the following apply:

- All Fields are treated as **Dormant** (see Environmental Field Strength, if used) regardless of ambient state
- All manifolds cost **+2 MP** to evoke
- Any manifold with a Complexity above the caster's maximum − 2 requires a flat check (DC 10) or it fails and MP is still spent
- The **Unstable weave** triggers a backlash roll on a 1 or 2 instead of just 1
- **Counter-Evoke** rolls take a −2 penalty
- **Field Sense** cannot detect residue or active evocations within the zone

### Wearing Black Iron

A creature wearing Black Iron armour or carrying Black Iron implements imposes a suppression effect on themselves as well as anyone they are in close contact with (within 1 pace). This is why Black Iron is primarily used as anti-Maxem equipment rather than standard gear — it disadvantages the wearer's own field access equally.

_(TODO: Define whether there are feats or training that allow a Maxem to acclimate to Black Iron proximity — possibly a high-tier Anchor feat.)_

### Black Iron and Counter-Evoke

A Counter-Evoke attempted across a Black Iron boundary (where either the caster or the counter-evoker is within a suppression zone) suffers the −2 penalty described above. If both are within the zone, the penalty applies once, not twice.

### Availability and Cost

Black Iron is extraordinarily rare. It cannot be created by Earth manifolds and resists Blight degradation, meaning it can only be mined or salvaged from naturally occurring veins — themselves poorly understood and inconsistently distributed.

_(TODO: Define Black Iron economy — estimated price per unit, which factions control known veins, whether the Artificer class has specific interactions with it.)_

_(TODO: Define whether Black Iron can be alloyed with other metals, and what properties a Black Iron alloy has vs. pure Black Iron.)_

### Detection

A Maxem with Field Sense who enters a Black Iron suppression zone immediately notices the deadening sensation and may spend 1 AP and succeed on an Aetherics check (DC 8) to identify the source and its approximate mass. A Vasilian with appropriate attunement may detect Black Iron before entering the zone as an absence in the field rather than a presence.


## Quick Checklist

Pick manifold → pick weaves → confirm anchors → total MP/Complexity → pay MP → resolve roll/effect → track sustain/duration → watch for disrupt/counter-evokes.


One may forget that all manifolds are instant and localized by default if no Tempo or Delivery weaves are used.
