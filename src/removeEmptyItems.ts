import { EmptyOpts } from './types/emptyOpts';
import { isEmpty } from './isEmpty';
import { isEmptyItem } from './isEmptyItem';


export function removeEmptyItems(list : any[], opts : EmptyOpts = {}) : any[] {
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
