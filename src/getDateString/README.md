# getDateString

Convert a date-like value to its `.toString()` form. Returns `''` for invalid or missing dates instead of `"Invalid Date"`.

## Usage

```typescript
import { getDateString } from 'briznads-helpers';

getDateString(new Date(0)); // "Thu Jan 01 1970 ..."
getDateString('not a date'); // ""
```

## Arguments

- `date: Date | string | number` — normalized via `parseDate`.

## Returns

`string` — `date.toString()` if valid, otherwise `''`.
