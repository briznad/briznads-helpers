export default function roundToDecimals(num : number, decimals : 0 | 1 | 2 | 3 | 4 | 5 | 6 = 2) : number {
	return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
