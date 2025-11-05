import { describe, it, expect } from 'vitest';

import { default as isEmpty } from './isEmpty.js';


describe('isEmpty', () => {
	it('should return true for null', () => {
		expect(isEmpty(null)).toBe(true);
	});

	it('should return true for undefined', () => {
		expect(isEmpty(undefined)).toBe(true);
	});

	it('should return true for empty string when includeEmptyString is true', () => {
		expect(isEmpty('', { includeEmptyString : true })).toBe(true);
	});

	it('should return false for empty string by default', () => {
		expect(isEmpty('')).toBe(false);
	});

	it('should return true for empty array', () => {
		expect(isEmpty([])).toBe(true);
	});

	it('should return true for empty object', () => {
		expect(isEmpty({})).toBe(true);
	});

	it('should return false for non-empty string', () => {
		expect(isEmpty('hello')).toBe(false);
	});

	it('should return false for non-empty array', () => {
		expect(isEmpty([1, 2, 3])).toBe(false);
	});

	it('should return false for non-empty object', () => {
		expect(isEmpty({ key : 'value' })).toBe(false);
	});

	it('should return false for number 0', () => {
		expect(isEmpty(0)).toBe(false);
	});

	it('should return false for boolean false', () => {
		expect(isEmpty(false)).toBe(false);
	});
});
