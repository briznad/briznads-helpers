import { default as lapsed } from '../lapsed/index.js';
import { default as parseDate } from '../parseDate/index.js';


export default function ago(date : Date | string | number, format : 'full' | 'short' | 'abbreviate' = 'full') : string {
	const dateObj = parseDate(date);

	const parseLapsed : string = lapsed(Date.now() - dateObj.getTime(), format);

	return parseLapsed == null
		? 'never'
		: parseLapsed + ' ago';
}
