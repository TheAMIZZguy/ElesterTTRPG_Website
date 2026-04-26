---
file.name: Maxem Feats
file.path: 3. Character Creation/5. Class Feats/2. Aether Feats/Maxem Feats.md
file.folder: 3. Character Creation/5. Class Feats/2. Aether Feats
tags: []
---
# Maxem Feat Tree

> [!info] How to Read This
> Feats are organised by tier. Prerequisites are listed in each entry.
> Level prerequisites appear in the title. Feats marked *(R)* can be taken multiple times.
> 
> A feat with an anti-requisite closes a path — read those carefully before committing.

---

## The Tree

````mermaid
flowchart TD
  MI["Maxem Initiate\nL1"] --> MS["Manifold Study\nL1"]
  MI --> WS["Weave Study\nL1"]
  MI --> MR["Mana Reserve\nL1"]
  MI --> FS["Field Sense\nL1"]
  MI --> AD["Anchor Discipline\nL2"]
  MI --> QA["Quick Assembly\nL4"]
  
  MS --> EA1["Elemental Attunement I\nL1"]
  EA1 --> EA2["Elemental Attunement II\nL4"]
  EA2 --> EA3["Elemental Attunement III\nL8"]
  MS --> ER["Elemental Repertoire\nL2"]
  ER --> SC["Signature Chassis\nL6"]
  SC --> SP["Split Chassis\nL8"]
  MS --> EC["Effortless Chassis\nL2"]

  WS --> WA["Weave Adept\nL4"]
  WS --> GS["Geometry Specialist\nL4"]
  WS --> TS["Tempo Specialist\nL4"]
  WS --> ES["Economy Specialist\nL4"]
  WS --> RS["Risk Specialist\nL6"]
  GS --> AG["Advanced Geometry\nL6"]
  TS --> QM["Quicken Mastery\nL8"]
  TS --> TR["Trigger Savant\nL10"]
  TS --> EM["Echo Mastery\nL10"]
  RS --> OC["Overcharge Control\nL10"]
  OC --> STC["Stability Through Chaos\nL14"]

  FS --> RA["Residue Analyst\nL2"]
  FS --> ST["Subtle Tint\nL2"]
  AD --> SE["Silent Evocation\nL6"]
  SE --> SM["Somatic Minimalism\nL8"]
  SM --> SD["Somatic Discipline\nL12"]
  SM --> TC["Thoughtcasting\nL12"]
  WS --> SuD["Sustaining Discipline\nL8"]
  EA1 --> FW["Fieldwalking\nL8"]

  RA --> CE["Counter-Evoke\nL6"]
  CE --> DW["Disrupt Weave\nL8"]
  CE --> US["Unravel Sustain\nL8"]
  DW --> RC["Reflective Counter\nL10"]
  US --> RD["Reactive Dispel\nL12"]
  RD --> DE["Disruptive Evocation\nL14"]

  EA1 --> FireP["Fire — Practical\nL2"]
  FireP --> FireS["Fire — Signature\nL6"]
  FireS --> FireD["Fire — Dominance\nL10"]
  FireD --> FireSov["Fire — Sovereign\nL14"]
  FireS --> BL["Blinding Light\nL8"]
  FireS --> Rad["Radiant Discipline\nL10"]

  EA1 --> IceP["Ice — Practical\nL2"]
  IceP --> IceS["Ice — Signature\nL6"]
  IceS --> IceD["Ice — Dominance\nL10"]
  IceD --> IceSov["Ice — Sovereign\nL14"]
  IceS --> SF["Snap-Freeze\nL8"]
  IceS --> CA["Cold Architecture\nL10"]

  MI --> MA["Magus Attunement\nL8"]
  MA --> MD["Magus Discipline\nL10"]
  MD --> MT["Magus Totality\nL16"]
  MA --> ET["Element Translation\nL12"]
```` 


## Core Feats

> [!entry] Maxem Initiate *(Level 1)*
> **Prereq:** CON 1
> 
> You become a Maxem. You can evoke manifolds up to Complexity 2.
> You must evoke with a Staff (somatic) and Spoken focus. You learn 1 manifold and 1 weave.
> You become Trained in Aethermancy.

^8f2c09

