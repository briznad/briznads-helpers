# isNullish

Test whether a value is `null` or `undefined`. Equivalent to `value == null` but named.

## Usage

```typescript
import { isNullish } from 'briznads-helpers';

isNullish(null);       // true
isNullish(undefined);  // true
isNullish(0);          // false
isNullish('');         // false
isNullish(false);      // false
```

## Arguments

- `item: any` — value to test.

## Returns

`boolean`.
