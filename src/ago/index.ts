import { default as lapsed, type LapsedFormat } from '../lapsed/index.js';
import { default as parseDate } from '../parseDate/index.js';


export default function ago(date : Date | string | number, format : LapsedFormat = 'full') : string {
	const dateObj = parseDate(date);

	const parseLapsed : string = lapsed(Date.now() - dateObj.getTime(), format);

	return parseLapsed == null
		? 'never'
		: parseLapsed + ' ago';
}
