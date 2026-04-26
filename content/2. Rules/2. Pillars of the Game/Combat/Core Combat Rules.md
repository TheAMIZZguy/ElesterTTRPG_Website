---
file.name: Core Combat Rules
file.path: 2. Rules/2. Pillars of the Game/Combat/Core Combat Rules.md
file.folder: 2. Rules/2. Pillars of the Game/Combat
tags: []
---
# Elester TTRPG — Core Combat Rules

This page defines the shared rules every combat uses: initiative and grit, Action Points and out-of-turn actions, the reaction stack, the combat roll system, MAP, critical effects, HP and Life Points, dying and death, conditions, action tags, and a quick grasp of how each archetype uses the rules.



## Initiative and Grit

### Initiative
When an encounter begins, each creature rolls Initiative to determine turn order.

- The default is Perception.
- The GM may call for another skill when it better matches how the encounter begins (ambush, stalking, prepared formation, mounted start, etc.).

### Grit: Starting Unready
Elester assumes fights are dangerous when you’re caught wrong.

- **Asleep:** you must wake up before you can meaningfully act. Until then, you effectively lose your turn.
- **Unready:** if you’re not equipped or positioned to fight (weapon stowed, armor half-worn, tangled in bedding, etc.), the GM may require you to spend actions to become ready before you can use certain options.

---

## Action Points (AP)

### 4 AP per Round
Each creature has 4 Action Points (AP) each round.

- You may spend AP on your turn or off of your turn.
- AP refreshes at the end of the round, not at the end of your turn.

> **Tactical pressure:** spending AP early gives you tempo now, but leaves you with fewer answers later in the same round.

### Cost = Power
More powerful actions usually cost more AP.

- **1 AP:** quick actions, repositioning, single strikes, short interactions  
- **2 AP:** committed maneuvers, stronger techniques, serious setups  
- **3–4 AP:** high-impact actions, major techniques, decisive plays  

Exact costs are defined by each action.


## Out-of-Turn Actions and the Reaction Stack

In Elester, “reactions” are simply actions taken off-turn. The game stays readable by resolving them using a stack.

### Counteraction Windows (Between Turns)
Between actions, a counteraction window opens—a brief moment where out-of-turn actions may be declared.

- Counteraction windows typically happen between turns (or when a moment clearly invites responses).
- “Triggerless reactions” are simply out-of-turn actions declared in a reaction window (most often between turns).

To keep combat flowing, the GM is encouraged to limit hesitation.
- If you want to act out of turn, declare quickly.
- If you wait too long, the window closes and play continues.

### Stack Order
When multiple out-of-turn actions are declared in the same window, resolve them last declared → first declared.

### Reaction Threshold (DEX)
Reacting is bandwidth. As a moment gets more crowded, it becomes harder to insert yourself cleanly.
- Each creature has a Reaction Threshold: the maximum “reaction complexity” they can keep up with in a window.
- As more out-of-turn actions are declared in the same window, the Dexterity requirement increases to successfully act within that window.

Raising your threshold:
- Being observant and prepared can improve how deep into a stack you can still respond.
- A teammate calling things out can also increase a creature’s effective reaction threshold in that moment.

*(Exact numbers/steps are defined in the Dexterity/awareness-facing rules. This section defines the structure.)*

### Cancelled Actions and Resources
If an earlier action in the stack prevents a later one, the later action’s AP is usually still spent (you committed to the attempt).

