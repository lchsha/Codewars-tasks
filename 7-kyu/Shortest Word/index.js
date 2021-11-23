




/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/



function findShort(s) {
	return s = Math.min(...s.split(' ').reduce((acc, el) => {
		acc.push(el.length);
		return acc;
	}, []));
}



































