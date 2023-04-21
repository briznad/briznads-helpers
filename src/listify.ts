export function listify(value : any) : any[] {
	return Array.isArray(value)
		? value
		: [ value ];
}
