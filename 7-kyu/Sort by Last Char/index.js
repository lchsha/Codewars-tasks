






/*

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

*/



function last(x) {
	x = x.split(' ');
	let arr = x.slice(0);
	let en = 'abcdefghijklmnopqrstuvwxyz';
	return x.sort((a, b) => {
		if (en.indexOf(a[a.length - 1]) == en.indexOf(b[b.length - 1])) {
			if (arr.indexOf(a) > arr.indexOf(b)) {
				return 1;
			} else {
				return -1;
			}
		}
		if (en.indexOf(a[a.length - 1]) > en.indexOf(b[b.length - 1])) {
			return 1;
		} else {
			return -1;
		}
	});
}



































