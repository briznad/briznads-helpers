import { describe, it, expect } from 'vitest';

import { default as uniqueArray } from './uniqueArray.js';


describe('uniqueArray', () => {
	it('should remove duplicate primitive values', () => {
		expect(uniqueArray([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
	});

	it('should remove duplicate strings', () => {
		expect(uniqueArray(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
	});

	it('should handle empty array', () => {
		expect(uniqueArray([])).toEqual([]);
	});

	it('should handle array with no duplicates', () => {
		expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
	});

	it('should handle mixed types', () => {
		expect(uniqueArray([1, '1', 2, '2', 1, 2])).toEqual([1, '1', 2, '2']);
	});

	it('should preserve first occurrence order', () => {
		expect(uniqueArray([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
	});
});
