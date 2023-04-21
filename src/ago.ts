import { default as parseDate } from './parseDate';
import { default as lapsed } from './lapsed';


export default function ago(date : Date | string | number) : string {
	const dateObj = parseDate(date);

	const parseLapsed : string = lapsed(Date.now() - dateObj.getTime());

	return parseLapsed == null
		? 'never'
		: parseLapsed + ' ago';
}
