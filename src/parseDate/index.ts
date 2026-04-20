export default function parseDate(date : Date | string | number) : Date {
	return date instanceof Date
		? date
		: new Date(date);
}
