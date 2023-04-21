import type { EmptyOpts } from './types/emptyOpts';

import { isEmptyItem } from './isEmptyItem';
import { removeEmptyItems } from './removeEmptyItems';


export function isEmpty(item : any, opts : EmptyOpts = {}) : boolean {
	opts = {
		recursive          : false,
		includeEmptyString : false,
		...opts,
	};

	if (Array.isArray(item)) {
		return removeEmptyItems(item, opts).length === 0;
	} else if (typeof item === 'object') {
		return removeEmptyItems(Object.keys(item ?? {})).length === 0;
	} else {
		return isEmptyItem(item, opts.includeEmptyString);
	}
}
