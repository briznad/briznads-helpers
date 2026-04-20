# briznads-helpers

Generic, zero-dependency helper functions and types for use in disparate typescript projects.

## install

```bash
npm install briznads-helpers --save
```

## use

```typescript
import { sleep, ago } from 'briznads-helpers';

…

const date : Date = new Date();

async function printString() : void {
	await sleep(2500);

	console.log(`the "date" variable was created ${ ago(date) }`);
}

printString();
```

## background

This package brings together a number of helpful types and functions that I've found myself reaching for time and again. The package exports compiled JavaScript as native ESM modules with TypeScript type declarations, compatible with modern bundlers and supporting tree-shaking.

## documentation

Each helper has its own README with usage examples and argument reference.

| Export | Description |
| --- | --- |
| [`ago`](src/ago/README.md) | Format a past date as `"X ago"`. |
| [`deepCopy`](src/deepCopy/README.md) | JSON-based deep clone. |
| [`flattenEdgeNodeArray`](src/flattenEdgeNodeArray/README.md) | Flatten a GraphQL edges/nodes connection. |
| [`get`](src/get/README.md) | Safe nested property access by path. |
| [`getDateString`](src/getDateString/README.md) | Date → `toString()`, `''` if invalid. |
| [`getTimeString`](src/getTimeString/README.md) | Date → `toLocaleTimeString()`, `''` if invalid. |
| [`isEmpty`, `isEmptyItem`, `removeEmptyItems`](src/isEmpty/README.md) | Emptiness checks sharing `EmptyOpts`. |
| [`isInvalidDate`](src/isInvalidDate/README.md) | Test for missing or Invalid Date. |
| [`isListPopulated`](src/isListPopulated/README.md) | Test for non-empty array. |
| [`isNullish`](src/isNullish/README.md) | Test for `null` or `undefined`. |
| [`lapsed`](src/lapsed/README.md) | Format a millisecond duration as human text. |
| [`listify`](src/listify/README.md) | Ensure a value is an array. |
| [`objectEntries`, `objectKeys`, `objectValues`](src/objectHelpers/README.md) | Type-preserving `Object.*` wrappers. |
| [`parseDate`](src/parseDate/README.md) | Normalize a date-like input to `Date`. |
| [`Query`](src/query/README.md) | Regex-based filtering of lists and object arrays. |
| [`roundToDecimals`](src/roundToDecimals/README.md) | Round a number to N decimal places. |
| [`sleep`](src/sleep/README.md) | Async delay for N milliseconds. |
| [`smartSort`, `smartSortFunction`](src/smartSort/README.md) | Sort with sensible defaults; comparator exposed. |
| [`sortNumerically`](src/sortNumerically/README.md) | Ascending numeric sort. |
| [`uniqueArray`, `uniqueFilter`](src/uniqueArray/README.md) | Deduplicate an array; filter callback exposed. |
