


/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/


var uniqueInOrder = function (a) {
	if (typeof a != 'object') {
		a = a.split('');
	}

	let result = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i] != result[result.length - 1]) {
			result.push(a[i]);
		}
	}

	return result;
}