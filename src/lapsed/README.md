# lapsed

Format a millisecond duration as a human-readable string, e.g. `3661000` → `"an hour"` or `"1 hour, 1 minute, 1 second"` (precise mode).

## Usage

```typescript
import { lapsed } from 'briznads-helpers';

lapsed(3_661_000);                              // "an hour"
lapsed(3_661_000, 'short');                     // "1 hr"
lapsed(3_661_000, 'abbreviate');                // "1h"
lapsed(3_661_000, 'full', true);                // "1 hour, 1 minute, 1 second"
lapsed(3_661_000, 'short', true);               // "1 hour, 1 min, 1 sec"
lapsed(3_661_000, 'abbreviate', true);          // "1h 1m 1s"
lapsed(3_661_000, 'abbreviate', true, ' / ');   // "1h / 1m / 1s"
lapsed(200);                                    // "a moment"
lapsed(null as any);                            // ""
```

## Arguments

- `ms: number` — duration in milliseconds. `null`/`undefined` returns `''`.
- `format: 'full' | 'short' | 'abbreviate' = 'full'` — controls unit label verbosity:
  - `'full'` — full words with articles: `"an hour"`, `"2 minutes"`
  - `'short'` — common abbreviations: `"1 hr"`, `"2 min"`, `"30 sec"` (falls back to `full` for units without a short form)
  - `'abbreviate'` — single symbols, no articles or plurals: `"1h"`, `"2m"`, `"30s"`
- `precise: boolean = false` — when `true`, include all non-zero units; otherwise only the largest is returned.
- `separator: string = format === 'abbreviate' ? ' ' : ', '` — joiner used between units in precise mode.

## Returns

`string`. In `full` non-precise mode, sub-500ms durations return `"a moment"` (< 250ms) or `"moments"` (250–499ms). In non-precise mode, a remainder ≥ 90% of the next unit causes rounding up to that unit.

## Supported units

From smallest to largest: millisecond, second, minute, hour, day, week, month, year, decade, century, millennium.
