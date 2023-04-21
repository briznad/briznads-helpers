export function deepCopy(value : any) : any {
	return JSON.parse(JSON.stringify(value ?? null));
}
