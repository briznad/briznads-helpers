import { lapsed } from '../dist/lapsed.js';
import { parseDate } from '../dist/parseDate.js';


export function ago(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	const parseLapsed : string = lapsed(Date.now() - dateObj.getTime());

	return parseLapsed == null
		? 'never'
		: parseLapsed + ' ago';
}