> [!feat] Manifold Study *(Level 1) (R)*
> **Prereq:** Maxem Initiate · Aetherology (Trained)
> 
> Learn a number of manifolds equal to your KNO − 2 (minimum 1). Can be taken multiple times.

> [!feat] Weave Study *(Level 1) (R)*
> **Prereq:** Maxem Initiate · WIT 1
> 
> Learn a number of weaves equal to your WIT. Can be taken multiple times.

> [!feat] Mana Reserve *(Level 1) (R)*
> **Prereq:** Maxem Initiate · PRE 1
> 
> Increase your MP maximum by +4. Each additional purchase increases it by +2.

> [!feat] Field Sense *(Level 1)*
> **Prereq:** Maxem Initiate · Aetherics (Trained)
> 
> You learn the Detect Residue action — sense whether your element was recently evoked nearby and follow its trail.

> [!feat] Anchor Discipline *(Level 2)*
> **Prereq:** Maxem Initiate · Aethermancy (Skilled)
> 
> When you evoke with an anchor above your required tier, gain +1 to your evocation roll.

> [!feat] Clean Release *(Level 2)*
> **Prereq:** Maxem Initiate · Aethermancy (Trained)
> 
> You can dissolve a held Trigger manifold safely, without triggering backlash.

> [!feat] Effortless Chassis *(Level 2)*
> **Prereq:** Manifold Study · CON 2 · Aethermancy (Skilled)
> 
> Manifolds of Complexity 2 or lower cost 0 MP to evoke.

> [!feat] Elemental Attunement I *(Level 1)*
> **Prereq:** Elemental Attunement · KNO 1
> 
> You have mastered simple manifolds. Learn manifolds of Complexity 2 or lower equal to your KNO.

> [!feat] Elemental Attunement II *(Level 4)*
> **Prereq:** Elemental Attunement I · KNO 2 · Aetherology (Skilled)
> 
> You have mastered many manifolds. Learn manifolds of any Complexity equal to your KNO.

> [!feat] Elemental Attunement III *(Level 8)*
> **Prereq:** Elemental Attunement II · KNO 4 · Aetherology (Mastered)
> 
> You have mastered harder manifolds. Learn manifolds above your current maximum Complexity equal to your KNO − 2, provided you have the feats to evoke them.

> [!feat] Quick Assembly *(Level 4)*
> **Prereq:** Maxem Initiate · WIT 2 · Aethermancy (Skilled)
> 
> Your manifold's AP cost only increases after every 4 weaves instead of every 3.

> [!feat] Subtle Tint *(Level 2)*
> **Prereq:** Field Sense · WIT 1 · Aetherics (Skilled)
> 
> When you evoke without Area, Overcharge, Sustain, or Trigger, you may leave only faint residue. Residue lasts half as long.

> [!feat] Fieldwalking *(Level 8)*
> **Prereq:** Elemental Attunement I · CON 3 · Aethermancy (Mastered)
> 
> Choose one minor always-on expression of your element (GM-approved). It costs no MP and cannot meaningfully affect combat.

> [!feat] Sustaining Discipline *(Level 8)*
> **Prereq:** Weave Study · PRE 3 · Aethermancy (Skilled)
> 
> When you pay MP to Sustain an effect, reduce the cost by 1 (minimum 1). If sustaining multiple effects, choose which one benefits each round.


## Weave Feats

> [!feat] Weave Adept *(Level 4)*
> **Prereq:** Weave Study · WIT 2 · Aethermancy (Skilled)
> 
> The maximum number of weaves you can apply is uncapped.

> [!technique] Geometry Specialist *(Level 4)*
> **Prereq:** Weave Study · WIT 2 · Aethermancy (Skilled)
> 
> When you apply Area or Range, reduce the total MP cost by 1 once per evoke (minimum 0).

> [!technique] Advanced Geometry *(Level 6)*
> **Prereq:** Geometry Specialist · WIT 3 · Aethermancy (Mastered)
> 
> When you use Geometric Exclusion, exclude a number of targets up to your WIT modifier without paying the additional MP cost (minimum 1 free exclusion).

> [!technique] Tempo Specialist *(Level 4)*
> **Prereq:** Weave Study · WIT 2 · Aethermancy (Skilled)
> 
> The first time each round you apply Duration or Hold, reduce the total MP cost by 1 (minimum 0).

