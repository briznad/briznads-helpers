import { describe, it, expect } from 'vitest';

import { default as get } from './get.js';


describe('get', () => {
	const testObj = {
		ancestor : {
			parent : {
				child : 'value',
			},
		},
		array      : [1, 2, { nested : 'item' }],
		nullValue  : null,
		zeroValue  : 0,
		falseValue : false,
	};

	it('should access nested properties with array of strings', () => {
		expect(get(testObj, ['ancestor', 'parent', 'child'])).toBe('value');
	});

	it('should handle string path (gets wrapped as single key)', () => {
		// Note: passing a string wraps it in an array, so 'ancestor.parent.child' looks for that exact key
		// To use dot notation, you need to split it yourself first
		const obj = { 'ancestor.parent.child' : 'value' };
		expect(get(obj, 'ancestor.parent.child')).toBe('value');
	});

	it('should access array elements', () => {
		expect(get(testObj, ['array', '0'])).toBe(1);
		expect(get(testObj, ['array', '2', 'nested'])).toBe('item');
	});

	it('should return undefined for non-existent paths', () => {
		expect(get(testObj, ['ancestor', 'parent', 'nonexistent'])).toBeUndefined();
	});

	it('should safely handle null/undefined in path', () => {
		expect(get(testObj, ['nullValue', 'child'])).toBeUndefined();
	});

	it('should return the value for falsy but defined values', () => {
		expect(get(testObj, ['zeroValue'])).toBe(0);
		expect(get(testObj, ['falseValue'])).toBe(false);
		// nullValue returns undefined due to the ?? operator in get()
		expect(get(testObj, ['nullValue'])).toBeUndefined();
	});

	it('should handle empty path array', () => {
		expect(get(testObj, [])).toEqual(testObj);
	});
});
