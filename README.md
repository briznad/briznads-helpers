# briznads-helpers

Generic, zero-dependency* helper functions and types for use in disparate typescript projects.

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

This package brings together a number of helpful types and functions that I've found myself reaching for time and again. Individual functions are exported as ES modules, so your preferred bundler should do the tree shaking thing and keep the bundle size nice and small.

## documentation

There isn't any, at least, not yet. That said, all functions are written in typescript and I endeavor to eschew cleverness in my code in favor of legibility. Therefore, the code should be somewhat self-documenting; it should be possible to view the individual functions and discern what the expected input and output types/patterns are. How laughably naive and/or unrealistic that last statement is, I'll leave for you to assess.

## *dependencies

The helper functions are _mostly_ dependency-free. The 1 exception is the `createId` function, which relies upon [nanoid](https://www.npmjs.com/package/nanoid) to generate random IDs of varying lengths and character styles.
