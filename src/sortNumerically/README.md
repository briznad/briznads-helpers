# sortNumerically

Sort an array of numbers ascending, in place. Shortcut for `numbers.sort((a, b) => a - b)`.

## Usage

```typescript
import { sortNumerically } from 'briznads-helpers';

sortNumerically([ 10, 1, 2 ]); // [1, 2, 10]
```

## Arguments

- `numbers: number[]` — the array to sort (mutated).

## Returns

`number[]` — the same array, now sorted.

## Why

The default `Array.prototype.sort()` compares numbers as strings (`10` sorts before `2`), which is almost never what you want.
