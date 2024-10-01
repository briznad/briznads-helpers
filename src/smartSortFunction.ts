import type { SortDirection } from './smartSort';


export default function smartSortFunction(a : any, b : any, direction : SortDirection = 'ascending') : 0 | 1 | -1 {
	if (a > b) {
		return direction === 'ascending'
			? 1
			: -1;
	}

	if (a < b) {
		return direction === 'ascending'
			? -1
			: 1;
	}

	return 0;
}
