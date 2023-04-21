export default function isListPopulated(list : any) : boolean {
	return Array.isArray(list) && list.length > 0;
}
