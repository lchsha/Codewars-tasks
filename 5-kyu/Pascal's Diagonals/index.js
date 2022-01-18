


/*

Create a function that returns an array containing the first l numbers from the nth diagonal of Pascal's triangle.

n = 0 should generate the first diagonal of the triangle (the ones).
The first number in each diagonal should be 1.
If l = 0, return an empty array.
Both n and l will be non-negative integers in all test cases.

*/

function generateDiagonal(n, l) {
	let length = n + l;
	let mainArr = [];
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < length; i++) {
		arr1.push(1);
	}
	for (let j = 1; j < length; j++) {
		arr2.push(j);
	}
	mainArr.push(arr1, arr2);
	for (let i = 2; i <= n; i++) {
		let arr = mainArr[mainArr.length - 1];
		let newArr = [1];
		for (let k = 1; k < arr.length - 1; k++) {
			let sum = arr[k] + newArr[k - 1];
			newArr.push(sum);
		}
		mainArr.push(newArr);
	}

	return l === 0 ? [] : mainArr[n];
}