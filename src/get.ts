import { default as listify } from './listify.js';


/**
 *	idx function
 *
 *	Useful for accessing values in nested structures - aka objects, maps, or arrays -
 *	when you are not certain that a reference is defined. Use of this function
 *	as a way to safely access nested values is largely deprecated, in favor of using
 *	the optional chaining operator, "parent?.child". However, there are still some
 *	cases where idx is useful. For example, if you have a path to a nested value
 *	represented as a string - "ancestor.parent.child" - and would like to access that
 *	value, you can split the string on the "." character and pass the resulting array
 * 	to get/idx. Example:
 *	```
 *	const obj = { ancestor: { parent: { child: 'value' } } };
 *	const path = 'ancestor.parent.child';
 *	const pathArr = path.split('.');
 *	const value = get(obj, pathArr);
 *	```
**/
export default function get(obj : object, props : string | Array<string | number>) : any {
	const propsArr = listify(props);

	return propsArr.reduce(
		(sum : any, prop : any) => sum?.[ prop ] ?? undefined,
		obj,
	);
}