> [!technique] Quicken Mastery *(Level 8)*
> **Prereq:** Tempo Specialist · WIT 3 · Aethermancy (Mastered)
> 
> When you apply Quicken, you may also reduce the total MP cost of the manifold by 1.
> *(Second option — TODO)*

> [!technique] Echo Mastery *(Level 10)*
> **Prereq:** Tempo Specialist · WIT 3 · Aethermancy (Mastered)
> 
> When you apply Echo, each instance costs 1 less MP than the previous (minimum 0). You may also choose a different target for each echo within the original range.

> [!technique] Trigger Savant *(Level 10)*
> **Prereq:** Tempo Specialist · WIT 3 · Aethermancy (Mastered)
> 
> You may set two trigger conditions on a Trigger manifold instead of one. When it fires, it gains +1 to its attack roll or DC.

> [!technique] Economy Specialist *(Level 4)*
> **Prereq:** Weave Study · WIT 2 · Aethermancy (Skilled)
> 
> Your first instance of Conserve or Anchor each round does not increase Complexity.

> [!technique] Risk Specialist *(Level 6)*
> **Prereq:** Weave Study · WIL 2 · Aethermancy (Skilled)
> 
> When you apply Overcharge, Unstable, or Wild Potential, gain +1 to your AD against any unwilling effects from your own evocation (backlash, unstable table results, overcharge riders).

> [!technique] Overcharge Control *(Level 10)*
> **Prereq:** Risk Specialist · WIL 3, CON 3 · Aethermancy (Mastered)
> 
> When you apply Overcharge, you may declare before the roll that you're redirecting any "extra" into shape — larger area, longer duration, and similar. On a success this applies; on a failure it reduces instead.

> [!technique] Stability Through Chaos *(Level 14)*
> **Prereq:** Overcharge Control · WIL 4, CON 4 · Aethermancy (Legendary)
> 
> You may shift a Critical Failure to Failure, or a Failure to Success on an evocation. Until the start of your next round, your next evocation's success tier is reduced by 1.


## Manifold Feats

> [!feat] Elemental Repertoire *(Level 2)*
> **Prereq:** Manifold Study · KNO 1 · Aetherology (Trained)
> 
> Learn two additional manifolds from your element.

> [!feat] Signature Chassis *(Level 6)*
> **Prereq:** Elemental Repertoire · KNO 2 · Aethermancy (Skilled)
> 
> *(TODO — cooperative chassis specialisation with an ally)*

> [!feat] Split Chassis *(Level 8)*
> **Prereq:** Signature Chassis · KNO 3, WIT 2 · Aethermancy (Mastered)
> 
> Help an ally evoke by spending 1 AP and contributing MP. For each MP you contribute (up to x), reduce their MP cost by that amount plus 2.


## Anchor Feats

> [!technique] Silent Evocation *(Level 6)*
> **Prereq:** Anchor Discipline · WIL 2 · Aethermancy (Mastered)
> 
> If you are evoking at least 4 Complexity below your maximum, you can evoke without speaking. Increase the reaction DC against your evocations by 2.

> [!technique] Somatic Minimalism *(Level 8)*
> **Prereq:** Silent Evocation · WIT 2 · Aethermancy (Mastered)
> 
> You can fulfil somatic anchor requirements using only one arm.

> [!technique] Somatic Discipline *(Level 12)*
> **Prereq:** Somatic Minimalism · CON 4 · Aethermancy (Legendary)
> 
> Your somatic anchor tier reduces for every 3 Complexity below your maximum instead of every 5.

> [!technique] Thoughtcasting *(Level 12)*
> **Prereq:** Somatic Minimalism · CON 4 · Aethermancy (Legendary)
> 
> If evoking at least 8 Complexity below your maximum, you need neither voice nor gesture. Increase the reaction DC against your evocations by 4. Vasilians gain no advantages reading this evocation.


## Counterwork Feats

> [!feat] Residue Analyst *(Level 2)*
> **Prereq:** Field Sense · WIT 1 · Aetherology (Skilled)
> 
> When you use Field Sense to detect residue, also attempt to identify the manifold type and one notable weave. On a critical success, you also learn the approximate MP and Complexity bands.

