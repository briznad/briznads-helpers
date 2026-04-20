# Query

Regex-based text filtering over lists and object arrays. Handles escaping of special characters, multi-token queries, and optional case sensitivity.

## Usage

```typescript
import { Query } from 'briznads-helpers';

const items = [
  { title : 'hello world',   author : { name : 'Ada' } },
  { title : 'goodbye world', author : { name : 'Grace' } },
];

// filter objects by one or more fields
Query.matchObject(items, 'hello', 'title');                     // [{ title: 'hello world', ... }]
Query.matchObject(items, 'ada',   'author.name');               // [{ title: 'hello world', ... }]
Query.matchObject(items, 'world', [ 'title', item => item.author.name ]);

// filter a list of strings to those whose regex matches a query string
Query.matchList([ 'cat', 'cats', 'dog' ], 'cats'); // ['cat', 'cats']
```

## `Query.matchObject(list, query, testAgainst, opts?)`

Filter `list` to objects where **any** of the specified fields matches `query`.

- `list: any[]`
- `query: string` — whitespace splits into multiple tokens.
- `testAgainst: string | (item) => string | Array<string | fn>` — field paths (dot-notation for nested) or accessor functions returning the string to match against.
- `opts: QueryOptions`

Defaults: `matchPartialWords: true`, `disregardQueryOrder: true`, `caseInsensitive: true`.

## `Query.matchList(list, query, opts?)`

Treat each item in `list` as a regex pattern and return the ones whose compiled pattern matches `query`.

- `list: string[]`
- `query: string`
- `opts: QueryOptions`

Defaults: `matchPartialWords: false`, `disregardQueryOrder: false`, `caseInsensitive: true`.

## `QueryOptions`

```typescript
type QueryOptions = {
  matchPartialWords?   : boolean; // when false, require \b word boundaries around tokens
  disregardQueryOrder? : boolean; // when true (multi-token), tokens may appear in any order
  caseInsensitive?     : boolean; // compile the regex with the `i` flag
};
```

## `Query.regexEscape(text)`

Escape regex metacharacters in `text` (`/ . * + ? | ( ) [ ] { } \`). Exposed for when you want to build a pattern manually.
