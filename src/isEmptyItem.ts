import { isNullish } from './isNullish';


export function isEmptyItem(item : any, includeEmptyString : boolean = false) : boolean {
	let isEmpty : boolean = isNullish(item) || (typeof item === 'number' && isNaN(item));

	if (!isEmpty && includeEmptyString === true) {
		isEmpty = typeof item === 'string' && item.trim() === '';
	}

	return isEmpty;
}
