import { uniqueFilter } from './uniqueFilter';


export function uniqueArray(arr : any[]) : any[] {
	return arr.filter(uniqueFilter);
}
