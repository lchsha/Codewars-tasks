


/*

Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be able to decode it.

To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

Coding process to code a number n expressed in base 10:
For each digit d of n

a) Let k be the number of bits of d

b) Write k-1 times the digit 0 followed by the digit 1

c) Write digit d as a binary string, with the rightmost bit being the least significant

d) Concat the result of b) and c) to get the coding of d

At last concatenate all the results got for the digits of n.

An example
So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

Task:
Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

Examples:
code("77338855") --> "001111001111011101110001100000011000001101001101"
code("77338")  --> "0011110011110111011100011000"
code("0011121314") --> "1010111111011011011111001100"

decode("001111001111011101110001100000011000001101001101") -> "77338855"
decode("0011110011110111011100011000") -> "77338"
decode("1010111111011011011111001100") -> "0011121314"
Notes
SHELL: The only tested function is decode.
Please could you ask before translating

*/


function code(strng) {
	let arr = strng.split('');
	let mainStr = '';

	for (let i = 0; i < arr.length; i++) {
		let num = +arr[i];
		let binary = num.toString(2);
		let kMinus = binary.length - 1;
		let str = '';
		let arr0 = [];
		for (let i = 0; i < kMinus; i++) {
			arr0.push('0');
		}
		let arr0Str = arr0.join('');
		let num1 = '1';
		str = arr0Str + num1 + binary;
		mainStr += str;
	}

	return mainStr;
}

function decode(str) {
	let arrVar = ["10", "11", "0110", "0111", "001100", "001101", "001110", "001111", "00011000", "00011001"];
	let resArr = [];

	for (let i = 0; i < arrVar.length; i++) {
		let elemKeyLength = arrVar[i].length;
		if (arrVar[i] == str.substring(0, elemKeyLength)) {
			resArr.push(i);
			let reg = arrVar[i];
			str = str.replace(new RegExp(reg), "");
			i = -1;
		}
	}

	return resArr.join('');
}