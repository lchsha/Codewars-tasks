


/*

Task
Write a function deNico/de_nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string with encoded message
and decodes the message using the key.

First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's decode cseerntiofarmit on using our crazy key.

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n   
After using the key:

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
Notes
The message is never shorter than the key.
Don't forget to remove trailing whitespace after decoding the message
Examples
deNico("crazy", "cseerntiofarmit on  ") => "secretinformation"
deNico("abc", "abcd") => "abcd"
deNico("ba", "2143658709") => "1234567890"
deNico("key", "eky") => "key" 

*/

const deNico = (key, m) => {
	let str = key.split('').sort();
	let arrKey = [];
	let arrMessage = [];
	let result = '';
	for (let i = 0; i < str.length; i++) {
		arrKey.push(str.indexOf(key[i]) + 1);
	}
	m = m.split('')
	for (let j = 0; j < m.length; j++) {
		let arr = [];
		arr.push(m.splice(0, arrKey.length));
		arrMessage.push(...arr);
		j = -1;
	}
	for (let i = 0; i < arrMessage.length; i++) {
		let arrElem = arrMessage[i];
		for (let j = 0; j < arrElem.length; j++) {
			let index = arrKey[j];
			let letter = arrElem[index - 1];
			result += letter;
		}
	}

	let reverseResult = result.split('').reverse();
	for (let i = 0; i < reverseResult.length; i++) {
		if (reverseResult[i] == ' ') {
			reverseResult.shift();
			i = -1;
		} else {
			break;
		}
	}
	result = reverseResult.reverse().join('');

	return result;
}