# uniqueArray / uniqueFilter

Remove duplicates from an array, preserving first-occurrence order. `uniqueFilter` is the underlying `.filter()` callback, exposed so you can use it inline.

## Usage

```typescript
import { uniqueArray, uniqueFilter } from 'briznads-helpers';

uniqueArray([ 1, 2, 2, 3, 3, 3 ]);  // [1, 2, 3]
uniqueArray([ 'a', 'b', 'a' ]);     // ['a', 'b']

// use the filter callback directly (e.g. when chaining with other filters)
[ 'a', 'b', 'a' ].filter(uniqueFilter); // ['a', 'b']
```

## `uniqueArray(arr)`

- `arr: any[]` — input array.

Returns `any[]` — a new array with duplicates removed. Uses strict equality (`indexOf`), so objects are compared by reference.

## `uniqueFilter(value, index, arr)`

The standard `Array.filter` callback signature:

- `value: string` — current item (typed as string but works for any primitive).
- `index: number` — current index.
- `arr: string[]` — the full array.

Returns `true` if `value` is the first occurrence in `arr`.
