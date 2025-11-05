import { describe, it, expect } from 'vitest';

import { default as roundToDecimals } from './roundToDecimals.js';


describe('roundToDecimals', () => {
	it('should round to specified decimal places', () => {
		expect(roundToDecimals(3.14159, 2)).toBe(3.14);
		expect(roundToDecimals(3.14159, 3)).toBe(3.142);
		expect(roundToDecimals(3.14159, 0)).toBe(3);
	});

	it('should handle rounding up', () => {
		expect(roundToDecimals(3.14559, 2)).toBe(3.15);
		expect(roundToDecimals(3.999, 1)).toBe(4.0);
	});

	it('should handle negative numbers', () => {
		expect(roundToDecimals(-3.14159, 2)).toBe(-3.14);
		expect(roundToDecimals(-3.14559, 2)).toBe(-3.15);
	});

	it('should handle zero decimal places', () => {
		expect(roundToDecimals(3.7, 0)).toBe(4);
		expect(roundToDecimals(3.2, 0)).toBe(3);
	});

	it('should handle numbers that don\'t need rounding', () => {
		expect(roundToDecimals(3.14, 2)).toBe(3.14);
		expect(roundToDecimals(5, 2)).toBe(5);
	});
});
