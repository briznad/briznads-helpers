import { describe, it, expect } from 'vitest';

import { default as isNullish } from './index.js';


describe('isNullish', () => {
	it('should return true for null', () => {
		expect(isNullish(null)).toBe(true);
	});

	it('should return true for undefined', () => {
		expect(isNullish(undefined)).toBe(true);
	});

	it('should return false for empty string', () => {
		expect(isNullish('')).toBe(false);
	});

	it('should return false for 0', () => {
		expect(isNullish(0)).toBe(false);
	});

	it('should return false for false', () => {
		expect(isNullish(false)).toBe(false);
	});

	it('should return false for empty array', () => {
		expect(isNullish([])).toBe(false);
	});

	it('should return false for empty object', () => {
		expect(isNullish({})).toBe(false);
	});

	it('should return false for non-empty values', () => {
		expect(isNullish('hello')).toBe(false);
		expect(isNullish(42)).toBe(false);
		expect(isNullish([1, 2, 3])).toBe(false);
	});
});
