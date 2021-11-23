


/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/


function duplicateEncode(word) {
	let str = word.toLowerCase();
	let obj = {};
	let result = '';

	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = obj[str[i]] + 1 || 1;
	}

	for (let j = 0; j < str.length; j++) {
		if (obj[str[j]] > 1) {
			result += ')';
		} else {
			result += '(';
		}
	}

	return result;
}