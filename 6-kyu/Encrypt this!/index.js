


/*

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/


var encryptThis = function (text) {

	let arr = text.split(' ');
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let elem = arr[i];
		let code = "" + elem[0].charCodeAt();
		let lastLetter = elem[elem.length - 1];
		let secondLetter = elem[1];

		if (elem.length > 1) {
			let changeSecondLetter = elem.replaceAt(1, lastLetter);
			let changeLastLetter = changeSecondLetter.replaceAt(changeSecondLetter.length - 1, secondLetter);
			let arr1 = changeLastLetter.substring(1).split('');
			for (let i = code.length - 1; i >= 0; i--) {
				arr1.unshift(code[i]);
			}
			let result = arr1.join('');
			newArr.push(result);
		} else {
			let elem1 = elem.replaceAt(0, code);
			newArr.push(elem1);
		}
	}
	let res = newArr.join(' ');

	return res;
}

String.prototype.replaceAt = function (index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}