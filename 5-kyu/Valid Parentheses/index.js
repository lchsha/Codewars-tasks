


/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

function validParentheses(parens) {
	if ((parens.split('')).length % 2) {
		return false;
	}
	let split = parens.split('');

	for (let i = 0; i < split.length; i++) {
		if (split[i] == '(' && split[i + 1] == ')') {
			console.log(split);
			split.splice(i, 2);
			i = -1;
		}
	}

	if (split.length == 0) {
		return true;
	} else {
		return false;
	}
}