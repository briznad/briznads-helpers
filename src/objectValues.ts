import type { ValueOf } from './types/valueOf';


type Values<T> = Array<ValueOf<T>>;


// Same as `Object.values()` but with type inference
export default function objectValues<T extends object>(obj : T) : Values<T> {
	return Object.values(obj) as Values<T>;
}
