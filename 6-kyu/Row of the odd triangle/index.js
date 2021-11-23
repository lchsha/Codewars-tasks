


/*

Given a triangle of consecutive odd numbers:

				 1
			 3     5
		 7     9    11
	13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]
Note: your code should be optimized to handle big inputs.

*/


function oddRow(n) {
	let start = 1, end = 1, count1 = 2, count2 = 4, result = [];
	for (let i = 1; i < n; i++) {
		start += count1;
		end += count2;
		count1 += 2;
		count2 += 2;
	}
	for (let i = start; i <= end; i += 2) {
		result.push(i);
	}
	return result;
}