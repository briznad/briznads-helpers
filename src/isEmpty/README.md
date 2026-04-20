# isEmpty / isEmptyItem / removeEmptyItems

Three related "emptiness" utilities that share an `EmptyOpts` configuration.

- **`isEmpty`** — is a value empty? Handles arrays, objects, and primitives.
- **`isEmptyItem`** — is a single primitive empty? (nullish, `NaN`, optionally `''`).
- **`removeEmptyItems`** — filter empty values out of an array.

## Usage

```typescript
import { isEmpty, isEmptyItem, removeEmptyItems } from 'briznads-helpers';

isEmpty([]);                                            // true
isEmpty({});                                            // true
isEmpty('', { includeEmptyString : true });             // true
isEmpty([ null, undefined ]);                           // true (all items empty)

isEmptyItem(NaN);                                       // true
isEmptyItem('  ', true);                                // true

removeEmptyItems([ 1, null, 2, undefined, '', 3 ]);                         // [1, 2, '', 3]
removeEmptyItems([ 1, null, '', 3 ], { includeEmptyString : true });        // [1, 3]
removeEmptyItems([ [ null ], [ 1 ] ], { recursive : true });                // [[1]]
```

## `EmptyOpts`

```typescript
type EmptyOpts = {
  recursive?          : boolean; // default false — treat nested empty arrays/objects as empty
  includeEmptyString? : boolean; // default false — treat '' / whitespace-only strings as empty
};
```

## `isEmpty(item, opts?)`

- `item: any` — value under test.
- `opts: EmptyOpts`

Returns `boolean`.

## `isEmptyItem(item, includeEmptyString?)`

- `item: any`
- `includeEmptyString: boolean = false`

Returns `boolean`. This is the primitive-only check used internally.

## `removeEmptyItems(list, opts?)`

- `list: any[]`
- `opts: EmptyOpts`

Returns a new array containing only non-empty items.
