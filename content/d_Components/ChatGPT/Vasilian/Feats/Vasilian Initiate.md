---
type: feat
class: Vasilian
Level Prerequisite: 1
tags:
  - vasilian
  - foundation
Feat Prerequisite: null
Attribute Prerequisite: 'CHA 1+, PRE 1+'
Skill Prerequisite: Aetherics (Trained) OR Perception (Trained)
Anti Requisite: null
description: >-
  The world doesn’t change — you just start hearing the parts everyone else
  filters out.
file.name: Vasilian Initiate
file.path: d_Components/ChatGPT/Vasilian/Feats/Vasilian Initiate.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #foundation

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*The world doesn’t change — you just start hearing the parts everyone else filters out.*

---
You gain the Vasilian subsystem: **Threads** and **Strain**.

## Threads / Strain
- A **Thread** is a sustained focus you’re maintaining.
- Your **Strain** equals your current number of Threads.
- Your **Maximum Strain** equals **2 + PRE**.
- If an effect would push you above Maximum Strain, you must **Release** Threads until you’re within the limit (your choice which Threads).

## WIT Limits
- Max Tuned Fields at once: **1 + WIT** (minimum 1).
- Max Mark Threads on one creature at once: **1 + WIT** (minimum 1).

## Release
You may Release any number of your Threads at any time on your turn (free).

## You gain access to these actions
- [[Vasilian Tune]]
- [[Vasilian Mark]]
- [[Vasilian Opening Callout]]

## Vasilian Mastery
You count as **Trained Vasilian Mastery**. (Feats may upgrade this to Skilled/Mastered/Legendary.)
