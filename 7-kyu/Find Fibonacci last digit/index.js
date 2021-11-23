

/*

As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.

*/




function getLastDigit(n) {
	let arr = fib();
	return +arr[n % 60].toString()[arr[n % 60].toString().length - 1];
}

function fib() {
	let a = 1;
	let b = 1;
	let arr = [];
	for (let i = 3; i < 60; i++) {
		let c = a + b;
		a = b;
		b = c;
		arr.push(b);
	}
	arr.unshift(0, 1, 1);
	return arr
}




































