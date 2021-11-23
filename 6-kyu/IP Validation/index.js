


/*

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/


function isValidIP(str) {
	let arr = str.split('.');
	let newArr = [];

	if (arr.length < 4 || arr.length > 4 || str == '') {
		return false;
	}

	for (let i = 0; i < arr.length; i++) {
		let elem = arr[i];
		for (let k = 0; k < elem.length; k++) {
			if (isNaN(elem[k])) {
				return false;
			}
		}
		if (elem[0] == ' ' || elem[elem.length - 1] == ' ' || elem.indexOf('\n') + 1 || elem.length > 1 && elem[0] == 0 || elem == '') {
			return false;
		}
		newArr.push(+elem);
	}

	for (let j = 0; j < newArr.length; j++) {
		if (isNaN(newArr[j])) {
			return false;
		} else if (newArr[j] < 0 || newArr[j] > 255) {
			return false;
		}
	}

	return true;
}