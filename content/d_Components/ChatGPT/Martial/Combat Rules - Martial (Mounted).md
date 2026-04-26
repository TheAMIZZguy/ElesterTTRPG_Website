---
tags:
  - rules
  - combat
  - mounted
  - martial
aliases:
  - Mounted Combat
  - Riding Rules
file.name: Combat Rules - Martial (Mounted)
file.path: d_Components/ChatGPT/Martial/Combat Rules - Martial (Mounted).md
file.folder: d_Components/ChatGPT/Martial
---

# Mounted Combat Rules (Pace-Based, PF2e-Style)

**Scale:** 1 pace = 5 ft.  
These rules cover **mounts** (living ridden creatures). **Vehicles** are handled later, but “rideable vehicles” like **chariots** should follow the same structure: *controller + handling + shared space + collision risk*.

---

## Key Terms

- **Mount:** A creature you can ride.
- **Rider:** A creature currently mounted.
- **Controller:** The rider (or adjacent handler) currently directing a mount.
- **Mounted:** You occupy the mount’s space and move with it.
- **Unseated:** You’re still on the mount, but not in control (you’re slipping, tangled reins, thrown off balance). If not corrected, you risk falling.
- **Spooked:** The mount is panicking or refusing discipline (see Spook rules).

---

## Mount Types

### Minion Mount (common animals)
Most mundane mounts are **Minion mounts**:
- They **do not roll initiative**.
- They act on the **controller’s turn**.
- They only gain actions when **Commanded** (see Command Mount).
- By default, they **do not use reactions** unless a trait explicitly grants one.

### Independent Mount (smart / magical / sapient)
Some mounts are **Independent**:
- They **roll initiative** and take their **own full turn** (3 actions, plus reactions).
- A rider can **Guide** them, but does not “spend” their actions like a minion.
- An Independent mount may refuse suicidal commands if sapient or temperamentally unwilling.

---

## Mounted Space and Targeting

- While mounted, you and your mount share the mount’s **space**.
- You and the mount are **separate targets**.
- Attackers choose to target **Rider** or **Mount** (unless an effect specifies otherwise).
- Area effects can hit **both** if the space is covered.

### Cover From the Mount
If the mount’s body blocks the line between attacker and rider:
- The rider gains **Cover** (use your game’s cover bonus) against that attack.

---

## Core Mounted Actions

### Mount Up (◇)
**Requirements:** Adjacent to a willing mount.  
**Effect:** You become mounted.

### Dismount (◇)
**Effect:** You move into an adjacent space and are no longer mounted.

### Command Mount (◇) — Minion mounts only
**Requirements:** You are mounted (or adjacent and holding control).  
**Effect:** The mount gains **2 actions** this round, which you choose and resolve immediately or at any point later in your turn (your choice; be consistent).

Common mount actions:
- **Stride**
- **Step**
- **Trick / Drill** (if the mount knows any)
- **Strike** (only if the mount is trained/allowed to fight)

**If you do not Command a minion mount:** it takes **no combat actions** by default (it may react narratively, but does not gain Strides/Steps unless you decide you want a “1 safe action” fallback).

### Guide Mount (◇) — Independent mounts only
You don’t grant actions; you influence decisions. Choose one until the start of your next turn:
- **Hold Course:** +2 circumstance to your riding-control checks vs the mount’s MD this round.
- **Combat Seat:** +2 circumstance to checks to avoid becoming Unseated this round.
- **Press On:** ignore the first minor terrain penalty this round (GM-defined).

---

## Handling and Riding-Control Checks (vs Mount MD)

Whenever you must “keep control” of a mount, you roll a riding-control check:
- **Skill:** usually **Riding**, sometimes **Animal Handling** (GM call by mount type)
- **DC:** the **mount’s MD** (Mental Defence)
- Apply circumstance modifiers for terrain, panic, training, tack, etc.

**Riding-Control checks include:**
- Tight maneuvers (sharp turns at speed, threading hazards, jumping gaps)
- Spook checks
- Unseat checks
- Sudden stops, collisions, forced movement, and other destabilizing events

---

## Movement While Mounted

### Stride (mount action)
A Stride moves up to the mount’s **Speed** in paces.

### Tight Maneuvers
A riding-control check vs the mount’s **MD** is required when attempting:
- A sharp turn at high speed
- Jumping, squeezing, threading narrow hazards
- Moving on ice, deep mud, scree, or similar unstable terrain
- Moving through dense crowds or tight melee lines

**On Success:** complete the maneuver.  
**On Failure:** GM chooses one appropriate outcome:
- You lose distance (stop early / take the safer line), **or**
- You become **Unseated**, **or**
- You blunder into a minor hazard (if that was the risk)

---

## Spooking (Spook “DC” is Mount MD)

When something would spook the mount (battle noise, fire, sudden pain, unnatural creatures, etc.):

### Spook Check
Controller rolls Riding or Animal Handling **vs the mount’s MD**.

