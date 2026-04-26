# Obsidian → Quartz Converter

Converts your Obsidian vault to Quartz-compatible markdown, handling:

- **Type 1** — Inline field references (`this.field`, `= this.field`, `dv.current().field`) → replaced with actual frontmatter values
- **Type 2** — Dataview query blocks (`TABLE`/`LIST` with `FROM`/`WHERE`/`SORT`/`LIMIT`) → replaced with static markdown tables
- **Type 3** — DataviewJS blocks (`dataviewjs`) → flagged with a warning callout for manual conversion


## Setup

```bash
# 1. Put this folder anywhere (not inside your vault or quartz)
cd obsidian-quartz-converter

# 2. Install the one dependency
npm install

# 3. Run the converter
node obsidian-to-quartz.js <path-to-vault> <path-to-quartz-content>

# Example (adjust paths to match your setup):
node obsidian-to-quartz.js ../MyVault ../quartz/content
```

Your vault is **never modified** — all output goes to the target directory.


## Workflow with Quartz

A typical build flow:

```bash
# Step 1: Convert vault → quartz content
node obsidian-to-quartz.js ../MyVault ../quartz/content

# Step 2: Build quartz as normal
cd ../quartz
npx quartz build
```

You can hook step 1 into a script or a Git pre-commit hook.


## What Gets Converted

### Type 1 — Inline Fields

These patterns in your markdown body are replaced with their frontmatter values:

| Obsidian syntax | Replaced with |
|---|---|
| `` `= this.level` `` | value of `level` from frontmatter |
| `` `this.description` `` | value of `description` |
| `` `$= dv.current().cost` `` | value of `cost` |
| `` `$= dv.current()["mp cost"]` `` | value of `mp cost` (bracket notation) |

Dotted paths like `= this.file.name` also work.
Missing fields render as `—`.

---

### Type 2 — Dataview Queries

These query blocks are executed at convert-time against your vault index
and replaced with a static markdown table or list.

Supported syntax:

```dataview
TABLE name, level, description
FROM "d_Components/Maxem/Manifolds/Fire"
WHERE type = "manifold"
SORT level ASC
```

```dataview
TABLE WITHOUT ID file.link, cost, tags
FROM #weapon
WHERE tier >= 2
LIMIT 20
```

```dataview
LIST
FROM "d_Components/Feats"
WHERE class = "Maxem"
SORT file.name ASC
```

**Supported clauses:**
- `TABLE [WITHOUT ID] field1, field2 AS "Alias", ...`
- `LIST [field]`
- `FROM "folder/path"` or `FROM #tag`
- `WHERE field = "value"`, `field > 3`, `contains(tags, "x")`, `AND`, `OR`, `NOT`
- `SORT field ASC/DESC` (multiple sorts supported)
- `LIMIT n`

**Not supported** (will be flagged):
- `TASK` queries
- `CALENDAR` queries
- Complex Dataview functions (`link()`, `dateformat()`, `elink()`, etc.)
- `GROUP BY`

For unsupported queries, the original query is preserved with a warning callout
so you can see what it was.

---

### Type 3 — DataviewJS Pages

These are flagged with a warning callout in the output:

```
> [!danger] DataviewJS block — requires manual conversion to web
```

Search your output folder for `[MANUAL_CONVERSION_NEEDED]` to find them all:

```bash
grep -rl "MANUAL_CONVERSION_NEEDED" ../quartz/content
```

**Your options for Type 3 pages:**

1. **Quartz component** — Write a custom Quartz plugin/component (React/TypeScript) that replicates the logic. Best for pages that are truly interactive UIs.

2. **Pre-generated HTML** — Run your DataviewJS logic as a Node.js script once, output plain HTML, embed that in the markdown with Quartz's `raw html` support.

3. **Separate app** — Host the complex interactive page as a standalone HTML/JS file alongside your Quartz site (e.g. in `quartz/static/`). Link to it from your markdown pages.

4. **Simplify** — Often DataviewJS pages were doing something complex because Obsidian required it. On a website you can usually achieve the same result with a static table or a simpler layout.


## Frontmatter Fields Available in Queries

In addition to whatever fields you define in your YAML, these are always available:

| Field | Value |
|---|---|
| `file.name` | filename without `.md` |
| `file.path` | relative path from vault root |
| `file.folder` | folder containing the file |
| `tags` | always an array, `#` prefix stripped |


## Re-running

The converter is safe to re-run at any time. It overwrites output files but
never touches the vault. You can add it to your Quartz build script:

```json
// package.json in your quartz root
{
  "scripts": {
    "build": "node ../obsidian-to-quartz/obsidian-to-quartz.js ../MyVault ./content && npx quartz build"
  }
}
```


## Troubleshooting

**"Missing dependency"** → `npm install` in the converter folder.

**Query produces no results** — Check that the `FROM` path exactly matches
your vault folder (case-sensitive on Linux). Print your index by adding
`console.log([...index.keys()])` after `buildIndex()`.

**Inline field shows `—`** — The field name in your markdown doesn't match
the frontmatter key. Check for typos or spaces (use bracket notation in JS:
`` `$= dv.current()["my field"]` ``).

**Table columns are wrong** — Complex Dataview expressions like `length(list)`
or `dateformat(date, "YYYY")` aren't evaluated; they'll render literally.
Replace them with plain field names or pre-compute the value in frontmatter.
