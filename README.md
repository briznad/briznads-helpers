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

There isn't any, at least, not yet. That said, all functions are written in typescript and I endeavor to eschew cleverness in my code in favor of legibility. Therefore, the code should be somewhat self-documenting; it should be possible to view the individual functions and discern what the expected input and output types/patterns are. How laughably naive and/or unrealistic that last statement is, I'll leave for you to assess.
