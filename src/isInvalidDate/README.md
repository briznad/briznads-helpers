# isInvalidDate

Test whether a `Date` is missing or an Invalid Date.

## Usage

```typescript
import { isInvalidDate } from 'briznads-helpers';

isInvalidDate(new Date());       // false
isInvalidDate(new Date('nope')); // true
isInvalidDate(undefined as any); // true
```

## Arguments

- `date: Date` — value to test.

## Returns

`boolean` — `true` if `date` is falsy or stringifies to `"Invalid Date"`.
