import { default as uniqueFilter } from './uniqueFilter.js';


export default function uniqueArray(arr : any[]) : any[] {
	return arr.filter(uniqueFilter);
}
