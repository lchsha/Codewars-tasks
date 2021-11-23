


/*

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s

*/


function pyramid(n) {
	let c = n;
	let result = [];

	for (let i = 0; i < n; i++) {
		let arr = [];
		for (let j = 0; j < c; j++) {
			arr.push(1);
		}
		result.push(arr)
		c--;
	}

	return result.reverse();
}