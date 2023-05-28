import { default as deepCopy } from './deepCopy.js';
import { default as get } from './get.js';
import { default as smartSortFunction } from './smartSortFunction.js';


export default function smartSort(
	arr              : any[],
	direction        : 'ascending' | 'descending' = 'ascending',
	inPlace          : boolean = true,
	nestedValuePath? : string,
	caseInsensitive  : boolean = true,
) : any[] {
	const sortArr = inPlace
		? arr
		: deepCopy(arr);

	sortArr.sort((a : any, b : any) => doSort(a, b, direction, caseInsensitive, nestedValuePath));

	return sortArr;
}

function doSort(
	a                : any,
	b                : any,
	direction        : 'ascending' | 'descending',
	caseInsensitive  : boolean,
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
