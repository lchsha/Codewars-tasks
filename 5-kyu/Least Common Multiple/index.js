


/*

Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.

*/

var lcm = function (...args) {
	let l = args.length;
	let a = Math.abs(args[0]);
	for (let i = 1; i < l; i++) {
		let b = Math.abs(args[i]);
		let c = a;
		while (a && b) {
			a > b ? a %= b : b %= a;
		}
		a = Math.abs(c * args[i]) / (a + b);
	}
	return a;
};