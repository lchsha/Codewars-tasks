


/*

Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

Keyboard
The screen "keyboard" layout looks like this

a	b	c	d	e	1	2	3
f	g	h	i	j	4	5	6
k	l	m	n	o	7	8	9
p	q	r	s	t	.	@	0
u	v	w	x	y	z	_	/
aA	SP

aA is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase
SP is the space character
The other blank keys in the bottom row have no function
Kata task
How many button presses on my remote are required to type the given words?

Notes
The cursor always starts on the letter a (top left)
The alpha characters are initially lowercase (as shown above)
Remember to also press OK to "accept" each letter
Take a direct route from one letter to the next
The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
Although the blank keys have no function, you may navigate through them if you want to
Spaces may occur anywhere in the words string.
Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)
Example
words = Code Wars

C => a-f-k-p-u-aA-OK-U-P-K-F-A-B-C-OK = 14
o => C-H-M-R-W-V-U-aA-OK-SP-v-q-l-m-n-o-OK = 16
d => o-j-e-d-OK = 4
e => d-e-OK = 2
space => e-d-c-b-g-l-q-v-SP-OK = 9
W => SP-aA-OK-SP-V-W-OK = 6
a => W-V-U-aA-OK-u-p-k-f-a-OK = 10
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 14 + 16 + 4 + 2 + 9 + 6 + 10 + 6 + 2 = 69

*Good Luck!
DM.*

*/


function tvRemote(words) {

	let obj = {
		'a': [0, 0], 'b': [0, 1], 'c': [0, 2], 'd': [0, 3], 'e': [0, 4], '1': [0, 5], '2': [0, 6], '3': [0, 7], 'f': [1, 0], 'g': [1, 1], 'h': [1, 2], 'i': [1, 3], 'j': [1, 4], '4': [1, 5], '5': [1, 6], '6': [1, 7], 'k': [2, 0], 'l': [2, 1], 'm': [2, 2], 'n': [2, 3], 'o': [2, 4], '7': [2, 5], '8': [2, 6], '9': [2, 7], 'p': [3, 0], 'q': [3, 1], 'r': [3, 2], 's': [3, 3], 't': [3, 4], '.': [3, 5], '@': [3, 6], '0': [3, 7], 'u': [4, 0], 'v': [4, 1], 'w': [4, 2], 'x': [4, 3], 'y': [4, 4], 'z': [4, 5], '_': [4, 6], '/': [4, 7], 'aA': [5, 0], ' ': [5, 1],
	};
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	let flag = false;
	let sum = 0;
	let prev = 'a';


	for (let i = 0; i < words.length; i++) {
		if (checkUpper(words[i]) && flag == false && (arr_en.includes(words[i]) || arr_EN.includes(words[i]))) {
			let letter = words[i].toLowerCase();
			sum += Math.abs(obj[prev][0] - obj['aA'][0]) + Math.abs(obj[prev][1] - obj['aA'][1]) + 1;
			sum += Math.abs(obj['aA'][0] - obj[letter][0]) + Math.abs(obj['aA'][1] - obj[letter][1]) + 1;
			flag = true;
			prev = letter;
		} else if (checkUpper(words[i]) && flag && (arr_en.includes(words[i]) || arr_EN.includes(words[i]))) {
			let letter = words[i].toLowerCase();
			sum += Math.abs(obj[prev][0] - obj[letter][0]) + Math.abs(obj[prev][1] - obj[letter][1]) + 1;
			prev = letter;
		} else if (!checkUpper(words[i]) && flag && (arr_en.includes(words[i]) || arr_EN.includes(words[i]))) {
			let letter = words[i];
			sum += Math.abs(obj['aA'][0] - obj[prev][0]) + Math.abs(obj['aA'][1] - obj[prev][1]) + 1;
			sum += Math.abs(obj['aA'][0] - obj[letter][0]) + Math.abs(obj['aA'][1] - obj[letter][1]) + 1;
			flag = false;
			prev = letter;
		} else if (!checkUpper(words[i]) && flag == false && (arr_en.includes(words[i]) || arr_EN.includes(words[i]))) {
			let letter = words[i];
			sum += Math.abs(obj[prev][0] - obj[letter][0]) + Math.abs(obj[prev][1] - obj[letter][1]) + 1;
			prev = letter;
		} else if (!checkUpper(words[i])) {
			let letter = words[i];
			sum += Math.abs(obj[prev][0] - obj[letter][0]) + Math.abs(obj[prev][1] - obj[letter][1]) + 1;
			prev = letter;
		}
	}
	return sum;
}


function checkUpper(s) {
	let check = ' 123456789.@0_/';
	for (let i = 0; i < check.length; i++) {
		if (s == check[i]) {
			return false;
		}
	}
	if (s.toUpperCase() == s) {
		return true;
	} else {
		return false;
	}
}