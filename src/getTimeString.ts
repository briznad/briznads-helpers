import { default as parseDate } from './parseDate.js';
import { default as isInvalidDate } from './isInvalidDate.js';


export default function getTimeString(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	return isInvalidDate(dateObj)
		? ''
		: dateObj.toLocaleTimeString();
}
