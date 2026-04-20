# smartSort / smartSortFunction

Sort an array with sensible defaults (in-place, ascending, case-insensitive string compare, optional nested key path). `smartSortFunction` is the underlying pairwise comparator, exposed so you can pass it directly to `Array.prototype.sort`.

## Usage

```typescript
import { smartSort, smartSortFunction } from 'briznads-helpers';

smartSort([ 'Banana', 'apple', 'cherry' ]);                     // ['apple', 'Banana', 'cherry']
smartSort([ 3, 1, 2 ], 'descending');                           // [3, 2, 1]
smartSort(
  [ { user : { name : 'Zoe' } }, { user : { name : 'ada' } } ],
  { nestedValuePath : 'user.name' },
);                                                              // [{user:{name:'ada'}}, {user:{name:'Zoe'}}]

// use the comparator directly
[ 3, 1, 2 ].sort((a, b) => smartSortFunction(a, b, 'descending')); // [3, 2, 1]
```

## `smartSort(arr, optsOrDirection?, inPlace?, nestedValuePath?, caseInsensitive?)`

- `arr: any[]`
- `optsOrDirection: SortOptions | 'ascending' | 'descending'` — pass an options object, or just the direction string as a shortcut.
- `inPlace: boolean = true` — when `false`, the input is deep-copied before sorting.
- `nestedValuePath: string` — dot-path to compare on (e.g. `'user.name'`).
- `caseInsensitive: boolean = true` — lowercases string values before comparison.

The positional fallbacks exist for legacy callers; prefer the options-object form.

## `SortOptions`

```typescript
type SortOptions = {
  direction?       : 'ascending' | 'descending'; // default 'ascending'
  inPlace?         : boolean;                    // default true
  nestedValuePath? : string;                     // default undefined
  caseInsensitive? : boolean;                    // default true
};
```

## `smartSortFunction(a, b, direction?)`

Pairwise comparator returning `-1 | 0 | 1`.

- `a: any`
- `b: any`
- `direction: SortDirection = 'ascending'`

Falsy or missing values compared via `smartSort` are coerced to `''` so they sort consistently.
