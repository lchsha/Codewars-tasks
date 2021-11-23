


/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
	let newStr = str.split(' ');
	let result = [];

	for (let elem of newStr) {
		if (isValid(elem)) {
			let firstLetter = elem[0];
			let spliceElem = elem.substring(1, elem.length);
			let res = spliceElem + firstLetter + 'ay';
			result.push(res);
		} else {
			result.push(elem);
		}
	}
	return result.join(' ');
}

function isValid(str) {
	return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}