The GM may make exceptions when it’s clearly appropriate (for example, an evocation is interrupted before it meaningfully forms, so [[Maxem Combat Rules#Halting an evocation (timing)|MP may not be spent]]).

### Special Case: Exploit Forms
Exploit Forms do not enter the reaction stack. They layer over the moment without becoming part of the interrupt chain.


## Combat Rolls: Damage Minus Defense

Elester combat resolves offense with one roll that directly produces results. You do not roll to hit and then roll damage.

### Core Formula
When you use an offensive action:

Total = (Dice + Modifiers) − Target Defense

- If Total > 0, you deal Total damage (and apply the action’s effects).
- If Total ≤ 0, you deal 0 damage, though an action may still apply special outcomes on critical results if it says so.

### Dice + Modifiers (Good and Bad)
A roll may include:
- a base die (often a d20)
- action dice (weapon dice, technique dice, manifold dice, etc.)
- flat bonuses/penalties
- bonus dice / penalty dice (as your system uses them)
- MAP penalties (see below)


## Defenses and Targeting

Every offensive action specifies which Defense it targets:
- **PD** — Physical Defense  
- **MD** — Mental Defense  
- **AD** — Aether Defense  

That Defense is what you subtract in the core formula.


## Multiple Attack Penalty (MAP)

Actions tagged #Attack apply MAP.

- Your 1st Attack in a round is made normally.
- Your 2nd Attack in a round takes MAP 1.
- Your 3rd+ Attack in a round takes MAP 2.

MAP resets when AP refreshes (end of the round).

> Because AP is shared across the round, attacks made out of turn still count. If you spend attacks as out-of-turn actions early, your first Attack on your own turn may already be suffering MAP.

*(This page defines when MAP applies and when it resets. Numeric penalties belong in the MAP tuning block.)*

---

## Degrees of Success and Critical Effects

Compare your Total to the target Defense:

- **Critical Success:** Total is +10 or more
- **Success:** Total is +1 to +9
- **Failure:** Total is 0 to −9
- **Critical Failure:** Total is −10 or less

### Criticals Are Primarily Extra Effects
Critical results primarily add additional effects rather than “just more damage.”

Common examples:
- forced reposition, knockdown, disarm pressure
- stronger or longer conditions
- bypassing certain protections
- special riders (bleed, stagger, exposed)

*(The exact extra effects are defined by the action.)*

---

## HP and Life Points

Elester separates endurance from real injury.

### Hit Points (HP)
HP represents fighting endurance: fatigue, shallow cuts, bruises, guard, pacing, and grit.

- Most damage is applied to HP first.
- HP is comparatively easier to recover.

### Life Points (LP)
LP represents serious injury and lasting harm.

- LP 0 = instant death.

### When LP Can Be Damaged
LP can be damaged in several ways:
- When HP is gone and damage carries over
- By effects that explicitly target LP (toxins, certain field intrusions, serious injuries)
- By **heavy hits** that punch through even while HP remains (often as a critical rider)

LP is what makes combat feel real: even if you win, you may pay for it.

---

## 0 HP, Downed, Unconscious, Dying, Death, and Surrender

### Reaching 0 HP: You Choose
When you reach 0 HP, you do not automatically fall. You choose one of two states:

1) Keep Fighting  
You remain conscious and active at 0 HP. This is desperate and dangerous.

2) Go Down (Downed)  
You drop out of the fight—falling prone and yielding immediate initiative pressure—to reduce the chance of being killed. Many beings do not “kill confirm” a downed opponent while a fight is still active.

Choosing to go Down immediately:
- removes you as an active combatant, and
- prevents you from accumulating Dying.

### Dying: A Pure End-of-Round Clock
There are no stabilize checks. Dying is a clock.

- If you are at 0 HP and still fighting, you gain +1 Dying at the end of each round.
- If you are Downed/Unconscious, you stop gaining Dying.

### Choosing Unconscious at Any Time
At any point while you are at 0 HP and Dying is rising, you may choose to go unconscious (become Downed) to stop the end-of-round Dying increase.

### Death Threshold
You die when:

LP = Dying

*(LP 0 is also instant death.)*

### Surrender
Not every fight is to the death.

- You can surrender even before you hit 0 HP.
- Enemies can surrender too.
- Surrender should be treated as a real outcome with consequences (captivity, ransom, stripped gear, forced obligations), not an automatic “campaign loss.”

---

## Conditions

Conditions are the compressed language of combat: quick packages that change actions, rolls, perception, movement, and state.

Elester conditions can represent:
- **combat pressure:** sustained damage, ongoing harm, bleeding
- **state of being:** hidden, prone, grabbed, restrained
- **mechanical distortions:** confusion, slowed, weakened, or temporary changes like more/less Dexterity

There may be many conditions in the full list, but most characters repeatedly interact with only a small subset based on their builds and the enemies they face.

---

## Action Tags

Tags tell you how an action interacts with the combat engine.

### Attack
- Uses the damage-minus-defense roll
- Affected by **MAP**

### Move
- Repositions you
- Often weaker when used out of turn
- May interact with reach, zone control, and timing windows

### Interact
- Drawing, stowing, using items, manipulating objects
- Often cheap in AP, but costly in tempo

### Evoke
- Field-shaping actions: manifolds and weaves
- Often higher AP commitment and more vulnerable to disruption by timing

### Sustain
- You spend AP to keep an ongoing effect active each round
- If you don’t Sustain, the effect ends (unless stated otherwise)

### Stance
- A mode you enter that changes your available options until you leave it
- Often restricts some actions while empowering others

### Observe
- Used to spot hidden creatures, detect tells, read the battlefield, or prepare for upcoming actions
- Common uses include:
  - attempting to locate [[Hidden]] or [[Concealed]] threats
  - identifying weaknesses or patterns
  - setting up timing (“I’m watching for the moment they commit”)

---

## Combat Styles by Archetype (Quick Grasp)

This section is not a feat list—just how different archetypes tend to *use* the rules.

### Martials
- Win by tempo: repeated Attack pressure, movement, and item use
- Must manage MAP and their own exposure across the round

### Maxems
- Win by commitment: fewer actions, higher impact, shaped by weaves
- Often need protection and timing because disruption matters

### Vasilians
- Win by reading: Marks, Threads, Strain, then punishing patterns with Exploit Forms
- Exploit Forms layer over reaction play (they don’t join the stack)

### Alchemists / Essencewrights
- Win by preparation and resources: deployment, coatings, mixtures, and conditions
- Convert Interact actions into leverage

### Artificers
- Win by systems: tools, constructs, engineered advantages, and repeatable setups
- Trade raw burst for reliability and control

---

## TODO REMINDER (Extra Sections to Add Later)

Consider adding short “glue” sections commonly found in PF2e/D&D-style books:

- **Combat communication & transparency** (free speech, callouts, HP state bands like “bloodied”)
- **Information & uncertainty** (what’s obvious vs needs Observe; hidden info policy; called-shots stance)
- **Terrain & line rules** (line of sight/effect, difficult terrain, hazards, cover bands)
- **Threatened space & engagement** (reach, zones, moving through creatures, shared spaces)
- **Targeting & area effects** (placing areas, friendly fire defaults, cover vs blasts)
- **Resistances/weaknesses & damage types** (timing in the damage-minus-defense model)
- **Conditions fast reference** (most common conditions + standardized formatting)
- **Aid/teamwork** (support actions that boost rolls or reaction thresholds)
- **Ready/delay/preparation** (initiative manipulation and held actions)
- **Morale/retreat/nonlethal** (surrender, rout triggers, capture rules)
- **Environmental hazards** (fire, smoke, suffocation, cold/heat, collapsing terrain)
- **Mounted combat** (if it’s common enough to deserve a page)
- **GM adjudication principles (combat only)** (fast AP+tag assignment, precedent, speed-first rulings)
