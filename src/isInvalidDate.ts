export function isInvalidDate(date : Date) : boolean {
	return !date || date.toString() === 'Invalid Date';
}
