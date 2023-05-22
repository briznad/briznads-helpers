import { default as removeEmptyItems } from './removeEmptyItems.js';
import { default as listify } from './listify.js';


type QueryFunction = (item : any) => string;

export type QueryOptions = {
	matchPartialWords?   : boolean;
	disregardQueryOrder? : boolean;
	caseInsensitive?     : boolean;
};


export default class Query {
	private static readonly specialChars : string[] = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	private static readonly regexSpecialChars : RegExp = new RegExp(`(\\${ Query.specialChars.join('|\\') })`, 'g');

	public static matchObject(
		objectList   : any[],
		query        : string,
		testAgainst  : string | QueryFunction | Array<string | QueryFunction>,
		queryOptions : QueryOptions = {},
	) : any[] {
		const queryArr = (query ?? '')
			.trim()
			.split(/\s+/);

		const queryArrClean = removeEmptyItems(queryArr, { includeEmptyString : true });

		const testAgainstArr = listify(testAgainst);

		const testAgainstArrClean = removeEmptyItems(testAgainstArr, { includeEmptyString : true });

		if (!(queryArrClean.length && testAgainstArrClean.length)) {
			return objectList;
		}

		const queryOpts : QueryOptions = {
			matchPartialWords   : true,
			disregardQueryOrder : true,
			caseInsensitive     : true,
			...queryOptions,
		};

		const regexQuery : RegExp = this.createRegex(queryArrClean, queryOpts);

		return objectList
			.filter(object => this.testObjectFields(object, regexQuery, testAgainstArrClean));
	}

	public static matchList(list : string[], query : string, queryOptions : QueryOptions = {}) : string[] {
		const cleanList = list
			.map((text) => (text ?? '').trim());

		const populatedList = removeEmptyItems(cleanList, { includeEmptyString : true });

		const queryOpts : QueryOptions = {
			matchPartialWords   : false,
			disregardQueryOrder : false,
			caseInsensitive     : true,
			...queryOptions,
		};

		return populatedList
			.filter((text) => this.createRegex(text, queryOpts).test(query));
	}

	private static createRegex(query : string | string[], queryOptions : QueryOptions = {}) : RegExp {
		const queryArr : string[] = listify(query);

		const queryOpts : QueryOptions = {
			matchPartialWords   : true,
			disregardQueryOrder : false,
			caseInsensitive     : true,
			...queryOptions,
		};

		let escapedQuery : string;

		if (queryArr.length > 1 && queryOpts.disregardQueryOrder) {
			const mappedArr = queryArr
				.map(query => `(?=.*\\b${ this.regexEscape(query) }\\b)`);

			escapedQuery = `^${ mappedArr.join('') }.*$`;
		} else {
			escapedQuery = this.regexEscape(queryArr.join(' '));

			if (!queryOpts.matchPartialWords) {
				escapedQuery = `\\b${ escapedQuery }\\b`;
			}
		}

		const flags : string = queryOpts.caseInsensitive
			? 'i'
			: '';

		return new RegExp(escapedQuery, flags);
	}

	public static regexEscape(text : string) : string {
		return text.replace(this.regexSpecialChars, '\\$1');
	}

	private static testObjectFields(item : any, regexQuery : RegExp, testAgainstFields : Array<string | QueryFunction>) : boolean {
		return testAgainstFields
			.some(field => this.testObjectField(regexQuery, field, item));
	}

	private static testObjectField(regexQuery : RegExp, testField : string | QueryFunction, item : any) : boolean {
		const testee : string = typeof testField === 'function'
			? testField(item)
			: item[testField];

		return regexQuery.test(testee);
	}
}
