


/*

Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

lastFibDigit(1) == 1
lastFibDigit(2) == 1
lastFibDigit(3) == 2
lastFibDigit(1000) == 5
lastFibDigit(1000000) == 5

*/


function lastFibDigit(n) {
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
	return arr;
}