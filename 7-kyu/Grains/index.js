





/*

Grains
Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

There are 64 squares on a chessboard.

#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

Write a program that shows how many grains were on each square.

*/



function square(n) {
	if (n == 1) return 1;
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (i == 1) {
			count = i;
		} else {
			count = count * 2
		}
	}
	return count;
}




































