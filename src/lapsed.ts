export default function lapsed(ms : number, abbreviate : boolean = false, precise : boolean = false, separator? : string) : string {
	if (ms == null) {
		return '';
	}

	if (!abbreviate && !precise && ms < 500) {
		const unit = 'moment';

		if (ms < 250) {
			return `a ${ unit }`;
		}

		return `${ unit }s`;
	}

	const unitList = [
		{
			short   : 'ms',
			long    : ' millisecond',
			divisor : 1000,
		},
		{
			short   : 's',
			long    : ' second',
			divisor : 60,
		},
		{
			short   : 'm',
			long    : ' minute',
			divisor : 60,
		},
		{
			short   : 'h',
			long    : ' hour',
			divisor : 24,
		},
		{
			short   : 'd',
			long    : ' day',
			divisor : 7,
		},
		{
			short   : 'w',
			long    : ' week',
			divisor : 4,
		},
		{
			short   : 'mo',
			long    : ' month',
			divisor : 12,
		},
		{
			short : 'yr',
			long  : ' year',
		},
	];

	const parseCount = (count : number, unitFirstLetter : string) : string =>
		!abbreviate && !precise && count === 1
			? `a${ unitFirstLetter === 'h' ? 'n' : '' }`
			: count.toString();

	const parsePlural = (count : number) : string =>
		!abbreviate && count !== 1
			? 's'
			: '';

	const timeList : string[] = [];

	let dividend : number = ms;

	for (const i in unitList) {
		if (dividend === 0) {
			break;
		}

		const unit = unitList[i];

		let remainder : number = 0;

		if (unit.divisor) {
			remainder = dividend % unit.divisor;

			dividend = Math.floor(dividend / unit.divisor);

			if (remainder === 0) {
				continue;
			} else if (!precise && dividend === 0 && remainder / unit.divisor >= 0.9) {
				dividend = 1;

				continue;
			}
		}

		const unitName : string = unit[ abbreviate ? 'short' : 'long' ];

		const timeStr = parseCount(remainder, unitName.trim().charAt(0)) + unitName + parsePlural(remainder);

		timeList.unshift(timeStr);
	}

	if (separator == null) {
		separator = abbreviate
			? ' '
			: ', ';
	}

	return precise
		? timeList.join(separator)
		: timeList.shift() ?? '';
}
