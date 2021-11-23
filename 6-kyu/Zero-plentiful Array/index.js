


/*

An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

*/


function zeroPlentiful(arr) {
	let arr1 = arr.map(item => (typeof item !== 'number' || item !== 0) ? 1 : 0)
		.join('').match(/0+/g);

	if (arr1) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i].length < 4) {
				return 0;
			}
		}
		return arr1.length;
	} else {
		return 0;
	}
}