> [!technique] Counter-Evoke *(Level 6)*
> **Prereq:** Residue Analyst · CON 2 · Aethermancy (Skilled)
> 
> *Reaction (2 AP).* When a creature within 10 paces evokes a manifold of the same or opposite element, make an evocation roll. If you meet or exceed their roll, the evocation is halted. MP cost is 2 less than the original (minimum 1). See [[Maxem Combat Rules#Counter-Evoke]] for full rules.

> [!technique] Disrupt Weave *(Level 8)*
> **Prereq:** Counter-Evoke · WIT 3 · Aetherics (Mastered)
> 
> Instead of a full Counter-Evoke, disrupt instead: reduce the evocation's MP and Complexity by 3 and remove one weave of your choice from it.

> [!technique] Unravel Sustain *(Level 8)*
> **Prereq:** Counter-Evoke · CON 3 · Aethermancy (Mastered)
> 
> *Action (1 AP).* Target a sustained manifold you can locate. Make an evocation roll vs the original. On a success, the effect ends immediately. Costs 5 MP, 1 Complexity.

> [!technique] Reflective Counter *(Level 10)*
> **Prereq:** Disrupt Weave · CON 3 · Aethermancy (Mastered)
> 
> When you critically succeed at a Counter-Evoke, you may redirect the manifold to a new target within the original range instead of halting it. It still uses the initial evocation roll.

> [!technique] Reactive Dispel *(Level 12)*
> **Prereq:** Unravel Sustain · CON 4 · Aethermancy (Legendary)
> 
> *Action (1 AP).* Target a Trigger manifold you know the location of. Make an evocation roll vs the original. On a success, the trap is dismantled safely. Costs 1 MP, 5 Complexity. Knowing the manifold gives +2 to the roll.

> [!technique] Disruptive Evocation *(Level 14)*
> **Prereq:** Reactive Dispel · CON 4 · Aethermancy (Legendary)
> 
> *(TODO — passive Counter-Evoke on manifold paths. Needs cost and roll requirement before finalising.)*


## Fire Feats

> [!entry] Fire — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Fire) · CON 1 · Aetherics (Skilled)
> 
> Learn two Fire manifolds. When you hit with a Fire manifold, you may push the target up to 1 pace in any direction (forced movement).

> [!technique] Fire — Signature *(Level 6)*
> **Prereq:** Fire — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Fire manifolds. When you hit a target that is already Ignited with a Fire manifold, the damage roll gains +1d4.

> [!technique] Fire — Dominance *(Level 10)*
> **Prereq:** Fire — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Fire manifolds. Once per round when you evoke a Fire manifold, one creature hit gains +1 to all Fire damage they take until the start of your next turn. This resets each round.

> [!technique] Fire — Sovereign *(Level 14)*
> **Prereq:** Fire — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Fire manifolds. You may optionally modify your Fire manifolds: if the target has Fire resistance, ignore 1 level of it. If they do not, reduce the damage by 1.

> [!identity] Fire — Blinding Light *(Level 8)*
> **Prereq:** Fire — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you evoke a Fire manifold with Area that deals damage, creatures hit have their visual sense precision reduced by 1 tier until the end of your next turn.

> [!identity] Fire — Radiant Discipline *(Level 10)*
> **Prereq:** Fire — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you evoke a Fire manifold that produces light, spend 2 MP to intensify the flare. Creatures in the light area make a flat check (DC 10) or gain Dazzled until the end of their next turn.


## Ice Feats

> [!entry] Ice — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Ice) · CON 1 · Aetherics (Skilled)
> 
> Learn two Ice manifolds. When you apply Slowed with an Ice manifold, the target must spend 1 additional AP to attempt any reaction for the duration.

> [!technique] Ice — Signature *(Level 6)*
> **Prereq:** Ice — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Ice manifolds. When you hit a target already affected by a cold condition, extend the effect's duration by 1 round, or have the persistent damage tick once immediately. Choose at time of evocation.

> [!technique] Ice — Dominance *(Level 10)*
> **Prereq:** Ice — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Ice manifolds. When you evoke an Ice manifold, the DEX required to counter-evoke it increases by 1. Frozen creatures cannot benefit from Quickened or any effect that increases their AP while Frozen.

