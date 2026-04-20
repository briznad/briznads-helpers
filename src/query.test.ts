import { describe, it, expect } from 'vitest';

import { default as Query } from './query.js';


describe('Query.matchObject', () => {
	const items = [
		{ title : 'hello world',    subtitle : 'greeting' },
		{ title : 'goodbye world',  subtitle : 'farewell' },
		{ title : 'hello universe', subtitle : null },
	];

	it('matches single partial-word query (default options)', () => {
		const result = Query.matchObject(items, 'hel', 'title');

		expect(result).toHaveLength(2);
		expect(result.map(i => i.title)).toEqual([ 'hello world', 'hello universe' ]);
	});

	it('matches multi-word partial query against all tokens (default options)', () => {
		const result = Query.matchObject(items, 'hel wor', 'title');

		expect(result).toHaveLength(1);
		expect(result[0].title).toBe('hello world');
	});

	it('matches multi-word partial query regardless of token order', () => {
		const result = Query.matchObject(items, 'wor hel', 'title');

		expect(result).toHaveLength(1);
		expect(result[0].title).toBe('hello world');
	});

	it('enforces whole-word boundaries when matchPartialWords is false', () => {
		const partial = Query.matchObject(items, 'hel wor', 'title', { matchPartialWords : false });

		expect(partial).toHaveLength(0);

		const whole = Query.matchObject(items, 'hello world', 'title', { matchPartialWords : false });

		expect(whole).toHaveLength(1);
		expect(whole[0].title).toBe('hello world');
	});

	it('does not match null fields against the literal string "null"', () => {
		const result = Query.matchObject(items, 'null', 'subtitle');

		expect(result).toHaveLength(0);
	});

	it('does not match undefined fields against the literal string "undefined"', () => {
		const withUndefined = [
			{ title : 'a', subtitle : undefined },
			{ title : 'b', subtitle : 'real value' },
		];

		const result = Query.matchObject(withUndefined, 'undefined', 'subtitle');

		expect(result).toHaveLength(0);
	});

	it('null fields do not block matches on other fields', () => {
		const result = Query.matchObject(items, 'universe', [ 'title', 'subtitle' ]);

		expect(result).toHaveLength(1);
		expect(result[0].title).toBe('hello universe');
	});

	it('returns full list for empty query', () => {
		expect(Query.matchObject(items, '', 'title')).toEqual(items);
	});
});
