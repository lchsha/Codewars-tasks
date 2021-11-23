



/*

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.


*/


function arraySum(arr) {

	let sum = 0;

	for (const elem of arr) {
		if (typeof elem != 'object') {
			if (typeof elem == 'number') {
				sum += elem;
			}
		} else {
			sum += arraySum(elem);
		}
	}
	return sum;
}



































