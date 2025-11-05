import { describe, it, expect } from 'vitest';

import { default as deepCopy } from './deepCopy.js';


describe('deepCopy', () => {
	it('should create a deep copy of an object', () => {
		const obj = { a : 1, b : { c : 2 } };
		const copy = deepCopy(obj);

		expect(copy).toEqual(obj);
		expect(copy).not.toBe(obj);
		expect(copy.b).not.toBe(obj.b);
	});

	it('should create a deep copy of an array', () => {
		const arr = [1, 2, [3, 4]];
		const copy = deepCopy(arr);

		expect(copy).toEqual(arr);
		expect(copy).not.toBe(arr);
		expect(copy[2]).not.toBe(arr[2]);
	});

	it('should handle nested objects and arrays', () => {
		const complex = {
			arr : [1, { nested : true }],
			obj : { deep : { deeper : 'value' } },
		};
		const copy = deepCopy(complex);

		expect(copy).toEqual(complex);
		expect(copy).not.toBe(complex);
		expect(copy.arr).not.toBe(complex.arr);
		expect(copy.obj.deep).not.toBe(complex.obj.deep);
	});

	it('should handle null and undefined', () => {
		expect(deepCopy(null)).toBe(null);
		// undefined is converted to null by JSON.stringify/parse
		expect(deepCopy(undefined)).toBe(null);
	});

	it('should handle primitive values', () => {
		expect(deepCopy(42)).toBe(42);
		expect(deepCopy('string')).toBe('string');
		expect(deepCopy(true)).toBe(true);
	});
});
