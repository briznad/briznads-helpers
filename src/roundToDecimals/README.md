# roundToDecimals

Round a number to a fixed number of decimal places. Uses `Number.EPSILON` compensation to avoid float-rounding surprises like `1.005 → 1` with naive `Math.round`.

## Usage

```typescript
import { roundToDecimals } from 'briznads-helpers';

roundToDecimals(3.14159);       // 3.14 (default 2 decimals)
roundToDecimals(3.14159, 3);    // 3.142
roundToDecimals(1.005, 2);      // 1.01
roundToDecimals(-3.145, 2);     // -3.15
```

## Arguments

- `num: number` — the number to round.
- `decimals: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 2` — precision. Typed as a small union to discourage silly values.

## Returns

`number` — `num` rounded to `decimals` places.
