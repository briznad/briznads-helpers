# sleep

Return a promise that resolves after a given number of milliseconds. Useful for pacing async loops and testing delays.

## Usage

```typescript
import { sleep } from 'briznads-helpers';

await sleep(1_000); // pause for 1 second
await sleep();      // pause for a tick (0ms)
```

## Arguments

- `ms: number = 0` — milliseconds to wait.

## Returns

`Promise<void>` — resolves after the delay; never rejects.
