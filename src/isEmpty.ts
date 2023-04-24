import type { EmptyOpts } from './types/emptyOpts';

import { default as isEmptyItem } from './isEmptyItem.js';
import { default as removeEmptyItems } from './removeEmptyItems.js';


export default function isEmpty(item : any, opts : EmptyOpts = {}) : boolean {
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
