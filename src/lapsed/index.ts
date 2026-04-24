export type LapsedFormat = 'full' | 'short' | 'abbreviate';

export default function lapsed(ms : number, format : LapsedFormat = 'full', precise : boolean = false, separator? : string) : string {
	if (ms == null) {
		return '';
	}

	// sub-500ms in full mode reads as human-friendly "a moment" / "moments" rather than a raw number
	if (format === 'full' && !precise && ms < 500) {
		const unit = 'moment';

		// below 250ms feels instantaneous; 250–499ms is perceptible but still fleeting
		if (ms < 250) {
			return `a ${ unit }`;
		}

		return `${ unit }s`;
	}

	// each divisor converts the current unit into the next-larger unit (not an absolute ms value)
	const unitList = [
		{
			abbreviation : 'ms',
			full         : 'millisecond',
			divisor      : 1000, // 1000 ms → 1 s
		},
		{
			abbreviation : 's',
			short        : 'sec',
			full         : 'second',
			divisor      : 60,
		},
		{
			abbreviation : 'm',
			short        : 'min',
			full         : 'minute',
			divisor      : 60,
		},
		{
			abbreviation : 'hr',
			full         : 'hour',
			divisor      : 24,
		},
		{
			abbreviation : 'd',
			full         : 'day',
			divisor      : 7,
		},
		{
			abbreviation : 'wk',
			full         : 'week',
			divisor      : 4,
		},
		{
			abbreviation : 'mo',
			full         : 'month',
			divisor      : 12,
		},
		{
			abbreviation : 'yr',
			full         : 'year',
			divisor      : 10,
		},
		{
			abbreviation : 'dec',
			full         : 'decade',
			divisor      : 10,
		},
		{
			abbreviation : 'c',
			full         : 'century',
			plural       : 'centuries',
			divisor      : 10,
		},
		{
			abbreviation : 'mil',
			full         : 'millennium',
			plural       : 'millennia',
		},
	];

	// returns "a"/"an" for count=1 in full non-precise mode; "an" before vowel-sound units (hour)
	const parseCount = (count : number, unitFirstLetter : string) : string =>
		format !== 'abbreviate' && !precise && count === 1
			? `a${ unitFirstLetter === 'h' ? 'n' : '' }`
			: count.toString();

	// returns the full display name of the unit (not a suffix) — pluralOverride handles irregular forms like centuries/millennia
	const parsePlural = (count : number, unitName : string, pluralOverride? : string) : string => {
		if (format === 'abbreviate' || count === 1) {
			return unitName;
		}

		return pluralOverride ?? unitName + 's';
	};

	// built up smallest-to-largest, then reversed via unshift so index 0 is always the largest unit
	const timeList : string[] = [];

	let dividend : number = ms;

	// iterate from smallest unit (ms) to largest (yr), peeling off each unit's value via modulo
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
				// round up: remainder is ≥90% of the way to the next unit, so promote rather than show a near-full value
				dividend = 1;

				continue;
			}
		}

		const unitName : string = format === 'abbreviate'
			? unit.abbreviation
			: format === 'short' && unit.short
				? unit.short
				: unit.full;

		const timeArr = [
			parseCount(remainder, unitName.charAt(0)),
			parsePlural(remainder, unitName, unit.plural),
		];

		// no space for abbreviations, but space for full/short formats
		const timeStr = timeArr.join(format === 'abbreviate' ? '' : ' ');

		// prepend so the final list runs largest-unit-first despite the smallest-first iteration order
		timeList.unshift(timeStr);
	}

	if (separator == null) {
		separator = format === 'abbreviate'
			? ' '
			: ', ';
	}

	// non-precise mode returns only the most significant unit (index 0 after unshift)
	return precise
		? timeList.join(separator)
		: timeList.shift() ?? '';
}
