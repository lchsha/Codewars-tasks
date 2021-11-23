




/*

Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how much keystrokes you have to do for a specific word.

This is the layout:


Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

Examples

mobileKeyboard("*#") => 2 (1+1)
mobileKeyboard("123") => 3 (1+1+1)
mobileKeyboard("abc") => 9 (2+3+4)
mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)

*/



function mobileKeyboard(str) {
	if (str == '') {
		return 0;
	}

	let arr = str.split('');
	let sum = 0;

	let obj = {
		'1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1, '0': 1, '#': 1, '*': 1, 'a': 2, 'd': 2, 'g': 2, 'j': 2, 'm': 2, 'p': 2, 't': 2, 'w': 2, 'b': 3, 'e': 3, 'h': 3, 'k': 3, 'n': 3, 'q': 3, 'u': 3, 'x': 3, 'c': 4, 'f': 4, 'i': 4, 'l': 4, 'y': 4, 'o': 4, 'r': 4, 'v': 4, 's': 5, 'z': 5,
	};

	for (let i = 0; i < arr.length; i++) {
		for (let key in obj) {
			if (key == arr[i]) {
				sum += obj[key];

			}
		}
	}
	return sum;
}



