> [!technique] Ice — Sovereign *(Level 14)*
> **Prereq:** Ice — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Ice manifolds. Once per round, when a creature fails to counter-evoke your Ice manifold, they gain Slowed 1 until the end of their next turn and their counter costs 1 additional MP. You may Sustain one 0-MP Ice manifold per round at no cost.

> [!identity] Ice — Snap-Freeze *(Level 8)*
> **Prereq:** Ice — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you hit a creature with an Ice manifold that deals damage or applies Slowed, you may extend any condition the manifold applied until the start of your next turn at no additional cost. Does not require the Sustain weave.

> [!identity] Ice — Cold Architecture *(Level 10)*
> **Prereq:** Ice — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you create Ice terrain or structures, they are sustained for 1 round for free. Creatures moving through or starting their turn in your Ice terrain treat it as difficult terrain even if they would normally ignore difficult terrain.


## Life Feats

> [!entry] Life — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Life) · CON 1 · Aetherics (Skilled)
> 
> Learn two Life manifolds. When you evoke a Life manifold that restores HP or applies a buff, you may also clear one rank of a minor ongoing condition (Bleeding, Exhausted 1, Wounded 1) as part of the same evocation.

> [!technique] Life — Signature *(Level 6)*
> **Prereq:** Life — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Life manifolds. When you evoke a Life manifold targeting a willing creature, they may move up to 1 pace as a free action. This movement does not trigger reactions. When you Stabilize a Dying creature, they do not gain Dying again until the end of your next turn.

> [!technique] Life — Dominance *(Level 10)*
> **Prereq:** Life — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Life manifolds. Creatures you control through Animate, Vitalize, or Swarmlet gain +1 to all defences within your Conscious Range. Once per round, a controlled creature may interpose itself between you and an attack as a reaction, taking the damage instead.

> [!technique] Life — Sovereign *(Level 14)*
> **Prereq:** Life — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Life manifolds. Gain +2 to Counter-Evoke rolls against Death manifolds or manifolds applying conditions to living creatures. Once per encounter, when an ally within your Conscious Range would reach 0 HP, spend 3 MP as a reaction to immediately evoke Stabilize or Regenerate on them without spending AP.

> [!identity] Life — Guiding Pulse *(Level 8)*
> **Prereq:** Life — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you restore HP or stabilize a creature with a Life manifold, also grant either a +1 status bonus to their next PD or AD roll, or allow them to move 1 pace without triggering reactions.

> [!identity] Life — Micro-Agency *(Level 10)*
> **Prereq:** Life — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you evoke a Life manifold on an object, you may grant it a simple programmed behaviour for the manifold's duration. It cannot exceed what the object could physically do.


## Death Feats

> [!entry] Death — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Death) · CON 1 · Aetherics (Skilled)
> 
> Learn two Death manifolds. When you successfully apply Hex or Siphon, learn one piece of information about the target: their current HP band, their highest active Defence, or whether they are currently affected by any conditions.

> [!technique] Death — Signature *(Level 6)*
> **Prereq:** Death — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Death manifolds. Once per round, when a creature critically fails a Counter-Evoke against your Death manifold, you gain 1 MP. When you successfully apply Tire to a creature, they also take 1d4 necrotic damage.

> [!technique] Death — Dominance *(Level 10)*
> **Prereq:** Death — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Death manifolds. When you successfully Counter-Evoke a Life manifold, spend 1 AP and 2 MP to redirect it to yourself instead, receiving its healing or buff. Declare before the counter-evoke roll resolves.

> [!technique] Death — Sovereign *(Level 14)*
> **Prereq:** Death — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Death manifolds. Optionally modify your Death manifolds: ignore 1 level of Necrotic resistance if the target has it, or reduce damage by 1 if they do not. When a creature you have Hexed dies, recover 1 MP.

> [!identity] Death — Siphoning Touch *(Level 8)*
> **Prereq:** Death — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you hit with a Death manifold that deals damage, you may siphon: gain temporary HP equal to half the damage dealt (minimum 1). Cannot exceed CON × 2 at any time. Expires at end of encounter.


## Earth Feats

> [!entry] Earth — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Earth) · CON 1 · Aetherics (Skilled)
> 
> Learn two Earth manifolds and one additional Material Class. When you Move or Reshape material you know, you may do so through 1 additional pace of interrupted space.