- **Success:** mount holds discipline.
- **Failure:** mount becomes **Spooked** until the end of its next activation.

### Spooked Effects
On becoming Spooked, the mount does one (GM chooses based on temperament):
- **Bolt:** Stride away from the threat using the safest path it can.
- **Freeze:** refuses to advance toward the threat; may only Step away or stand.
- **Buck:** attempts to unseat the rider (immediately triggers an Unseat check).

War-trained mounts usually reduce Bolt/Freeze severity (hesitate instead of full panic).

---

## Unseated and Falling

### When you risk being Unseated
You must attempt an **Unseat check** (riding-control vs mount MD) when:
- You take a heavy hit while mounted
- The mount takes a heavy hit
- The mount is tripped/knocked down, forced abruptly, or collides
- You fail a tight maneuver in a destabilizing way
- You attempt a risky mounted reaction twist (only if you use the optional rule below)

### Unseat Check
Roll Riding (or relevant control skill) **vs mount MD**.

- **Success:** you keep your seat.
- **Failure:** you become **Unseated** (still mounted, but not controlling).
- **Critical failure / fail badly:** you **Fall** into an adjacent space.

### Unseated (condition)
While **Unseated**:
- You cannot **Command** the mount (minion) or **Guide** it (independent).
- You take a penalty to martial actions (see Off-Balance below).
- At the start of your next turn, you must spend **◇** to regain control (GM: “Re-seat”) or you fall if the mount moves violently again.

---

## Reactions While Mounted

Your game uses reactions. Apply these rules:

- The rider can declare reactions normally.
- Minion mounts generally **do not** declare reactions unless they have a trait/feature granting one.
- Independent mounts can declare reactions normally on their own initiative/trigger timing.

### Ride-by and Reaction Strikes
Leaving an enemy’s threatened reach while mounted **can trigger** reaction strikes as normal.

Mounted movement doesn’t inherently “turn off” reactions unless a feat, trait, or special rule says so.

---

## Optional: Off-Balance (tied to mounted training)
If you want “mounted combat is hard unless trained”:

### Off-Balance (while mounted, in initiative)
If you **lack Rider’s Seat** (or equivalent):
- You take **−2 to martial damage rolls** while mounted in initiative.
- The first time each round you use a reaction while mounted, attempt an Unseat check (vs mount MD). On failure, become Unseated.

**Rider’s Seat** removes/ignores Off-Balance (per your feat text).

---

## Mounted Charge and Couching (hook for your feats)

### Charge (baseline hook)
If you moved a meaningful distance in a mostly straight line this round (GM: typically **≥ half mount Speed**), you qualify for **Mounted Charge** effects (from feats like *Mounted Charge* / *Couch the Lance*).

### Couch the Lance (risk hook)
If a “couched” charge strike fails to deal damage after Defence (deals 0), it triggers a riding-control risk (typically an Unseat check vs mount MD), as written in your feat.

---

## Independent Mount Turn Interaction

If you are mounted on an **Independent** mount:
- You take your turn normally.
- The mount takes its own turn normally.
- If the mount moves on its turn, you move with it (still mounted).
- If the mount refuses to cooperate, it may reposition, retreat, or protect itself.

**Practical note:** Independent mounts make mounted play stronger and more complex—this is intended for magical/smart mounts, not basic horses.

---

# Examples

## Example 1: Minion Warhorse Turn
1) Rider spends **◇ Command Mount**.  
2) Warhorse gains **2 actions**:
   - Action 1: **Stride** 8 paces to close distance.
   - Action 2: **Stride** 3 paces to angle around a shield wall (tight maneuver).  
     Rider rolls Riding vs mount MD. Success → completes turn safely.
3) Rider uses remaining actions to attack/cast/etc.

## Example 2: Spook in Battle
A fire-manifold detonates nearby; the horse would spook.  
Controller rolls Riding vs the horse’s **MD**:
- Failure → horse becomes **Spooked** and **Bolts** (GM choice).  
If it Bucks instead, rider must immediately roll an Unseat check vs MD.

## Example 3: Ride-by Reaction Strike
Rider Commands mount to Stride past an enemy spear line.  
Leaving threatened reach triggers an enemy reaction strike as normal.  
If the rider has no Rider’s Seat and uses a reaction during the pass, they may also risk Off-Balance’s Unseat check (optional rule).

## Example 4: Independent Flow-Touched Courser
The courser has its own initiative.  
- On rider’s turn: rider attacks and spends **◇ Guide Mount (Hold Course)** for +2 on control checks vs MD this round.  
- On courser’s turn: it Strides and uses a reaction later to avoid a strike (per its statblock).

---

## TODO Hooks (for later expansion)
- Vehicle rules (merchant cart, ships, chariots) using a parallel “controller + handling” subsystem.
- Mount Trick list (trained tricks) and War Drill list (2-action combat drills).
- Mount equipment (saddles, barding) and how it modifies control checks vs MD.
