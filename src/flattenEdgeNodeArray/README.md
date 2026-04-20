# flattenEdgeNodeArray

Flatten a GraphQL Relay-style `{ edges: [{ node, cursor }] }` connection into a plain array of nodes. Tolerant of already-flat inputs.

## Usage

```typescript
import { flattenEdgeNodeArray } from 'briznads-helpers';

const data = {
  edges : [
    { node : { id : '1' }, cursor : 'a' },
    { node : { id : '2' }, cursor : 'b' },
  ],
};

flattenEdgeNodeArray(data);                       // [{ id: '1' }, { id: '2' }]
flattenEdgeNodeArray(data, true);                 // [{ id: '1', _cursor: 'a' }, ...]
flattenEdgeNodeArray(data, true, 'pageCursor');   // cursor attached as `pageCursor`
```

## Arguments

- `data: any = {}` — a connection object (uses `data.edges`), a raw array (used as-is), or anything else (returns `[]`).
- `preserveCursor: boolean = false` — when `true`, each node gains a cursor key copied from `edge.cursor`.
- `cursorKey: string = '_cursor'` — the property name used when `preserveCursor` is `true`.

## Returns

`any[]` — nodes in order. Each entry is `edge.node` when present, otherwise `edge` itself.