> [!technique] Earth — Signature *(Level 6) (R)*
> **Prereq:** Earth — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Earth manifolds and one additional Material Class. Allies treat terrain and structures you create as normal ground even if it would otherwise be difficult terrain. Can be taken multiple times for additional Material Classes.

> [!technique] Earth — Dominance *(Level 10)*
> **Prereq:** Earth — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Earth manifolds. When you evoke an Earth manifold, you may affect two different Material Classes you know in the same evocation. Your created or transmuted structures may be reinforced at creation — choose +2 HP or +1 BT at no additional cost.

> [!technique] Earth — Sovereign *(Level 14) (R)*
> **Prereq:** Earth — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Increase your Proficiency in one Material Class. Once per encounter, Transmute any material you know into any other material you know regardless of class, up to 5 bits, lasting until end of encounter. Can be taken multiple times for different classes.

> [!identity] Earth — Reinforce *(Level 8)*
> **Prereq:** Earth — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you create or transmute Earth matter into cover or armour-like structure, you may compact it: Hardness increases by 1 but HP decreases by 2.

> [!identity] Earth — Material Truth *(Level 10)*
> **Prereq:** Earth — Signature · CON 3 · Aethermancy (Mastered)
> 
> Spend a few seconds or 1 AP to identify the purity and composition of any object within your Conscious Range, provided you know its Material Class.

> [!identity] Earth — Materialism *(Level 10)*
> **Prereq:** Earth — Signature · CON 3 · Aethermancy (Mastered)
> 
> You can tell whether a visual illusion occupies physical space. You notice only the absence of matter — you learn when there is no physical object at that location.


## Blight Feats

> [!entry] Blight — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Blight) · CON 1 · Aetherics (Skilled)
> 
> Learn two Blight manifolds. You are immune to your own Blight effects. When you deal damage to an object with a Blight manifold, increase its Blight rank by 1.

> [!technique] Blight — Signature *(Level 6)*
> **Prereq:** Blight — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Blight manifolds. Reduce the MP cost of Blight manifolds of one chosen Material Class by 1 (chosen when this feat is taken). When you hit a creature carrying weapons or wearing armour with a Blight manifold, you may direct the damage to their equipment instead.

> [!technique] Blight — Dominance *(Level 10)*
> **Prereq:** Blight — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Blight manifolds. When a creature or object affected by your Blight manifold takes damage from any source, spend 1 MP as a free action to increase their Blight rank by 1 (once per round per target). Your Blight effects can spread: when an object reaches maximum Blight rank, adjacent objects of the same Material Class make a flat check (DC 8) or gain Blight rank 1.

> [!technique] Blight — Sovereign *(Level 14)*
> **Prereq:** Blight — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Blight manifolds. Optionally modify your Blight manifolds: ignore 1 level of Poison or Acid resistance, or if the target has no resistance, apply Poisoned 1. When a creature you have Poisoned dies, recover 1 MP per level of Poisoned they had.

> [!identity] Blight — Corrosive Patina *(Level 8)*
> **Prereq:** Blight — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you deal Blight damage, spend 1 MP to leave a Corrosive Patina on the target. The first time anything touches or strikes them each round, that creature or object takes 1d4 acid damage. Lasts until the target spends a full action removing it or until end of encounter.


## Flow Feats

> [!entry] Flow — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Flow) · CON 1 · Aetherics (Skilled)
> 
> Learn two Flow manifolds. Gain +1 to your walking, swimming, and climbing speeds.

> [!technique] Flow — Signature *(Level 6)*
> **Prereq:** Flow — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Flow manifolds. Gain +2 to your DEX for the purpose of Counter-Evokes. The DEX requirement for reactions against your evocations increases by 1.

> [!technique] Flow — Dominance *(Level 10)*
> **Prereq:** Flow — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Flow manifolds. When you evoke a Flow manifold that repositions a creature or object, you may chain the momentum: direct it into another creature in its path. Make a free attack roll vs PD using CON. On a hit, deal 1d6 bludgeoning and apply Prone.

