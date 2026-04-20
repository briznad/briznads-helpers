import { describe, it, expect } from 'vitest';

import { default as listify } from './index.js';


describe('listify', () => {
	it('should return the same array if input is an array', () => {
		const arr = [1, 2, 3];
		expect(listify(arr)).toBe(arr);
	});

	it('should wrap non-array values in an array', () => {
		expect(listify('hello')).toEqual(['hello']);
		expect(listify(42)).toEqual([42]);
		expect(listify(null)).toEqual([null]);
		expect(listify(undefined)).toEqual([undefined]);
	});

	it('should wrap objects in an array', () => {
		const obj = { key : 'value' };
		expect(listify(obj)).toEqual([obj]);
	});

	it('should handle boolean values', () => {
		expect(listify(true)).toEqual([true]);
		expect(listify(false)).toEqual([false]);
	});
});
