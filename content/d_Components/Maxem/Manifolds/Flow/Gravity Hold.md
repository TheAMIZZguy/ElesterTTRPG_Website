---
type: manifold
field: Force
element: Flow
manifold-type: Move
complexity: 0
MP-cost: 0
AP-cost: 2
Time-to-Evoke: null
location-restrictions: null
tags:
  - Automatic
  - control
description: The flow of gravity is changed
file.name: Gravity Hold
file.path: d_Components/Maxem/Manifolds/Flow/Gravity Hold.md
file.folder: d_Components/Maxem/Manifolds/Flow
---


# — 
 #Automatic #control

| Tier                         | Cost                                     |
| ---------------------------- | ---------------------------------------- |
| **MP Cost**: 0 | **AP Cost**: —             |
| **Level**: —     | **Time to Evoke**: — |


## Effects
*The flow of gravity is changed*

**Effects:** In the effect area, increase or decrease the force of gravity by 1/4g 


## Weave Notes

- **Augment**: Double the force of gravity in the given direction



## Other Notes

- Example of choosing up when augment is not used: 1g - 1/4g = 3/4g thus gravity is lighter in that direction by 25%
- Example of choosing up when augment is used 3x: 1g - 2g = -1g thus gravity is going up in that area for that amount of time
- This can induce conditions like [[Immobilized]] and [[Prone]]