> [!technique] Flow — Sovereign *(Level 14)*
> **Prereq:** Flow — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Flow manifolds. You cannot be forcibly repositioned unless the effect exceeds your CON + PRE as a DC (you may allow it voluntarily). While in contact with flowing liquid or moving air, one Flow manifold per round costs 1 less MP (minimum 0).

> [!identity] Flow — Kinetic Redirect *(Level 8)*
> **Prereq:** Flow — Signature · CON 3 · Aethermancy (Mastered)
> 
> When a projectile or thrown object passes within 2 paces of you, spend 1 MP as a reaction to deflect it — increase the attack roll DC against you by your CON modifier. On a miss, redirect it toward a new target within the original range at −2.


## Static Feats

> [!entry] Static — Practical *(Level 2)*
> **Prereq:** Elemental Attunement (Static) · CON 1 · Aetherics (Skilled)
> 
> Learn two Static manifolds. Ferrous objects in your Conscious Range cannot be affected by Flow manifolds unless the roll beats your AD.

> [!technique] Static — Signature *(Level 6)*
> **Prereq:** Static — Practical · CON 2 · Aethermancy (Skilled)
> 
> Learn two additional Static manifolds. You can detect whether anything you can see is the result of a deliberate Static manifold.

> [!technique] Static — Dominance *(Level 10)*
> **Prereq:** Static — Signature · CON 3 · Aethermancy (Mastered)
> 
> Learn two additional Static manifolds. When you Magnetize or Electrify an object held or worn by a creature, they make a flat check (DC 10) or have the item wrenched free, or take 1 additional electric damage per round it remains in contact. Choose at time of evocation.

> [!technique] Static — Sovereign *(Level 14)*
> **Prereq:** Static — Dominance · CON 4 · Aethermancy (Legendary)
> 
> Learn two additional Static manifolds. You are immune to Electric damage. When a Static manifold you evoke deals electric damage, redirect the arc after resolution — it extends up to your Conscious Range and deals half the original damage to one additional target.

> [!identity] Static — Veilcraft *(Level 8)*
> **Prereq:** Static — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you evoke a Static manifold that affects light or vision, choose one refinement: no audible tell, no shimmer at the edge, or it matches a specific angle or light source. The difficulty of mundane detection improves by one step.

> [!identity] Static — Ferrous Command *(Level 10)*
> **Prereq:** Static — Signature · CON 3 · Aethermancy (Mastered)
> 
> When you use magnetism or charge to move a ferrous object, increase the maximum weight you can affect by one manifold size tier. When you hit a creature with a Static manifold, you may also attempt a Disarm using the same evocation roll vs PD, or move a small ferrous item within 5 paces by 1 pace.


## Magus Feats

> [!entry] Magus Attunement *(Level 8)*
> **Prereq:** Elemental Attunement AND a Vasilian feat granting deep Field-reading · CHA 2, CON 2 · Aetherology (Mastered)
> **Anti-Prereq:** Elemental Attunement II or higher
> 
> You become a Magus candidate. Choose a second element. You may learn and evoke manifolds from it. You must know at least x manifolds in every element you access before learning x+1 in any one of them. Learn one manifold from your new element.
> 
> *Taking this feat closes the path to Elemental Attunement II and III.*

> [!technique] Magus Discipline *(Level 10)*
> **Prereq:** Magus Attunement · CHA 3, CON 3 · Aetherics (Skilled)
> 
> Choose two additional elements (total of 4). Learn one manifold from each. The Balanced Study Rule expands: you may have a difference of 2 between the number of manifolds you know across elements.

> [!technique] Magus Totality *(Level 16)*
> **Prereq:** Magus Discipline · CHA 4, CON 4 · Aetherology (Mastered)
> 
> Gain access to all remaining elements. Learn one manifold from each. You may be ahead by 3 manifolds in one element, provided at least four other elements are within 1 of each other.

> [!technique] Element Translation *(Level 12)*
> **Prereq:** Magus Attunement · WIT 3, CHA 3 · Aethermancy (Mastered)
> 
> Once per round, reduce the MP cost of a non-primary element manifold by 1 (minimum 0).

<br>

---

*This document is generated from feat files in `c_feats/Maxem/`. For the development workboard with full dependency checks, see [[Maxem Feat Tree Workboard]].*
</parameter>
<parameter name="path">/mnt/user-data/outputs/Maxem_Feats_Player.md</parameter>
