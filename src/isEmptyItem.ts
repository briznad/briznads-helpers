import { default as isNullish } from './isNullish';


export default function isEmptyItem(item : any, includeEmptyString : boolean = false) : boolean {
	let isEmpty : boolean = isNullish(item) || (typeof item === 'number' && isNaN(item));

	if (!isEmpty && includeEmptyString === true) {
		isEmpty = typeof item === 'string' && item.trim() === '';
	}

	return isEmpty;
}
