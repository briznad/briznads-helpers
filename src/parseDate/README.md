# parseDate

Normalize a date-like input to a `Date`. Passes through existing `Date` instances; wraps strings and numbers via `new Date(...)`.

## Usage

```typescript
import { parseDate } from 'briznads-helpers';

parseDate('2026-04-20');   // Date
parseDate(1_734_567_890);  // Date
parseDate(new Date());     // same Date (no copy)
```

## Arguments

- `date: Date | string | number` — the value to normalize.

## Returns

`Date`. No validity check — pass the result through `isInvalidDate` if the input may be malformed.
