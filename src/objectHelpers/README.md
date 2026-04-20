# objectEntries / objectKeys / objectValues

Type-preserving wrappers around `Object.entries`, `Object.keys`, and `Object.values`. Identical runtime behavior — the benefit is better inferred types (`keyof T` instead of `string`).

## Usage

```typescript
import { objectEntries, objectKeys, objectValues } from 'briznads-helpers';

const user = { id : 1, name : 'Ada' };

objectKeys(user);    // Array<'id' | 'name'>
objectValues(user);  // Array<number | string>
objectEntries(user); // Array<['id' | 'name', number | string]>
```

## Arguments

Each accepts a single object:

- `obj: T extends object`

## Returns

- `objectKeys(obj)` → `Array<keyof T>`
- `objectValues(obj)` → `Array<ValueOf<T>>`
- `objectEntries(obj)` → `Array<[keyof T, ValueOf<T>]>`

## Caveat

These trust that the object's runtime keys match its declared type — use only when you're confident extra keys aren't present (TypeScript itself doesn't guarantee this for `Object.keys` either).
