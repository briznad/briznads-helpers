# isListPopulated

Test whether a value is a non-empty array.

## Usage

```typescript
import { isListPopulated } from 'briznads-helpers';

isListPopulated([ 1, 2 ]); // true
isListPopulated([]);       // false
isListPopulated(null);     // false
isListPopulated('abc');    // false
```

## Arguments

- `list: any` — value to test.

## Returns

`boolean` — `true` only if `list` is an `Array` with `length > 0`.
