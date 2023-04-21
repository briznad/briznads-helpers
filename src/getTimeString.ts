import { default as parseDate } from './parseDate';
import { default as isInvalidDate } from './isInvalidDate';


export default function getTimeString(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	return isInvalidDate(dateObj)
		? ''
		: dateObj.toLocaleTimeString();
}
