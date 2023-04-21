import { customAlphabet } from 'nanoid';


export function createId(characterSetType? : 'uppercase' | 'lowercase' | 'letters' | 'html_id', length : number = 6) : string {
	// we use a character set w/out lookalike characters
	// e.g. 1, l, I, 0, O, o, u, v, 5, S, s, 2, Z
	// https://github.com/CyberAP/nanoid-dictionary#nolookalikes
	const numbers : string = '346789';
	const uppercaseLetters : string = 'ABCDEFGHJKLMNPQRTUVWXY';
	const lowercaseLetters : string = 'abcdefghijkmnpqrtwxyz';

	let characterSet : string = numbers + uppercaseLetters + lowercaseLetters;

	if (characterSetType === 'uppercase') {
		characterSet = numbers + uppercaseLetters;
	} else if (characterSetType === 'lowercase') {
		characterSet = numbers + lowercaseLetters;
	} else if (characterSetType === 'letters') {
		characterSet = uppercaseLetters + lowercaseLetters;
	}

	const nanoid = customAlphabet(characterSet, length);

	const id : string = nanoid();

	// if the use of this function is to create html ids, insure first character is a letter
	return characterSetType === 'html_id' && /^[^A-Za-z]/.test(id)
		? createId(characterSetType, length)
		: id;
}
