# getTimeString

Convert a date-like value to its locale time string (`.toLocaleTimeString()`). Returns `''` for invalid or missing dates.

## Usage

```typescript
import { getTimeString } from 'briznads-helpers';

getTimeString(new Date()); // e.g. "2:34:17 PM"
getTimeString('nope');     // ""
```

## Arguments

- `date: Date | string | number` — normalized via `parseDate`.

## Returns

`string` — `date.toLocaleTimeString()` if valid, otherwise `''`.
