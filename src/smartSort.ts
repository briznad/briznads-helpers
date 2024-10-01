import { default as deepCopy } from './deepCopy.js';
import { default as get } from './get.js';
import { default as smartSortFunction } from './smartSortFunction.js';


export type SortOptions = {
	direction?       : 'ascending' | 'descending';
	inPlace?         : boolean;
	nestedValuePath? : string;
	caseInsensitive? : boolean;
};

export type SortDirection =
	| 'ascending'
	| 'descending'
	;


export default function smartSort(
	arr              : any[],
	optsOrDirection? : SortOptions | SortDirection,
	inPlace?         : boolean,
	nestedValuePath? : string,
	caseInsensitive? : boolean,
) : any[] {
	const passedOpts = typeof optsOrDirection === 'object'
		? optsOrDirection
		: {};

	const sortOpts : SortOptions = {
		nestedValuePath,
		inPlace         : inPlace ?? true,
		caseInsensitive : caseInsensitive ?? true,
		direction       : typeof optsOrDirection === 'string'
			? optsOrDirection
			: 'ascending',
		...passedOpts,
	};

	const sortArr = sortOpts.inPlace
		? arr
		: deepCopy(arr);

	sortArr.sort((a : any, b : any) => doSort(a, b, sortOpts.direction, sortOpts.caseInsensitive, sortOpts.nestedValuePath));

	return sortArr;
}

function doSort(
	a                : any,
	b                : any,
	direction        : SortDirection = 'ascending',
	caseInsensitive  : boolean = true,
	nestedValuePath? : string,
) : number {
	const bValue = getSortValue(b, caseInsensitive, nestedValuePath);
	const aValue = getSortValue(a, caseInsensitive, nestedValuePath);

	return smartSortFunction(aValue, bValue, direction);
}

function getSortValue(item : any, caseInsensitive : boolean, nestedValuePath? : string) : any {
	let value = nestedValuePath
		? get(item, nestedValuePath.split('.'))
		: item;

	if (value == undefined) {
		value = '';
	} else if (caseInsensitive && typeof value === 'string') {
		value = value.toLowerCase();
	}

	return value;
}
