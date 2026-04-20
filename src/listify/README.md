# listify

Ensure a value is an array. If it already is, return it unchanged; otherwise wrap it in a single-element array.

## Usage

```typescript
import { listify } from 'briznads-helpers';

listify('x');         // ['x']
listify([ 1, 2 ]);    // [1, 2] (same reference)
listify(null);        // [null]
listify(undefined);   // [undefined]
```

## Arguments

- `value: any` — the value to normalize.

## Returns

`any[]` — the original array, or `[value]`.
