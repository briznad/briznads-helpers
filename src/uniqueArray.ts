import { default as uniqueFilter } from './uniqueFilter';


export default function uniqueArray(arr : any[]) : any[] {
	return arr.filter(uniqueFilter);
}
