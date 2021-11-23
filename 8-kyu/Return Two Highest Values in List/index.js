




/*

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/


function twoHighest(arr) {
	if (arr.length == 0) {
		return [];
	} else if (arr.length == 1) {
		return [arr[0]];
	}

	if (allEqual(arr)) {
		return arr[0];
	}

	let max1 = 0;

	for (let i = 0; i < arr.length; i++) {
		if (max1 < arr[i]) {
			max1 = arr[i];
		}
	}

	let length = arr.length;

	for (let j = 0; j < length; j++) {
		if (max1 == arr[j]) {
			arr.splice(j, 1);
			j = -1;
		}
	}

	let max2 = 0;

	for (let k = 0; k < arr.length; k++) {
		if (arr[k] > max2) {
			max2 = arr[k];
		}
	}

	let result = [];
	result.push(max1, max2);
	return result;
}

function allEqual(arr) {
	return new Set(arr).size == 1;
}