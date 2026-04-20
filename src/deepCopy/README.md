# deepCopy

Create a deep copy of a value via `JSON.parse(JSON.stringify(...))`. Fast and zero-dependency, but only safe for JSON-serializable values (no functions, `undefined` becomes `null`, no circular refs, no `Date`/`Map`/`Set` preservation).

## Usage

```typescript
import { deepCopy } from 'briznads-helpers';

const original = { a : 1, nested : { b : 2 } };
const copy     = deepCopy(original);

copy.nested.b = 99;
original.nested.b; // still 2
```

## Arguments

- `value: any` — the value to copy. `undefined` is coerced to `null` before serialization.

## Returns

`any` — a structurally independent clone of `value`.
