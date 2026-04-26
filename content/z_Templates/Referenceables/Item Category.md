---
type: null
description: null
file.name: Item Category
file.path: z_Templates/Referenceables/Item Category.md
file.folder: z_Templates/Referenceables
tags: []
---


—

```dataview 
TABLE WITHOUT ID file.name AS "ITEM CATEGORY", description AS "Description" 
FROM "LOCATION" 
WHERE type = "SUBTYPE" 
SORT file.name ASC
```

