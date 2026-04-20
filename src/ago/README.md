# ago

Format a past date as a human-readable "X ago" string (e.g. `"5 minutes ago"`). Returns `"never"` if the input is nullish.

## Usage

```typescript
import { ago } from 'briznads-helpers';

const created = new Date(Date.now() - 90_000);

ago(created); // "a minute ago"
```

## Arguments

- `date: Date | string | number` — the date to measure from. Strings and numbers are passed through `parseDate`.

## Returns

`string` — either `"<duration> ago"` (e.g. `"3 hours ago"`) or `"never"` if the duration can't be computed.
