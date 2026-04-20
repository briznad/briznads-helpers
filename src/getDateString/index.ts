import { default as parseDate } from '../parseDate/index.js';
import { default as isInvalidDate } from '../isInvalidDate/index.js';


export default function getDateString(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	return isInvalidDate(dateObj)
		? ''
		: dateObj.toString();
}