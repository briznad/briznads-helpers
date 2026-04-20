# lapsed

Format a millisecond duration as a human-readable string, e.g. `3661000` → `"an hour"` or `"1 hour, 1 minute, 1 second"` (precise mode).

## Usage

```typescript
import { lapsed } from 'briznads-helpers';

lapsed(3_661_000);                         // "an hour"
lapsed(3_661_000, true);                   // "1h"
lapsed(3_661_000, false, true);            // "1 hour, 1 minute, 1 second"
lapsed(3_661_000, true, true, ' / ');      // "1h / 1m / 1s"
lapsed(200);                               // "a moment"
lapsed(null as any);                       // ""
```

## Arguments

- `ms: number` — duration in milliseconds. `null`/`undefined` returns `''`.
- `abbreviate: boolean = false` — when `true`, use short units (`s`, `m`, `h`) and no articles (`a`/`an`).
- `precise: boolean = false` — when `true`, include all non-zero units; otherwise only the largest is returned.
- `separator: string = abbreviate ? ' ' : ', '` — joiner used between precise units.

## Returns

`string`. Sub-500ms durations return `"a moment"` / `"moments"` unless `abbreviate` or `precise` is set. Unit rounds up when the remainder is ≥ 90% of a larger unit (non-precise mode only).
