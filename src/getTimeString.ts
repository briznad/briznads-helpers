import { parseDate } from './parseDate';
import { isInvalidDate } from './isInvalidDate';


export function getTimeString(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	return isInvalidDate(dateObj)
		? ''
		: dateObj.toLocaleTimeString();
}
