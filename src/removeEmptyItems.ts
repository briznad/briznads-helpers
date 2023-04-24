import type { EmptyOpts } from './types/emptyOpts';

import { default as isEmpty } from './isEmpty.js';
import { default as isEmptyItem } from './isEmptyItem.js';


export default function removeEmptyItems(list : any[], opts : EmptyOpts = {}) : any[] {
	opts = {
		recursive          : false,
		includeEmptyString : false,
		...opts,
	};

	return list.filter((item : any) => opts.recursive
		? !isEmpty(item, opts)
		: !isEmptyItem(item, opts.includeEmptyString)
	);
}
