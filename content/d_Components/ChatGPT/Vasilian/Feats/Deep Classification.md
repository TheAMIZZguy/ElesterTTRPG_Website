---
type: feat
class: Vasilian
Level Prerequisite: 4
tags:
  - vasilian
  - domains
Feat Prerequisite: Vasilian Initiate
Attribute Prerequisite: KNO 2+
Skill Prerequisite: Aetherology (Trained) OR History (Trained)
Anti Requisite: null
description: You don’t just notice — you name what you’re noticing.
file.name: Deep Classification
file.path: d_Components/ChatGPT/Vasilian/Feats/Deep Classification.md
file.folder: d_Components/ChatGPT/Vasilian/Feats
---
# —  *(Level `=choice(this["Level Prerequisite"], this["Level Prerequisite"], 0)`)*

#vasilian #domains

| **Feat Prerequisite**        | **Attribute Prerequisite**        | **Skill Prerequisite**        | **Anti Requisite**        |
| ---------------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| `=this["Feat Prerequisite"]` | `=this["Attribute Prerequisite"]` | `=this["Skill Prerequisite"]` | `=this["Anti Requisite"]` |

---
*You don’t just notice — you name what you’re noticing.*

---
When you successfully use a Vasilian action against a creature or phenomenon, you may ask the GM **one** classification question, such as:
- Which Field is most dominant here?
- Is this natural, crafted, or altered?
- Is this reaction trained, instinctive, or compelled?
- What is the most likely motive: fear, greed, duty, anger, hunger? (social scenes)

**Scaling**
- **Mastered**: Ask 2 questions.
- **Legendary**: Ask 3 questions.
