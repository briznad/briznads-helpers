type Keys<T> = Array<keyof T>;


// Same as `Object.keys()` but with type inference
export default function objectKeys<T extends object>(obj : T) : Keys<T> {
	return Object.keys(obj) as Keys<T>;
}
