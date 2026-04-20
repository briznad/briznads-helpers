# get

Safely read a nested property using a path. Useful when the path is dynamic (e.g. built from a dotted string); for static access prefer optional chaining (`obj?.a?.b`).

## Usage

```typescript
import { get } from 'briznads-helpers';

const obj = { ancestor : { parent : { child : 'value' } } };

get(obj, [ 'ancestor', 'parent', 'child' ]); // 'value'
get(obj, 'ancestor.parent.child'.split('.')); // 'value'
get(obj, [ 'ancestor', 'missing', 'child' ]); // undefined
```

## Arguments

- `obj: object` — the root object to traverse.
- `props: string | Array<string | number>` — path segments. A bare string is treated as a **single** key, not dot-path — split yourself if needed.

## Returns

`any` — the value at the path, or `undefined` if any segment is missing or nullish.
